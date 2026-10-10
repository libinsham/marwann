import { revalidatePath } from 'next/cache'
import crypto from 'node:crypto'
import { denyUnlessAdmin } from '@/lib/auth'
import { getGallery, updateGallery } from '@/lib/store'
import { cleanGalleryItem } from '@/lib/validate'

export const runtime = 'nodejs'

export async function GET() {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  return Response.json({ items: await getGallery() })
}

// Create an item
export async function POST(req) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  const body = await req.json().catch(() => ({}))
  const { item, error } = cleanGalleryItem(body, { id: 'g' + crypto.randomBytes(5).toString('hex') })
  if (error) return Response.json({ error }, { status: 400 })
  await updateGallery((items) => [item, ...items]) // newest first
  revalidatePath('/gallery')
  return Response.json({ item })
}

// Reorder: { ids: [...] }
export async function PATCH(req) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  const { ids } = await req.json().catch(() => ({}))
  if (!Array.isArray(ids)) return Response.json({ error: 'ids required' }, { status: 400 })
  const items = await updateGallery((cur) => {
    const byId = new Map(cur.map((i) => [i.id, i]))
    const ordered = ids.map((id) => byId.get(id)).filter(Boolean)
    const rest = cur.filter((i) => !ids.includes(i.id))
    return [...ordered, ...rest]
  })
  revalidatePath('/gallery')
  return Response.json({ items })
}
