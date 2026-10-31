import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { API_BASE, TOKEN_COOKIE } from '@/lib/laravel'

export const runtime = 'nodejs'

export async function POST() {
  const jar = await cookies()
  const token = jar.get(TOKEN_COOKIE)?.value
  if (token && API_BASE) {
    await fetch(`${API_BASE}/auth/logout`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' } }).catch(() => {})
  }
  const out = NextResponse.json({ ok: true })
  out.cookies.delete(TOKEN_COOKIE)
  return out
}
