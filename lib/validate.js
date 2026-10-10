import { CATEGORIES } from './store'

const str = (v, max) => String(v ?? '').trim().slice(0, max)

export function cleanImageUrl(v) {
  const u = String(v ?? '').trim()
  if (!u) return ''
  // Only allow images we host: uploads (/media/...) or the bundled /assets/ files.
  return /^\/(media|assets)\/[\w\-./ %]+$/.test(u) && !u.includes('..') ? u : null
}

export function cleanGalleryItem(input, existing = {}) {
  const title = str(input.title ?? existing.title, 120)
  if (!title) return { error: 'Title is required' }
  const category = input.category ?? existing.category ?? 'community'
  if (!CATEGORIES[category]) return { error: 'Invalid category' }
  const image = cleanImageUrl(input.image ?? existing.image ?? '')
  if (image === null) return { error: 'Invalid image URL' }
  const date = str(input.date ?? existing.date ?? '', 10)
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) return { error: 'Invalid date' }
  return {
    item: {
      ...existing,
      title,
      description: str(input.description ?? existing.description, 400),
      category,
      image,
      alt: str(input.alt ?? existing.alt ?? title, 160),
      date,
      visible: input.visible === undefined ? existing.visible !== false : Boolean(input.visible),
    },
  }
}

export function cleanSettings(input) {
  const email = str(input.email, 120)
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Email looks invalid' }
  const phones = (Array.isArray(input.phones) ? input.phones : []).slice(0, 3).map((p) => str(p, 30))
  while (phones.length < 3) phones.push('')
  return {
    settings: {
      topText: str(input.topText, 160),
      homeTopText: str(input.homeTopText, 160),
      email,
      phones,
      address: str(input.address, 300),
      shortAddress: str(input.shortAddress, 100),
    },
  }
}
