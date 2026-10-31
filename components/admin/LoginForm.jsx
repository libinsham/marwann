'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm({ configured }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    const res = await fetch('/api/backend/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).catch(() => null)
    const data = (await res?.json().catch(() => ({}))) || {}
    setBusy(false)
    if (!res) return setError('Could not reach the server')
    if (!res.ok) return setError(res.status === 429 ? 'Too many attempts. Wait a minute and try again.' : data.message || 'Login failed')
    router.replace('/admin')
    router.refresh()
  }

  return (
    <div className="login card">
      <h1>Admin login</h1>
      <p className="sub">MARWANN Charitable Trust</p>
      {!configured && (
        <div className="msg err">
          The Laravel API is not configured. Set <code>LARAVEL_API_URL</code> in <code>.env.local</code> and restart.
        </div>
      )}
      <form onSubmit={submit}>
        <label htmlFor="em">Email</label>
        <input id="em" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" autoFocus required />
        <label htmlFor="pw">Password</label>
        <input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
        {error && <div className="msg err">{error}</div>}
        <p>
          <button className="btn" disabled={busy || !configured}>{busy ? 'Signing in…' : 'Sign in'}</button>
        </p>
      </form>
      <p className="hint"><a href="/">← Back to website</a></p>
    </div>
  )
}
