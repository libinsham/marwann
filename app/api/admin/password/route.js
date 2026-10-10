import { cookies } from 'next/headers'
import { COOKIE, cookieOptions, createSession, denyUnlessAdmin, getAdmin } from '@/lib/auth'
import { findUserById, setPassword, verifyPassword } from '@/lib/users'

export const runtime = 'nodejs'

export async function POST(req) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  const admin = await getAdmin()
  const { current, next } = await req.json().catch(() => ({}))

  const user = findUserById(admin.id)
  if (!verifyPassword(current, user.password_hash)) {
    return Response.json({ error: 'Current password is wrong' }, { status: 400 })
  }
  if (typeof next !== 'string' || next.length < 10) {
    return Response.json({ error: 'New password must be at least 10 characters' }, { status: 400 })
  }
  if (next.length > 200) return Response.json({ error: 'New password is too long' }, { status: 400 })

  const updated = setPassword(user.id, next)
  const jar = await cookies()
  jar.set(COOKIE, createSession(updated), cookieOptions()) // keep this browser signed in
  return Response.json({ ok: true })
}
