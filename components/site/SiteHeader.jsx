
"use client";

import Link from "next/link";
import { useState } from "react";
import "./SiteHeader.css";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/our-story" },
      { label: "Leadership", href: "/leadership" },
      { label: "Our Timeline", href: "/timeline" },
      { label: "Legal & Recognition", href: "/legal-recognition" },
    ],
  },
  {
    label: "Work",
    href: "/program-areas",
    children: [
      { label: "Program Areas", href: "/program-areas" },
      { label: "Active Campaigns", href: "/program-areas" },
      { label: "Photo Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Engage",
    href: "/donate",
    children: [
      { label: "Donate", href: "/donate" },
      { label: "Crowdfunding", href: "/donate" },
      { label: "Volunteer", href: "/contact" },
      { label: "Events", href: "/program-areas" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function MenuIcon({ open }) {
  return (
    <span
      className={`mct-menu-icon${open ? " is-open" : ""}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </span>
  );
}

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState("");

  function closeMenu() {
    setMobileMenuOpen(false);
    setExpandedMenu("");
  }

  function toggleSubmenu(label) {
    setExpandedMenu((current) => (current === label ? "" : label));
  }

  return (
    <>
      <div className="mct-announcement">
        <div className="mct-announcement-inner">
          <p>
            <span aria-hidden="true">▦</span>
            Empowering Communities Through Education, Healthcare &amp; Social
            Welfare.
          </p>

          <Link href="/donate" className="mct-announcement-donate">
            Donate Now
          </Link>
        </div>
      </div>

      <header className="mct-site-header">
        <div className="mct-header-inner">
          <Link
            href="/"
            className="mct-brand"
            aria-label="MARWANN CHARITABLE TRUST home"
            onClick={closeMenu}
          >
            <img
              src="/assets/img/logo/logo.png"
              alt="MARWANN CHARITABLE TRUST"
            />
          </Link>

          <nav className="mct-desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div
                className={`mct-nav-item${
                  item.children ? " has-dropdown" : ""
                }`}
                key={item.label}
              >
                <Link
                  href={item.href}
                  className={`mct-nav-link${
                    item.label === "Home" ? " is-home" : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <span className="mct-dropdown-arrow" aria-hidden="true">
                      ▾
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="mct-dropdown">
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.label}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mct-header-actions">
            <a href="tel:+919597831666" className="mct-contact-shortcut">
              <span className="mct-contact-icon" aria-hidden="true">
                ☎
              </span>

              <span className="mct-contact-text">
                <small>Contact Us!</small>
                <strong>Get in Touch</strong>
              </span>
            </a>

            <Link href="/donate" className="mct-header-donate">
              <span>Donate Now</span>
              <span className="mct-donate-arrow" aria-hidden="true">
                →
              </span>
            </Link>

            <button
              type="button"
              className="mct-mobile-menu-button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mct-mobile-navigation"
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>

        <div
          className={`mct-mobile-nav${
            mobileMenuOpen ? " is-open" : ""
          }`}
          id="mct-mobile-navigation"
          aria-hidden={!mobileMenuOpen}
        >
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <div className="mct-mobile-nav-item" key={item.label}>
                <div className="mct-mobile-nav-row">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      className="mct-submenu-toggle"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expandedMenu === item.label}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                      onClick={() => toggleSubmenu(item.label)}
                    >
                      {expandedMenu === item.label ? "−" : "+"}
                    </button>
                  )}
                </div>

                {item.children && expandedMenu === item.label && (
                  <div className="mct-mobile-submenu">
                    {item.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.label}
                        onClick={closeMenu}
                        tabIndex={mobileMenuOpen ? 0 : -1}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/donate"
              className="mct-mobile-donate"
              onClick={closeMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Donate Now →
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
