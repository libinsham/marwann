import crypto from 'node:crypto'
import { getDb } from './store'

export function hashPassword(pw) {
  const salt = crypto.randomBytes(16)
  const hash = crypto.scryptSync(String(pw), salt, 64)
  return `scrypt$${salt.toString('base64')}$${hash.toString('base64')}`
}

export function verifyPassword(pw, stored) {
  try {
    const [, s, h] = String(stored).split('$')
    const hash = Buffer.from(h, 'base64')
    const test = crypto.scryptSync(String(pw), Buffer.from(s, 'base64'), hash.length)
    return crypto.timingSafeEqual(hash, test)
  } catch {
    return false
  }
}

// Used so a wrong username takes as long as a wrong password.
export const DUMMY_HASH = hashPassword('dummy-password-for-timing')

export const countUsers = () => getDb().prepare('SELECT COUNT(*) AS c FROM users').get().c
export const findUserByName = (name) =>
  getDb().prepare('SELECT * FROM users WHERE username = ?').get(String(name || '').trim())
export const findUserById = (id) => getDb().prepare('SELECT * FROM users WHERE id = ?').get(id)

// First run only: create the admin account from ADMIN_USERNAME / ADMIN_PASSWORD.
export function ensureBootstrapUser() {
  if (countUsers() > 0) return
  const username = (process.env.ADMIN_USERNAME || 'admin').trim()
  const password = process.env.ADMIN_PASSWORD
  if (!password) return
  getDb()
    .prepare('INSERT OR IGNORE INTO users (username, password_hash) VALUES (?, ?)')
    .run(username, hashPassword(password))
}

// Changing the password bumps `pwv`, which signs every other session out.
export function setPassword(id, newPassword) {
  getDb()
    .prepare('UPDATE users SET password_hash = ?, pwv = pwv + 1 WHERE id = ?')
    .run(hashPassword(newPassword), id)
  return findUserById(id)
}

// Cookie-signing secret: ADMIN_SECRET if set, otherwise generated once and kept in the DB.
export function getSecret() {
  const env = process.env.ADMIN_SECRET
  if (env && env.length >= 16) return env
  const db = getDb()
  const row = db.prepare("SELECT value FROM settings WHERE key = '_secret'").get()
  if (row) return row.value
  const secret = crypto.randomBytes(32).toString('hex')
  db.prepare("INSERT OR IGNORE INTO settings (key, value) VALUES ('_secret', ?)").run(secret)
  return db.prepare("SELECT value FROM settings WHERE key = '_secret'").get().value
}
