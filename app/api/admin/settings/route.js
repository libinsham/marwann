import { revalidatePath } from 'next/cache'
import { denyUnlessAdmin } from '@/lib/auth'
import { getSettings, saveSettings } from '@/lib/store'
import { cleanSettings } from '@/lib/validate'

export const runtime = 'nodejs'

export async function GET() {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  return Response.json({ settings: await getSettings() })
}

export async function PUT(req) {
  const denied = await denyUnlessAdmin()
  if (denied) return denied
  const { settings, error } = cleanSettings(await req.json().catch(() => ({})))
  if (error) return Response.json({ error }, { status: 400 })
  await saveSettings(settings)
  revalidatePath('/', 'layout') // header, footer and contact page pick up the change
  return Response.json({ settings })
}
