import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { API_BASE, TOKEN_COOKIE } from '@/lib/laravel'

export const runtime = 'nodejs'

// Same-origin proxy to Laravel. Adds the Bearer token from the HttpOnly cookie, forwards the visitor's IP (for Laravel's
// rate limits) and blocks cross-site writes. Browser JS never sees the token or the Laravel URL.
async function handler(request, { params }) {
  const { path } = await params
  const target = path.join('/')
  const blocked = path.some((s) => s === '' || s === '.' || s === '..') || target.startsWith('payments/razorpay/webhook') || target === 'auth/login'
  if (blocked || !API_BASE) return NextResponse.json({ message: 'Not found' }, { status: blocked ? 404 : 503 })

  const mutating = !['GET', 'HEAD'].includes(request.method)
  if (mutating) {
    const origin = request.headers.get('origin')
    if (!origin || new URL(origin).host !== request.nextUrl.host) return NextResponse.json({ message: 'Bad origin' }, { status: 403 })
  }

  const jar = await cookies()
  const token = jar.get(TOKEN_COOKIE)?.value
  const headers = { Accept: 'application/json' }
  const ct = request.headers.get('content-type')
  if (ct) headers['Content-Type'] = ct
  const dt = request.headers.get('x-donation-token')
  if (dt) headers['X-Donation-Token'] = dt
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || ''
  if (ip) headers['X-Forwarded-For'] = ip
  if (token) headers.Authorization = `Bearer ${token}`

  const upstream = await fetch(`${API_BASE}/${target}${request.nextUrl.search}`, {
    method: request.method, headers, body: mutating ? request.body : undefined, duplex: 'half', cache: 'no-store',
  }).catch(() => null)
  if (!upstream) return NextResponse.json({ message: 'Service unavailable' }, { status: 502 })

  const out = new NextResponse(upstream.status === 204 ? null : upstream.body, { status: upstream.status })
  for (const h of ['content-type', 'content-disposition']) {
    const v = upstream.headers.get(h)
    if (v) out.headers.set(h, v)
  }
  if (upstream.status === 401 && token) out.cookies.delete(TOKEN_COOKIE)
  return out
}

export { handler as GET, handler as POST, handler as PUT, handler as PATCH, handler as DELETE }
