import { requireAdminPage } from '@/lib/auth'
import AdminShell from '@/components/admin/AdminShell'
import DonationsManager from '@/components/admin/DonationsManager'

export const dynamic = 'force-dynamic'

export default async function DonationsPage() {
  const admin = await requireAdminPage('donations.view')
  return (
    <AdminShell admin={admin}>
      <DonationsManager perms={admin.permissions} />
    </AdminShell>
  )
}
