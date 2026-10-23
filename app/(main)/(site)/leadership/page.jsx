
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
    name: "Dr. S. Allahuddeen",
    role: "All India Founder cum Chairman",
    initials: "SA",
    image: "/assets/img/trustees/Allahuddeen.jpeg",
  },
  {
    name: "Dr. A. Faheema Allahuddeen",
    role: "All India Secretary",
    initials: "FA",
    image: "/assets/img/trustees/Faheema.jpeg",
  },
  {
    name: "Dr. A. Sakeena Allahuddeen",
    role: "All India Treasurer",
    initials: "SA",
    image: "/assets/img/trustees/Sakeena.jpg",
  },
  {
    name: "Mr. Kamalesh Kumar",
    role: "All India MCT Trustee, Legal Advisor",
    initials: "KK",
    image: "/assets/img/trustees/kamalesh.jpg",
  },
];

export default function Page() {
  return (
    <main className="leadership-page">
      {/* Leadership Hero / Breadcrumb Banner */}
      <section className="breadcrumb-section">
        <div className="container-fluid leadership-hero-container">
          <div className="row g-0 leadership-hero-row">
            {/* Left: Green panel */}
            <div className="col-xl-6 col-lg-6 leadership-hero-left">
              <div
                className="breadcrumb-content"
                style={{
                  backgroundImage:
                    "url(/assets/img/bg/breadcrumb-bg.webp)",
                }}
              >
                <div
                  className="breadcrumb-nav"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
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
                </div>

                <div
                  className="breadcrumb-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <h1>Leadership</h1>
                </div>

                <div className="shape-1" aria-hidden="true">
                  <img
                    src="/assets/img/shapes/shape-1.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Right: Community photograph */}
            <div className="col-xl-6 col-lg-6 leadership-hero-right">
              <div className="breadcrumb-thumb">
                <img
                  src="/assets/img/thumbs/thumb-1.webp"
                  alt="MARWANN CHARITABLE TRUST community activities"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership heading and trustee cards */}
     

      {/* Founder profile */}
      <section className="leadership-founder-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div
              className="col-xl-4 col-lg-5 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="trustee-founder-photo">
                <img
                  src="/assets/img/trustees/Allahuddeen.jpeg"
                  alt="Dr. S. Allahuddeen, Founder and Chairman"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className="col-xl-8 col-lg-7 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="common-subtitle">
                <img
                  src="/assets/img/icons/icon-2.svg"
                  alt=""
                />
                <span>Founder Profile</span>
              </div>

              <div className="common-title text-start">
                <h2>Dr. S. Allahuddeen</h2>
              </div>

              <div className="leadership-founder-text">
                <p>
                  Dr. S. Allahuddeen is the founder and
                  All-India Chairman of MARWANN CHARITABLE
                  TRUST, based in Vellore, Tamil Nadu.
                  The Trust was founded on 26 September 2016.
                </p>

                <p>
                  The Trust&apos;s activities include
                  community support, healthcare assistance,
                  education-related initiatives, women&apos;s
                  empowerment programmes and emergency
                  relief activities.
                </p>
              </div>

              <Link
                href="/our-story"
                className="leadership-story-button"
              >
                <span>We Serve God by Serving Others.</span>

                <span className="leadership-story-arrow">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

 <section
        className="leadership-trustees-section"
        style={{
          backgroundImage:
            "url(/assets/img/bg/why-us-bg.webp), url(/assets/img/bg/who-we-are-bg.webp)",
        }}
      >
        <div className="container">
          <div
            className="leadership-intro"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="common-subtitle">
              <img
                src="/assets/img/icons/icon-2.svg"
                alt=""
              />
              <span>Leadership</span>
            </div>

            <div className="common-title">
              <h2>Trustees of MARWANN CHARITABLE TRUST</h2>
            </div>

            <p>
              The Trust&apos;s leadership team includes its
              founder and trustees, serving in the roles
              listed below.
            </p>
          </div>

          <div className="leadership-trustee-grid">
            {trustees.map((trustee, index) => (
              <article
                className="trustee-profile"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                key={trustee.name}
              >
                <div className="trustee-photo">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    loading="lazy"
                  />
                </div>

                <h3>{trustee.name}</h3>
                <p>{trustee.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust motto */}
      <section className="leadership-motto-section">
        <div className="container">
          <div className="quote-panel">
            <p>
              &ldquo;We Serve God by Serving Others.&rdquo;
            </p>
            <span>The Trust&apos;s guiding motto</span>
          </div>
        </div>
      </section>
    </main>
  );
}
