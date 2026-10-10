'use client'

import { useState } from 'react'

export default function SettingsForm({ initial }) {
  const [s, setS] = useState(initial)
  const [msg, setMsg] = useState(null)
  const [busy, setBusy] = useState(false)

  const set = (k) => (e) => setS({ ...s, [k]: e.target.value })
  const setPhone = (i) => (e) => {
    const phones = [...s.phones]
    phones[i] = e.target.value
    setS({ ...s, phones })
  }

  async function save(e) {
    e.preventDefault()
    setBusy(true)
    setMsg(null)
    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(s),
    })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) return setMsg({ err: true, text: data.error || 'Could not save' })
    setS(data.settings)
    setMsg({ text: 'Saved. The public site is updated.' })
  }

  return (
    <form className="card" onSubmit={save} style={{ maxWidth: 680 }}>
      <label htmlFor="top">Top bar text (all pages)</label>
      <input id="top" type="text" value={s.topText} onChange={set('topText')} />
      <label htmlFor="htop">Top bar text (home page)</label>
      <input id="htop" type="text" value={s.homeTopText} onChange={set('homeTopText')} />

      <label htmlFor="em">Email</label>
      <input id="em" type="email" value={s.email} onChange={set('email')} />

      {[0, 1, 2].map((i) => (
        <div key={i}>
          <label htmlFor={'ph' + i}>Phone {i + 1}</label>
          <input id={'ph' + i} type="text" value={s.phones[i] || ''} onChange={setPhone(i)} placeholder="+91 98765 43210" />
        </div>
      ))}
      <div className="hint">Leave a phone empty to hide it.</div>

      <label htmlFor="ad">Full address (footer &amp; Contact page)</label>
      <textarea id="ad" value={s.address} onChange={set('address')} />
      <label htmlFor="sa">Short address (side menu)</label>
      <input id="sa" type="text" value={s.shortAddress} onChange={set('shortAddress')} />

      {msg && <div className={'msg ' + (msg.err ? 'err' : 'ok')}>{msg.text}</div>}
      <p>
        <button className="btn" disabled={busy}>
          {busy ? 'Saving…' : 'Save changes'}
        </button>
      </p>
    </form>
  )
}
