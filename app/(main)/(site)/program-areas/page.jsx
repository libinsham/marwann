/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageScript from '@/components/PageScript'

export const metadata = {
  "title": "Program Areas | MARWANN CHARITABLE TRUST",
  "description": "Explore the education, healthcare and humanitarian activities of MARWANN CHARITABLE TRUST."
}

const css0 = "\n\n        .about-intro-visual {\n\n            min-height: 470px;\n\n            height: 100%;\n\n            display: flex;\n\n            align-items: flex-end;\n\n            position: relative;\n\n            overflow: hidden;\n\n            border-radius: 18px;\n\n            padding: 36px;\n\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n\n        }\n\n        .about-intro-visual:before,\n\n        .about-intro-visual:after {\n\n            content: \"\";\n\n            position: absolute;\n\n            border: 1px solid rgba(255,255,255,.16);\n\n            border-radius: 50%;\n\n            pointer-events: none;\n\n        }\n\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n\n        .about-visual-icon {\n\n            position: absolute;\n\n            top: 45px;\n\n            left: 42px;\n\n            width: 86px;\n\n            height: 86px;\n\n            display: grid;\n\n            place-items: center;\n\n            color: #0a544f;\n\n            background: #f7d95d;\n\n            border-radius: 50%;\n\n            font-size: 34px;\n\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n\n        }\n\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n\n        .about-purpose-card h3 { margin-bottom: 14px; }\n\n        .about-purpose-card p { margin-bottom: 0; }\n\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n\n        .about-mission-list li:last-child { padding-bottom: 0; }\n\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n\n        .about-value-card h5 { margin-bottom: 8px; }\n\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n\n        @media (max-width: 767.98px) {\n\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n\n        }\n\n    "

const css1 = "\n\n.work-page-intro { max-width: 820px; margin: 0 auto; }\n\n.work-card {\n\n    height: 100%; padding: 30px 26px; background: #fff;\n\n    border: 1px solid rgba(6,79,73,.10); border-radius: 16px;\n\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n\n    transition: transform .25s ease, box-shadow .25s ease;\n\n}\n\n.work-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,48,43,.10); }\n\n.work-card .work-icon {\n\n    width: 54px; height: 54px; display: grid; place-items: center;\n\n    border-radius: 50%; color: #075d56; background: #f8f3d8;\n\n    font-size: 22px; margin-bottom: 18px;\n\n}\n\n.work-card .work-number {\n\n    display: inline-block; color: #08776e; font-size: 12px;\n\n    letter-spacing: .12em; font-weight: 800; margin-bottom: 7px;\n\n}\n\n.work-card h3 { font-size: 20px; margin-bottom: 10px; }\n\n.work-card p { color: #69716f; margin: 0; font-size: 15px; }\n\n.work-category {\n\n    padding: 34px; height: 100%; border-radius: 18px;\n\n    background: #fff; border: 1px solid rgba(6,79,73,.10);\n\n}\n\n.work-category h3 { margin-bottom: 14px; }\n\n.work-category ul { list-style: none; padding: 0; margin: 0; }\n\n.work-category li { position: relative; padding: 9px 0 9px 25px; color: #56615e; border-bottom: 1px solid rgba(6,79,73,.08); }\n\n.work-category li:last-child { border-bottom: 0; }\n\n.work-category li i { position: absolute; left: 0; top: 13px; color: #08776e; }\n\n.campaign-empty {\n\n    max-width: 850px; margin: 0 auto; padding: 58px 34px;\n\n    border: 1px solid rgba(6,79,73,.10); border-radius: 20px;\n\n    background: #fff; text-align: center;\n\n    box-shadow: 0 14px 40px rgba(13,48,43,.06);\n\n}\n\n.campaign-empty .empty-icon {\n\n    width: 82px; height: 82px; display: grid; place-items: center;\n\n    margin: 0 auto 22px; background: #f8f3d8; color: #075d56;\n\n    border-radius: 50%; font-size: 32px;\n\n}\n\n.campaign-empty h2 { margin-bottom: 12px; }\n\n.campaign-empty p { max-width: 630px; margin: 0 auto 24px; color: #69716f; }\n\n.gallery-card {\n\n    height: 100%; background: #fff; border: 1px solid rgba(6,79,73,.10);\n\n    border-radius: 16px; overflow: hidden;\n\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n\n}\n\n.gallery-card .gallery-photo { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #e8efed; }\n\n.gallery-card .gallery-photo img {\n\n    display: block; width: 100%; height: 100%; object-fit: cover;\n\n    transition: transform .35s ease;\n\n}\n\n.gallery-card:hover .gallery-photo img { transform: scale(1.04); }\n\n.gallery-card .gallery-caption { padding: 20px 22px 22px; }\n\n.gallery-card .gallery-caption span {\n\n    display: block; color: #08776e; font-size: 11px; font-weight: 800;\n\n    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;\n\n}\n\n.gallery-card .gallery-caption h3 { font-size: 18px; margin: 0; }\n\n.gallery-note {\n\n    max-width: 800px; margin: 30px auto 0; text-align: center;\n\n    color: #69716f; font-size: 14px;\n\n}\n\n@media (max-width: 767.98px) {\n\n    .work-card, .work-category { padding: 25px 22px; }\n\n    .campaign-empty { padding: 42px 22px; }\n\n}\n\n"

const css2 = "\n\n/* Program areas: aligned archive-style card grid */\n\n.marwann-programs { background:#f8f7f0; padding:34px 0 110px; }\n\n.marwann-programs-intro { max-width:820px; margin:0 auto 36px; text-align:center; }\n\n.marwann-programs-intro .eyebrow {\n\n    color:#08776e; font-size:12px; font-weight:800; letter-spacing:.14em;\n\n    text-transform:uppercase; margin-bottom:9px;\n\n}\n\n.marwann-programs-intro h1 {\n\n    color:#17212b; font-size:clamp(28px,3vw,38px); line-height:1.2;\n\n    font-weight:750; margin:0 0 10px;\n\n}\n\n.marwann-programs-intro p { color:#64748b; font-size:14px; line-height:1.7; margin:0 auto; max-width:760px; }\n\n.marwann-program-filter-wrap { border-top:1px solid #e7ecef; border-bottom:1px solid #e7ecef; background:rgba(255,255,255,.84); margin-bottom:30px; }\n\n.marwann-program-filters { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:12px 0; }\n\n.marwann-program-filter {\n\n    appearance:none; border:1px solid transparent; border-radius:999px;\n\n    background:transparent; color:#64748b; padding:8px 14px;\n\n    font:inherit; font-size:12px; font-weight:600; line-height:1.2;\n\n    cursor:pointer; white-space:nowrap; transition:background .2s,color .2s,border-color .2s;\n\n}\n\n.marwann-program-filter .count {\n\n    display:inline-flex; min-width:20px; height:20px; margin-left:6px;\n\n    align-items:center; justify-content:center; border-radius:999px;\n\n    background:#edf2f4; color:#52616b; font-size:10px; font-weight:800; padding:0 6px;\n\n}\n\n.marwann-program-filter:hover { background:#f2f5f6; color:#142331; }\n\n.marwann-program-filter.is-active { background:#075d56; color:#fff; border-color:#075d56; }\n\n.marwann-program-filter.is-active .count { background:rgba(255,255,255,.18); color:#fff; }\n\n.marwann-program-item[hidden] { display:none !important; }\n\n.marwann-program-card {\n\n    display:flex; flex-direction:column; height:100%; overflow:hidden;\n\n    background:#fff; border:1px solid #e8edf0; border-radius:18px;\n\n    box-shadow:0 2px 4px rgba(15,23,42,.025);\n\n    transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;\n\n}\n\n.marwann-program-card:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(15,23,42,.08); border-color:#d9e3e6; }\n\n.marwann-program-visual {\n\n    position:relative; display:flex; align-items:center; justify-content:center;\n\n    margin:14px 14px 0; aspect-ratio:1.78/1; border-radius:13px; overflow:hidden;\n\n    background:linear-gradient(135deg,#e6efed,#d5e4e0 58%,#c3dad5);\n\n}\n\n/* JPG gallery slots: click any available photo to open it in Fancybox. */\n\n.marwann-program-photo-link {\n\n    position:absolute; inset:0; z-index:1; display:block; opacity:0;\n\n    color:inherit; text-decoration:none; transition:opacity .2s ease;\n\n}\n\n.marwann-program-photo-link.is-loaded { opacity:1; }\n\n.marwann-program-photo-link img {\n\n    display:block; width:100%; height:100%; object-fit:cover;\n\n    transition:transform .35s ease;\n\n}\n\n.marwann-program-photo-link:focus-visible {\n\n    opacity:1; outline:3px solid #f7d95d; outline-offset:-4px;\n\n}\n\n.marwann-program-card:hover .marwann-program-visual.has-image .marwann-program-photo-link img { transform:scale(1.035); }\n\n.marwann-program-visual.has-image .marwann-program-photo-placeholder { display:none; }\n\n.marwann-program-photo-placeholder {\n\n    position:relative; z-index:0; display:flex; flex-direction:column;\n\n    align-items:center; justify-content:center; gap:9px; width:100%; height:100%;\n\n}\n\n.marwann-program-photo-note {\n\n    color:#38645e; font-size:10px; font-weight:700;\n\n    letter-spacing:.06em; text-transform:uppercase;\n\n}\n\n.program-photo-open {\n\n    position:absolute; right:12px; bottom:12px; display:grid; place-items:center;\n\n    width:36px; height:36px; border-radius:50%; color:#075d56;\n\n    background:rgba(255,255,255,.94); box-shadow:0 4px 15px rgba(0,0,0,.18);\n\n}\n\n.marwann-program-tag { z-index:2; }\n\n.marwann-program-visual .program-symbol {\n\n    display:grid; place-items:center; width:70px; height:70px;\n\n    border-radius:50%; color:#075d56; background:rgba(255,255,255,.84);\n\n    border:1px solid rgba(7,93,86,.12); font-size:30px;\n\n    box-shadow:0 8px 24px rgba(7,50,45,.08);\n\n}\n\n.marwann-program-visual.visual-health { background:linear-gradient(135deg,#e8f4f2,#d2e9e5 55%,#c2ded8); }\n\n.marwann-program-visual.visual-community { background:linear-gradient(135deg,#f5f0df,#e9e2c9 55%,#dfd5b2); }\n\n.marwann-program-visual.visual-skill { background:linear-gradient(135deg,#edf0f8,#dfe5f4 55%,#cfd8ed); }\n\n.marwann-program-tag {\n\n    position:absolute; left:10px; right:auto; top:auto; bottom:10px; border-radius:999px;\n\n    background:rgba(15,23,42,.88); color:#fff; font-size:9px;\n\n    font-weight:800; letter-spacing:.06em; padding:5px 9px; text-transform:uppercase;\n\n}\n\n.marwann-program-body { display:flex; flex:1; flex-direction:column; padding:15px 18px 17px; }\n\n.marwann-program-body h2 { color:#142331; font-size:16px; line-height:1.35; font-weight:700; margin:0 0 7px; min-height:42px; }\n\n.marwann-program-body p { color:#64748b; font-size:12px; line-height:1.65; margin:0 0 14px; min-height:40px; }\n\n.marwann-program-meta { margin-top:auto; display:flex; align-items:center; gap:6px; padding-bottom:13px; }\n\n.marwann-program-pill { display:inline-flex; align-items:center; gap:6px; border-radius:999px; padding:5px 9px; background:#e7f7f0; color:#087653; font-size:10px; line-height:1.2; font-weight:700; }\n\n.marwann-program-actions { display:flex; align-items:center; gap:8px; border-top:1px solid #edf0f2; padding-top:10px; }\n\n.marwann-program-actions .program-primary {\n\n    display:flex; flex:1; justify-content:center; align-items:center; gap:8px;\n\n    border:0; border-radius:999px; padding:9px 12px; background:#075d56;\n\n    color:#fff; font-size:11px; line-height:1.2; font-weight:700;\n\n    text-decoration:none; transition:background .2s ease;\n\n}\n\n.marwann-program-actions .program-primary:hover { background:#06433e; color:#fff; }\n\n.marwann-program-actions .program-secondary {\n\n    display:inline-flex; justify-content:center; align-items:center;\n\n    border:1px solid #e4e9ec; border-radius:999px; background:#fff;\n\n    color:#263746; padding:8px 12px; font-size:11px; font-weight:700;\n\n    text-decoration:none; white-space:nowrap;\n\n}\n\n.marwann-program-actions .program-secondary:hover { background:#f7f9fa; color:#08776e; }\n\n.marwann-program-empty { display:none; text-align:center; padding:38px 18px; color:#64748b; }\n\n@media(max-width:767.98px) {\n\n    .marwann-programs { padding-top:22px; }\n\n    .marwann-program-filters { flex-wrap:nowrap; overflow-x:auto; padding:10px 0; }\n\n    .marwann-program-filter { flex:0 0 auto; }\n\n    .marwann-program-body h2,.marwann-program-body p { min-height:0; }\n\n}\n\n"

const css3 = "\n\n/* Dark green navigation strip with readable white controls */\n\n.header-section-1 .header-bottom-layout-2 {\n\n    background: #064f49 !important;\n\n    background-color: #064f49 !important;\n\n    box-shadow: 0 6px 22px rgba(0, 0, 0, .12);\n\n}\n\n.header-section-1 .header-middle,\n\n.header-section-1 .header-left,\n\n.header-section-1 .header-right {\n\n    background: transparent !important;\n\n}\n\n.header-section-1 .main-menu-2 > ul > li > a,\n\n.header-section-1 .header-info-content span,\n\n.header-section-1 .header-info-content p,\n\n.header-section-1 .header-info-content p a {\n\n    color: #fff !important;\n\n}\n\n.header-section-1 .main-menu-2 > ul > li > a:hover,\n\n.header-section-1 .main-menu-2 > ul > li.active > a {\n\n    color: #f7d95d !important;\n\n}\n\n.header-section-1 .header-bar-3 .bar {\n\n    background-color: #fff !important;\n\n}\n\n.header-section-1 .header-info-icon {\n\n    color: #f7d95d !important;\n\n}\n\n@media (max-width: 1199.98px) {\n\n    .header-section-1 .header-bottom-layout-2 {\n\n        background: #064f49 !important;\n\n    }\n\n}\n\n"

const css4 = "\n\n/* Keep the programme heading clear of the overlaid site header. */\n\n.marwann-programs { padding-top: 145px !important; }\n\n@media (min-width: 768px) and (max-width: 1199.98px) {\n\n    .marwann-programs { padding-top: 132px !important; }\n\n}\n\n@media (max-width: 767.98px) {\n\n    .marwann-programs { padding-top: 98px !important; }\n\n}\n\n"

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
      <style dangerouslySetInnerHTML={{ __html: css2 }} />
      <style dangerouslySetInnerHTML={{ __html: css3 }} />
      <style dangerouslySetInnerHTML={{ __html: css4 }} />
      <main>
        <section className="marwann-programs">
          <div className="container">
            <div className="marwann-programs-intro" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <div className="eyebrow">Our Programmes</div>
              <h1>Serving Communities Through Action</h1>
              <p>
                MARWANN CHARITABLE TRUST undertakes charitable activities focused on education, healthcare, humanitarian assistance and community well-being. Explore the activity areas below.
              </p>
            </div>
          </div>
          <div className="marwann-program-filter-wrap">
            <div className="container">
              <div className="marwann-program-filters" role="group" aria-label="Filter programmes by category">
                <button type="button" className="marwann-program-filter is-active" data-program-filter="all" aria-pressed="true">
                  All
                  {" "}
                  <span className="count">9</span>
                </button>
                {" "}
                <button type="button" className="marwann-program-filter" data-program-filter="education" aria-pressed="false">
                  {"Education & Skills"}
                  {" "}
                  <span className="count">1</span>
                </button>
                {" "}
                <button type="button" className="marwann-program-filter" data-program-filter="health" aria-pressed="false">
                  {"Health & Wellness"}
                  {" "}
                  <span className="count">3</span>
                </button>
                {" "}
                <button type="button" className="marwann-program-filter" data-program-filter="community" aria-pressed="false">
                  Community Support
                  {" "}
                  <span className="count">5</span>
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row marwann-program-grid row-gap-4" id="marwann-program-grid">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="community" data-aos="fade-up" data-aos-duration="800">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-community">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/child-orphanage-support.webp" data-fancybox="marwann-program-gallery" data-caption="Child Orphanage Support" aria-label="Open photo: Child Orphanage Support">
                      <img src="/assets/img/gallery/child-orphanage-support.webp" alt="Child Orphanage Support" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-hands-holding-heart" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">Community Support</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Child Orphanage Support</h2>
                    <p>Providing charitable assistance to children in orphanages.</p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Child Welfare</span>
                    </div>
                    <div className="marwann-program-actions">
                     <Link
  className="program-primary"
  href="/programs/child-orphanage-support"
>
  View Program
  <i className="fa-regular fa-arrow-right" aria-hidden="true" />
</Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="community" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-community">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/covid-food-distribution.webp" data-fancybox="marwann-program-gallery" data-caption="COVID-19 Food Distribution" aria-label="Open photo: COVID-19 Food Distribution">
                      <img src="/assets/img/gallery/covid-food-distribution.webp" alt="COVID-19 Food Distribution" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-bowl-food" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">Community Support</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>COVID-19 Food Distribution</h2>
                    <p>
                      Food distribution to support communities during the COVID-19 pandemic.
                    </p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Food Assistance</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="health" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-health">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/nilavembu-kasayam-distribution.webp" data-fancybox="marwann-program-gallery" data-caption="Nilavembu Kasayam Distribution" aria-label="Open photo: Nilavembu Kasayam Distribution">
                      <img src="/assets/img/gallery/nilavembu-kasayam-distribution.webp" alt="Nilavembu Kasayam Distribution" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-heart-pulse" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">{"Health & Wellness"}</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Nilavembu Kasayam Distribution</h2>
                    <p>
                      Distributing Nilavembu Kasayam in communities and public institutions.
                    </p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Health Activity</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="health" data-aos="fade-up" data-aos-duration="800">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-health">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/eye-camp.webp" data-fancybox="marwann-program-gallery" data-caption="Eye Camps" aria-label="Open photo: Eye Camps">
                      <img src="/assets/img/gallery/eye-camp.webp" alt="Eye Camps" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-eye" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">{"Health & Wellness"}</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Eye Camps</h2>
                    <p>Organising eye camps as part of the trust's healthcare activities.</p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Eye Care</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="community" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-community">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/rice-bag.webp" data-fancybox="marwann-program-gallery" data-caption="Rice Bag Distribution" aria-label="Open photo: Rice Bag Distribution">
                      <img src="/assets/img/gallery/rice-bag.webp" alt="Rice Bag Distribution" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-bowl-food" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">Community Support</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Rice Bag Distribution</h2>
                    <p>
                      Providing rice bags as part of the trust's food assistance activities.
                    </p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Food Assistance</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="community" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-community">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/flood.webp" data-fancybox="marwann-program-gallery" data-caption="Independence Day and Flood Relief" aria-label="Open photo: Independence Day and Flood Relief">
                      <img src="/assets/img/gallery/flood.webp" alt="Independence Day and Flood Relief" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-house-crack" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">Community Support</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>{"Independence Day & Flood Relief"}</h2>
                    <p>
                      Supporting Independence Day activities and providing flood relief assistance.
                    </p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">{"Relief & Support"}</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="community" data-aos="fade-up" data-aos-duration="800">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-community">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/old-age.webp" data-fancybox="marwann-program-gallery" data-caption="Old Age Home Support" aria-label="Open photo: Old Age Home Support">
                      <img src="/assets/img/gallery/old-age.webp" alt="Old Age Home Support" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-person-cane" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">Community Support</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Old Age Home Support</h2>
                    <p>Extending charitable support to residents of old age homes.</p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Senior Care</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="health" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-health">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/medical-assistance.webp" data-fancybox="marwann-program-gallery" data-caption="Medical Assistance" aria-label="Open photo: Medical Assistance">
                      <img src="/assets/img/gallery/medical-assistance.webp" alt="Medical Assistance" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-heart-pulse" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">{"Health & Wellness"}</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Medical Assistance</h2>
                    <p>Providing medical help to people in need.</p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Medical Support</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-program-item" data-program-category="education" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
                <article className="marwann-program-card">
                  <div className="marwann-program-visual visual-skill">
                    <a className="marwann-program-photo-link" href="/assets/img/gallery/tailoring.webp" data-fancybox="marwann-program-gallery" data-caption="Women's Tailoring Classes" aria-label="Open photo: Women's Tailoring Classes">
                      <img src="/assets/img/gallery/tailoring.webp" alt="Women's Tailoring Classes" loading="lazy" />
                      {" "}
                      <span className="program-photo-open" aria-hidden="true">
                        <i className="fa-regular fa-magnifying-glass-plus"></i>
                      </span>
                    </a>
                    <div className="marwann-program-photo-placeholder" aria-hidden="true">
                      <span className="program-symbol">
                        <i className="fa-light fa-scissors" aria-hidden="true"></i>
                      </span>
                      {" "}
                      <span className="program-photo-note">Photograph to be added</span>
                    </div>
                    <span className="marwann-program-tag">{"Education & Skills"}</span>
                  </div>
                  <div className="marwann-program-body">
                    <h2>Women's Tailoring Classes</h2>
                    <p>Conducting tailoring classes to develop practical skills among women.</p>
                    <div className="marwann-program-meta">
                      <span className="marwann-program-pill">Skill Development</span>
                    </div>
                    <div className="marwann-program-actions">
                      <Link className="program-primary" href="/gallery">
                        View Program
                        {" "}
                        <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                      {" "}
                      <Link className="program-secondary" href="/contact">Contact</Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="marwann-program-empty" id="marwann-program-empty" aria-live="polite">No activities are listed in this category yet.</div>
          </div>
        </section>
      </main>
      <PageScript code={"\n\n    document.addEventListener(\"DOMContentLoaded\", function () {\n\n        // Show a JPG only after it loads; missing files retain the designed placeholder.\n\n        document.querySelectorAll(\".marwann-program-photo-link img\").forEach(function (image) {\n\n            const link = image.closest(\".marwann-program-photo-link\");\n\n            const visual = image.closest(\".marwann-program-visual\");\n\n            function showPhoto() {\n\n                if (image.naturalWidth > 0) {\n\n                    visual.classList.add(\"has-image\");\n\n                    link.classList.add(\"is-loaded\");\n\n                }\n\n            }\n\n            image.addEventListener(\"load\", showPhoto);\n\n            image.addEventListener(\"error\", function () {\n\n                link.style.display = \"none\";\n\n            });\n\n            if (image.complete && image.naturalWidth > 0) showPhoto();\n\n        });\n\n        if (window.Fancybox && typeof window.Fancybox.bind === \"function\") {\n\n            window.Fancybox.bind('[data-fancybox=\"marwann-program-gallery\"]', {});\n\n        }\n\n        const filters = document.querySelectorAll(\"[data-program-filter]\");\n\n        const cards = document.querySelectorAll(\".marwann-program-item\");\n\n        const empty = document.getElementById(\"marwann-program-empty\");\n\n        filters.forEach(function (filter) {\n\n            filter.addEventListener(\"click\", function () {\n\n                const selected = filter.getAttribute(\"data-program-filter\");\n\n                let visibleCount = 0;\n\n                filters.forEach(function (button) {\n\n                    const active = button === filter;\n\n                    button.classList.toggle(\"is-active\", active);\n\n                    button.setAttribute(\"aria-pressed\", active ? \"true\" : \"false\");\n\n                });\n\n                cards.forEach(function (card) {\n\n                    const visible = selected === \"all\" ||\n\n                        card.getAttribute(\"data-program-category\") === selected;\n\n                    card.hidden = !visible;\n\n                    if (visible) visibleCount += 1;\n\n                });\n\n                if (empty) empty.style.display = visibleCount ? \"none\" : \"block\";\n\n            });\n\n        });\n\n    });\n\n    "} />
    </>
  )
}
