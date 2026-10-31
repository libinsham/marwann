'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const can = (admin, p) => Boolean(admin && (admin.permissions.includes('*') || admin.permissions.includes(p)))

const TOP = [
  ['/admin', 'Dashboard', 'dashboard.view'],
  ['/admin/donations', 'Donations', 'donations.view'],
  ['/admin/m/campaigns', 'Campaigns', 'campaigns.view'],
  ['/admin/m/volunteers', 'Volunteers', 'volunteers.view'],
  ['/admin/m/events', 'Events', 'events.view'],
  ['/admin/gallery', 'Gallery', 'gallery.view'],
]
const GROUPS = [
  ['Website', 'content.view', [
    ['/admin/m/programmes', 'Programmes'], ['/admin/m/programme-categories', 'Programme categories'], ['/admin/m/timeline', 'Timeline'],
    ['/admin/m/slides', 'Homepage slider'], ['/admin/m/news', 'News'], ['/admin/m/pages', 'Pages'], ['/admin/m/grassroots-stats', 'Grassroots stats'],
    ['/admin/m/states', 'States'], ['/admin/m/centres', 'Districts & units'], ['/admin/m/coordinators', 'Coordinators'], ['/admin/m/settings', 'API settings'],
    ['/admin/settings', 'Contact details'],
  ]],
  ['Inbox', 'enquiries.manage', [['/admin/m/enquiries', 'Enquiries'], ['/admin/m/subscribers', 'Subscribers']]],
  ['System', 'users.view', [['/admin/m/users', 'Users'], ['/admin/m/audit-logs', 'Audit log']]],
]

export default function AdminShell({ children, admin }) {
  const pathname = usePathname()
  const router = useRouter()

  async function logout() {
    await fetch('/api/backend/logout', { method: 'POST' })
    router.replace('/admin/login')
    router.refresh()
  }

  return (
    <>
      <header className="adm-top">
        <div className="adm-top-in">
          <span className="adm-brand">MARWANN Admin</span>
          {TOP.filter(([, , p]) => can(admin, p)).map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? 'on' : ''}>{label}</Link>
          ))}
          {GROUPS.filter(([, p]) => can(admin, p) || (p === 'users.view' && can(admin, 'audit.view'))).map(([label, , links]) => (
            <details className="adm-menu" key={label}>
              <summary>{label} ▾</summary>
              <div>{links.map(([href, text]) => <Link key={href} href={href} className={pathname === href ? 'on' : ''}>{text}</Link>)}</div>
            </details>
          ))}
          <Link href="/admin/account" className={pathname === '/admin/account' ? 'on' : ''}>Account</Link>
          <a href="/" target="_blank" rel="noreferrer">View site ↗</a>
          {admin && <span style={{ opacity: 0.8, fontSize: 14 }}>👤 {admin.username} · {admin.role.replace('_', ' ')}</span>}
          <button type="button" onClick={logout}>Log out</button>
        </div>
      </header>
      <main className="adm-wrap">{children}</main>
    </>
  )
}
