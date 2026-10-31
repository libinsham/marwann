import Link from 'next/link'
import { redirect } from 'next/navigation'
import { requireAdminPage } from '@/lib/auth'
import { adminGet } from '@/lib/laravel'
import AdminShell from '@/components/admin/AdminShell'

export const dynamic = 'force-dynamic'

const Stat = ({ n, label }) => <div className="card stat"><b>{n}</b>{label}</div>
const inr = (v) => '₹' + Number(v).toLocaleString('en-IN', { maximumFractionDigits: 2 })

export default async function Dashboard({ searchParams }) {
  const admin = await requireAdminPage()
  const sp = await searchParams
  const qs = new URLSearchParams()
  if (sp?.from) qs.set('from', sp.from)
  if (sp?.to) qs.set('to', sp.to)
  const res = await adminGet(`admin/dashboard?${qs}`)
  if (res.status === 401) redirect('/admin/login')
  const d = res.json?.data

  return (
    <AdminShell admin={admin}>
      <h1>Welcome, {admin.username}</h1>
      <p className="sub">Live figures from verified records.</p>

      <form className="filters" method="get">
        <div><label htmlFor="from">From</label><input id="from" type="date" name="from" defaultValue={d?.range.from} /></div>
        <div><label htmlFor="to">To</label><input id="to" type="date" name="to" defaultValue={d?.range.to} /></div>
        <button className="btn">Apply</button>
      </form>

      {!d && <div className="msg err">Could not load the dashboard. Check that the Laravel API is running and LARAVEL_API_URL is correct.</div>}

      {d?.donations && (<>
        <h2 className="sec">Donations</h2>
        <div className="grid3">
          <Stat n={d.donations.successful_count} label="Successful donations" />
          <Stat n={inr(d.donations.total_amount)} label="Total received" />
          <Stat n={inr(d.donations.net_of_refunds)} label="Net of refunds" />
          <Stat n={d.donations.pending_count} label="Pending payments" />
          <Stat n={d.donations.failed_count} label="Failed payments" />
          <Stat n={d.donations.refund_pending_count} label="Refunds in progress" />
        </div>
      </>)}

      {d?.campaigns && (<>
        <h2 className="sec">Active campaigns · {d.campaigns.active_count}</h2>
        <div className="card">
          {d.campaigns.progress.map((c) => (
            <div key={c.id} className="barrow"><span style={{ width: 220 }}>{c.title}</span><div className="bar"><i style={{ width: c.progress_percent + '%' }} /></div><b>{inr(c.raised)} / {inr(c.target)}</b></div>
          ))}
          {!d.campaigns.progress.length && <p className="sub" style={{ margin: 0 }}>No campaign is live. <Link href="/admin/m/campaigns">Create or publish one</Link>.</p>}
        </div>
      </>)}

      <div className="dash2" style={{ marginTop: 16 }}>
        {d?.volunteers && (
          <div className="card"><h2 className="h2">Volunteers</h2>
            <p className="kv"><span>New</span>{d.volunteers.new_in_range} in this period</p>
            <p className="kv"><span>To review</span>{d.volunteers.awaiting_review}</p>
            <p className="kv"><span>Approved</span>{d.volunteers.approved_total}</p>
            <Link className="btn sm ghost" href="/admin/m/volunteers">Open</Link></div>
        )}
        {d?.events && (
          <div className="card"><h2 className="h2">Events</h2>
            <p className="kv"><span>Upcoming</span>{d.events.upcoming}</p>
            <p className="kv"><span>Registered</span>{d.events.registrations_in_range} in this period</p>
            <p className="kv"><span>Attended</span>{d.events.attended_in_range}</p>
            <Link className="btn sm ghost" href="/admin/m/events">Open</Link></div>
        )}
        {d?.subscribers && (
          <div className="card"><h2 className="h2">Newsletter</h2>
            <p className="kv"><span>Total</span>{d.subscribers.total}</p>
            <p className="kv"><span>New</span>{d.subscribers.new_in_range} in this period</p>
            <Link className="btn sm ghost" href="/admin/m/subscribers">Open</Link></div>
        )}
      </div>

      {d?.recent_activity && (<>
        <h2 className="sec">Recent administrative activity</h2>
        <div className="card tbl-wrap"><table className="tbl"><tbody>
          {d.recent_activity.map((a, i) => <tr key={i}><td>{new Date(a.at).toLocaleString('en-IN')}</td><td>{a.user || '—'}</td><td>{a.action}</td><td>{a.subject}</td></tr>)}
        </tbody></table></div>
      </>)}
    </AdminShell>
  )
}
