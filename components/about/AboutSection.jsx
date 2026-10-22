
'use client'

import Link from 'next/link'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section
      className="why-us-section-6 p-t-100 p-b-100 p-t-xs-80 p-b-xs-80"
      style={{
        backgroundImage:
          'url(/assets/img/bg/why-us-bg.webp), url(/assets/img/bg/who-we-are-bg.webp)',
      }}
    >
      <div className="container">
        <div className="row align-items-center row-gap-5">

          {/* LEFT SIDE — INTERACTIVE GREEN BLOCK */}
          <div className="col-xl-5 col-lg-5">
            <div className="mct-about-feature">
              <div className="mct-about-card">

                {/* Default content */}
                <div className="mct-about-default">
                  <img
                    className="mct-about-logo"
                    src="/assets/img/logo/logo-2.png"
                    alt="MARWANN Charitable Trust logo"
                  />

                  

                  <h2>About the Trust</h2>


              
                </div>

                {/* Revealed when hovering over the green block */}
                <div className="mct-about-reveal">
                  <span className="mct-about-label">
                    OUR PURPOSE
                  </span>

                  <h2>Serving Humanity with Compassion</h2>

                  <p>
                    Guided by our motto, “We Serve God by Serving
                    Others,” we aim to empower communities and
                    uphold the dignity of every individual.
                  </p>

                  <div className="mct-about-reveal-links">
                    <Link href="/our-story">
                      <i
                        className="fa-solid fa-heart"
                        aria-hidden="true"
                      />
                      <span>Our Vision &amp; Goals</span>
                      <i
                        className="fa-solid fa-arrow-right"
                        aria-hidden="true"
                      />
                    </Link>

                    <Link href="/get-involved">
                      <i
                        className="fa-solid fa-hands-helping"
                        aria-hidden="true"
                      />
                      <span>Opportunities</span>
                      <i
                        className="fa-solid fa-arrow-right"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>

                  <div className="mct-about-actions">
                    <Link
                      href="/get-involved"
                      className="mct-about-btn mct-about-btn-light"
                    >
                      Join Us
                      <i
                        className="fa-solid fa-arrow-right"
                        aria-hidden="true"
                      />
                    </Link>

                    <Link
                      href="/contact"
                      className="mct-about-btn mct-about-btn-outline"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE — ORIGINAL CONTENT PRESERVED */}
          <div className="col-xl-7 col-lg-7">
            <div
              className="why-us-content"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div className="common-subtitle">
                <span>Who We Are</span>
              </div>

              <div className="common-title text-start">
                <h2>MARWANN CHARITABLE TRUST</h2>
              </div>

              <div className="text">
                <p>
                  MARWANN CHARITABLE TRUST is a non-profit
                  charitable organization committed to serving
                  humanity with compassion, integrity and
                  dedication. Guided by the belief that{' '}
                  <strong>
                    “We Serve God by Serving Others,”
                  </strong>{' '}
                  the Trust works to uplift underprivileged
                  individuals and communities through social,
                  educational, healthcare and humanitarian
                  initiatives.
                </p>

                <p>
                  The Trust provides educational support for
                  deserving students, medical assistance for
                  people in need, food and essential supplies
                  for economically disadvantaged families, and
                  relief during emergencies and natural
                  disasters. It also works to empower women,
                  promote skill development, support senior
                  citizens, assist persons with disabilities
                  and create opportunities for dignified,
                  self-reliant living.
                </p>

                <p>
                  By collaborating with volunteers, donors,
                  institutions and community leaders, the Trust
                  aims to build a society founded on equality,
                  compassion, justice and hope. Its commitment
                  is to serve without discrimination and to
                  respect the dignity of every individual,
                  regardless of religion, caste, gender or
                  background.
                </p>
              </div>

              <div className="about-motto">
                <p>“We Serve God by Serving Others”</p>
                <span>Our guiding motto</span>
              </div>

              <div className="annual-donation-wrap m-t-30">
                <div className="blog-btn">
                  <Link
                    href="/our-story"
                    className="e-primary-btn has-icon"
                  >
                    Discover Our Story

                    <span className="icon-wrap">
                      <span className="icon">
                        <i
                          className="fa-regular fa-arrow-right"
                          aria-hidden="true"
                        />
                        <i
                          className="fa-regular fa-arrow-right"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="annual-donation">
                  <img
                    src="/assets/img/icons/icon-4.svg"
                    alt=""
                  />

                  <div className="annual-text">
                    <p>Established</p>
                    <h5>2016</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
