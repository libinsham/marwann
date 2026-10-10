import Link from 'next/link'
import { requireAdminPage } from '@/lib/auth'
import { getGallery, getSettings, getStats, CATEGORIES } from '@/lib/store'
import AdminShell from '@/components/admin/AdminShell'

export const dynamic = 'force-dynamic'

const mb = (n) => (n / 1048576).toFixed(1) + ' MB'

export default async function Dashboard() {
  const admin = await requireAdminPage()
  const [stats, items, settings] = await Promise.all([getStats(), getGallery(), getSettings()])
  const recent = items.slice(0, 4)
  const max = Math.max(1, ...Object.values(stats.byCategory))

  return (
    <AdminShell username={admin.username}>
      <h1>Welcome, {admin.username}</h1>
      <p className="sub">Overview of your website content.</p>

      <div className="grid3">
        <div className="card stat"><b>{stats.total}</b>Gallery items</div>
        <div className="card stat"><b>{stats.visible}</b>Visible on website</div>
        <div className="card stat"><b>{stats.hidden}</b>Hidden</div>
        <div className="card stat"><b>{stats.uploads}</b>Uploaded photos · {mb(stats.uploadBytes)}</div>
      </div>

      <div className="dash2">
        <div className="card">
          <h2 className="h2">Quick actions</h2>
          <div className="row">
            <Link className="btn" href="/admin/gallery">+ Add / manage photos</Link>
            <Link className="btn ghost" href="/admin/settings">Edit contact details</Link>
            <Link className="btn ghost" href="/admin/account">Change password</Link>
            <a className="btn ghost" href="/gallery" target="_blank" rel="noreferrer">View gallery ↗</a>
          </div>
          <h2 className="h2" style={{ marginTop: 22 }}>Gallery by category</h2>
          {Object.entries(CATEGORIES).map(([k, label]) => (
            <div key={k} className="barrow">
              <span>{label}</span>
              <div className="bar"><i style={{ width: ((stats.byCategory[k] || 0) / max) * 100 + '%' }} /></div>
              <b>{stats.byCategory[k] || 0}</b>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 className="h2">Contact details on the site</h2>
          <p className="kv"><span>Email</span>{settings.email || '—'}</p>
          {settings.phones.map((p, i) => (
            <p key={i} className="kv"><span>Phone {i + 1}</span>{p || '—'}</p>
          ))}
          <p className="kv"><span>Address</span>{settings.address || '—'}</p>
          <Link className="btn sm ghost" href="/admin/settings">Edit</Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <div className="row sp">
          <h2 className="h2" style={{ margin: 0 }}>Latest gallery items</h2>
          <Link className="btn sm ghost" href="/admin/gallery">See all</Link>
        </div>
        <div className="thumbs">
          {recent.map((it) => (
            <div key={it.id} className="thumb">
              {it.image ? <img src={it.image} alt="" loading="lazy" /> : <div className="noimg">No photo</div>}
              <span>{it.title}</span>
            </div>
          ))}
          {!recent.length && <p className="sub">Nothing yet.</p>}
        </div>
      </div>
    </AdminShell>
  )
}
