'use client'

import { useState } from 'react'

export default function EventRegisterForm({ slug }) {
  const [v, setV] = useState({ name: '', email: '', phone: '' })
  const [state, setState] = useState({ busy: false, ok: '', error: '' })

  async function submit(e) {
    e.preventDefault()
    setState({ busy: true, ok: '', error: '' })
    const res = await fetch(`/api/backend/events/${slug}/registrations`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...v, phone: v.phone || null }),
    }).catch(() => null)
    const json = (await res?.json().catch(() => ({}))) || {}
    if (res?.ok) {
      setV({ name: '', email: '', phone: '' })
      return setState({ busy: false, ok: 'You are registered. See you there!', error: '' })
    }
    const first = json.errors ? Object.values(json.errors)[0]?.[0] : null
    setState({ busy: false, ok: '', error: first || json.message || 'Could not register. Please try again.' })
  }

  const input = { padding: '10px 12px', border: '1px solid #dce6e3', borderRadius: 8, font: 'inherit', minWidth: 160, flex: '1 1 160px' }
  return (
    <form onSubmit={submit} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16, justifyContent: 'center' }}>
      <input style={input} placeholder="Your name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} required autoComplete="name" />
      <input style={input} type="email" placeholder="Email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} required autoComplete="email" />
      <input style={input} type="tel" placeholder="Phone (optional)" value={v.phone} onChange={(e) => setV({ ...v, phone: e.target.value })} autoComplete="tel" />
      <button className="e-primary-btn" disabled={state.busy}>{state.busy ? 'Registering…' : 'Register'}</button>
      <div role="status" aria-live="polite" style={{ flexBasis: '100%', fontSize: 14, color: state.error ? '#8a1f14' : '#0b5d44' }}>{state.ok || state.error}</div>
    </form>
  )
}
