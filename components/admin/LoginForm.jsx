'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginForm({ configured }) {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
    const data = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) return setError(data.error || 'Login failed')
    router.replace('/admin')
    router.refresh()
  }

  return (
    <div className="login card">
      <h1>Admin login</h1>
      <p className="sub">MARWANN Charitable Trust</p>
      {!configured && (
        <div className="msg err">
          No admin account exists yet. Add <code>ADMIN_USERNAME</code> and <code>ADMIN_PASSWORD</code> to
          <code> .env.local</code> and restart the server. The account is created on first start.
        </div>
      )}
      <form onSubmit={submit}>
        <label htmlFor="un">Username</label>
        <input id="un" type="text" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" autoFocus required />
        <label htmlFor="pw">Password</label>
        <input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
        {error && <div className="msg err">{error}</div>}
        <p>
          <button className="btn" disabled={busy || !configured}>
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
        </p>
      </form>
      <p className="hint"><a href="/">← Back to website</a></p>
    </div>
  )
}
