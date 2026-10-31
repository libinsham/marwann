import { requireAdminPage } from '@/lib/auth'
import { getSettings } from '@/lib/store'
import AdminShell from '@/components/admin/AdminShell'
import SettingsForm from '@/components/admin/SettingsForm'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const admin = await requireAdminPage('content.view')
  const settings = await getSettings()
  return (
    <AdminShell admin={admin}>
      <h1>Site settings</h1>
      <p className="sub">Shown in the header, footer and Contact page.</p>
      <SettingsForm initial={settings} />
    </AdminShell>
  )
}
