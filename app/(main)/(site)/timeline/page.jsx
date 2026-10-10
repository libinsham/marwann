
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const metadata = {
  title: "Our Timeline | MARWANN CHARITABLE TRUST",
  description:
    "Explore the establishment and documented activity history of MARWANN CHARITABLE TRUST.",
};

const css0 = `
.about-intro-visual {
  min-height: 470px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  padding: 36px;
  background:
    radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),
    linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);
}
.about-intro-visual:before,
.about-intro-visual:after {
  content: "";
  position: absolute;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 50%;
  pointer-events: none;
}
.about-intro-visual:before {
  width: 360px;
  height: 360px;
  top: -110px;
  right: -95px;
}
.about-intro-visual:after {
  width: 250px;
  height: 250px;
  top: -55px;
  right: -40px;
}
.about-visual-icon {
  position: absolute;
  top: 45px;
  left: 42px;
  width: 86px;
  height: 86px;
  display: grid;
  place-items: center;
  color: #0a544f;
  background: #f7d95d;
  border-radius: 50%;
  font-size: 34px;
  box-shadow: 0 12px 30px rgba(0,0,0,.15);
}
.about-visual-copy {
  position: relative;
  z-index: 1;
  max-width: 360px;
  color: #fff;
}
.about-visual-copy .since {
  display: inline-block;
  color: #f7d95d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.about-visual-copy h3 {
  color: #fff;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.15;
  margin: 0 0 14px;
}
.about-visual-copy p {
  color: rgba(255,255,255,.82);
  margin: 0;
}
.about-motto {
  border-left: 4px solid #f4d44e;
  background: #f8f7f0;
  padding: 20px 24px;
  border-radius: 0 12px 12px 0;
  margin-top: 26px;
}
.about-motto p {
  margin: 0;
  font-weight: 700;
  color: #064f49;
  font-size: 18px;
}
.about-motto span {
  display: block;
  color: #69716f;
  font-size: 13px;
  margin-top: 5px;
}
.about-purpose-card {
  height: 100%;
  padding: 34px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(6,79,73,.10);
  box-shadow: 0 12px 35px rgba(13,48,43,.06);
}
.about-purpose-card .purpose-icon {
  display: inline-grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #f8f3d8;
  color: #075d56;
  font-size: 23px;
  margin-bottom: 20px;
}
.about-purpose-card h3 {
  margin-bottom: 14px;
}
.about-purpose-card p {
  margin-bottom: 0;
}
.about-mission-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
}
.about-mission-list li {
  position: relative;
  padding: 0 0 12px 27px;
  color: #555f5d;
}
.about-mission-list li:last-child {
  padding-bottom: 0;
}
.about-mission-list li i {
  position: absolute;
  left: 0;
  top: 5px;
  color: #08776e;
}
.about-value-card {
  height: 100%;
  padding: 24px;
  background: #fff;
  border: 1px solid rgba(6,79,73,.10);
  border-radius: 14px;
  transition: transform .25s ease, box-shadow .25s ease;
}
.about-value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(13,48,43,.08);
}
.about-value-card .value-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  background: #f8f3d8;
  color: #075d56;
  border-radius: 50%;
  margin-bottom: 15px;
  font-size: 20px;
}
.about-value-card h5 {
  margin-bottom: 8px;
}
.about-value-card p {
  color: #69716f;
  margin: 0;
  font-size: 14px;
}
.about-founder-panel {
  padding: 38px;
  background: #073f3b;
  border-radius: 18px;
  color: #fff;
}
.about-founder-panel h3,
.about-founder-panel h5 {
  color: #fff;
}
.about-founder-panel p {
  color: rgba(255,255,255,.82);
}
.about-founder-mark {
  width: 86px;
  height: 86px;
  display: grid;
  place-items: center;
  background: #f7d95d;
  color: #064f49;
  border-radius: 50%;
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
}
.trustee-card {
  height: 100%;
  padding: 25px 20px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(6,79,73,.10);
  text-align: center;
}
.trustee-initial {
  width: 58px;
  height: 58px;
  margin: 0 auto 14px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e8f1ef;
  color: #075d56;
  font-weight: 800;
  font-size: 17px;
}
.trustee-card h5 {
  margin-bottom: 5px;
  font-size: 16px;
}
.trustee-card p {
  margin: 0;
  color: #69716f;
  font-size: 13px;
}
@media (max-width: 767.98px) {
  .about-intro-visual {
    min-height: 330px;
    padding: 25px;
  }
  .about-visual-icon {
    top: 28px;
    left: 28px;
    width: 68px;
    height: 68px;
    font-size: 27px;
  }
  .about-purpose-card,
  .about-founder-panel {
    padding: 26px;
  }
}
`;

const css1 = `
.subpage-intro {
  max-width: 850px;
  margin: 0 auto;
}
.subpage-panel {
  height: 100%;
  padding: 30px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(6,79,73,.10);
  box-shadow: 0 12px 35px rgba(13,48,43,.05);
}
.subpage-panel h3,
.subpage-panel h4 {
  margin-bottom: 12px;
}
.subpage-panel p:last-child {
  margin-bottom: 0;
}
.subpage-icon {
  display: inline-grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: #f8f3d8;
  color: #075d56;
  font-size: 22px;
  margin-bottom: 18px;
}
.story-highlight {
  height: 100%;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 34px;
  border-radius: 18px;
  color: #fff;
  background: linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);
  position: relative;
  overflow: hidden;
}
.story-highlight:before,
.story-highlight:after {
  content: "";
  position: absolute;
  border: 1px solid rgba(255,255,255,.17);
  border-radius: 50%;
  pointer-events: none;
}
.story-highlight:before {
  width: 330px;
  height: 330px;
  right: -100px;
  top: -130px;
}
.story-highlight:after {
  width: 230px;
  height: 230px;
  right: -50px;
  top: -80px;
}
.story-highlight > * {
  position: relative;
  z-index: 1;
}
.story-highlight .eyebrow {
  color: #f7d95d;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: .14em;
  font-weight: 700;
}
.story-highlight h3 {
  color: #fff;
  font-size: clamp(26px,3vw,38px);
  line-height: 1.2;
  margin: 12px 0;
}
.story-highlight p {
  color: rgba(255,255,255,.82);
  margin: 0;
}
.quote-panel {
  border-left: 4px solid #f4d44e;
  background: #f8f7f0;
  padding: 22px 26px;
  border-radius: 0 12px 12px 0;
}
.quote-panel p {
  color: #064f49;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}
.quote-panel span {
  display: block;
  margin-top: 6px;
  color: #69716f;
  font-size: 13px;
}
.trustee-profile {
  height: 100%;
  padding: 30px 22px;
  border: 1px solid rgba(6,79,73,.10);
  background: #fff;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 28px rgba(13,48,43,.04);
}
.trustee-profile .initial {
  display: grid;
  place-items: center;
  width: 74px;
  height: 74px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: #e8f1ef;
  color: #075d56;
  font-size: 21px;
  font-weight: 800;
}
.trustee-profile h4 {
  font-size: 18px;
  margin-bottom: 7px;
}
.trustee-profile p {
  color: #69716f;
  margin: 0;
  font-size: 14px;
}
.timeline-list {
  position: relative;
  max-width: 940px;
  margin: 0 auto;
  padding-left: 34px;
}
.timeline-list:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: #d8e5e1;
}
.timeline-entry {
  position: relative;
  padding: 0 0 30px 20px;
}
.timeline-entry:last-child {
  padding-bottom: 0;
}
.timeline-entry:before {
  content: "";
  position: absolute;
  left: -30px;
  top: 7px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #08776e;
  border: 4px solid #e8f1ef;
  box-shadow: 0 0 0 2px #08776e;
}
.timeline-year {
  display: inline-block;
  color: #08776e;
  font-weight: 800;
  letter-spacing: .05em;
  margin-bottom: 8px;
}
.document-note {
  padding: 28px;
  border-radius: 16px;
  background: #f8f7f0;
  border: 1px dashed rgba(6,79,73,.3);
}
.document-note p:last-child {
  margin-bottom: 0;
}
@media (max-width: 767.98px) {
  .subpage-panel {
    padding: 24px;
  }
  .story-highlight {
    min-height: 290px;
    padding: 26px;
  }
  .quote-panel p {
    font-size: 18px;
  }
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />

      <main>
        {/* Breadcrumb */}
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
                        <span aria-current="page">Our Timeline</span>
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

                  <div className="shape-1">
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
                    alt="Community service"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          className="p-t-100 p-b-100 p-t-xs-80 p-b-xs-80"
          style={{
            backgroundImage:
              "url(/assets/img/bg/why-us-bg.webp),url(/assets/img/bg/who-we-are-bg.webp)",
          }}
        >
          <div className="container">
            <div
              className="text-center subpage-intro m-b-50"
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
                A timeline of the Trust&apos;s establishment and
                documented areas of activity. Additional dated
                milestones can be added as records are verified.
              </p>
            </div>

            <div
              className="timeline-list"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Founding milestone */}
              <div className="timeline-entry">
                <span className="timeline-year">2016</span>

                <div className="subpage-panel">
                  <h3>MARWANN CHARITABLE TRUST Founded</h3>

                  <p>
                    MARWANN CHARITABLE TRUST was founded on
                    26 September 2016 in Vellore, Tamil Nadu,
                    under the leadership of its founder,
                    Dr. S. Allahuddeen.
                  </p>
                </div>
              </div>

              {/* Programs and activities */}
              <div className="timeline-entry">
                <span className="timeline-year">
                  Documented activities · Dates not specified
                </span>

                <div className="subpage-panel">
                  <h3>Charitable &amp; Community Activities</h3>

                  <p>
                    The Trust&apos;s provided activity list includes
                    child orphanage support, COVID-19 food
                    distribution, Nilavembu Kasayam distribution,
                    eye camps, rice bag distribution, Independence
                    Day and flood relief, old age home support,
                    medical assistance and women&apos;s tailoring
                    classes.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline note */}
            <div
              className="m-t-50 document-note"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p>
                <strong>Timeline update:</strong>{" "}
                Specific programme dates, locations and milestones
                will be added when supporting activity records
                are available.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
