
'use client'

import { useEffect, useRef, useState } from 'react'
import './ImpactSection.css'

const IMPACT_GROUPS = [
  {
    title: 'Education & Digital Empowerment',
    stats: [
      { value: 100000, label: 'LIVES IMPACTED' },
      { value: 20, label: 'DIGITAL CLASSROOMS & CENTERS' },
      { value: 25000, label: 'CERTIFICATES & DIPLOMAS' },
      { value: 110, label: 'DISTRICTS REACHED' },
    ],
  },
  {
    title: 'Women Livelihoods, Health & Environment',
    stats: [
      { value: 10000, label: 'RURAL WOMEN SKILLED' },
      { value: 65, label: 'FREE HEALTH CAMPS' },
      { value: 40, label: 'SOLAR WATER UNITS' },
      { value: 21, label: 'STATES & UTS ACTIVE' },
    ],
  },
]

const numberFormatter = new Intl.NumberFormat('en-IN')

function ImpactCounter({ value, started, duration = 2200 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return

    let frameId
    let startTime

    const animate = (timestamp) => {
      if (startTime === undefined) startTime = timestamp

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      )

      // Smooth ease-out animation.
      const easedProgress = 1 - Math.pow(1 - progress, 4)
      const nextValue = Math.floor(easedProgress * value)

      setCount(progress === 1 ? value : nextValue)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [started, value, duration])

  return (
    <strong className="marwann-impact-number">
      {numberFormatter.format(count)}+
    </strong>
  )
}

export default function ImpactSection() {
  const sectionRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || started) return

    if (!('IntersectionObserver' in window)) {
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [started])

  return (
    <section
      ref={sectionRef}
      id="marwann-impact-section"
      className="marwann-impact-section"
      aria-labelledby="impact-heading"
    >
      <div className="marwann-impact-container">
        {/* Section heading */}
        <div className="marwann-impact-heading">
          <div className="marwann-impact-eyebrow">
            TURNING BELIEF INTO IMPACT
          </div>

          <h2 id="impact-heading">
            Verified Scale of Grassroots Transformation
          </h2>

          <p className="marwann-impact-intro">
            A snapshot of our programmes, community reach and measurable
            charitable activities.
          </p>
        </div>

        {/* Impact statistics */}
        {IMPACT_GROUPS.map((group, groupIndex) => (
          <div
            className="marwann-impact-group"
            key={group.title}
          >
            <h3>{group.title}</h3>

            <div className="marwann-impact-grid">
              {group.stats.map((stat, statIndex) => (
                <div
                  className="marwann-impact-card"
                  key={stat.label}
                  style={{
                    '--impact-card-index':
                      groupIndex * 4 + statIndex,
                  }}
                >
                  <ImpactCounter
                    value={stat.value}
                    started={started}
                  />

                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
