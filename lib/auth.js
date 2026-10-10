import crypto from 'node:crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { countUsers, ensureBootstrapUser, findUserById, getSecret } from './users'

export const COOKIE = 'marwann_admin'
export const SESSION_SECONDS = 60 * 60 * 8

const sign = (payload) => crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url')

// true once at least one admin account exists
export function adminConfigured() {
  ensureBootstrapUser()
  return countUsers() > 0
}

export function createSession(user) {
  const payload = `${user.id}.${user.pwv}.${Date.now() + SESSION_SECONDS * 1000}`
  return payload + '.' + sign(payload)
}

function verify(token) {
  if (!token) return null
  const parts = token.split('.')
  if (parts.length !== 4) return null
  const [uid, pwv, exp, sig] = parts
  const a = Buffer.from(sig)
  const b = Buffer.from(sign(`${uid}.${pwv}.${exp}`))
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
  if (Number(exp) <= Date.now()) return null
  ensureBootstrapUser()
  const user = findUserById(Number(uid))
  if (!user || String(user.pwv) !== pwv) return null // deleted user or password changed
  return { id: user.id, username: user.username }
}

export async function getAdmin() {
  const jar = await cookies()
  return verify(jar.get(COOKIE)?.value)
}

export async function isAdmin() {
  return Boolean(await getAdmin())
}

export async function requireAdminPage() {
  const admin = await getAdmin()
  if (!admin) redirect('/admin/login')
  return admin
}

// Returns a Response when the caller is NOT an admin, otherwise null.
export async function denyUnlessAdmin() {
  if (await isAdmin()) return null
  return Response.json({ error: 'Not signed in' }, { status: 401 })
}

export const cookieOptions = () => ({
  httpOnly: true,
  sameSite: 'strict',
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: SESSION_SECONDS,
})
