import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { API_BASE, TOKEN_COOKIE } from './laravel'

// Admin identity now lives in Laravel. The browser only holds an HttpOnly cookie with a Sanctum token;
// every request is checked against Laravel's /auth/me (so revoking a token or disabling a user takes effect at once).
export const COOKIE = TOKEN_COOKIE
export const SESSION_SECONDS = 60 * 60 * 8

export function adminConfigured() {
  return Boolean(API_BASE)
}

export async function getAdmin() {
  if (!API_BASE) return null
  const jar = await cookies()
  const token = jar.get(TOKEN_COOKIE)?.value
  if (!token) return null
  try {
    const res = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }, cache: 'no-store' })
    if (!res.ok) return null
    const { data } = await res.json()
    return { id: data.id, username: data.name, email: data.email, role: data.role, permissions: data.permissions || [] }
  } catch {
    return null
  }
}

export const can = (admin, permission) => Boolean(admin && (admin.permissions.includes('*') || admin.permissions.includes(permission)))

export async function isAdmin() {
  return Boolean(await getAdmin())
}

export async function requireAdminPage(permission) {
  const admin = await getAdmin()
  if (!admin) redirect('/admin/login')
  if (permission && !can(admin, permission)) redirect('/admin')
  return admin
}

// Returns a Response when the caller may NOT do this, otherwise null. Used by the legacy gallery/settings/upload routes.
export async function denyUnlessAdmin(permission = 'gallery.manage') {
  const admin = await getAdmin()
  if (!admin) return Response.json({ error: 'Not signed in' }, { status: 401 })
  if (!can(admin, permission)) return Response.json({ error: 'You do not have permission to do this' }, { status: 403 })
  return null
}
