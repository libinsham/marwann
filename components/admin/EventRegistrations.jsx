'use client'

import { useCallback, useEffect, useState } from 'react'
import { api, fmtDate, hasPerm } from './adminApi'

export default function EventRegistrations({ eventId, perms }) {
  const [event, setEvent] = useState(null)
  const [rows, setRows] = useState([])
  const [page, setPage] = useState(1)
  const [last, setLast] = useState(1)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    try {
      const [e, r] = await Promise.all([api(`admin/events/${eventId}`), api(`admin/events/${eventId}/registrations?page=${page}`)])
      setEvent(e.data)
      setRows(r.data || [])
      setLast(r.last_page || 1)
    } catch (err) { setError(err.message) }
  }, [eventId, page])
  useEffect(() => { load() }, [load])

  async function setStatus(row, status) {
    try { await api(`admin/events/${eventId}/registrations/${row.id}`, { method: 'PATCH', body: { status } }); load() } catch (e) { setError(e.message) }
  }
  const manage = hasPerm(perms, 'events.manage')

  return (
    <>
      <div className="row sp">
        <div><h1>Registrations</h1><p className="sub">{event ? `${event.title} · ${event.registrations} registered${event.capacity ? ` of ${event.capacity}` : ''}` : ''}</p></div>
        {hasPerm(perms, 'events.export') && <a className="btn ghost" href={`/api/backend/admin/events/${eventId}/registrations/export`}>Export CSV</a>}
      </div>
      {error && <div className="msg err">{error}</div>}
      <div className="card tbl-wrap">
        <table className="tbl">
          <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Guests</th><th>Registered</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td><td>{r.email}</td><td>{r.phone || '—'}</td><td>{r.guests}</td><td>{fmtDate(r.created_at)}</td>
                <td>{manage ? (
                  <select value={r.status} onChange={(e) => setStatus(r, e.target.value)}>
                    {['registered', 'attended', 'no_show', 'cancelled'].map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
                  </select>) : <span className={'badge ' + r.status}>{r.status}</span>}</td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={6} style={{ color: 'var(--mut)' }}>No registrations yet.</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="pager">
        <button className="btn sm ghost" disabled={page <= 1} onClick={() => setPage(page - 1)}>← Prev</button>
        <span>Page {page} of {last}</span>
        <button className="btn sm ghost" disabled={page >= last} onClick={() => setPage(page + 1)}>Next →</button>
      </div>
    </>
  )
}
