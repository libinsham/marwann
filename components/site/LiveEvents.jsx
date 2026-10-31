import EventRegisterForm from './EventRegisterForm'

const when = (iso) => new Date(iso).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Kolkata' })

export default function LiveEvents({ events }) {
  return (
    <div style={{ display: 'grid', gap: 24, maxWidth: 900, margin: '0 auto' }}>
      {events.map((e) => (
        <article key={e.id} style={{ background: '#fff', border: '1px solid rgba(6,79,73,.10)', borderRadius: 20, padding: '34px 30px', boxShadow: '0 14px 40px rgba(13,48,43,.06)', textAlign: 'center' }}>
          {e.banner_image && <img src={e.banner_image} alt="" style={{ width: '100%', maxHeight: 280, objectFit: 'cover', borderRadius: 14, marginBottom: 18 }} />}
          <span className="marwann-events-tag">{e.registration_open ? 'Registration open' : 'Upcoming'}</span>
          <h2 style={{ margin: '0 0 8px' }}>{e.title}</h2>
          <p style={{ margin: '0 auto 6px', fontWeight: 600, color: '#075d56' }}>{when(e.starts_at)}</p>
          {(e.venue || e.location) && <p style={{ margin: '0 auto 12px' }}>{[e.venue, e.location].filter(Boolean).join(', ')}</p>}
          {e.description && <p style={{ margin: '0 auto', whiteSpace: 'pre-line' }}>{e.description}</p>}
          {e.registration_requirements && <p style={{ margin: '10px auto 0', fontSize: 13 }}>{e.registration_requirements}</p>}
          {e.spots_left !== null && <p style={{ margin: '10px auto 0', fontSize: 13 }}>{e.spots_left > 0 ? `${e.spots_left} places left` : 'This event is full'}</p>}
          {e.registration_open && <EventRegisterForm slug={e.slug} />}
        </article>
      ))}
    </div>
  )
}
