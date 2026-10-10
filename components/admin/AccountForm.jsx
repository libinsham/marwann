'use client'

import { useState } from 'react'

export default function AccountForm({ username }) {
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [again, setAgain] = useState('')
  const [msg, setMsg] = useState(null)
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setMsg(null)
    if (next !== again) return setMsg({ err: true, text: 'The new passwords do not match' })
    setBusy(true)
    const res = await fetch('/api/admin/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current, next }),
    })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) return setMsg({ err: true, text: data.error || 'Could not change password' })
    setCurrent('')
    setNext('')
    setAgain('')
    setMsg({ text: 'Password changed. Any other signed-in devices were signed out.' })
  }

  return (
    <form className="card" onSubmit={submit} style={{ maxWidth: 480 }}>
      <p style={{ marginTop: 0 }}>Signed in as <b>{username}</b></p>
      <label htmlFor="cur">Current password</label>
      <input id="cur" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} autoComplete="current-password" required />
      <label htmlFor="nw">New password</label>
      <input id="nw" type="password" value={next} onChange={(e) => setNext(e.target.value)} autoComplete="new-password" minLength={10} required />
      <div className="hint">At least 10 characters.</div>
      <label htmlFor="ag">Repeat new password</label>
      <input id="ag" type="password" value={again} onChange={(e) => setAgain(e.target.value)} autoComplete="new-password" required />
      {msg && <div className={'msg ' + (msg.err ? 'err' : 'ok')}>{msg.text}</div>}
      <p>
        <button className="btn" disabled={busy}>{busy ? 'Saving…' : 'Change password'}</button>
      </p>
    </form>
  )
}
