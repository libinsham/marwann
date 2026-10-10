'use client'

import { useState } from 'react'

const EMPTY = { title: '', description: '', category: 'community', date: '', image: '', visible: true }

async function api(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Request failed (' + res.status + ')')
  return data
}

async function uploadFile(file) {
  const fd = new FormData()
  fd.append('file', file)
  const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || 'Upload failed')
  return data.url
}

export default function GalleryManager({ initialItems, categories }) {
  const [items, setItems] = useState(initialItems)
  const [form, setForm] = useState(null) // null | item being edited (id may be undefined)
  const [file, setFile] = useState(null)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null)

  const flash = (text, err) => setMsg({ text, err })

  function openNew() {
    setForm({ ...EMPTY })
    setFile(null)
  }
  function openEdit(it) {
    setForm({ ...it })
    setFile(null)
  }
  function close() {
    setForm(null)
    setFile(null)
  }

  async function save(e) {
    e.preventDefault()
    setBusy(true)
    setMsg(null)
    try {
      let image = form.image
      if (file) image = await uploadFile(file)
      const payload = { ...form, image }
      if (form.id) {
        const { item } = await api('PUT', '/api/admin/gallery/' + form.id, payload)
        setItems(items.map((i) => (i.id === item.id ? item : i)))
      } else {
        const { item } = await api('POST', '/api/admin/gallery', payload)
        setItems([item, ...items])
      }
      close()
      flash('Saved.')
    } catch (err) {
      flash(err.message, true)
    }
    setBusy(false)
  }

  async function bulk(e) {
    const files = Array.from(e.target.files || [])
    e.target.value = ''
    if (!files.length) return
    setBusy(true)
    setMsg(null)
    let added = []
    try {
      for (const f of files) {
        const image = await uploadFile(f)
        const title = f.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim() || 'Untitled'
        const { item } = await api('POST', '/api/admin/gallery', { ...EMPTY, title, image })
        added = [item, ...added]
        setItems((cur) => [item, ...cur])
      }
      flash(files.length + ' photo(s) added. Click Edit to set a title, category and description.')
    } catch (err) {
      flash(err.message + (added.length ? ' (' + added.length + ' uploaded before the error)' : ''), true)
    }
    setBusy(false)
  }

  async function toggle(it) {
    try {
      const { item } = await api('PUT', '/api/admin/gallery/' + it.id, { visible: !(it.visible !== false) })
      setItems(items.map((i) => (i.id === it.id ? item : i)))
    } catch (err) {
      flash(err.message, true)
    }
  }

  async function remove(it) {
    if (!confirm('Delete "' + it.title + '"? This also removes an uploaded photo.')) return
    try {
      await api('DELETE', '/api/admin/gallery/' + it.id)
      setItems(items.filter((i) => i.id !== it.id))
      flash('Deleted.')
    } catch (err) {
      flash(err.message, true)
    }
  }

  async function move(idx, dir) {
    const j = idx + dir
    if (j < 0 || j >= items.length) return
    const next = [...items]
    ;[next[idx], next[j]] = [next[j], next[idx]]
    setItems(next)
    try {
      await api('PATCH', '/api/admin/gallery', { ids: next.map((i) => i.id) })
    } catch (err) {
      flash(err.message, true)
    }
  }

  const preview = file ? URL.createObjectURL(file) : form?.image

  return (
    <>
      <div className="row">
        <button className="btn" onClick={openNew} disabled={busy}>
          + Add item
        </button>
        <label className="btn ghost" style={{ margin: 0, cursor: 'pointer' }}>
          {busy ? 'Working…' : 'Bulk upload photos'}
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple hidden onChange={bulk} disabled={busy} />
        </label>
        <span className="hint">JPG, PNG, WebP or GIF up to 15 MB. Photos are resized and converted to WebP automatically.</span>
      </div>

      {msg && <div className={'msg ' + (msg.err ? 'err' : 'ok')}>{msg.text}</div>}

      <div className="gal">
        {items.map((it, idx) => (
          <div key={it.id} className={'gi' + (it.visible === false ? ' hid' : '')}>
            <div className="th">
              {it.image ? <img src={it.image} alt={it.alt || it.title} loading="lazy" /> : 'No photo yet'}
            </div>
            <div className="bd">
              <span className="tag">{categories[it.category] || it.category}</span>
              <h3>{it.title}</h3>
              {it.visible === false && <small>Hidden from the public page</small>}
              <div className="acts">
                <button className="btn sm" onClick={() => openEdit(it)}>Edit</button>
                <button className="btn sm ghost" onClick={() => toggle(it)}>{it.visible === false ? 'Show' : 'Hide'}</button>
                <button className="btn sm ghost" onClick={() => move(idx, -1)} disabled={idx === 0} aria-label="Move earlier">↑</button>
                <button className="btn sm ghost" onClick={() => move(idx, 1)} disabled={idx === items.length - 1} aria-label="Move later">↓</button>
                <button className="btn sm danger" onClick={() => remove(it)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
        {!items.length && <p className="sub">No gallery items yet. Add your first photo above.</p>}
      </div>

      {form && (
        <div className="panel" onClick={(e) => e.target === e.currentTarget && close()}>
          <form className="card" onSubmit={save}>
            <h2 style={{ marginTop: 0 }}>{form.id ? 'Edit item' : 'Add item'}</h2>

            <label htmlFor="g-title">Title *</label>
            <input id="g-title" type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required maxLength={120} />

            <label htmlFor="g-desc">Description</label>
            <textarea id="g-desc" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} maxLength={400} />

            <div className="row" style={{ alignItems: 'flex-end' }}>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label htmlFor="g-cat">Category</label>
                <select id="g-cat" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                  {Object.entries(categories).map(([k, v]) => (
                    <option key={k} value={k}>{v}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <label htmlFor="g-date">Date (optional)</label>
                <input id="g-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>

            <label htmlFor="g-file">Photo</label>
            <input id="g-file" type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            {preview && <img className="prev" src={preview} alt="Preview" />}
            {form.image && !file && (
              <p>
                <button type="button" className="btn sm danger" onClick={() => setForm({ ...form, image: '' })}>Remove photo</button>
              </p>
            )}

            <label style={{ display: 'flex', gap: 8, alignItems: 'center', fontWeight: 500 }}>
              <input type="checkbox" checked={form.visible !== false} onChange={(e) => setForm({ ...form, visible: e.target.checked })} />
              Show on the public Gallery page
            </label>

            <div className="row" style={{ marginTop: 16 }}>
              <button className="btn" disabled={busy}>{busy ? 'Saving…' : 'Save'}</button>
              <button type="button" className="btn ghost" onClick={close} disabled={busy}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
