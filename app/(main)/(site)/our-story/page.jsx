/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import OurStorySection from '@/components/our-story/OurStorySection'
export const metadata = {
  "title": "Our Story | MARWANN CHARITABLE TRUST",
  "description": "Discover the story and service commitment of MARWANN CHARITABLE TRUST, established in 2016 in Vellore, Tamil Nadu."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

const css1 = "\n        .subpage-intro { max-width: 850px; margin: 0 auto; }\n        .subpage-panel { height: 100%; padding: 30px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.05); }\n        .subpage-panel h3, .subpage-panel h4 { margin-bottom: 12px; }\n        .subpage-panel p:last-child { margin-bottom: 0; }\n        .subpage-icon { display: inline-grid; place-items: center; width: 54px; height: 54px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 22px; margin-bottom: 18px; }\n        .story-highlight { height: 100%; min-height: 330px; display: flex; flex-direction: column; justify-content: flex-end; padding: 34px; border-radius: 18px; color: #fff; background: linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%); position: relative; overflow: hidden; }\n        .story-highlight:before, .story-highlight:after { content:\"\"; position:absolute; border:1px solid rgba(255,255,255,.17); border-radius:50%; pointer-events:none; }\n        .story-highlight:before { width:330px;height:330px;right:-100px;top:-130px; }\n        .story-highlight:after { width:230px;height:230px;right:-50px;top:-80px; }\n        .story-highlight > * { position:relative; z-index:1; }\n        .story-highlight .eyebrow { color:#f7d95d; text-transform:uppercase; font-size:12px; letter-spacing:.14em; font-weight:700; }\n        .story-highlight h3 { color:#fff; font-size:clamp(26px,3vw,38px); line-height:1.2; margin:12px 0; }\n        .story-highlight p { color:rgba(255,255,255,.82); margin:0; }\n        .quote-panel { border-left:4px solid #f4d44e; background:#f8f7f0; padding:22px 26px; border-radius:0 12px 12px 0; }\n        .quote-panel p { color:#064f49; font-size:20px; font-weight:700; margin:0; }\n        .quote-panel span { display:block; margin-top:6px; color:#69716f; font-size:13px; }\n        .trustee-profile { height:100%; padding:30px 22px; border:1px solid rgba(6,79,73,.10); background:#fff; border-radius:16px; text-align:center; box-shadow:0 10px 28px rgba(13,48,43,.04); }\n        .trustee-profile .initial { display:grid; place-items:center; width:74px;height:74px;margin:0 auto 18px;border-radius:50%;background:#e8f1ef;color:#075d56;font-size:21px;font-weight:800; }\n        .trustee-profile h4 { font-size:18px; margin-bottom:7px; }\n        .trustee-profile p { color:#69716f; margin:0; font-size:14px; }\n        .timeline-list { position:relative; max-width:940px; margin:0 auto; padding-left:34px; }\n        .timeline-list:before { content:\"\"; position:absolute; left:10px; top:8px; bottom:8px; width:2px; background:#d8e5e1; }\n        .timeline-entry { position:relative; padding:0 0 30px 20px; }\n        .timeline-entry:last-child { padding-bottom:0; }\n        .timeline-entry:before { content:\"\"; position:absolute; left:-30px; top:7px; width:18px;height:18px;border-radius:50%;background:#08776e;border:4px solid #e8f1ef;box-shadow:0 0 0 2px #08776e; }\n        .timeline-year { display:inline-block; color:#08776e; font-weight:800; letter-spacing:.05em; margin-bottom:8px; }\n        .document-note { padding:28px; border-radius:16px; background:#f8f7f0; border:1px dashed rgba(6,79,73,.3); }\n        .document-note p:last-child { margin-bottom:0; }\n        @media(max-width:767.98px){ .subpage-panel{padding:24px}.story-highlight{min-height:290px;padding:26px}.quote-panel p{font-size:18px} }\n    "

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
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
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <span aria-current="page">Our Story</span>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Our Story</h2>
                  </div>
                  <div className="shape-1">
                    <img src="/assets/img/shapes/shape-1.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img src="/assets/img/thumbs/thumb-2-b.webp" alt="Community service" />
                </div>
              </div>
            </div>
          </div>
        </section>


     <OurStorySection />



        
        <section className="p-t-90 p-b-100 p-t-xs-70 p-b-xs-80" style={{ backgroundColor: "#f8f7f0" }}>
          <div className="container">
            <div className="text-center subpage-intro m-b-50" data-aos="fade-up" data-aos-duration="1000">
              <div className="common-subtitle">
                <img src="/assets/img/icons/icon-1.svg" alt="" />
                <span>Our Purpose</span>
              </div>
              <div className="common-title">
                <h2>What Guides Our Work</h2>
              </div>
              <p>
                Our efforts are shaped by a commitment to human dignity, practical support and community participation.
              </p>
            </div>
            <div className="row row-gap-4">
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="subpage-panel">
                  <div className="subpage-icon">
                    <i className="fa-light fa-heart" aria-hidden="true"></i>
                  </div>
                  <h3>Compassionate Service</h3>
                  <p>
                    Serving people with care and respect, recognising the dignity of every individual.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="subpage-panel">
                  <div className="subpage-icon">
                    <i className="fa-light fa-scale-balanced" aria-hidden="true"></i>
                  </div>
                  <h3>{"Inclusion & Equality"}</h3>
                  <p>
                    Working without discrimination based on religion, caste, gender or background.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="subpage-panel">
                  <div className="subpage-icon">
                    <i className="fa-light fa-hands-holding-heart" aria-hidden="true"></i>
                  </div>
                  <h3>Community Partnership</h3>
                  <p>
                    Encouraging cooperation with volunteers, donors, institutions and community leaders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-t-80 p-b-100 p-t-xs-60 p-b-xs-80">
          <div className="container">
            <div className="row align-items-center row-gap-3">
              <div className="col-xl-8 col-lg-8">
                <div className="common-subtitle">
                  <img src="/assets/img/icons/icon-2.svg" alt="" />
                  <span>Continue Exploring</span>
                </div>
                <div className="common-title text-start">
                  <h2>Learn More About Our Trust</h2>
                </div>
                <p>
                  Explore the people, milestones and documents behind MARWANN CHARITABLE TRUST.
                </p>
              </div>
              <div className="col-xl-4 col-lg-4 text-lg-end">
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
          </div>
        </section>
      </main>
    </>
  )
}
