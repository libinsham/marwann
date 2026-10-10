/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const metadata = {
  "title": "About Us | MARWANN CHARITABLE TRUST",
  "description": "Learn about MARWANN CHARITABLE TRUST, its story, mission, vision and commitment to education, healthcare and humanitarian service."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <main>
        <section className="breadcrumb-section">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="breadcrumb-content" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.webp)" }}>
                  <div className="breadcrumb-nav" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about" aria-current="page">About Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>About MARWANN CHARITABLE TRUST</h2>
                  </div>
                  <div className="shape-1">
                    <img src="/assets/img/shapes/shape-1.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img src="/assets/img/thumbs/thumb-1.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-us-section-6 p-t-100 p-b-100 p-t-xs-80 p-b-xs-80" style={{ backgroundImage: "url(/assets/img/bg/why-us-bg.webp),url(/assets/img/bg/who-we-are-bg.webp)" }}>
          <div className="container">
            <div className="row align-items-center row-gap-5">
              <div className="col-xl-5 col-lg-5">
                <div className="about-intro-visual" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" role="img" aria-label="MARWANN CHARITABLE TRUST commitment to community service">
                  <div className="about-visual-icon">
                    <i className="fa-solid fa-hand-holding-heart" aria-hidden="true"></i>
                  </div>
                  <div className="about-visual-copy">
                    <span className="since">Established in 2019 · Vellore, Tamil Nadu</span>
                    <h3>Serving Humanity with Compassion</h3>
                    <p>Education, healthcare, social welfare and humanitarian support.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="why-us-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="common-subtitle">
                    <span>Who We Are</span>
                  </div>
                  <div className="common-title text-start">
                    <h2>MARWANN CHARITABLE TRUST</h2>
                  </div>
                  <div className="text">
                    <p>
                      MARWANN CHARITABLE TRUST is a non-profit charitable organization committed to serving humanity with compassion, integrity and dedication. Guided by the belief that
                      {" "}
                      <strong>“We Serve God by Serving Others,”</strong>
                      {" "}
                      the Trust works to uplift underprivileged individuals and communities through social, educational, healthcare and humanitarian initiatives.
                    </p>
                    <p>
                      The Trust provides educational support for deserving students, medical assistance for people in need, food and essential supplies for economically disadvantaged families, and relief during emergencies and natural disasters. It also works to empower women, promote skill development, support senior citizens, assist persons with disabilities and create opportunities for dignified, self-reliant living.
                    </p>
                    <p>
                      By collaborating with volunteers, donors, institutions and community leaders, the Trust aims to build a society founded on equality, compassion, justice and hope. Its commitment is to serve without discrimination and to respect the dignity of every individual, regardless of religion, caste, gender or background.
                    </p>
                  </div>
                  <div className="about-motto">
                    <p>“We Serve God by Serving Others”</p>
                    <span>Our guiding motto</span>
                  </div>
                  <div className="annual-donation-wrap m-t-30">
                    <div className="blog-btn">
                      <Link href="/our-story" className="e-primary-btn has-icon">
                        Discover Our Story
                        <span className="icon-wrap">
                          <span className="icon">
                            <i className="fa-regular fa-arrow-right"></i>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                        </span>
                      </Link>
                    </div>
                    <div className="annual-donation">
                      <img src="/assets/img/icons/icon-4.svg" alt="" />
                      <div className="annual-text">
                        <p>Established</p>
                        <h5>2019</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-section-3 p-t-100 p-b-100 p-t-xs-80 p-b-xs-80" style={{ backgroundImage: "url(/assets/img/bg/why-us-bg.webp),url(/assets/img/bg/about-us-bg.webp)" }}>
          <div className="container">
            <div className="text-center m-b-50" data-aos="fade-up" data-aos-duration="1000">
              <div className="common-subtitle">
                <span>Our Purpose</span>
              </div>
              <div className="common-title">
                <h2>{"Our Vision & Mission"}</h2>
              </div>
              <p>
                Our purpose is to support people and communities through practical, compassionate service.
              </p>
            </div>
            <div className="row row-gap-4">
              <div className="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="about-purpose-card">
                  <div className="purpose-icon">
                    <i className="fa-light fa-eye" aria-hidden="true"></i>
                  </div>
                  <div className="common-title text-start">
                    <h3>Our Vision</h3>
                  </div>
                  <p>
                    To build a compassionate, empowered and inclusive society where every individual has access to education, healthcare, basic necessities and equal opportunities to live with dignity.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="about-purpose-card">
                  <div className="purpose-icon">
                    <i className="fa-light fa-bullseye" aria-hidden="true"></i>
                  </div>
                  <div className="common-title text-start">
                    <h3>Our Mission</h3>
                  </div>
                  <ul className="about-mission-list">
                    <li>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      Provide humanitarian aid and social welfare services.
                    </li>
                    <li>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      Support education through scholarships and learning initiatives.
                    </li>
                    <li>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      Promote healthcare awareness and medical assistance.
                    </li>
                    <li>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      Empower women, youth and marginalized communities through skill development.
                    </li>
                    <li>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      Provide food, clothing and emergency relief to those in need.
                    </li>
                    <li>
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                      Encourage community participation, volunteerism and sustainable development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-t-100 p-b-100 p-t-xs-80 p-b-xs-80" style={{ backgroundColor: "#f8f7f0" }}>
          <div className="container">
            <div className="text-center m-b-50" data-aos="fade-up" data-aos-duration="1000">
              <div className="common-subtitle">
                <img src="/assets/img/icons/icon-1.svg" alt="" />
                <span>Our Commitment</span>
              </div>
              <div className="common-title">
                <h2>Creating Opportunities for All</h2>
              </div>
              <p>
                We focus on meaningful support that recognises the dignity and needs of every individual.
              </p>
            </div>
            <div className="row row-gap-4">
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="about-value-card">
                  <div className="value-icon">
                    <i className="fa-light fa-book-open" aria-hidden="true"></i>
                  </div>
                  <h5>Education Support</h5>
                  <p>
                    Supporting deserving students through educational assistance and learning initiatives.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="about-value-card">
                  <div className="value-icon">
                    <i className="fa-light fa-heart-pulse" aria-hidden="true"></i>
                  </div>
                  <h5>{"Healthcare & Medical Aid"}</h5>
                  <p>
                    Promoting health awareness and providing medical assistance to people in need.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="about-value-card">
                  <div className="value-icon">
                    <i className="fa-light fa-bowl-food" aria-hidden="true"></i>
                  </div>
                  <h5>{"Food & Essentials"}</h5>
                  <p>
                    Assisting economically disadvantaged families with food and essential supplies.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="about-value-card">
                  <div className="value-icon">
                    <i className="fa-light fa-hands-holding-circle" aria-hidden="true"></i>
                  </div>
                  <h5>Emergency Relief</h5>
                  <p>
                    Providing humanitarian assistance during emergencies and natural disasters.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="about-value-card">
                  <div className="value-icon">
                    <i className="fa-light fa-scissors" aria-hidden="true"></i>
                  </div>
                  <h5>{"Skills & Empowerment"}</h5>
                  <p>
                    Encouraging women and youth through skill development and livelihood opportunities.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="about-value-card">
                  <div className="value-icon">
                    <i className="fa-light fa-people-roof" aria-hidden="true"></i>
                  </div>
                  <h5>Inclusive Social Welfare</h5>
                  <p>
                    Supporting senior citizens, persons with disabilities and underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-t-100 p-b-100 p-t-xs-80 p-b-xs-80">
          <div className="container">
            <div className="row align-items-center row-gap-4">
              <div className="col-xl-5 col-lg-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="about-founder-panel">
                  <div className="about-founder-mark" aria-hidden="true">SA</div>
                  <span className="text-uppercase" style={{ color: "#f7d95d", fontSize: "12px", fontWeight: "700", letterSpacing: ".12em" }}>{"Founder & All India Chairman"}</span>
                  <h3 className="m-t-10">Samuga Sastha, Dr. S. Allahuddeen, BA</h3>
                  <p className="m-b-0">
                    Founder of MARWANN CHARITABLE TRUST, established in 2019 in Vellore, Tamil Nadu.
                  </p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="common-subtitle">
                  <img src="/assets/img/icons/icon-2.svg" alt="" />
                  <span>Our Founder</span>
                </div>
                <div className="common-title text-start">
                  <h2>Guided by Service and Compassion</h2>
                </div>
                <div className="text">
                  <p>
                    Dr. S. Allahuddeen is the founder and All-India Chairman of MARWANN CHARITABLE TRUST. Since establishing the Trust in 2019, he has guided its work in education, healthcare and disaster relief for underserved communities.
                  </p>
                  <p>
                    Under his leadership, the Trust's work includes literacy campaigns, women's empowerment programmes and emergency aid projects. His stated commitment is to community-focused service and to creating opportunities for people in need.
                  </p>
                </div>
                <Link href="/leadership" className="e-primary-btn has-icon">
                  Meet Our Leadership
                  <span className="icon-wrap">
                    <span className="icon">
                      <i className="fa-regular fa-arrow-right"></i>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="m-t-80">
              <div className="text-center m-b-40" data-aos="fade-up" data-aos-duration="1000">
                <div className="common-subtitle">
                  <img src="/assets/img/icons/icon-1.svg" alt="" />
                  <span>Our Trustees</span>
                </div>
                <div className="common-title">
                  <h2>{"Leadership & Governance"}</h2>
                </div>
              </div>
              <div className="row row-gap-4">
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="trustee-card">
                    <div className="trustee-initial">SA</div>
                    <h5>Dr. S. Allahuddeen</h5>
                    <p>All India Founder cum Chairman</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="trustee-card">
                    <div className="trustee-initial">FA</div>
                    <h5>Dr. A. Faheema Allahuddeen</h5>
                    <p>All India Secretary</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="trustee-card">
                    <div className="trustee-initial">SA</div>
                    <h5>Dr. A. Sakeena Allahuddeen</h5>
                    <p>All India Treasurer</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="trustee-card">
                    <div className="trustee-initial">KK</div>
                    <h5>Mr. Kamalesh Kumar</h5>
                    <p>All India MCT Trustee, Legal Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-t-60 p-b-100 p-t-xs-40 p-b-xs-80" style={{ backgroundColor: "#f8f7f0" }}>
          <div className="container">
            <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
              <div className="common-subtitle">
                <span>Be Part of the Change</span>
              </div>
              <div className="common-title">
                <h2>Join Us in Serving Humanity</h2>
              </div>
              <p>
                Connect with MARWANN CHARITABLE TRUST to learn about our work, volunteering and ways to support our mission.
              </p>
              <div className="m-t-25">
                <Link href="/contact" className="e-primary-btn has-icon">
                  Contact Us
                  <span className="icon-wrap">
                    <span className="icon">
                      <i className="fa-regular fa-arrow-right"></i>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
