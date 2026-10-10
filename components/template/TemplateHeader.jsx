'use client'

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navClass } from '@/lib/nav'
export default function TemplateHeader() {
  const pathname = usePathname()
  return (
    <>
      <header className="header-section">
        <div className="top-bar d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="top-bar-content text-center">
                  <div className="text-wrap">
                    <img alt="icon" src="/assets/img/icons/calendar-time.svg" />
                    {" "}
                    <span>Join Our Event (28 Nov, 2024) New Market, California.</span>
                  </div>
                  <Link className="e-primary-btn is-hover-white top-btn" href="/donations">Donate Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="header-bottom-layout">
                  <div className="header-left">
                    <div className="logo-wrap">
                      <Link href="/">
                        <img alt="logo" src="/assets/img/logo/logo.svg" />
                      </Link>
                    </div>
                    <nav className="main-menu d-none d-xl-block">
                      <ul>
                        <li className={navClass("has-dropdown", pathname, ["/"])}>
                          <a href="#">Home</a>
                          <ul className="sub-menu">
                            <li className={navClass("", pathname, ["/"])}>
                              <Link href="/">Home 01</Link>
                            </li>
                            <li className={navClass("", pathname, ["/"])}>
                              <Link href="/">Home 02</Link>
                            </li>
                            <li className={navClass("", pathname, ["/"])}>
                              <Link href="/">Home 03</Link>
                            </li>
                            <li className={navClass("", pathname, ["/"])}>
                              <Link href="/">Home 04</Link>
                            </li>
                            <li className={navClass("", pathname, ["/"])}>
                              <Link href="/">Home 05</Link>
                            </li>
                          </ul>
                        </li>
                        <li className={navClass("", pathname, ["/about"])}>
                          <Link href="/about">Who we are?</Link>
                        </li>
                        <li className={navClass("", pathname, ["/services"])}>
                          <Link href="/services">Services</Link>
                        </li>
                        <li className={navClass("has-dropdown", pathname, ["/be-volunteer", "/camping", "/camping-details", "/camping-donation", "/donations", "/project", "/project-details", "/services-details", "/volunteer", "/volunteer-details"])}>
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li className={navClass("", pathname, ["/services-details"])}>
                              <Link href="/services-details">Services Details</Link>
                            </li>
                            <li className={navClass("", pathname, ["/project"])}>
                              <Link href="/project">Projects</Link>
                            </li>
                            <li className={navClass("", pathname, ["/project-details"])}>
                              <Link href="/project-details">Project Details</Link>
                            </li>
                            <li className={navClass("", pathname, ["/camping"])}>
                              <Link href="/camping">Camping</Link>
                            </li>
                            <li className={navClass("", pathname, ["/camping-details"])}>
                              <Link href="/camping-details">Camping Details</Link>
                            </li>
                            <li className={navClass("", pathname, ["/camping-donation"])}>
                              <Link href="/camping-donation">Camping Donation</Link>
                            </li>
                            <li className={navClass("", pathname, ["/donations"])}>
                              <Link href="/donations">Donation</Link>
                            </li>
                            <li className={navClass("", pathname, ["/be-volunteer"])}>
                              <Link href="/be-volunteer">Become a Volunteer</Link>
                            </li>
                            <li className={navClass("", pathname, ["/volunteer"])}>
                              <Link href="/volunteer">Volunteers</Link>
                            </li>
                            <li className={navClass("", pathname, ["/volunteer-details"])}>
                              <Link href="/volunteer-details">Volunteer Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className={navClass("has-dropdown", pathname, ["/blog-details", "/blog-grid", "/blog-standard"])}>
                          <a href="#">Blog</a>
                          <ul className="sub-menu">
                            <li className={navClass("", pathname, ["/blog-grid"])}>
                              <Link href="/blog-grid">Blog Grid</Link>
                            </li>
                            <li className={navClass("", pathname, ["/blog-standard"])}>
                              <Link href="/blog-standard">Blog Standard</Link>
                            </li>
                            <li className={navClass("", pathname, ["/blog-details"])}>
                              <Link href="/blog-details">Blog Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className={navClass("", pathname, ["/contact"])}>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right">
                    <div className="header-info d-none d-xl-flex">
                      <div className="header-info-icon">
                        <i className="fa-regular fa-phone-volume"></i>
                      </div>
                      <div className="header-info-content">
                        <span>Contact Us!</span>
                        <p>
                          <a href="tel:+1629555-0129">+1 (629) 555-0129</a>
                        </p>
                      </div>
                    </div>
                    <div className="header-btn-wrap d-none d-xl-flex">
                      <Link className="e-primary-btn has-icon" href="/services">
                        Explore More
                        {" "}
                        <span className="icon-wrap">
                          <span className="icon">
                            <i className="fa-regular fa-arrow-right"></i>
                            {" "}
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="header-bar open-sidebar d-none d-xl-flex" data-toggle="sidebar">
                      <div className="bar bar-1"></div>
                      <div className="bar bar-2"></div>
                      <div className="bar bar-3"></div>
                    </div>
                    <div className="header-bar open-mobile-menu d-xl-none" data-toggle="menubar">
                      <div className="bar bar-1"></div>
                      <div className="bar bar-2"></div>
                      <div className="bar bar-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="off-canvas-sidebar">
        <div className="off-canvas-sidebar-body">
          <div className="off-canvas-sidebar-close" data-close="sidebar">
            <i className="fa-regular fa-xmark"></i>
          </div>
          <div className="off-canvas-logo m-b-20">
            <Link href="/">
              <img src="/assets/img/logo/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="off-canvas-text m-b-30">
            <p>
              Ratione doloribus optio minus cum ab. Nostrum rerum minus sapiente eveniet fuga quos tenetur Bicycle rights taxidermy knausgaard, 3 wolf moon schlitz kombucha freegan ugh ethical kogi Déjà en recherche de nouvelle inspiration pour la prochaine collection, qui sera toujours inspirée de ses origines suisses de son savoir-faire an nouveau matériel arrive!
            </p>
          </div>
          <div className="off-canvas-thumb m-b-40">
            <img src="/assets/img/thumbs/thumb-3.webp" alt="thumb" />
          </div>
          <div className="off-canvas-contact m-b-40">
            <div className="off-canvas-contact-item">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h6>Address</h6>
                <p>Jones Street, New York, USA</p>
              </div>
            </div>
            <a href="mailto:support@example.com" className="off-canvas-contact-item">
              <div className="icon">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <div className="text">
                <h6>Email</h6>
                <p>Support@example.com</p>
              </div>
            </a>
            {" "}
            <a href="tel:+70264566579" className="off-canvas-contact-item">
              <div className="icon">
                <i className="fa-solid fa-phone-arrow-up-right"></i>
              </div>
              <div className="text">
                <h6>Phone</h6>
                <p>+70 264 566 579</p>
              </div>
            </a>
          </div>
          <div className="off-canvas-social-links">
            <a href="https://facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
            {" "}
            <a href="https://twitter.com/">
              <i className="fab fa-x-twitter"></i>
            </a>
            {" "}
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            {" "}
            <a href="https://linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="off-canvas-sidebar-overlay" data-close="sidebar"></div>
      </div>
      <div className="off-canvas-menubar">
        <div className="off-canvas-menubar-body">
          <div className="off-canvas-head">
            <div className="off-canvas-logo">
              <Link href="/">
                <img src="/assets/img/logo/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="off-canvas-menubar-close" data-close="menubar">
              <i className="fa-regular fa-xmark"></i>
            </div>
          </div>
          <div className="off-canvas-menu">
            <ul>
              <li className="has-dropdown">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <Link href="/">Home 01</Link>
                  </li>
                  <li>
                    <Link href="/">Home 02</Link>
                  </li>
                  <li>
                    <Link href="/">Home 03</Link>
                  </li>
                  <li>
                    <Link href="/">Home 04</Link>
                  </li>
                  <li>
                    <Link href="/">Home 05</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about">Who we are?</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li className="has-dropdown">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <Link href="/services-details">Services Details</Link>
                  </li>
                  <li>
                    <Link href="/project">Projects</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Project Details</Link>
                  </li>
                  <li>
                    <Link href="/camping">Camping</Link>
                  </li>
                  <li>
                    <Link href="/camping-details">Camping Details</Link>
                  </li>
                  <li>
                    <Link href="/camping-donation">Camping Donation</Link>
                  </li>
                  <li>
                    <Link href="/donations">Donation</Link>
                  </li>
                  <li>
                    <Link href="/be-volunteer">Become a Volunteer</Link>
                  </li>
                  <li>
                    <Link href="/volunteer">Volunteers</Link>
                  </li>
                  <li>
                    <Link href="/volunteer-details">Volunteer Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <Link href="/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link href="/blog-standard">Blog Standard</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="off-canvas-menubar-overlay" data-close="menubar"></div>
      </div>
    </>
  )
}
