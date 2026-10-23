
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const metadata = {
  title: "Our Timeline | MARWANN CHARITABLE TRUST",
  description:
    "Explore the establishment and community service activities of MARWANN CHARITABLE TRUST.",
};

const timelineActivities = [
  {
    number: "01",
    label: "26 SEP 2016",
    title: "MARWANN CHARITABLE TRUST Founded",
    description:
      "MARWANN CHARITABLE TRUST was founded on 26 September 2016 in Vellore, Tamil Nadu, under the leadership of Dr. S. Allahuddeen.",
    featured: true,
  },
  {
    number: "02",
    label: "Community Welfare",
    title: "Corona Food Distribution",
    description:
      "Food distribution to support people and families affected by the COVID-19 pandemic.",
  },
  {
    number: "03",
    label: "Health Awareness",
    title: "Nilavembu Kasayam Distribution",
    description:
      "Nilavembu Kasayam distribution activities at schools, courts and police stations.",
  },
  {
    number: "04",
    label: "Healthcare",
    title: "Polio Vaccination",
    description:
      "Polio vaccination activities to support child health and public health awareness.",
  },
  {
    number: "05",
    label: "Community Support",
    title: "Rice Bag Distribution",
    description:
      "Distribution of rice bags to provide essential food support to people and families in need.",
  },
  {
    number: "06",
    label: "Healthcare",
    title: "Eye Camps",
    description:
      "Eye camp initiatives to promote eye health awareness and access to eye care services.",
  },
  {
    number: "07",
    label: "Medical Assistance",
    title: "Medical Help",
    description:
      "Medical assistance for people facing healthcare difficulties and financial challenges.",
  },
  {
    number: "08",
    label: "Child Welfare",
    title: "Child Orphanage Support",
    description:
      "Support activities for children living in orphanages and care institutions.",
  },
  {
    number: "09",
    label: "Community Service",
    title: "Independence Day & Flood Relief",
    description:
      "Independence Day activities and flood-related relief efforts to support affected communities.",
  },
  {
    number: "10",
    label: "Elderly Care",
    title: "Old Age Home Support",
    description:
      "Welfare and support activities for senior citizens in old age homes.",
  },
  {
    number: "11",
    label: "Women Empowerment",
    title: "Tailoring Classes for Women",
    description:
      "Tailoring classes to encourage practical skills, self-reliance and livelihood opportunities for women.",
  },
  {
    number: "12",
    label: "Student Wellbeing",
    title: "Students' Yoga Event",
    description:
      "Yoga activities for students to encourage physical wellbeing and awareness of healthy habits.",
  },
];

const timelineCss = `
.timeline-page {
  color: #29443d;
}

.timeline-page .timeline-section {
  position: relative;
  background-color: #fbfcf9;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.timeline-page .subpage-intro {
  max-width: 850px;
  margin: 0 auto 50px;
}

.timeline-page .subpage-intro > p {
  color: #697771;
  font-size: 16px;
  line-height: 1.8;
}

.timeline-page .timeline-list {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  padding-left: 38px;
}

.timeline-page .timeline-list::before {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    #08776e,
    #b8d8c3,
    #08776e
  );
}

.timeline-page .timeline-entry {
  position: relative;
  padding: 0 0 30px 20px;
}

.timeline-page .timeline-entry:last-child {
  padding-bottom: 0;
}

.timeline-page .timeline-entry::before {
  content: "";
  position: absolute;
  top: 7px;
  left: -35px;
  width: 18px;
  height: 18px;
  border: 4px solid #e8f3eb;
  border-radius: 50%;
  background: #08776e;
  box-shadow: 0 0 0 2px #08776e;
}

.timeline-page .timeline-year {
  display: inline-block;
  margin-bottom: 10px;
  color: #08776e;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline-page .timeline-card {
  position: relative;
  padding: 28px 30px;
  border: 1px solid rgba(6, 79, 73, 0.12);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 12px 32px rgba(13, 48, 43, 0.05);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.timeline-page .timeline-card:hover {
  transform: translateY(-3px);
  border-color: rgba(8, 119, 110, 0.3);
  box-shadow: 0 18px 38px rgba(13, 48, 43, 0.09);
}

.timeline-page .timeline-card-featured {
  border-left: 5px solid #08776e;
  background: linear-gradient(120deg, #ffffff, #f0f8f1);
}

.timeline-page .timeline-card-top {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}

.timeline-page .timeline-number {
  display: inline-flex;
  flex: 0 0 48px;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 13px;
  background: #e8f3eb;
  color: #08776e;
  font-size: 15px;
  font-weight: 800;
}

.timeline-page .timeline-card h3 {
  margin: 0 0 10px;
  color: #073f38;
  font-size: 22px;
  font-weight: 750;
  line-height: 1.4;
}

.timeline-page .timeline-card p {
  margin: 0;
  color: #687771;
  font-size: 15px;
  line-height: 1.85;
}

.timeline-page .timeline-motto {
  max-width: 960px;
  margin: 45px auto 0;
  padding: 28px 30px;
  border-left: 5px solid #f4d44e;
  border-radius: 0 14px 14px 0;
  background: #f8f7f0;
}

.timeline-page .timeline-motto p {
  margin: 0;
  color: #064f49;
  font-size: 22px;
  font-weight: 750;
  line-height: 1.5;
}

.timeline-page .timeline-motto span {
  display: block;
  margin-top: 8px;
  color: #697771;
  font-size: 14px;
}

@media (max-width: 767.98px) {
  .timeline-page .timeline-section {
    padding-top: 65px;
    padding-bottom: 65px;
  }

  .timeline-page .subpage-intro {
    margin-bottom: 35px;
  }

  .timeline-page .timeline-list {
    padding-left: 25px;
  }

  .timeline-page .timeline-list::before {
    left: 6px;
  }

  .timeline-page .timeline-entry {
    padding-left: 14px;
    padding-bottom: 24px;
  }

  .timeline-page .timeline-entry::before {
    left: -25px;
    width: 14px;
    height: 14px;
  }

  .timeline-page .timeline-card {
    padding: 22px 18px;
  }

  .timeline-page .timeline-card-top {
    gap: 13px;
  }

  .timeline-page .timeline-number {
    flex-basis: 40px;
    width: 40px;
    height: 40px;
    font-size: 13px;
  }

  .timeline-page .timeline-card h3 {
    font-size: 19px;
  }

  .timeline-page .timeline-card p {
    font-size: 14px;
  }

  .timeline-page .timeline-motto {
    margin-top: 32px;
    padding: 22px;
  }

  .timeline-page .timeline-motto p {
    font-size: 19px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .timeline-page .timeline-card {
    transition: none;
  }

  .timeline-page .timeline-card:hover {
    transform: none;
  }
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: timelineCss }} />

      <main className="timeline-page">
        {/* Breadcrumb banner */}
        <section className="breadcrumb-section">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
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
                          Our Timeline
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
                    <h2>Our Timeline</h2>
                  </div>

                  <div className="shape-1" aria-hidden="true">
                    <img
                      src="/assets/img/shapes/shape-1.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img
                    src="/assets/img/thumbs/thumb-1.webp"
                    alt="MARWANN CHARITABLE TRUST community service"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full timeline */}
        <section
          className="timeline-section p-t-100 p-b-100 p-t-xs-80 p-b-xs-80"
          style={{
            backgroundImage:
              "url(/assets/img/bg/why-us-bg.webp), url(/assets/img/bg/who-we-are-bg.webp)",
          }}
        >
          <div className="container">
            {/* Heading */}
            <div
              className="text-center subpage-intro"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="common-subtitle">
                <img src="/assets/img/icons/icon-2.svg" alt="" />
                <span>Our Timeline</span>
              </div>

              <div className="common-title">
                <h2>Our Journey of Service</h2>
              </div>

              <p>
                From our establishment in 2016 to our community
                welfare initiatives, explore the activities
                associated with MARWANN CHARITABLE TRUST.
              </p>
            </div>

            {/* Twelve timeline milestones */}
            <div className="timeline-list">
              {timelineActivities.map((activity, index) => (
                <article
                  className="timeline-entry"
                  key={activity.number}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={Math.min((index % 3) * 100, 200)}
                >
                  <span className="timeline-year">
                    {activity.label}
                  </span>

                  <div
                    className={`timeline-card ${
                      activity.featured
                        ? "timeline-card-featured"
                        : ""
                    }`}
                  >
                    <div className="timeline-card-top">
                      <span
                        className="timeline-number"
                        aria-hidden="true"
                      >
                        {activity.number}
                      </span>

                      <div>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Guiding motto */}
            <div
              className="timeline-motto"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>“We Serve God by Serving Others.”</p>
              <span>
                MARWANN CHARITABLE TRUST — Our guiding motto
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
