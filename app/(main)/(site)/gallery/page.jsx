/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { getGallery, CATEGORIES } from '@/lib/store'
import PageScript from '@/components/PageScript'

export const metadata = {
  "title": "Photo Gallery | MARWANN CHARITABLE TRUST",
  "description": "View photographs of community activities shared for MARWANN CHARITABLE TRUST."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

const css1 = "\n.work-page-intro { max-width: 820px; margin: 0 auto; }\n.work-card {\n    height: 100%; padding: 30px 26px; background: #fff;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 16px;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n    transition: transform .25s ease, box-shadow .25s ease;\n}\n.work-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,48,43,.10); }\n.work-card .work-icon {\n    width: 54px; height: 54px; display: grid; place-items: center;\n    border-radius: 50%; color: #075d56; background: #f8f3d8;\n    font-size: 22px; margin-bottom: 18px;\n}\n.work-card .work-number {\n    display: inline-block; color: #08776e; font-size: 12px;\n    letter-spacing: .12em; font-weight: 800; margin-bottom: 7px;\n}\n.work-card h3 { font-size: 20px; margin-bottom: 10px; }\n.work-card p { color: #69716f; margin: 0; font-size: 15px; }\n.work-category {\n    padding: 34px; height: 100%; border-radius: 18px;\n    background: #fff; border: 1px solid rgba(6,79,73,.10);\n}\n.work-category h3 { margin-bottom: 14px; }\n.work-category ul { list-style: none; padding: 0; margin: 0; }\n.work-category li { position: relative; padding: 9px 0 9px 25px; color: #56615e; border-bottom: 1px solid rgba(6,79,73,.08); }\n.work-category li:last-child { border-bottom: 0; }\n.work-category li i { position: absolute; left: 0; top: 13px; color: #08776e; }\n.campaign-empty {\n    max-width: 850px; margin: 0 auto; padding: 58px 34px;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 20px;\n    background: #fff; text-align: center;\n    box-shadow: 0 14px 40px rgba(13,48,43,.06);\n}\n.campaign-empty .empty-icon {\n    width: 82px; height: 82px; display: grid; place-items: center;\n    margin: 0 auto 22px; background: #f8f3d8; color: #075d56;\n    border-radius: 50%; font-size: 32px;\n}\n.campaign-empty h2 { margin-bottom: 12px; }\n.campaign-empty p { max-width: 630px; margin: 0 auto 24px; color: #69716f; }\n.gallery-card {\n    height: 100%; background: #fff; border: 1px solid rgba(6,79,73,.10);\n    border-radius: 16px; overflow: hidden;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n}\n.gallery-card .gallery-photo { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #e8efed; }\n.gallery-card .gallery-photo img {\n    display: block; width: 100%; height: 100%; object-fit: cover;\n    transition: transform .35s ease;\n}\n.gallery-card:hover .gallery-photo img { transform: scale(1.04); }\n.gallery-card .gallery-caption { padding: 20px 22px 22px; }\n.gallery-card .gallery-caption span {\n    display: block; color: #08776e; font-size: 11px; font-weight: 800;\n    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;\n}\n.gallery-card .gallery-caption h3 { font-size: 18px; margin: 0; }\n.gallery-note {\n    max-width: 800px; margin: 30px auto 0; text-align: center;\n    color: #69716f; font-size: 14px;\n}\n@media (max-width: 767.98px) {\n    .work-card, .work-category { padding: 25px 22px; }\n    .campaign-empty { padding: 42px 22px; }\n}\n"

const css2 = "\n/* MARWANN gallery hero and archive layout */\n.marwann-gallery-hero {\n    position:relative; overflow:hidden;\n    /* Reserve room for the navigation, which overlays the page at the top. */\n    padding:180px 0 52px;\n    color:#fff; text-align:center;\n    background:linear-gradient(135deg,#064f49 0%,#073d39 68%,#092f2d 100%);\n}\n.marwann-gallery-hero::before,.marwann-gallery-hero::after {\n    content:\"\"; position:absolute; border:1px solid rgba(255,255,255,.13);\n    border-radius:50%; pointer-events:none;\n}\n.marwann-gallery-hero::before { width:390px; height:390px; top:-235px; right:-95px; }\n.marwann-gallery-hero::after { width:270px; height:270px; top:-175px; right:-35px; }\n.marwann-gallery-hero .container { position:relative; z-index:1; }\n.marwann-gallery-breadcrumb {\n    display:flex; align-items:center; justify-content:center; flex-wrap:wrap;\n    gap:8px; margin-bottom:20px; color:rgba(255,255,255,.74); font-size:12px;\n}\n.marwann-gallery-breadcrumb a { color:#fff; text-decoration:none; }\n.marwann-gallery-breadcrumb a:hover { color:#f7d95d; }\n.marwann-gallery-breadcrumb i { color:#f7d95d; font-size:10px; }\n.marwann-gallery-hero-copy { max-width:850px; margin:0 auto; }\n.marwann-gallery-eyebrow {\n    display:inline-block; margin-bottom:10px; color:#f7d95d; font-size:11px;\n    font-weight:800; letter-spacing:.16em; text-transform:uppercase;\n}\n.marwann-gallery-hero h1 {\n    color:#fff; font-size:clamp(30px,4vw,46px); font-weight:750;\n    line-height:1.15; text-align:center; margin:0 0 12px;\n}\n.marwann-gallery-hero p {\n    max-width:760px; margin:0 auto; color:rgba(255,255,255,.84);\n    font-size:15px; line-height:1.7; text-align:center;\n}\n.marwann-gallery-archive { background:#f8f7f0; padding:30px 0 90px; }\n.marwann-gallery-heading { padding:0; }\n.marwann-gallery-heading .eyebrow {\n    color:#0a766e; font-size:12px; font-weight:800;\n    letter-spacing:.14em; text-transform:uppercase; margin-bottom:9px;\n}\n.marwann-gallery-heading h1 {\n    color:#17212b; font-size:clamp(28px, 3vw, 38px);\n    line-height:1.2; font-weight:750; margin:0 0 10px;\n}\n.marwann-gallery-heading p { color:#64748b; max-width:760px; margin:0; font-size:14px; line-height:1.7; }\n.marwann-gallery-filter-wrap {\n    border-top:1px solid #e7ecef; border-bottom:1px solid #e7ecef;\n    background:rgba(255,255,255,.84); margin-bottom:28px;\n}\n.marwann-gallery-filters {\n    display:flex; align-items:center; gap:8px; flex-wrap:wrap;\n    padding:12px 0;\n}\n.marwann-gallery-filter {\n    appearance:none; border:1px solid transparent; border-radius:999px;\n    background:transparent; color:#64748b; padding:8px 14px;\n    font:inherit; font-size:12px; font-weight:600; line-height:1.2; cursor:pointer; white-space:nowrap;\n    transition:background .2s ease,color .2s ease,border-color .2s ease;\n}\n.marwann-gallery-filter .count {\n    display:inline-flex; min-width:20px; height:20px; margin-left:6px;\n    align-items:center; justify-content:center; border-radius:999px;\n    background:#edf2f4; color:#52616b; font-size:10px; font-weight:800;\n    padding:0 6px;\n}\n.marwann-gallery-filter:hover { background:#f2f5f6; color:#0e2730; }\n.marwann-gallery-filter.is-active {\n    background:#075d56; color:#fff; border-color:#075d56;\n}\n.marwann-gallery-filter.is-active .count { background:rgba(255,255,255,.18); color:#fff; }\n.marwann-gallery-grid { align-items:stretch; }\n.marwann-gallery-item[hidden] { display:none !important; }\n.marwann-gallery-card {\n    height:100%; display:flex; flex-direction:column; overflow:hidden;\n    border:1px solid #e8edf0; border-radius:18px; background:#fff;\n    box-shadow:0 2px 4px rgba(15,23,42,.025);\n    transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;\n}\n.marwann-gallery-card:hover {\n    transform:translateY(-3px); box-shadow:0 12px 28px rgba(15,23,42,.08);\n    border-color:#d9e3e6;\n}\n.marwann-gallery-image {\n    position:relative; display:block; margin:14px 14px 0;\n    height:auto; aspect-ratio:1.78 / 1; border-radius:13px;\n    overflow:hidden; background:#f1f5f6;\n}\n.marwann-gallery-image img {\n    display:block; width:100%; height:100%; object-fit:cover;\n    transition:transform .35s ease;\n}\n.marwann-gallery-card:hover .marwann-gallery-image img { transform:scale(1.035); }\n.marwann-gallery-category {\n    position:absolute; left:10px; top:10px; border-radius:999px;\n    background:rgba(15,23,42,.88); color:#fff; font-size:9px;\n    font-weight:800; letter-spacing:.06em; padding:5px 9px;\n    text-transform:uppercase;\n}\n.marwann-gallery-content { padding:14px 18px 17px; display:flex; flex:1; flex-direction:column; }\n.marwann-gallery-content h2 {\n    color:#142331; font-size:16px; line-height:1.35; font-weight:700;\n    margin:0 0 7px;\n}\n.marwann-gallery-content p {\n    color:#64748b; font-size:12px; line-height:1.65; margin:0 0 14px;\n    min-height:40px;\n}\n.marwann-gallery-meta {\n    display:flex; align-items:center; flex-wrap:wrap; gap:6px; margin-top:auto;\n    padding-bottom:13px;\n}\n.marwann-gallery-pill {\n    display:inline-flex; align-items:center; gap:6px; border-radius:999px;\n    padding:5px 9px; font-size:10px; line-height:1.2; font-weight:700;\n    background:#e7f7f0; color:#087653;\n}\n.marwann-gallery-actions {\n    display:flex; align-items:center; gap:8px; border-top:1px solid #edf0f2;\n    padding-top:10px;\n}\n.marwann-gallery-actions .gallery-primary {\n    display:flex; flex:1; justify-content:center; align-items:center; gap:8px;\n    border:0; border-radius:999px; padding:9px 12px; background:#075d56;\n    color:#fff; font-size:11px; line-height:1.2; font-weight:700;\n    text-decoration:none; transition:background .2s ease;\n}\n.marwann-gallery-actions .gallery-primary:hover { background:#06433e; color:#fff; }\n.marwann-gallery-actions .gallery-secondary {\n    display:inline-flex; align-items:center; justify-content:center;\n    border:1px solid #e4e9ec; border-radius:999px; background:#fff;\n    color:#263746; padding:8px 12px; font-size:11px; font-weight:700;\n    text-decoration:none; white-space:nowrap;\n}\n.marwann-gallery-actions .gallery-secondary:hover { background:#f7f9fa; color:#0a766e; }\n.marwann-gallery-empty {\n    display:none; text-align:center; padding:38px 18px; color:#64748b;\n}\n@media (min-width:768px) and (max-width:1199.98px) {\n    .marwann-gallery-hero { padding-top:158px; }\n}\n@media(max-width:767.98px) {\n    .marwann-gallery-hero { padding:112px 0 42px; }\n    .marwann-gallery-archive { padding-top:22px; }\n    .marwann-gallery-filters { flex-wrap:nowrap; overflow-x:auto; padding:10px 0; }\n    .marwann-gallery-filter { flex:0 0 auto; }\n    .marwann-gallery-content p { min-height:0; }\n}\n"

const css3 = "\n.header-section-1 .header-bottom-layout-2 {\n    background:#064f49 !important;\n    background-color:#064f49 !important;\n    box-shadow:0 6px 22px rgba(0,0,0,.12);\n}\n.header-section-1 .header-middle,\n.header-section-1 .header-left,\n.header-section-1 .header-right {\n    background:transparent !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a,\n.header-section-1 .header-info-content span,\n.header-section-1 .header-info-content p,\n.header-section-1 .header-info-content p a {\n    color:#fff !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a:hover,\n.header-section-1 .main-menu-2 > ul > li.active > a {\n    color:#f7d95d !important;\n}\n.header-section-1 .header-bar-3 .bar {\n    background-color:#fff !important;\n}\n.header-section-1 .header-info-icon {\n    color:#f7d95d !important;\n}\n@media(max-width:1199.98px) {\n    .header-section-1 .header-bottom-layout-2 {\n        background:#064f49 !important;\n    }\n}\n"

const css4 = "\n.marwann-gallery-placeholder {\n    position:relative; display:flex; flex-direction:column;\n    align-items:center; justify-content:center; gap:10px;\n    text-align:center; color:#075d56;\n    background:linear-gradient(135deg,#e8f2ef 0%,#d8e8e3 58%,#c9dfd9 100%);\n}\n.marwann-gallery-placeholder.community {\n    background:linear-gradient(135deg,#f5f1df 0%,#ece5c9 58%,#e1d9b6 100%);\n}\n.marwann-gallery-placeholder.skill {\n    background:linear-gradient(135deg,#edf0f8 0%,#dfe5f4 58%,#cfd8ed 100%);\n}\n.marwann-gallery-placeholder .placeholder-icon {\n    display:grid; place-items:center; width:64px; height:64px;\n    border-radius:50%; background:rgba(255,255,255,.88);\n    border:1px solid rgba(7,93,86,.10); font-size:26px;\n    box-shadow:0 8px 24px rgba(7,50,45,.08);\n}\n.marwann-gallery-placeholder .placeholder-note {\n    font-size:10px; font-weight:700; letter-spacing:.06em;\n    color:#38645e; text-transform:uppercase;\n}\n.marwann-gallery-placeholder .marwann-gallery-optional-photo {\n    position:absolute; inset:0; z-index:0; display:block;\n    width:100%; height:100%; object-fit:cover;\n}\n.marwann-gallery-placeholder .placeholder-icon,\n.marwann-gallery-placeholder .placeholder-note { position:relative; z-index:1; }\n.marwann-gallery-placeholder.has-photo .placeholder-icon,\n.marwann-gallery-placeholder.has-photo .placeholder-note { display:none; }\n.marwann-gallery-placeholder.has-photo { display:block; }\n.marwann-gallery-placeholder.is-photo-pending { cursor:default; }\n.marwann-gallery-placeholder.is-photo-pending:hover { transform:none; }\n.marwann-gallery-category { z-index:2; }\n.marwann-gallery-card .marwann-gallery-content h2 { min-height:42px; }\n.marwann-gallery-card .marwann-gallery-content p { min-height:40px; }\n.marwann-gallery-card .marwann-gallery-meta { min-height:34px; }\n.marwann-gallery-actions .gallery-primary {\n    background:#075d56 !important; color:#fff !important;\n}\n.marwann-gallery-actions .gallery-primary:hover {\n    background:#06433e !important; color:#fff !important;\n}\n.marwann-gallery-filter.is-active {\n    background:#075d56 !important; color:#fff !important;\n    border-color:#075d56 !important;\n}\n"

const PLACEHOLDER_CLASS = { community: 'community', education: 'skill', health: '' }
const PLACEHOLDER_ICON = { community: 'fa-hands-holding-heart', education: 'fa-graduation-cap', health: 'fa-heart-pulse' }

function formatDate(d) {
  return new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
}

export default async function Page() {
  const items = (await getGallery()).filter((i) => i.visible !== false)
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
      <style dangerouslySetInnerHTML={{ __html: css2 }} />
      <style dangerouslySetInnerHTML={{ __html: css3 }} />
      <style dangerouslySetInnerHTML={{ __html: css4 }} />
      <main>
        <section className="marwann-gallery-hero" aria-labelledby="gallery-page-title">
          <div className="container">
            <div className="marwann-gallery-hero-copy">
              <span className="marwann-gallery-eyebrow">MARWANN CHARITABLE TRUST · OUR WORK</span>
              <h1 id="gallery-page-title">Moments of Service</h1>
              <p>
                Explore the trust's charitable activities across healthcare, education, food assistance and community welfare. Activity photographs will be added as they become available.
              </p>
            </div>
          </div>
        </section>
        <section className="marwann-gallery-archive">
          <div className="marwann-gallery-filter-wrap">
            <div className="container">
              <div className="marwann-gallery-filters" role="group" aria-label="Filter gallery by category">
                <button type="button" className="marwann-gallery-filter is-active" data-gallery-filter="all" aria-pressed="true">
                  All
                  {" "}
                  <span className="count">9</span>
                </button>
                {" "}
                <button type="button" className="marwann-gallery-filter" data-gallery-filter="education" aria-pressed="false">
                  {"Education & Skills"}
                  {" "}
                  <span className="count">1</span>
                </button>
                {" "}
                <button type="button" className="marwann-gallery-filter" data-gallery-filter="health" aria-pressed="false">
                  {"Health & Wellness"}
                  {" "}
                  <span className="count">3</span>
                </button>
                {" "}
                <button type="button" className="marwann-gallery-filter" data-gallery-filter="community" aria-pressed="false">
                  Community Support
                  {" "}
                  <span className="count">5</span>
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row marwann-gallery-grid row-gap-4" id="marwann-gallery-grid">
              {items.map((it) => (
                <div key={it.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 marwann-gallery-item" data-gallery-category={it.category}>
                  <article className="marwann-gallery-card">
                    <a
                      className={'marwann-gallery-image marwann-gallery-placeholder ' + (PLACEHOLDER_CLASS[it.category] || '') + (it.image ? '' : ' is-photo-pending')}
                      {...(it.image
                        ? { href: it.image, 'data-fancybox': 'marwann-gallery', 'data-caption': it.title }
                        : { 'aria-disabled': 'true' })}
                    >
                      {it.image && (
                        <img className="marwann-gallery-optional-photo" src={it.image} alt={it.alt || it.title} loading="lazy" />
                      )}{' '}
                      <span className="placeholder-icon">
                        <i className={'fa-light ' + (PLACEHOLDER_ICON[it.category] || 'fa-image')} aria-hidden="true"></i>
                      </span>{' '}
                      <span className="placeholder-note">Photograph to be added</span>{' '}
                      <span className="marwann-gallery-category">{CATEGORIES[it.category]}</span>
                    </a>
                    <div className="marwann-gallery-content">
                      <h2>{it.title}</h2>
                      {it.description && <p>{it.description}</p>}
                      <div className="marwann-gallery-meta">
                        <span className="marwann-gallery-pill">
                          <i className="fa-regular fa-image" aria-hidden="true"></i> Photo pending
                        </span>
                        {it.date && (
                          <>
                            {' '}
                            <span className="marwann-gallery-pill">
                              <i className="fa-regular fa-calendar" aria-hidden="true"></i> {formatDate(it.date)}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="marwann-gallery-actions">
                        <Link className="gallery-primary" href="/program-areas">
                          Explore Activity <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                        </Link>{' '}
                        <Link className="gallery-secondary" href="/contact">Contact</Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <div className="marwann-gallery-empty" id="marwann-gallery-empty" aria-live="polite">No activities are available in this category.</div>
            <p className="gallery-note">
              Photographs marked as pending can be replaced with actual activity images as they are provided.
            </p>
          </div>
        </section>
      </main>
      <PageScript code={"\n    document.addEventListener(\"DOMContentLoaded\", function () {\n        // Optional gallery images: add the named file under assets/img/gallery/.\n        // If the file is missing, the designed placeholder remains visible.\n        document.querySelectorAll(\".marwann-gallery-optional-photo\").forEach(function (photo) {\n            const media = photo.closest(\".marwann-gallery-image\");\n            const card = photo.closest(\".marwann-gallery-card\");\n            const badge = card ? card.querySelector(\".marwann-gallery-meta .marwann-gallery-pill\") : null;\n\n            function photoLoaded() {\n                if (!media) return;\n                media.classList.add(\"has-photo\");\n                if (badge) {\n                    badge.innerHTML = '<i class=\"fa-regular fa-image\" aria-hidden=\"true\"></i> Activity Photo';\n                }\n            }\n\n            function photoMissing() {\n                photo.remove();\n                if (media) {\n                    media.classList.add(\"is-photo-pending\");\n                    media.removeAttribute(\"href\");\n                    media.removeAttribute(\"data-fancybox\");\n                    media.removeAttribute(\"data-caption\");\n                    media.setAttribute(\"aria-disabled\", \"true\");\n                }\n            }\n\n            photo.addEventListener(\"load\", photoLoaded);\n            photo.addEventListener(\"error\", photoMissing);\n            if (photo.complete) {\n                if (photo.naturalWidth > 0) photoLoaded();\n                else photoMissing();\n            }\n        });\n\n        const filters = document.querySelectorAll(\"[data-gallery-filter]\");\n        const cards = document.querySelectorAll(\".marwann-gallery-item\");\n        const empty = document.getElementById(\"marwann-gallery-empty\");\n\n        filters.forEach(function (filter) {\n            filter.addEventListener(\"click\", function () {\n                const selected = filter.getAttribute(\"data-gallery-filter\");\n                let visibleCount = 0;\n\n                filters.forEach(function (button) {\n                    const active = button === filter;\n                    button.classList.toggle(\"is-active\", active);\n                    button.setAttribute(\"aria-pressed\", active ? \"true\" : \"false\");\n                });\n\n                cards.forEach(function (card) {\n                    const visible = selected === \"all\" ||\n                        card.getAttribute(\"data-gallery-category\") === selected;\n                    card.hidden = !visible;\n                    if (visible) visibleCount += 1;\n                });\n\n                if (empty) empty.style.display = visibleCount ? \"none\" : \"block\";\n            });\n        });\n    });\n    "} />
    </>
  )
}
