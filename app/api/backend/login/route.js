import { NextResponse } from 'next/server'
import { API_BASE, TOKEN_COOKIE } from '@/lib/laravel'

export const runtime = 'nodejs'

export async function POST(request) {
  const origin = request.headers.get('origin')
  if (origin && new URL(origin).host !== request.nextUrl.host) return NextResponse.json({ message: 'Bad origin' }, { status: 403 })
  if (!API_BASE) return NextResponse.json({ message: 'LARAVEL_API_URL is not configured on the server.' }, { status: 503 })

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || ''
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST', cache: 'no-store', body: await request.text(),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...(ip ? { 'X-Forwarded-For': ip } : {}) },
  }).catch(() => null)
  if (!res) return NextResponse.json({ message: 'The server is unreachable. Please try again.' }, { status: 502 })

  const json = await res.json().catch(() => ({}))
  if (!res.ok) return NextResponse.json({ message: json.message || 'Login failed', errors: json.errors }, { status: res.status })

  const out = NextResponse.json({ user: json.data.user })
  out.cookies.set(TOKEN_COOKIE, json.data.token, {
    httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/',
    expires: new Date(json.data.expires_at),
  })
  return out
}
