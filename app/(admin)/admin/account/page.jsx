import { requireAdminPage } from '@/lib/auth'
import AdminShell from '@/components/admin/AdminShell'
import AccountForm from '@/components/admin/AccountForm'

export const dynamic = 'force-dynamic'

export default async function AccountPage() {
  const admin = await requireAdminPage()
  return (
    <AdminShell admin={admin}>
      <h1>Account</h1>
      <p className="sub">Change your admin password.</p>
      <AccountForm username={admin.username} />
    </AdminShell>
  )
}
