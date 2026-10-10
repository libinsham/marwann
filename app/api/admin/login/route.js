import { cookies } from 'next/headers'
import { adminConfigured, createSession, COOKIE, cookieOptions } from '@/lib/auth'
import { DUMMY_HASH, findUserByName, verifyPassword } from '@/lib/users'

export const runtime = 'nodejs'

// Small in-memory throttle: 6 failed attempts / 10 min per IP.
const attempts = new Map()

export async function POST(req) {
  if (!adminConfigured()) {
    return Response.json(
      { error: 'No admin account yet. Set ADMIN_USERNAME and ADMIN_PASSWORD in .env.local and restart the server.' },
      { status: 503 }
    )
  }
  const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim()
  const now = Date.now()
  const rec = attempts.get(ip)
  const live = rec && rec.reset > now
  if (live && rec.count >= 6) {
    return Response.json({ error: 'Too many attempts. Try again in a few minutes.' }, { status: 429 })
  }

  const { username, password } = await req.json().catch(() => ({}))
  const user = findUserByName(username)
  const ok = verifyPassword(password, user ? user.password_hash : DUMMY_HASH) && Boolean(user)
  if (!ok) {
    attempts.set(ip, { count: (live ? rec.count : 0) + 1, reset: live ? rec.reset : now + 600000 })
    return Response.json({ error: 'Wrong username or password' }, { status: 401 })
  }
  attempts.delete(ip)
  const jar = await cookies()
  jar.set(COOKIE, createSession(user), cookieOptions())
  return Response.json({ ok: true })
}
