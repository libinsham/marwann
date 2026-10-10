import fs from 'node:fs/promises'
import path from 'node:path'
import { revalidatePath } from 'next/cache'
import { denyUnlessAdmin } from '@/lib/auth'
import { updateGallery, UPLOAD_DIR } from '@/lib/store'
import { cleanGalleryItem } from '@/lib/validate'

export const runtime = 'nodejs'

export async function PUT(req, { params }) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  const { id } = await params
  const body = await req.json().catch(() => ({}))
  let result = null
  await updateGallery((items) =>
    items.map((it) => {
      if (it.id !== id) return it
      const r = cleanGalleryItem(body, it)
      result = r
      return r.item || it
    })
  )
  if (!result) return Response.json({ error: 'Not found' }, { status: 404 })
  if (result.error) return Response.json({ error: result.error }, { status: 400 })
  revalidatePath('/gallery')
  return Response.json({ item: result.item })
}

export async function DELETE(_req, { params }) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  const { id } = await params
  let removed = null
  const items = await updateGallery((cur) => {
    removed = cur.find((i) => i.id === id) || null
    return cur.filter((i) => i.id !== id)
  })
  if (!removed) return Response.json({ error: 'Not found' }, { status: 404 })
  // Delete the uploaded file too, unless another item still uses it.
  const m = /^\/media\/([a-f0-9]{16}\.\w+)$/.exec(removed.image || '')
  if (m && !items.some((i) => i.image === removed.image)) {
    await fs.unlink(path.join(UPLOAD_DIR, m[1])).catch(() => {})
  }
  revalidatePath('/gallery')
  return Response.json({ ok: true })
}
