import { notFound } from 'next/navigation'
import { requireAdminPage } from '@/lib/auth'
import { RESOURCES } from '@/lib/adminConfig'
import AdminShell from '@/components/admin/AdminShell'
import ResourceManager from '@/components/admin/ResourceManager'

export const dynamic = 'force-dynamic'

export default async function ModulePage({ params }) {
  const { resource } = await params
  const cfg = RESOURCES[resource]
  if (!cfg) notFound()
  const admin = await requireAdminPage(cfg.viewPerm)
  return (
    <AdminShell admin={admin}>
      <ResourceManager resourceKey={resource} perms={admin.permissions} />
    </AdminShell>
  )
}
