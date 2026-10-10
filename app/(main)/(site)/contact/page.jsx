/* eslint-disable @next/next/no-img-element */
import { getSettings, toTel } from '@/lib/store'
import PageScript from '@/components/PageScript'

export const metadata = {
  "title": "Contact Us | MARWANN CHARITABLE TRUST",
  "description": "Contact MARWANN CHARITABLE TRUST in Vellore, Tamil Nadu, for enquiries, donations and volunteering."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

const css1 = "\n.work-page-intro { max-width: 820px; margin: 0 auto; }\n.work-card {\n    height: 100%; padding: 30px 26px; background: #fff;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 16px;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n    transition: transform .25s ease, box-shadow .25s ease;\n}\n.work-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,48,43,.10); }\n.work-card .work-icon {\n    width: 54px; height: 54px; display: grid; place-items: center;\n    border-radius: 50%; color: #075d56; background: #f8f3d8;\n    font-size: 22px; margin-bottom: 18px;\n}\n.work-card .work-number {\n    display: inline-block; color: #08776e; font-size: 12px;\n    letter-spacing: .12em; font-weight: 800; margin-bottom: 7px;\n}\n.work-card h3 { font-size: 20px; margin-bottom: 10px; }\n.work-card p { color: #69716f; margin: 0; font-size: 15px; }\n.work-category {\n    padding: 34px; height: 100%; border-radius: 18px;\n    background: #fff; border: 1px solid rgba(6,79,73,.10);\n}\n.work-category h3 { margin-bottom: 14px; }\n.work-category ul { list-style: none; padding: 0; margin: 0; }\n.work-category li { position: relative; padding: 9px 0 9px 25px; color: #56615e; border-bottom: 1px solid rgba(6,79,73,.08); }\n.work-category li:last-child { border-bottom: 0; }\n.work-category li i { position: absolute; left: 0; top: 13px; color: #08776e; }\n.campaign-empty {\n    max-width: 850px; margin: 0 auto; padding: 58px 34px;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 20px;\n    background: #fff; text-align: center;\n    box-shadow: 0 14px 40px rgba(13,48,43,.06);\n}\n.campaign-empty .empty-icon {\n    width: 82px; height: 82px; display: grid; place-items: center;\n    margin: 0 auto 22px; background: #f8f3d8; color: #075d56;\n    border-radius: 50%; font-size: 32px;\n}\n.campaign-empty h2 { margin-bottom: 12px; }\n.campaign-empty p { max-width: 630px; margin: 0 auto 24px; color: #69716f; }\n.gallery-card {\n    height: 100%; background: #fff; border: 1px solid rgba(6,79,73,.10);\n    border-radius: 16px; overflow: hidden;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n}\n.gallery-card .gallery-photo { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #e8efed; }\n.gallery-card .gallery-photo img {\n    display: block; width: 100%; height: 100%; object-fit: cover;\n    transition: transform .35s ease;\n}\n.gallery-card:hover .gallery-photo img { transform: scale(1.04); }\n.gallery-card .gallery-caption { padding: 20px 22px 22px; }\n.gallery-card .gallery-caption span {\n    display: block; color: #08776e; font-size: 11px; font-weight: 800;\n    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;\n}\n.gallery-card .gallery-caption h3 { font-size: 18px; margin: 0; }\n.gallery-note {\n    max-width: 800px; margin: 30px auto 0; text-align: center;\n    color: #69716f; font-size: 14px;\n}\n@media (max-width: 767.98px) {\n    .work-card, .work-category { padding: 25px 22px; }\n    .campaign-empty { padding: 42px 22px; }\n}\n"

const css2 = "\n/* Program areas: aligned archive-style card grid */\n.marwann-programs { background:#f8f7f0; padding:34px 0 110px; }\n.marwann-programs-intro { max-width:820px; margin:0 auto 36px; text-align:center; }\n.marwann-programs-intro .eyebrow {\n    color:#08776e; font-size:12px; font-weight:800; letter-spacing:.14em;\n    text-transform:uppercase; margin-bottom:9px;\n}\n.marwann-programs-intro h1 {\n    color:#17212b; font-size:clamp(28px,3vw,38px); line-height:1.2;\n    font-weight:750; margin:0 0 10px;\n}\n.marwann-programs-intro p { color:#64748b; font-size:14px; line-height:1.7; margin:0 auto; max-width:760px; }\n.marwann-program-filter-wrap { border-top:1px solid #e7ecef; border-bottom:1px solid #e7ecef; background:rgba(255,255,255,.84); margin-bottom:30px; }\n.marwann-program-filters { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:12px 0; }\n.marwann-program-filter {\n    appearance:none; border:1px solid transparent; border-radius:999px;\n    background:transparent; color:#64748b; padding:8px 14px;\n    font:inherit; font-size:12px; font-weight:600; line-height:1.2;\n    cursor:pointer; white-space:nowrap; transition:background .2s,color .2s,border-color .2s;\n}\n.marwann-program-filter .count {\n    display:inline-flex; min-width:20px; height:20px; margin-left:6px;\n    align-items:center; justify-content:center; border-radius:999px;\n    background:#edf2f4; color:#52616b; font-size:10px; font-weight:800; padding:0 6px;\n}\n.marwann-program-filter:hover { background:#f2f5f6; color:#142331; }\n.marwann-program-filter.is-active { background:#075d56; color:#fff; border-color:#075d56; }\n.marwann-program-filter.is-active .count { background:rgba(255,255,255,.18); color:#fff; }\n.marwann-program-item[hidden] { display:none !important; }\n.marwann-program-card {\n    display:flex; flex-direction:column; height:100%; overflow:hidden;\n    background:#fff; border:1px solid #e8edf0; border-radius:18px;\n    box-shadow:0 2px 4px rgba(15,23,42,.025);\n    transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;\n}\n.marwann-program-card:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(15,23,42,.08); border-color:#d9e3e6; }\n.marwann-program-visual {\n    position:relative; display:flex; align-items:center; justify-content:center;\n    margin:14px 14px 0; aspect-ratio:1.78/1; border-radius:13px; overflow:hidden;\n    background:linear-gradient(135deg,#e6efed,#d5e4e0 58%,#c3dad5);\n}\n.marwann-program-visual.has-image img {\n    display:block; width:100%; height:100%; object-fit:cover;\n    transition:transform .35s ease;\n}\n.marwann-program-card:hover .marwann-program-visual.has-image img { transform:scale(1.035); }\n.marwann-program-visual .program-symbol {\n    display:grid; place-items:center; width:70px; height:70px;\n    border-radius:50%; color:#075d56; background:rgba(255,255,255,.84);\n    border:1px solid rgba(7,93,86,.12); font-size:30px;\n    box-shadow:0 8px 24px rgba(7,50,45,.08);\n}\n.marwann-program-visual.visual-health { background:linear-gradient(135deg,#e8f4f2,#d2e9e5 55%,#c2ded8); }\n.marwann-program-visual.visual-community { background:linear-gradient(135deg,#f5f0df,#e9e2c9 55%,#dfd5b2); }\n.marwann-program-visual.visual-skill { background:linear-gradient(135deg,#edf0f8,#dfe5f4 55%,#cfd8ed); }\n.marwann-program-tag {\n    position:absolute; left:10px; top:10px; border-radius:999px;\n    background:rgba(15,23,42,.88); color:#fff; font-size:9px;\n    font-weight:800; letter-spacing:.06em; padding:5px 9px; text-transform:uppercase;\n}\n.marwann-program-body { display:flex; flex:1; flex-direction:column; padding:15px 18px 17px; }\n.marwann-program-body h2 { color:#142331; font-size:16px; line-height:1.35; font-weight:700; margin:0 0 7px; min-height:42px; }\n.marwann-program-body p { color:#64748b; font-size:12px; line-height:1.65; margin:0 0 14px; min-height:40px; }\n.marwann-program-meta { margin-top:auto; display:flex; align-items:center; gap:6px; padding-bottom:13px; }\n.marwann-program-pill { display:inline-flex; align-items:center; gap:6px; border-radius:999px; padding:5px 9px; background:#e7f7f0; color:#087653; font-size:10px; line-height:1.2; font-weight:700; }\n.marwann-program-actions { display:flex; align-items:center; gap:8px; border-top:1px solid #edf0f2; padding-top:10px; }\n.marwann-program-actions .program-primary {\n    display:flex; flex:1; justify-content:center; align-items:center; gap:8px;\n    border:0; border-radius:999px; padding:9px 12px; background:#075d56;\n    color:#fff; font-size:11px; line-height:1.2; font-weight:700;\n    text-decoration:none; transition:background .2s ease;\n}\n.marwann-program-actions .program-primary:hover { background:#06433e; color:#fff; }\n.marwann-program-actions .program-secondary {\n    display:inline-flex; justify-content:center; align-items:center;\n    border:1px solid #e4e9ec; border-radius:999px; background:#fff;\n    color:#263746; padding:8px 12px; font-size:11px; font-weight:700;\n    text-decoration:none; white-space:nowrap;\n}\n.marwann-program-actions .program-secondary:hover { background:#f7f9fa; color:#08776e; }\n.marwann-program-empty { display:none; text-align:center; padding:38px 18px; color:#64748b; }\n@media(max-width:767.98px) {\n    .marwann-programs { padding-top:22px; }\n    .marwann-program-filters { flex-wrap:nowrap; overflow-x:auto; padding:10px 0; }\n    .marwann-program-filter { flex:0 0 auto; }\n    .marwann-program-body h2,.marwann-program-body p { min-height:0; }\n}\n"

const css3 = "\n/* Dark green navigation strip with readable white controls */\n.header-section-1 .header-bottom-layout-2 {\n    background: #064f49 !important;\n    background-color: #064f49 !important;\n    box-shadow: 0 6px 22px rgba(0, 0, 0, .12);\n}\n.header-section-1 .header-middle,\n.header-section-1 .header-left,\n.header-section-1 .header-right {\n    background: transparent !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a,\n.header-section-1 .header-info-content span,\n.header-section-1 .header-info-content p,\n.header-section-1 .header-info-content p a {\n    color: #fff !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a:hover,\n.header-section-1 .main-menu-2 > ul > li.active > a {\n    color: #f7d95d !important;\n}\n.header-section-1 .header-bar-3 .bar {\n    background-color: #fff !important;\n}\n.header-section-1 .header-info-icon {\n    color: #f7d95d !important;\n}\n@media (max-width: 1199.98px) {\n    .header-section-1 .header-bottom-layout-2 {\n        background: #064f49 !important;\n    }\n}\n"

const css4 = "\n.marwann-contact-page { background:#f8f7f0; padding:160px 0 100px; }\n.marwann-contact-intro { max-width:820px; margin:0 auto 34px; text-align:center; }\n.marwann-contact-intro .eyebrow { color:#08776e; font-size:12px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; margin-bottom:9px; }\n.marwann-contact-intro h1 { color:#17212b; font-size:clamp(28px,3vw,38px); line-height:1.2; font-weight:750; margin:0 0 10px; }\n.marwann-contact-intro p { color:#64748b; font-size:14px; line-height:1.7; margin:0 auto; max-width:760px; }\n.marwann-contact-cards { margin-bottom:28px; }\n.marwann-contact-card { height:100%; padding:26px 25px; border:1px solid rgba(6,79,73,.10); border-radius:16px; background:#fff; box-shadow:0 10px 28px rgba(13,48,43,.05); }\n.marwann-contact-card .contact-icon { width:50px; height:50px; display:grid; place-items:center; border-radius:50%; background:#f8f3d8; color:#075d56; font-size:21px; margin-bottom:16px; }\n.marwann-contact-card h2 { font-size:17px; color:#17212b; margin:0 0 9px; }\n.marwann-contact-card p { color:#64748b; font-size:13px; line-height:1.7; margin:0; overflow-wrap:anywhere; }\n.marwann-contact-card a { color:#075d56; font-weight:700; text-decoration:none; }\n.marwann-contact-card a:hover { color:#08776e; text-decoration:underline; }\n.marwann-contact-layout { display:grid; grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr); gap:24px; align-items:stretch; }\n.marwann-contact-form-panel, .marwann-contact-map-panel { background:#fff; border:1px solid rgba(6,79,73,.10); border-radius:18px; box-shadow:0 12px 35px rgba(13,48,43,.06); overflow:hidden; }\n.marwann-contact-form-panel { padding:34px; }\n.marwann-contact-form-panel h2 { color:#17212b; font-size:24px; margin:0 0 7px; }\n.marwann-contact-form-panel .form-intro { color:#64748b; font-size:13px; line-height:1.65; margin:0 0 22px; }\n.marwann-contact-form .form-field { margin-bottom:15px; }\n.marwann-contact-form label { display:block; color:#34434b; font-size:12px; font-weight:700; margin:0 0 7px; }\n.marwann-contact-form input, .marwann-contact-form select, .marwann-contact-form textarea { display:block; width:100%; min-height:48px; border:1px solid #dce5e3; border-radius:9px; background:#fbfcfb; padding:11px 13px; color:#17212b; font:inherit; font-size:13px; outline:none; transition:border-color .2s, box-shadow .2s; }\n.marwann-contact-form textarea { min-height:132px; resize:vertical; }\n.marwann-contact-form input:focus, .marwann-contact-form select:focus, .marwann-contact-form textarea:focus { border-color:#08776e; box-shadow:0 0 0 3px rgba(8,119,110,.10); }\n.marwann-contact-form .required-mark { color:#b42318; }\n.marwann-contact-submit { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:12px 22px; border:0; border-radius:999px; background:#075d56; color:#fff; font-size:12px; font-weight:700; transition:background .2s ease; cursor:pointer; }\n.marwann-contact-submit:hover { background:#06433e; }\n.marwann-contact-form-note { margin:14px 0 0; color:#64748b; font-size:11px; line-height:1.6; }\n.marwann-contact-status { min-height:20px; margin:10px 0 0; color:#08776e; font-size:12px; font-weight:700; }\n.marwann-contact-map-panel { display:flex; flex-direction:column; min-height:100%; }\n.marwann-contact-map-heading { padding:28px 28px 18px; }\n.marwann-contact-map-heading .eyebrow { color:#08776e; font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; margin-bottom:7px; }\n.marwann-contact-map-heading h2 { color:#17212b; font-size:21px; margin:0 0 8px; }\n.marwann-contact-map-heading p { color:#64748b; font-size:12px; line-height:1.65; margin:0; }\n.marwann-contact-map { display:block; width:100%; min-height:310px; flex:1; border:0; background:#e8efed; }\n.marwann-contact-map-action { padding:17px 24px; border-top:1px solid #edf0f2; }\n.marwann-contact-map-action a { display:inline-flex; align-items:center; gap:8px; color:#075d56; font-size:12px; font-weight:800; text-decoration:none; }\n.marwann-contact-map-action a:hover { color:#08776e; text-decoration:underline; }\n@media(max-width:991.98px) { .marwann-contact-layout { grid-template-columns:1fr; } .marwann-contact-map-panel { min-height:450px; } }\n@media(max-width:767.98px) { .marwann-contact-page { padding-top:105px; } .marwann-contact-form-panel { padding:25px 20px; } .marwann-contact-map-heading { padding:24px 21px 16px; } .marwann-contact-map-panel { min-height:410px; } }\n"

export default async function Page() {
  const s = await getSettings()
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
      <style dangerouslySetInnerHTML={{ __html: css2 }} />
      <style dangerouslySetInnerHTML={{ __html: css3 }} />
      <style dangerouslySetInnerHTML={{ __html: css4 }} />
      <main>
        <section className="marwann-contact-page">
          <div className="container">
            <div className="marwann-contact-intro" data-aos="fade-up" data-aos-duration="900">
              <div className="eyebrow">GET IN TOUCH</div>
              <h1>Contact Us</h1>
              <p>
                For enquiries about our charitable activities, volunteering, donations or community support, please contact MARWANN CHARITABLE TRUST using the details below.
              </p>
            </div>
            <div className="row row-gap-3 marwann-contact-cards" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <section className="marwann-contact-card">
                  <div className="contact-icon">
                    <i className="fa-light fa-location-dot" aria-hidden="true"></i>
                  </div>
                  <h2>Visit Our Office</h2>
                  <p>
                    {s.address}
                  </p>
                </section>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <section className="marwann-contact-card">
                  <div className="contact-icon">
                    <i className="fa-light fa-phone-volume" aria-hidden="true"></i>
                  </div>
                  <h2>Call Us</h2>
                  <p>
                    {s.phones.filter(Boolean).map((p, i) => (
                      <span key={i}>
                        {i > 0 && <br />}
                        <a href={toTel(p)}>{p}</a>
                      </span>
                    ))}
                  </p>
                </section>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <section className="marwann-contact-card">
                  <div className="contact-icon">
                    <i className="fa-light fa-envelope" aria-hidden="true"></i>
                  </div>
                  <h2>Email Us</h2>
                  <p>
                    <a href={`mailto:${s.email}`}>{s.email}</a>
                  </p>
                </section>
              </div>
            </div>
            <div className="marwann-contact-layout" data-aos="fade-up" data-aos-duration="900" data-aos-delay="150">
              <section className="marwann-contact-form-panel" aria-labelledby="contact-form-title">
                <h2 id="contact-form-title">Send Us a Message</h2>
                <p className="form-intro">
                  Share your question or message with our team. Fields marked with
                  {" "}
                  <span className="required-mark">*</span>
                  {" "}
                  are required.
                </p>
                <form className="marwann-contact-form" id="marwann-contact-form">
                  <div className="row">
                    <div className="col-md-6 form-field">
                      <label htmlFor="contact-name">
                        Full Name
                        {" "}
                        <span className="required-mark">*</span>
                      </label>
                      {" "}
                      <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="col-md-6 form-field">
                      <label htmlFor="contact-phone">Phone Number</label>
                      {" "}
                      <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-field">
                      <label htmlFor="contact-email">
                        Email Address
                        {" "}
                        <span className="required-mark">*</span>
                      </label>
                      {" "}
                      <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="col-md-6 form-field">
                      <label htmlFor="contact-subject">
                        Enquiry Type
                        {" "}
                        <span className="required-mark">*</span>
                      </label>
                      {" "}
                      <select id="contact-subject" name="subject" required defaultValue="">
                        <option value="" disabled>Select an enquiry type</option>
                        <option value="General enquiry">General enquiry</option>
                        <option value="Donation">Donation</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Programme information">Programme information</option>
                        <option value="Community support">Community support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-message">
                      Your Message
                      {" "}
                      <span className="required-mark">*</span>
                    </label>
                    {" "}
                    <textarea id="contact-message" name="message" placeholder="Write your message here..." required />
                  </div>
                  <button type="submit" className="marwann-contact-submit">
                    Prepare Email
                    {" "}
                    <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                  </button>
                  <p className="marwann-contact-form-note">
                    This form opens your device’s default email application with the message prepared. Please review and send the email. It does not submit information directly to the website.
                  </p>
                  <p className="marwann-contact-status" id="marwann-contact-status" aria-live="polite"></p>
                </form>
              </section>
              <section className="marwann-contact-map-panel" aria-labelledby="contact-location-title">
                <div className="marwann-contact-map-heading">
                  <div className="eyebrow">Find Us</div>
                  <h2 id="contact-location-title">MARWANN CHARITABLE TRUST</h2>
                  <p>
                    {s.address}
                  </p>
                </div>
                <iframe className="marwann-contact-map" title="Map showing the MARWANN CHARITABLE TRUST address in Vellore" src={"https://www.google.com/maps?q=No.%2019%2C%20Kullathu%20Medu%2C%202nd%20Street%2C%20Kamaraj%20Nagar%2C%20Virupachipuram%2C%20Vellore%20632002%2C%20Tamil%20Nadu%2C%20India&output=embed"} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
                <div className="marwann-contact-map-action">
                  <a href={"https://www.google.com/maps/search/?api=1&query=No.%2019%2C%20Kullathu%20Medu%2C%202nd%20Street%2C%20Kamaraj%20Nagar%2C%20Virupachipuram%2C%20Vellore%20632002%2C%20Tamil%20Nadu%2C%20India"} target="_blank" rel="noopener">
                    Get Directions
                    {" "}
                    <i className="fa-regular fa-arrow-up-right-from-square" aria-hidden="true"></i>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <PageScript code={"\n    document.addEventListener(\"DOMContentLoaded\", function () {\n        const form = document.getElementById(\"marwann-contact-form\");\n        const status = document.getElementById(\"marwann-contact-status\");\n        if (!form) return;\n        form.addEventListener(\"submit\", function (event) {\n            event.preventDefault();\n            if (!form.reportValidity()) return;\n            const data = new FormData(form);\n            const subject = \"Website enquiry: \" + data.get(\"subject\");\n            const body = [\n                \"Name: \" + data.get(\"name\"),\n                \"Phone: \" + (data.get(\"phone\") || \"Not provided\"),\n                \"Email: \" + data.get(\"email\"),\n                \"Enquiry type: \" + data.get(\"subject\"),\n                \"\",\n                \"Message:\",\n                data.get(\"message\")\n            ].join(\"\\n\");\n            status.textContent = \"Opening your email application. Please review the message and press Send.\";\n            window.location.href = \"mailto:marwanncharitabletrust2001@gmail.com?subject=\" + encodeURIComponent(subject) + \"&body=\" + encodeURIComponent(body);\n        });\n    });\n    ".replaceAll("marwanncharitabletrust2001@gmail.com", s.email)} />
    </>
  )
}
