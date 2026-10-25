
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import "./leadership.css";

export const metadata = {
  title: "Leadership | MARWANN CHARITABLE TRUST",
  description:
    "Meet the founder and trustees of MARWANN CHARITABLE TRUST.",
};

const trustees = [
  {
    name: "Dr. A. Faheema Allahuddeen",
    displayName: "Samuga Rathna",
    role: "Dr. A.FAHEEMA ALLAHUDDEEN is the All India Secretary of MARWANN CHARITABLE TRUST",
    image: "/assets/img/trustees/Faheema.jpeg",
  },
  {
    name: "Dr. A. Sakeena Allahuddeen",
    displayName: "Samuga Chemmal",
    role: "Dr. A.SAKEENA ALLAHUDDEEN is the All India Treasurer of MARWANN CHARITABLE TRUST",
    image: "/assets/img/trustees/Sakeena.jpg",
  },
  {
    name: "Mr. Kamalesh Kumar",
    displayName: "Mr. Kamalesh Kumar",
    role: "Mr. KAMALESH KUMAR  is the All India Trustee, Legal Advisor of MARWANN CHARITABLE TRUST",
    image: "/assets/img/trustees/kamalesh.jpg",
  },
];

function ProfileImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}

export default function Page() {
  return (
    <main className="leadership-page">
      {/* HERO BANNER */}
      <section className="breadcrumb-section">
        <div className="container-fluid leadership-hero-container">
          <div className="row g-0 leadership-hero-row">
            <div className="col-xl-6 col-lg-6 leadership-hero-left">
              <div
                className="breadcrumb-content"
                style={{
                  backgroundImage:
                    "url(/assets/img/bg/breadcrumb-bg.webp)",
                }}
              >
                <nav
                  className="breadcrumb-nav"
                  aria-label="Breadcrumb"
                >
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <span aria-current="page">
                        Leadership
                      </span>
                    </li>
                  </ul>
                </nav>

                <div className="breadcrumb-title">
                  <h1>Leadership</h1>
                  <p>
                    Meet the people dedicated to serving our
                    community.
                  </p>
                </div>

                <div
                  className="shape-1"
                  aria-hidden="true"
                >
                  <img
                    src="/assets/img/shapes/shape-1.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 leadership-hero-right">
              <div className="breadcrumb-thumb">
                <ProfileImage
                  src="/assets/img/thumbs/thumb-15-b.webp"
                  alt="MARWANN CHARITABLE TRUST community activities"
                  className="leadership-hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP INTRODUCTION */}
      <section className="leadership-intro-section">
        <div className="container">
          <div className="leadership-intro">
            <div className="common-subtitle">
              <img
                src="/assets/img/icons/icon-2.svg"
                alt=""
              />
              <span>Our Leadership</span>
            </div>

            <div className="common-title">
              <h2>
                Trustees of MARWANN CHARITABLE TRUST
              </h2>
            </div>

            <p>
              Our founder and trustees work together to support
              charitable initiatives, improve lives, and serve
              people in need.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="leadership-founder-section">
        <div className="container">
          <article className="row align-items-center g-4 leadership-profile-row">
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="trustee-founder-photo">
                <ProfileImage
                  src="/assets/img/trustees/Allahuddeen.jpeg"
                  alt="Samuga Sastha Dr. S. Allahuddeen, Founder and Chairman"
                  className="leadership-founder-image"
                />
              </div>
            </div>

            <div className="col-xl-8 col-lg-7 col-md-7">
              <div className="common-subtitle">
                <img
                  src="/assets/img/icons/icon-2.svg"
                  alt=""
                />
                <span>Founder Profile</span>
              </div>

              <div className="common-title text-start">
                <h2>
                  Samuga Sastha Dr. S. Allahuddeen
                </h2>
              </div>

              <p className="leadership-founder-role">
                All India Founder cum Chairman
              </p>

              <div className="leadership-founder-text">
                <p>
                  Dr. S. Allahuddeen is the founder and
                  All-India Chairman of MARWANN CHARITABLE
                  TRUST, based in Vellore, Tamil Nadu.
                  The Trust was founded on 26 September 2016.
                </p>

                <p>
                  The Trust&apos;s activities include community
                  support, healthcare assistance, education-related
                  initiatives, women&apos;s empowerment programmes,
                  and emergency relief activities.
                </p>
              </div>

              <Link
                href="/our-story"
                className="leadership-story-button"
              >
                <span>
                  We Serve God by Serving Others.
                </span>

                <span
                  className="leadership-story-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* TRUSTEES — SAME LAYOUT AS FOUNDER */}
      <section
        className="leadership-trustees-section"
        style={{
          backgroundImage:
            "url(/assets/img/bg/why-us-bg.webp), url(/assets/img/bg/who-we-are-bg.webp)",
        }}
      >
        <div className="container">
          <header className="leadership-trustees-heading">
            <div className="common-subtitle">
             
           
            </div>

           

            
          </header>

          <div className="leadership-trustees-list">
            {trustees.map((trustee, index) => (
              <article
                className="row align-items-center g-4 leadership-profile-row leadership-trustee-row"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={trustee.name}
              >
                {/* LEFT: LARGE TRUSTEE PHOTO */}
                <div className="col-xl-4 col-lg-5 col-md-5">
                  <div className="trustee-founder-photo trustee-list-photo">
                    <ProfileImage
                      src={trustee.image}
                      alt={trustee.name}
                      className="leadership-trustee-profile-image"
                    />
                  </div>
                </div>

                {/* RIGHT: TRUSTEE DETAILS */}
                <div className="col-xl-8 col-lg-7 col-md-7">
                  <div className="common-subtitle">
                   
                   
                  </div>

                  <div className="common-title text-start">
                    <h2>{trustee.displayName}</h2>
                  </div>

                  <h3 className="leadership-trustee-name">
                    {trustee.name}
                  </h3>

                  <p className="leadership-founder-role">
                    {trustee.role}
                  </p>

              
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST MOTTO */}
      <section className="leadership-motto-section">
        <div className="container">
          <div className="quote-panel">
            <p>
              &ldquo;We Serve God by Serving Others.&rdquo;
            </p>
            <span>
              The Trust&apos;s guiding motto
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
