// Browser-side helpers. All calls go through the same-origin proxy, so the Laravel token never reaches JS.
export async function api(path, { method = 'GET', body, form } = {}) {
  const opts = { method, headers: {} }
  if (form) opts.body = form
  else if (body !== undefined) {
    opts.headers['Content-Type'] = 'application/json'
    opts.body = JSON.stringify(body)
  }
  const res = await fetch('/api/backend/' + path, opts)
  if (res.status === 401) {
    window.location.href = '/admin/login'
    throw new Error('Session expired. Please sign in again.')
  }
  if (res.status === 204) return null
  const json = await res.json().catch(() => ({}))
  if (!res.ok) {
    const err = new Error((json.errors && Object.values(json.errors)[0]?.[0]) || json.message || 'Request failed')
    err.errors = json.errors || {}
    err.status = res.status
    throw err
  }
  return json
}

const p2 = (n) => String(n).padStart(2, '0')
export const toLocalInput = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}T${p2(d.getHours())}:${p2(d.getMinutes())}`
}
export const fromLocalInput = (v) => (v ? new Date(v).toISOString() : null)
export const fmtDate = (iso) => (iso ? new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : '—')
export const fmtDay = (iso) => (iso ? new Date(iso).toLocaleDateString('en-IN', { dateStyle: 'medium' }) : '—')
export const getPath = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj)
export const hasPerm = (perms, p) => perms.includes('*') || perms.includes(p)
