// Server-side helpers for talking to the Laravel API. Never import this from a 'use client' file.
import { cookies } from 'next/headers'

export const API_BASE = (process.env.LARAVEL_API_URL || '').replace(/\/$/, '')
export const TOKEN_COOKIE = 'mct_token'

/** GET with the signed-in admin's token (from the HttpOnly cookie). */
export async function adminGet(path) {
  const jar = await cookies()
  const token = jar.get(TOKEN_COOKIE)?.value
  if (!API_BASE || !token) return { ok: false, status: 401, json: null }
  try {
    const res = await fetch(`${API_BASE}/${path}`, { headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }, cache: 'no-store' })
    return { ok: res.ok, status: res.status, json: await res.json().catch(() => null) }
  } catch {
    return { ok: false, status: 502, json: null }
  }
}

/** Public GET for website pages. Returns null if the API is unreachable so pages can fall back gracefully. */
export async function publicGet(path, revalidate = 60) {
  if (!API_BASE) return null
  try {
    const res = await fetch(`${API_BASE}/${path}`, { headers: { Accept: 'application/json' }, next: { revalidate } })
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}
