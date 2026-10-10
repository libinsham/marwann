'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const NAV = [
  ['/admin', 'Dashboard'],
  ['/admin/gallery', 'Gallery'],
  ['/admin/settings', 'Site settings'],
  ['/admin/account', 'Account'],
]

export default function AdminShell({ children, username }) {
  const pathname = usePathname()
  const router = useRouter()

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
    router.refresh()
  }

  return (
    <>
      <header className="adm-top">
        <div className="adm-top-in">
          <span className="adm-brand">MARWANN Admin</span>
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? 'on' : ''}>
              {label}
            </Link>
          ))}
          <a href="/" target="_blank" rel="noreferrer">View site ↗</a>
          {username && <span style={{ opacity: 0.8, fontSize: 14 }}>👤 {username}</span>}
          <button type="button" onClick={logout}>Log out</button>
        </div>
      </header>
      <main className="adm-wrap">{children}</main>
    </>
  )
}
