import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { denyUnlessAdmin } from '@/lib/auth'
import { UPLOAD_DIR } from '@/lib/store'

export const runtime = 'nodejs'
const MAX_BYTES = 15 * 1024 * 1024

function sniff(b) {
  if (b.length < 12) return null
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'jpg'
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png'
  if (b.subarray(0, 4).toString() === 'GIF8') return 'gif'
  if (b.subarray(0, 4).toString() === 'RIFF' && b.subarray(8, 12).toString() === 'WEBP') return 'webp'
  return null
}

export async function POST(req) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied

  const form = await req.formData().catch(() => null)
  const file = form?.get('file')
  if (!file || typeof file === 'string') return Response.json({ error: 'No file received' }, { status: 400 })
  if (file.size > MAX_BYTES) return Response.json({ error: 'Image is larger than 15 MB' }, { status: 413 })

  const input = Buffer.from(await file.arrayBuffer())
  let ext = sniff(input)
  if (!ext) return Response.json({ error: 'Only JPG, PNG, GIF or WebP images are allowed' }, { status: 415 })

  let output = input
  try {
    // Resize + convert to WebP when sharp is available (keeps the site fast).
    const sharp = (await import('sharp')).default
    output = await sharp(input, { animated: true })
      .rotate()
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer()
    ext = 'webp'
  } catch {
    // sharp missing: store the original bytes.
  }

  const name = crypto.randomBytes(8).toString('hex') + '.' + ext
  await fs.mkdir(UPLOAD_DIR, { recursive: true })
  await fs.writeFile(path.join(UPLOAD_DIR, name), output)
  return Response.json({ url: '/media/' + name })
}
