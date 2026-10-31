import { requireAdminPage } from '@/lib/auth'
import { getGallery, CATEGORIES } from '@/lib/store'
import AdminShell from '@/components/admin/AdminShell'
import GalleryManager from '@/components/admin/GalleryManager'

export const dynamic = 'force-dynamic'

export default async function GalleryAdminPage() {
  const admin = await requireAdminPage('gallery.view')
  const items = await getGallery()
  return (
    <AdminShell admin={admin}>
      <h1>Gallery</h1>
      <p className="sub">Upload photos, edit captions, hide or reorder them. Changes appear on the public Gallery page immediately.</p>
      <GalleryManager initialItems={items} categories={CATEGORIES} />
    </AdminShell>
  )
}
