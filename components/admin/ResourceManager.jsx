'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { RESOURCES } from '@/lib/adminConfig'
import { api, fmtDate, fmtDay, fromLocalInput, getPath, hasPerm, toLocalInput } from './adminApi'

function ImageField({ value, onChange }) {
  const [busy, setBusy] = useState(false)
  async function pick(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    const fd = new FormData()
    fd.append('file', file)
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd }).catch(() => null)
    const json = (await res?.json().catch(() => ({}))) || {}
    setBusy(false)
    if (res?.ok) onChange(json.url)
    else alert(json.error || 'Upload failed')
  }
  return (
    <div>
      <input type="text" value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder="Image address, or upload below" />
      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={pick} style={{ marginTop: 6 }} />
      {busy && <span className="hint"> Uploading…</span>}
      {value && <img className="prev" src={value} alt="" />}
    </div>
  )
}

function initial(fields, row) {
  const v = {}
  for (const f of fields) {
    if (f.type === 'display' || !f.name) continue
    const raw = row ? row[f.name] : undefined
    v[f.name] = f.type === 'checkbox' ? (row ? Boolean(raw) : f.name === 'is_active') : f.type === 'datetime' ? toLocalInput(raw) : raw ?? ''
  }
  return v
}

export default function ResourceManager({ resourceKey, perms }) {
  const cfg = RESOURCES[resourceKey]
  const canManage = hasPerm(perms, cfg.managePerm)
  const [rows, setRows] = useState([])
  const [page, setPage] = useState(1)
  const [last, setLast] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('')
  const [trashed, setTrashed] = useState(false)
  const [modal, setModal] = useState(null) // { row, values, errors, busy }

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams({ page, per_page: 20 })
      if (q && cfg.search) params.set('q', q)
      if (filter && cfg.filter) params.set(cfg.filter.param, filter)
      if (trashed) params.set('trashed', '1')
      const json = await api(`${cfg.endpoint}?${params}`)
      setRows(json.data || [])
      setLast((json.meta || json).last_page || 1)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [cfg, page, q, filter, trashed])

  useEffect(() => { load() }, [load])

  async function openEdit(row) {
    let full = row
    if (row && cfg.endpoint.includes('volunteers')) { // the list omits events/service hours
      try { full = (await api(`${cfg.endpoint}/${row.id}`)).data } catch { /* fall back to list row */ }
    }
    setModal({ row: full, values: initial(cfg.fields, full), errors: {}, busy: false, message: '' })
  }

  async function save(e) {
    e.preventDefault()
    const { row, values } = modal
    const body = {}
    for (const f of cfg.fields) {
      if (f.type === 'display' || !f.name) continue
      if (row && f.createOnly) continue
      let v = values[f.name]
      if (f.type === 'checkbox') v = Boolean(v)
      else if (f.type === 'datetime') v = fromLocalInput(v)
      else if (v === '' || v === undefined) {
        if (f.omitEmpty && (row || !f.required)) continue
        v = f.required ? '' : null
      } else if (f.type === 'number') v = Number(v)
      body[f.name] = v
    }
    setModal({ ...modal, busy: true, errors: {}, message: '' })
    try {
      await api(row ? `${cfg.endpoint}/${row.id}` : cfg.endpoint, { method: row ? 'PATCH' : 'POST', body })
      setModal(null)
      setNotice('Saved.')
      load()
    } catch (err) {
      setModal((m) => ({ ...m, busy: false, errors: err.errors || {}, message: err.message }))
    }
  }

  async function remove(row) {
    if (!window.confirm('Delete this record? It can be restored from "Show deleted" later.')) return
    try { await api(`${cfg.endpoint}/${row.id}?confirm=1`, { method: 'DELETE' }); setNotice('Deleted.'); load() } catch (e) { setError(e.message) }
  }

  async function runAction(a, row) {
    if (a.confirm && !window.confirm(a.confirm)) return
    let body
    if (a.prompt) {
      body = {}
      for (const [key, label] of a.prompt) {
        const answer = window.prompt(label)
        if (answer === null) return
        body[key] = answer.trim()
      }
    }
    try { await api(a.path(row), { method: 'POST', body }); setNotice(`${a.label}: done.`); load() } catch (e) { setError(e.message) }
  }

  const cell = (col, row) => {
    if (col.render) return col.render(row)
    const v = getPath(row, col.key)
    if (col.badge) return v ? <span className={'badge ' + v}>{String(v).replace('_', ' ')}</span> : '—'
    if (col.bool) return v ? 'Yes' : 'No'
    if (col.date) return col.key.endsWith('_at') ? fmtDate(v) : fmtDay(v)
    return v === null || v === undefined || v === '' ? '—' : String(v)
  }

  const err = (name) => modal?.errors?.[name]?.[0]
  const set = (name) => (value) => setModal((m) => ({ ...m, values: { ...m.values, [name]: value } }))

  return (
    <>
      <div className="row sp">
        <div>
          <h1>{cfg.title}</h1>
        </div>
        <div className="row">
          {cfg.exportPath && hasPerm(perms, cfg.exportPerm) && <a className="btn ghost" href={`/api/backend/${cfg.exportPath}${filter ? `?${cfg.filter.param}=${filter}` : ''}`}>Export CSV</a>}
          {cfg.create && canManage && <button className="btn" onClick={() => setModal({ row: null, values: initial(cfg.fields, null), errors: {}, busy: false, message: '' })}>+ Add new</button>}
        </div>
      </div>

      <div className="filters">
        {cfg.search && <div><label>Search</label><input type="text" value={q} onChange={(e) => { setQ(e.target.value); setPage(1) }} placeholder="Name or email" /></div>}
        {cfg.filter && (
          <div>
            <label>{cfg.filter.label}</label>
            <select value={filter} onChange={(e) => { setFilter(e.target.value); setPage(1) }}>
              <option value="">All</option>
              {cfg.filter.options.map((o) => <option key={o} value={o}>{o.replace('_', ' ')}</option>)}
            </select>
          </div>
        )}
        {cfg.trashed && <label className="chk"><input type="checkbox" checked={trashed} onChange={(e) => { setTrashed(e.target.checked); setPage(1) }} /> Show deleted</label>}
      </div>

      {notice && <div className="msg ok" onClick={() => setNotice('')}>{notice}</div>}
      {error && <div className="msg err">{error}</div>}

      <div className="card tbl-wrap">
        <table className="tbl">
          <thead><tr>{cfg.columns.map((c, i) => <th key={i}>{c.label}</th>)}<th /></tr></thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} style={row.deleted_at ? { opacity: 0.55 } : undefined}>
                {cfg.columns.map((c, i) => <td key={i}>{cell(c, row)}</td>)}
                <td className="acts">
                  {(cfg.rowLinks || []).map((l) => <Link key={l.label} className="btn sm ghost" href={l.href(row)}>{l.label}</Link>)}
                  {canManage && !row.deleted_at && (cfg.rowActions || []).filter((a) => (!a.perm || hasPerm(perms, a.perm)) && (!a.show || a.show(row))).map((a) => (
                    <button key={a.label} className="btn sm ghost" onClick={() => runAction(a, row)}>{a.label}</button>
                  ))}
                  {canManage && cfg.edit && !row.deleted_at && <button className="btn sm" onClick={() => openEdit(row)}>Edit</button>}
                  {canManage && cfg.del && !row.deleted_at && <button className="btn sm danger" onClick={() => remove(row)}>Delete</button>}
                  {canManage && row.deleted_at && <button className="btn sm ghost" onClick={() => runAction({ label: 'Restore', path: (r) => `${cfg.endpoint}/${r.id}/restore` }, row)}>Restore</button>}
                </td>
              </tr>
            ))}
            {!rows.length && !loading && <tr><td colSpan={cfg.columns.length + 1} style={{ color: 'var(--mut)' }}>Nothing here yet.</td></tr>}
            {loading && <tr><td colSpan={cfg.columns.length + 1} style={{ color: 'var(--mut)' }}>Loading…</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="pager">
        <button className="btn sm ghost" disabled={page <= 1} onClick={() => setPage(page - 1)}>← Prev</button>
        <span>Page {page} of {last}</span>
        <button className="btn sm ghost" disabled={page >= last} onClick={() => setPage(page + 1)}>Next →</button>
      </div>

      {modal && (
        <div className="panel" onMouseDown={(e) => e.target === e.currentTarget && setModal(null)}>
          <form className="card" onSubmit={save}>
            <h2 className="h2">{modal.row ? 'Edit' : 'Add'} · {cfg.title}</h2>
            <div className="fgrid">
              {cfg.fields.filter((f) => !(modal.row && f.createOnly)).map((f, i) => (
                <div key={f.name || i} className={f.full || f.type === 'textarea' || f.type === 'display' || f.type === 'image' ? 'full' : ''}>
                  {f.type === 'checkbox' ? (
                    <label className="chk"><input type="checkbox" checked={Boolean(modal.values[f.name])} onChange={(e) => set(f.name)(e.target.checked)} /> {f.label}</label>
                  ) : (
                    <>
                      <label>{f.label}{f.required && !(modal.row && f.omitEmpty) ? ' *' : ''}</label>
                      {f.type === 'display' ? <div className="disp">{f.render(modal.row || {})}</div>
                        : f.type === 'textarea' ? <textarea value={modal.values[f.name]} onChange={(e) => set(f.name)(e.target.value)} />
                        : f.type === 'select' ? <select value={modal.values[f.name]} onChange={(e) => set(f.name)(e.target.value)}>{!f.required && <option value="">—</option>}{f.options.map((o) => <option key={o} value={o}>{o.replace('_', ' ')}</option>)}</select>
                        : f.type === 'image' ? <ImageField value={modal.values[f.name]} onChange={set(f.name)} />
                        : <input type={f.type === 'datetime' ? 'datetime-local' : f.type || 'text'} value={modal.values[f.name]} onChange={(e) => set(f.name)(e.target.value)} autoComplete={f.type === 'password' ? 'new-password' : undefined} />}
                      {f.help && <div className="hint">{f.help}</div>}
                    </>
                  )}
                  {err(f.name) && <div className="msg err" style={{ margin: '4px 0' }}>{err(f.name)}</div>}
                </div>
              ))}
            </div>
            {modal.message && !Object.keys(modal.errors).length && <div className="msg err">{modal.message}</div>}
            <div className="sticky-actions">
              <button type="button" className="btn ghost" onClick={() => setModal(null)}>Cancel</button>
              {(cfg.fields.some((f) => f.name)) && <button className="btn" disabled={modal.busy}>{modal.busy ? 'Saving…' : 'Save'}</button>}
            </div>
          </form>
        </div>
      )}
    </>
  )
}
