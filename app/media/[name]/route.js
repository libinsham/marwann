import fs from 'node:fs/promises'
import path from 'node:path'
import { UPLOAD_DIR } from '@/lib/store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TYPES = { webp: 'image/webp', jpg: 'image/jpeg', png: 'image/png', gif: 'image/gif' }

// Public: serves files uploaded from the admin panel.
export async function GET(_req, { params }) {
  const { name } = await params
  const m = /^[a-f0-9]{16}\.(webp|jpg|png|gif)$/.exec(name)
  if (!m) return new Response('Not found', { status: 404 })
  try {
    const buf = await fs.readFile(path.join(UPLOAD_DIR, name))
    return new Response(buf, {
      headers: {
        'Content-Type': TYPES[m[1]],
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch {
    return new Response('Not found', { status: 404 })
  }
}
