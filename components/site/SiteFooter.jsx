
/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { getSettings, toTel } from '@/lib/store'
import './sitefooter.css'

function ContactIcon({ name }) {
  if (name === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.6 8 12 8 12s8-6.4 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
      </svg>
    )
  }

  if (name === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 5h20v14H2V5Zm10 8L4 7v10h16V7l-8 6Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.19 2.46.56 3.58a1 1 0 0 1-.24 1.02l-2.22 2.2Z" />
    </svg>
  )
}

export default async function SiteFooter() {
  const settings = await getSettings()

  const address =
    settings?.address ||
    'No: 19, Kullathu Medu, 2nd Street, Kamaraj Nagar, Virupachipuram, Vellore - 632 002, Tamil Nadu, India. (Near Kuppam Bus Stop)'

  const email =
    settings?.email ||
    'marwanncharitabletrust2001@gmail.com'

  const configuredPhones = Array.isArray(settings?.phones)
    ? settings.phones.filter(Boolean)
    : []

  const phones = configuredPhones.length
    ? configuredPhones
    : ['+91 95978 31666', '+91 74187 41961', '+91 80561 16777']

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Our Leadership', href: '/leadership' },
    { label: 'Our Timeline', href: '/timeline' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const workLinks = [
    { label: 'All Activities', href: '/program-areas' },
    { label: 'Education', href: '/program-areas' },
    { label: 'Healthcare', href: '/program-areas' },
    { label: 'Photo Gallery', href: '/gallery' },
    { label: 'Legal & Recognition', href: '/legal-recognition' },
  ]

  const involvementLinks = [
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/contact' },
    { label: 'Get in Touch', href: '/contact' },
  ]

  return (
    <footer className="footer-section-2">
      <div className="site-footer-container">

        {/* Main footer */}
        <div className="site-footer-grid">

          {/* Trust information */}
          <div className="site-footer-about">
            <Link href="/" className="site-footer-logo">
              <img
                src="assets/img/logo/maarwann-logo.png"
                alt="MARWANN CHARITABLE TRUST"
              />
            </Link>

            <p className="site-footer-description">
              MARWANN CHARITABLE TRUST is committed to empowering communities
              through education, healthcare and social welfare. We strive to
              create opportunities and build a more inclusive and compassionate
              society.
            </p>

            <p className="site-footer-motto">
              We Serve God by Serving Others.
            </p>
          </div>

          {/* Quick links */}
          <nav
            className="site-footer-links"
            aria-label="Quick Links"
          >
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our work */}
          <nav
            className="site-footer-links"
            aria-label="Our Work"
          >
            <h3>Our Work</h3>

            <ul>
              {workLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get involved */}
          <nav
            className="site-footer-links"
            aria-label="Get Involved"
          >
            <h3>Get Involved</h3>

            <ul>
              {involvementLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact details */}
          <div className="site-footer-contact">
            <h3>Contact Us</h3>

            <div className="get-in-touch">

              {/* Address */}
              <div className="footer-contact-item">
                <div className="footer-contact-heading">
                  <ContactIcon name="location" />
                  <h4>Our Address</h4>
                </div>

                <a
                  className="footer-contact-value"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
              </div>

              {/* Email */}
              <div className="footer-contact-item">
                <div className="footer-contact-heading">
                  <ContactIcon name="email" />
                  <h4>Email Us</h4>
                </div>

                <a
                  className="footer-contact-value"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>

              {/* Phone numbers */}
              {phones.map((phone, index) => (
                <div
                  className="footer-contact-item"
                  key={`${phone}-${index}`}
                >
                  <div className="footer-contact-heading">
                    <ContactIcon name="phone" />
                    <h4>
                      {index === 0 ? 'Phone' : 'Additional Phone'}
                    </h4>
                  </div>

                  <a
                    className="footer-contact-value"
                    href={toTel(phone)}
                  >
                    {phone}
                  </a>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-layout">

            <p className="footer-copyright">
              © {new Date().getFullYear()} MARWANN CHARITABLE TRUST.
              {' '}All Rights Reserved.
            </p>

            <nav
              className="footer-bottom-menu"
              aria-label="Legal Links"
            >
              <ul>
                <li>
                  <Link href="/terms">Terms &amp; Conditions</Link>
                </li>

                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>

                <li>
                  <Link href="/admin">Admin</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>

      </div>
    </footer>
  )
}
