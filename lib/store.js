import fs from 'node:fs'
import path from 'node:path'
import Database from 'better-sqlite3'
import { DEFAULT_SETTINGS } from './shared'

export { CATEGORIES, DEFAULT_SETTINGS, toTel } from './shared'

// Everything editable lives in one SQLite file (DATA_DIR/marwann.db).
// Uploaded photos are stored as files in DATA_DIR/uploads and referenced from the DB.
// Point DATA_DIR at a persistent folder in production and back up the whole folder.
export const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(process.cwd(), 'data')
export const UPLOAD_DIR = path.join(DATA_DIR, 'uploads')
const DB_FILE = path.join(DATA_DIR, 'marwann.db')

function readSeed(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'))
  } catch {
    return fallback
  }
}

function openDb() {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  const db = new Database(DB_FILE)
  db.pragma('journal_mode = WAL')
  db.pragma('busy_timeout = 5000')
  db.exec(`
    CREATE TABLE IF NOT EXISTS gallery (
      id          TEXT PRIMARY KEY,
      position    INTEGER NOT NULL,
      title       TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      category    TEXT NOT NULL DEFAULT 'community',
      image       TEXT NOT NULL DEFAULT '',
      alt         TEXT NOT NULL DEFAULT '',
      date        TEXT NOT NULL DEFAULT '',
      visible     INTEGER NOT NULL DEFAULT 1
    );
    CREATE INDEX IF NOT EXISTS gallery_position ON gallery(position);
    CREATE TABLE IF NOT EXISTS settings (
      key   TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS users (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      username      TEXT NOT NULL UNIQUE COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      pwv           INTEGER NOT NULL DEFAULT 1,
      created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `)

  // One-time import of the starter gallery.json / settings.json (if present).
  db.transaction(() => {
    if (db.prepare("SELECT 1 FROM settings WHERE key = '_seeded'").get()) return
    const insert = db.prepare(
      'INSERT OR IGNORE INTO gallery (id, position, title, description, category, image, alt, date, visible) VALUES (?,?,?,?,?,?,?,?,?)'
    )
    readSeed('gallery.json', []).forEach((g, i) =>
      insert.run(g.id, i, g.title || 'Untitled', g.description || '', g.category || 'community',
        g.image || '', g.alt || g.title || '', g.date || '', g.visible === false ? 0 : 1)
    )
    const s = readSeed('settings.json', null)
    if (s) db.prepare("INSERT OR IGNORE INTO settings (key, value) VALUES ('site', ?)").run(JSON.stringify(s))
    db.prepare("INSERT INTO settings (key, value) VALUES ('_seeded', '1')").run()
  }).immediate()

  return db
}

// Reuse one connection (also across dev-server hot reloads).
export function getDb() {
  if (!globalThis.__marwannDb) globalThis.__marwannDb = openDb()
  return globalThis.__marwannDb
}

const rowToItem = (r) => ({
  id: r.id,
  title: r.title,
  description: r.description,
  category: r.category,
  image: r.image,
  alt: r.alt,
  date: r.date,
  visible: r.visible === 1,
})

export async function getGallery() {
  return getDb().prepare('SELECT * FROM gallery ORDER BY position, rowid').all().map(rowToItem)
}

// mutate(items) -> new items array (synchronous). Runs inside one SQLite transaction.
export async function updateGallery(mutate) {
  const db = getDb()
  return db
    .transaction(() => {
      const current = db.prepare('SELECT * FROM gallery ORDER BY position, rowid').all().map(rowToItem)
      const next = mutate(current)
      db.prepare('DELETE FROM gallery').run()
      const insert = db.prepare(
        'INSERT INTO gallery (id, position, title, description, category, image, alt, date, visible) VALUES (?,?,?,?,?,?,?,?,?)'
      )
      next.forEach((g, i) =>
        insert.run(g.id, i, g.title, g.description || '', g.category, g.image || '', g.alt || '', g.date || '', g.visible === false ? 0 : 1)
      )
      return next
    })
    .immediate()
}

export async function getSettings() {
  const row = getDb().prepare("SELECT value FROM settings WHERE key = 'site'").get()
  let s = {}
  try {
    s = row ? JSON.parse(row.value) : {}
  } catch {}
  const phones = Array.isArray(s.phones) ? s.phones : DEFAULT_SETTINGS.phones
  return { ...DEFAULT_SETTINGS, ...s, phones: [0, 1, 2].map((i) => phones[i] || '') }
}

export async function saveSettings(settings) {
  getDb()
    .prepare("INSERT INTO settings (key, value) VALUES ('site', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value")
    .run(JSON.stringify(settings))
}

// Numbers for the admin dashboard.
export async function getStats() {
  const db = getDb()
  const items = db.prepare('SELECT category, visible FROM gallery').all()
  const byCategory = {}
  for (const i of items) byCategory[i.category] = (byCategory[i.category] || 0) + 1
  let uploads = 0
  let bytes = 0
  try {
    for (const f of fs.readdirSync(UPLOAD_DIR)) {
      uploads += 1
      bytes += fs.statSync(path.join(UPLOAD_DIR, f)).size
    }
  } catch {}
  return {
    total: items.length,
    visible: items.filter((i) => i.visible === 1).length,
    hidden: items.filter((i) => i.visible !== 1).length,
    byCategory,
    uploads,
    uploadBytes: bytes,
  }
}
