import { requireAdminPage } from '@/lib/auth'
import AdminShell from '@/components/admin/AdminShell'
import EventRegistrations from '@/components/admin/EventRegistrations'

export const dynamic = 'force-dynamic'

export default async function EventRegistrationsPage({ params }) {
  const { id } = await params
  const admin = await requireAdminPage('events.view')
  return (
    <AdminShell admin={admin}>
      <EventRegistrations eventId={id} perms={admin.permissions} />
    </AdminShell>
  )
}
