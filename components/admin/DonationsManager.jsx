'use client'

import { useCallback, useEffect, useState } from 'react'
import { api, fmtDate, hasPerm } from './adminApi'

const STATUSES = ['created', 'pending', 'paid', 'failed', 'cancelled', 'refund_pending', 'partially_refunded', 'refunded']

export default function DonationsManager({ perms }) {
  const [f, setF] = useState({ q: '', status: '', from: '', to: '' })
  const [applied, setApplied] = useState(f)
  const [page, setPage] = useState(1)
  const [last, setLast] = useState(1)
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [detail, setDetail] = useState(null)
  const [refund, setRefund] = useState({ amount: '', reason: '' })

  const query = useCallback((extra = {}) => {
    const p = new URLSearchParams({ ...extra })
    for (const [k, v] of Object.entries(applied)) if (v) p.set(k, v)
    return p
  }, [applied])

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const json = await api(`admin/donations?${query({ page, per_page: 20 })}`)
      setRows(json.data || [])
      setLast(json.meta?.last_page || 1)
    } catch (e) { setError(e.message) } finally { setLoading(false) }
  }, [query, page])

  useEffect(() => { load() }, [load])

  async function open(id) {
    setRefund({ amount: '', reason: '' })
    try { setDetail((await api(`admin/donations/${id}`)).data) } catch (e) { setError(e.message) }
  }

  async function reconcile() {
    try {
      const json = await api(`admin/donations/${detail.id}/reconcile`, { method: 'POST' })
      setNotice(`Checked with Razorpay: ${json.data.outcome.replace('_', ' ')}`)
      setDetail((await api(`admin/donations/${detail.id}`)).data)
      load()
    } catch (e) { setError(e.message) }
  }

  async function doRefund(e) {
    e.preventDefault()
    if (!window.confirm('Send this refund to Razorpay? This cannot be undone.')) return
    try {
      await api(`admin/donations/${detail.id}/refunds`, { method: 'POST', body: { reason: refund.reason, ...(refund.amount ? { amount: refund.amount } : {}) } })
      setNotice('Refund requested. Status will update when Razorpay confirms it.')
      setDetail((await api(`admin/donations/${detail.id}`)).data)
      setRefund({ amount: '', reason: '' })
      load()
    } catch (err) { setError(err.message) }
  }

  const paidish = detail && ['paid', 'refund_pending', 'partially_refunded', 'refunded'].includes(detail.status)
  const canRefund = detail && hasPerm(perms, 'refunds.manage') && ['paid', 'partially_refunded'].includes(detail.status)

  return (
    <>
      <div className="row sp">
        <h1>Donations</h1>
        {hasPerm(perms, 'donations.export') && <a className="btn ghost" href={`/api/backend/admin/donations/export?${query()}`}>Export CSV</a>}
      </div>
      <form className="filters" onSubmit={(e) => { e.preventDefault(); setPage(1); setApplied(f) }}>
        <div><label>Search</label><input type="text" value={f.q} onChange={(e) => setF({ ...f, q: e.target.value })} placeholder="Name, email, receipt, reference" /></div>
        <div><label>Status</label><select value={f.status} onChange={(e) => setF({ ...f, status: e.target.value })}><option value="">All</option>{STATUSES.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}</select></div>
        <div><label>From</label><input type="date" value={f.from} onChange={(e) => setF({ ...f, from: e.target.value })} /></div>
        <div><label>To</label><input type="date" value={f.to} onChange={(e) => setF({ ...f, to: e.target.value })} /></div>
        <button className="btn">Filter</button>
      </form>
      {notice && <div className="msg ok" onClick={() => setNotice('')}>{notice}</div>}
      {error && <div className="msg err">{error}</div>}

      <div className="card tbl-wrap">
        <table className="tbl">
          <thead><tr><th>Date</th><th>Donor</th><th>Amount (₹)</th><th>Status</th><th>Receipt</th><th>Campaign</th><th /></tr></thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id}>
                <td>{fmtDate(d.paid_at || d.created_at)}</td>
                <td>{d.donor_name}{d.is_anonymous ? ' (anonymous)' : ''}<br /><small>{d.email}</small></td>
                <td>{d.amount}</td>
                <td><span className={'badge ' + d.status}>{d.status.replace('_', ' ')}</span></td>
                <td>{d.receipt_number || '—'}</td>
                <td>{d.campaign?.title || '—'}</td>
                <td className="acts"><button className="btn sm ghost" onClick={() => open(d.id)}>Open</button></td>
              </tr>
            ))}
            {!rows.length && !loading && <tr><td colSpan={7} style={{ color: 'var(--mut)' }}>No donations match.</td></tr>}
            {loading && <tr><td colSpan={7} style={{ color: 'var(--mut)' }}>Loading…</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="pager">
        <button className="btn sm ghost" disabled={page <= 1} onClick={() => setPage(page - 1)}>← Prev</button>
        <span>Page {page} of {last}</span>
        <button className="btn sm ghost" disabled={page >= last} onClick={() => setPage(page + 1)}>Next →</button>
      </div>

      {detail && (
        <div className="panel" onMouseDown={(e) => e.target === e.currentTarget && setDetail(null)}>
          <div className="card">
            <div className="row sp"><h2 className="h2" style={{ margin: 0 }}>{detail.reference}</h2><span className={'badge ' + detail.status}>{detail.status.replace('_', ' ')}</span></div>
            <p className="kv"><span>Donor</span>{detail.donor_name} · {detail.email} · {detail.phone || 'no phone'}</p>
            <p className="kv"><span>Amount</span>₹{detail.amount} {detail.refunded !== '0.00' && `(refunded ₹${detail.refunded})`}</p>
            <p className="kv"><span>Purpose</span>{detail.purpose || '—'} {detail.campaign && `· Campaign: ${detail.campaign.title}`}</p>
            {detail.pan && <p className="kv"><span>PAN</span>{detail.pan}</p>}
            {detail.address && <p className="kv"><span>Address</span>{detail.address}</p>}
            <p className="kv"><span>Order</span>{detail.gateway_order_id || '—'}</p>
            <p className="kv"><span>Payment</span>{detail.gateway_payment_id || '—'}</p>
            <p className="kv"><span>Receipt</span>{detail.receipt_number || '—'}</p>
            {detail.failure_reason && <p className="kv"><span>Note</span>{detail.failure_reason}</p>}

            <h3 className="sec">Payment history</h3>
            <div className="tbl-wrap"><table className="tbl"><tbody>
              {(detail.transactions || []).map((t) => <tr key={t.id}><td>{fmtDate(t.created_at)}</td><td>{t.type}</td><td>{t.status}</td><td>{t.source}</td><td>{t.gateway_id}</td></tr>)}
              {(detail.refunds || []).map((r) => <tr key={'r' + r.id}><td>{fmtDate(r.created_at)}</td><td>refund</td><td>{r.status}</td><td>₹{(r.amount_paise / 100).toFixed(2)}</td><td>{r.reason}</td></tr>)}
            </tbody></table></div>

            {!paidish && hasPerm(perms, 'donations.reconcile') && detail.gateway_order_id && (
              <p><button className="btn ghost" onClick={reconcile}>Check with Razorpay now</button>
                <span className="hint"> Asks Razorpay what really happened. Nothing can be marked paid by hand.</span></p>
            )}
            {canRefund && (
              <form onSubmit={doRefund}>
                <h3 className="sec">Refund</h3>
                <div className="fgrid">
                  <div><label>Amount ₹ (blank = full remaining)</label><input type="text" inputMode="decimal" value={refund.amount} onChange={(e) => setRefund({ ...refund, amount: e.target.value })} /></div>
                  <div><label>Reason *</label><input type="text" value={refund.reason} onChange={(e) => setRefund({ ...refund, reason: e.target.value })} required minLength={3} /></div>
                </div>
                <p><button className="btn danger">Request refund</button></p>
              </form>
            )}
            <div className="sticky-actions"><button className="btn ghost" onClick={() => setDetail(null)}>Close</button></div>
          </div>
        </div>
      )}
    </>
  )
}
