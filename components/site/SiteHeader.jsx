
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './SiteHeader.css'

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'ml', label: 'മലയാളം (Malayalam)' },
  { code: 'te', label: 'తెలుగు (Telugu)' },
  { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
]

function getCurrentLanguage() {
  if (typeof document === 'undefined') return 'en'

  const match = document.cookie.match(
    /(?:^|;\s*)googtrans=\/[^/]+\/([a-z-]+)/i
  )

  const code = match?.[1]?.toLowerCase()

  return LANGS.some((lang) => lang.code === code) ? code : 'en'
}

function setLanguage(code) {
  const host = window.location.hostname
  const expire = 'Thu, 01 Jan 1970 00:00:00 GMT'

  const clearCookie = (domain) => {
    document.cookie = `googtrans=; expires=${expire}; path=/${
      domain ? `; domain=${domain}` : ''
    }`
  }

  clearCookie()
  clearCookie(host)

  if (code !== 'en') {
    const value = `/en/${code}`

    document.cookie = `googtrans=${value}; path=/; SameSite=Lax`

    if (host.includes('.')) {
      document.cookie = `googtrans=${value}; path=/; domain=${host}; SameSite=Lax`
    }
  }

  window.location.reload()
}

function LanguageSwitcher() {
  const [current, setCurrent] = useState('en')

  useEffect(() => {
    setCurrent(getCurrentLanguage())

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return

      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ta,ml,te,kn,hi',
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')

      script.id = 'google-translate-script'
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true

      document.body.appendChild(script)
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit?.()
    }
  }, [])

  return (
    <div className="mct-language notranslate" translate="no">
      <span className="mct-language-globe" aria-hidden="true">
        ◎
      </span>

      <label className="mct-sr-only" htmlFor="mct-language-select">
        Select language
      </label>

      <select
        id="mct-language-select"
        value={current}
        onChange={(event) => setLanguage(event.target.value)}
        aria-label="Select website language"
      >
        {LANGS.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      <div
        id="google_translate_element"
        className="mct-google-translate"
      />
    </div>
  )
}

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    active: true,
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About the Trust', href: '/about' },
      { label: 'our-story', href: '/Our Story' },
      { label: 'Founder Profile', href: '/founder' },
      { label: 'Trustees', href: '/trustees' },
    ],
  },
  {
    label: 'Our Work',
    href: '/our-work',
    children: [
      { label: 'Education', href: '/our-work/education' },
      { label: 'Healthcare', href: '/our-work/healthcare' },
      {
        label: 'Community Support',
        href: '/our-work/community-support',
      },
    ],
  },
  {
    label: 'Impact',
    href: '/impact',
    children: [
      { label: 'Our Impact', href: '/impact' },
      { label: 'Reports', href: '/reports' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      {
        label: 'Partner With Us',
        href: '/get-involved/partners',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

function ChevronIcon() {
  return (
    <svg
      className="mct-chevron"
      viewBox="0 0 12 8"
      aria-hidden="true"
    >
      <path d="m1.5 1.5 4.5 4.5 4.5-4.5" />
    </svg>
  )
}

export default function SiteHeader({
  logoSrc = '/assets/img/logo/maarwann-logo.png',
  donateHref = '/donate',
  signInHref = '/admin/login',
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)

  useEffect(() => {
    if (!mobileOpen) {
      setExpandedMobile(null)
    }
  }, [mobileOpen])

  return (
    <>
      {/* Top announcement bar */}
      <div className="mct-announcement">
        <div className="mct-announcement-inner">
          <p className="mct-announcement-message">
            <span
              className="mct-book-icon"
              aria-hidden="true"
            >
              ♧
            </span>

            <span>
              Empowering Communities Through{' '}
              <strong>
                Education, Healthcare &amp; Social Welfare.
              </strong>
            </span>
          </p>

          <Link
            className="mct-announcement-donate"
            href={donateHref}
          >
            <span aria-hidden="true">♥</span>
            Donate Now
          </Link>

          <LanguageSwitcher />
        </div>
      </div>

      {/* Main navigation */}
      <header className="mct-site-header">
        <div className="mct-header-inner">
          {/* Logo */}
          <Link
            href="/"
            className="mct-brand"
            aria-label="Maarwann Charitable Trust home"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src={logoSrc}
              alt="Maarwann Charitable Trust"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            className="mct-desktop-nav"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <div
                className="mct-nav-item"
                key={item.label}
              >
                <Link
                  className={`mct-nav-link${
                    item.active ? ' is-home' : ''
                  }`}
                  href={item.href}
                >
                  <span>{item.label}</span>

                  {item.children && <ChevronIcon />}
                </Link>

                {item.children && (
                  <div className="mct-dropdown">
                    {item.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.href}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Header actions */}
          <div className="mct-header-actions">
            <Link
              className="mct-signin"
              href={signInHref}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8v-1.2A5.8 5.8 0 0 1 10.8 13h2.4A5.8 5.8 0 0 1 19 18.8V20H5Z" />
              </svg>

              <span>Sign In</span>
            </Link>

            <Link
              className="mct-header-donate"
              href={donateHref}
            >
              <span>Donate Now</span>

              <span
                className="mct-donate-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="mct-mobile-menu-button"
              type="button"
              aria-label={
                mobileOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileOpen}
              aria-controls="mct-mobile-nav"
              onClick={() =>
                setMobileOpen((open) => !open)
              }
            >
              <span
                className={`mct-menu-icon${
                  mobileOpen ? ' is-open' : ''
                }`}
              >
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>

          {/* Mobile navigation */}
          <nav
            id="mct-mobile-nav"
            className={`mct-mobile-nav${
              mobileOpen ? ' is-open' : ''
            }`}
            aria-label="Mobile navigation"
            aria-hidden={!mobileOpen}
          >
            {NAV_ITEMS.map((item) => (
              <div
                className="mct-mobile-nav-item"
                key={item.label}
              >
                <div className="mct-mobile-nav-row">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      className="mct-submenu-toggle"
                      aria-label={`${
                        expandedMobile === item.label
                          ? 'Collapse'
                          : 'Expand'
                      } ${item.label} submenu`}
                      aria-expanded={
                        expandedMobile === item.label
                      }
                      onClick={() =>
                        setExpandedMobile((current) =>
                          current === item.label
                            ? null
                            : item.label
                        )
                      }
                    >
                      {expandedMobile === item.label
                        ? '−'
                        : '+'}
                    </button>
                  )}
                </div>

                {item.children &&
                  expandedMobile === item.label && (
                    <div className="mct-mobile-submenu">
                      {item.children.map((child) => (
                        <Link
                          href={child.href}
                          key={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <Link
              className="mct-mobile-signin"
              href={signInHref}
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>

            <Link
              className="mct-mobile-donate"
              href={donateHref}
              onClick={() => setMobileOpen(false)}
            >
              Donate Now →
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
