import Link from 'next/link'

const inr = (v) => '₹' + Number(v).toLocaleString('en-IN', { maximumFractionDigits: 0 })

const css = `
.lc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}
.lc-card{background:#fff;border:1px solid rgba(6,79,73,.10);border-radius:16px;overflow:hidden;box-shadow:0 12px 35px rgba(13,48,43,.06);display:flex;flex-direction:column}
.lc-card img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}
.lc-body{padding:22px;display:flex;flex-direction:column;gap:10px;flex:1}
.lc-body h3{margin:0;font-size:20px;color:#17212b}.lc-body p{margin:0;color:#64748b;font-size:14px;line-height:1.65}
.lc-bar{height:10px;border-radius:6px;background:#e6efed;overflow:hidden}.lc-bar i{display:block;height:100%;background:#075d56}
.lc-meta{display:flex;justify-content:space-between;font-size:13px;color:#42605a;font-weight:600}
.lc-card .e-primary-btn{margin-top:auto;align-self:flex-start}
`

export default function LiveCampaigns({ campaigns }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="lc-grid">
        {campaigns.map((c) => (
          <article className="lc-card" key={c.id}>
            {c.cover_image && <img src={c.cover_image} alt="" loading="lazy" />}
            <div className="lc-body">
              <h3>{c.title}</h3>
              {(c.purpose || c.description) && <p>{String(c.purpose || c.description).slice(0, 220)}</p>}
              <div className="lc-bar" role="img" aria-label={`${c.progress_percent}% of target raised`}><i style={{ width: `${c.progress_percent}%` }} /></div>
              <div className="lc-meta"><span>{inr(c.raised)} raised</span><span>Goal {inr(c.target)}</span></div>
              {c.end_date && <small style={{ color: '#69716f' }}>Ends {new Date(c.end_date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</small>}
              <Link href={`/donate?campaign=${c.id}`} className="e-primary-btn">Donate to this campaign</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
