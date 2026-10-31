/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageScript from '@/components/PageScript'

export const metadata = {
  "title": "Volunteer | MARWANN CHARITABLE TRUST",
  "description": "Volunteer with MARWANN CHARITABLE TRUST to support education, healthcare and community welfare activities."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

const css1 = "\n.work-page-intro { max-width: 820px; margin: 0 auto; }\n.work-card {\n    height: 100%; padding: 30px 26px; background: #fff;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 16px;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n    transition: transform .25s ease, box-shadow .25s ease;\n}\n.work-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,48,43,.10); }\n.work-card .work-icon {\n    width: 54px; height: 54px; display: grid; place-items: center;\n    border-radius: 50%; color: #075d56; background: #f8f3d8;\n    font-size: 22px; margin-bottom: 18px;\n}\n.work-card .work-number {\n    display: inline-block; color: #08776e; font-size: 12px;\n    letter-spacing: .12em; font-weight: 800; margin-bottom: 7px;\n}\n.work-card h3 { font-size: 20px; margin-bottom: 10px; }\n.work-card p { color: #69716f; margin: 0; font-size: 15px; }\n.work-category {\n    padding: 34px; height: 100%; border-radius: 18px;\n    background: #fff; border: 1px solid rgba(6,79,73,.10);\n}\n.work-category h3 { margin-bottom: 14px; }\n.work-category ul { list-style: none; padding: 0; margin: 0; }\n.work-category li { position: relative; padding: 9px 0 9px 25px; color: #56615e; border-bottom: 1px solid rgba(6,79,73,.08); }\n.work-category li:last-child { border-bottom: 0; }\n.work-category li i { position: absolute; left: 0; top: 13px; color: #08776e; }\n.campaign-empty {\n    max-width: 850px; margin: 0 auto; padding: 58px 34px;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 20px;\n    background: #fff; text-align: center;\n    box-shadow: 0 14px 40px rgba(13,48,43,.06);\n}\n.campaign-empty .empty-icon {\n    width: 82px; height: 82px; display: grid; place-items: center;\n    margin: 0 auto 22px; background: #f8f3d8; color: #075d56;\n    border-radius: 50%; font-size: 32px;\n}\n.campaign-empty h2 { margin-bottom: 12px; }\n.campaign-empty p { max-width: 630px; margin: 0 auto 24px; color: #69716f; }\n.gallery-card {\n    height: 100%; background: #fff; border: 1px solid rgba(6,79,73,.10);\n    border-radius: 16px; overflow: hidden;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n}\n.gallery-card .gallery-photo { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #e8efed; }\n.gallery-card .gallery-photo img {\n    display: block; width: 100%; height: 100%; object-fit: cover;\n    transition: transform .35s ease;\n}\n.gallery-card:hover .gallery-photo img { transform: scale(1.04); }\n.gallery-card .gallery-caption { padding: 20px 22px 22px; }\n.gallery-card .gallery-caption span {\n    display: block; color: #08776e; font-size: 11px; font-weight: 800;\n    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;\n}\n.gallery-card .gallery-caption h3 { font-size: 18px; margin: 0; }\n.gallery-note {\n    max-width: 800px; margin: 30px auto 0; text-align: center;\n    color: #69716f; font-size: 14px;\n}\n@media (max-width: 767.98px) {\n    .work-card, .work-category { padding: 25px 22px; }\n    .campaign-empty { padding: 42px 22px; }\n}\n"

const css2 = "\n/* Program areas: aligned archive-style card grid */\n.marwann-programs { background:#f8f7f0; padding:34px 0 110px; }\n.marwann-programs-intro { max-width:820px; margin:0 auto 36px; text-align:center; }\n.marwann-programs-intro .eyebrow {\n    color:#08776e; font-size:12px; font-weight:800; letter-spacing:.14em;\n    text-transform:uppercase; margin-bottom:9px;\n}\n.marwann-programs-intro h1 {\n    color:#17212b; font-size:clamp(28px,3vw,38px); line-height:1.2;\n    font-weight:750; margin:0 0 10px;\n}\n.marwann-programs-intro p { color:#64748b; font-size:14px; line-height:1.7; margin:0 auto; max-width:760px; }\n.marwann-program-filter-wrap { border-top:1px solid #e7ecef; border-bottom:1px solid #e7ecef; background:rgba(255,255,255,.84); margin-bottom:30px; }\n.marwann-program-filters { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:12px 0; }\n.marwann-program-filter {\n    appearance:none; border:1px solid transparent; border-radius:999px;\n    background:transparent; color:#64748b; padding:8px 14px;\n    font:inherit; font-size:12px; font-weight:600; line-height:1.2;\n    cursor:pointer; white-space:nowrap; transition:background .2s,color .2s,border-color .2s;\n}\n.marwann-program-filter .count {\n    display:inline-flex; min-width:20px; height:20px; margin-left:6px;\n    align-items:center; justify-content:center; border-radius:999px;\n    background:#edf2f4; color:#52616b; font-size:10px; font-weight:800; padding:0 6px;\n}\n.marwann-program-filter:hover { background:#f2f5f6; color:#142331; }\n.marwann-program-filter.is-active { background:#075d56; color:#fff; border-color:#075d56; }\n.marwann-program-filter.is-active .count { background:rgba(255,255,255,.18); color:#fff; }\n.marwann-program-item[hidden] { display:none !important; }\n.marwann-program-card {\n    display:flex; flex-direction:column; height:100%; overflow:hidden;\n    background:#fff; border:1px solid #e8edf0; border-radius:18px;\n    box-shadow:0 2px 4px rgba(15,23,42,.025);\n    transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;\n}\n.marwann-program-card:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(15,23,42,.08); border-color:#d9e3e6; }\n.marwann-program-visual {\n    position:relative; display:flex; align-items:center; justify-content:center;\n    margin:14px 14px 0; aspect-ratio:1.78/1; border-radius:13px; overflow:hidden;\n    background:linear-gradient(135deg,#e6efed,#d5e4e0 58%,#c3dad5);\n}\n.marwann-program-visual.has-image img {\n    display:block; width:100%; height:100%; object-fit:cover;\n    transition:transform .35s ease;\n}\n.marwann-program-card:hover .marwann-program-visual.has-image img { transform:scale(1.035); }\n.marwann-program-visual .program-symbol {\n    display:grid; place-items:center; width:70px; height:70px;\n    border-radius:50%; color:#075d56; background:rgba(255,255,255,.84);\n    border:1px solid rgba(7,93,86,.12); font-size:30px;\n    box-shadow:0 8px 24px rgba(7,50,45,.08);\n}\n.marwann-program-visual.visual-health { background:linear-gradient(135deg,#e8f4f2,#d2e9e5 55%,#c2ded8); }\n.marwann-program-visual.visual-community { background:linear-gradient(135deg,#f5f0df,#e9e2c9 55%,#dfd5b2); }\n.marwann-program-visual.visual-skill { background:linear-gradient(135deg,#edf0f8,#dfe5f4 55%,#cfd8ed); }\n.marwann-program-tag {\n    position:absolute; left:10px; top:10px; border-radius:999px;\n    background:rgba(15,23,42,.88); color:#fff; font-size:9px;\n    font-weight:800; letter-spacing:.06em; padding:5px 9px; text-transform:uppercase;\n}\n.marwann-program-body { display:flex; flex:1; flex-direction:column; padding:15px 18px 17px; }\n.marwann-program-body h2 { color:#142331; font-size:16px; line-height:1.35; font-weight:700; margin:0 0 7px; min-height:42px; }\n.marwann-program-body p { color:#64748b; font-size:12px; line-height:1.65; margin:0 0 14px; min-height:40px; }\n.marwann-program-meta { margin-top:auto; display:flex; align-items:center; gap:6px; padding-bottom:13px; }\n.marwann-program-pill { display:inline-flex; align-items:center; gap:6px; border-radius:999px; padding:5px 9px; background:#e7f7f0; color:#087653; font-size:10px; line-height:1.2; font-weight:700; }\n.marwann-program-actions { display:flex; align-items:center; gap:8px; border-top:1px solid #edf0f2; padding-top:10px; }\n.marwann-program-actions .program-primary {\n    display:flex; flex:1; justify-content:center; align-items:center; gap:8px;\n    border:0; border-radius:999px; padding:9px 12px; background:#075d56;\n    color:#fff; font-size:11px; line-height:1.2; font-weight:700;\n    text-decoration:none; transition:background .2s ease;\n}\n.marwann-program-actions .program-primary:hover { background:#06433e; color:#fff; }\n.marwann-program-actions .program-secondary {\n    display:inline-flex; justify-content:center; align-items:center;\n    border:1px solid #e4e9ec; border-radius:999px; background:#fff;\n    color:#263746; padding:8px 12px; font-size:11px; font-weight:700;\n    text-decoration:none; white-space:nowrap;\n}\n.marwann-program-actions .program-secondary:hover { background:#f7f9fa; color:#08776e; }\n.marwann-program-empty { display:none; text-align:center; padding:38px 18px; color:#64748b; }\n@media(max-width:767.98px) {\n    .marwann-programs { padding-top:22px; }\n    .marwann-program-filters { flex-wrap:nowrap; overflow-x:auto; padding:10px 0; }\n    .marwann-program-filter { flex:0 0 auto; }\n    .marwann-program-body h2,.marwann-program-body p { min-height:0; }\n}\n"

const css3 = "\n/* Dark green navigation strip with readable white controls */\n.header-section-1 .header-bottom-layout-2 {\n    background: #064f49 !important;\n    background-color: #064f49 !important;\n    box-shadow: 0 6px 22px rgba(0, 0, 0, .12);\n}\n.header-section-1 .header-middle,\n.header-section-1 .header-left,\n.header-section-1 .header-right {\n    background: transparent !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a,\n.header-section-1 .header-info-content span,\n.header-section-1 .header-info-content p,\n.header-section-1 .header-info-content p a {\n    color: #fff !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a:hover,\n.header-section-1 .main-menu-2 > ul > li.active > a {\n    color: #f7d95d !important;\n}\n.header-section-1 .header-bar-3 .bar {\n    background-color: #fff !important;\n}\n.header-section-1 .header-info-icon {\n    color: #f7d95d !important;\n}\n@media (max-width: 1199.98px) {\n    .header-section-1 .header-bottom-layout-2 {\n        background: #064f49 !important;\n    }\n}\n"

const css4 = "\n.marwann-volunteer-hero {\n    padding:64px 0 56px; position:relative; overflow:hidden;\n    background:linear-gradient(135deg,#064f49 0%,#073d39 70%,#092f2d 100%);\n    text-align:center;\n}\n.marwann-volunteer-hero .container { position:relative; z-index:1; }\n.marwann-volunteer-hero .volunteer-breadcrumb {\n    display:flex; justify-content:center; align-items:center; flex-wrap:wrap;\n}\n.marwann-volunteer-hero .volunteer-eyebrow,\n.marwann-volunteer-hero h1 { text-align:center; }\n.marwann-volunteer-hero:before,.marwann-volunteer-hero:after {\n    content:\"\";position:absolute;border:1px solid rgba(255,255,255,.12);\n    border-radius:50%;pointer-events:none;\n}\n.marwann-volunteer-hero:before { width:400px;height:400px;right:-130px;top:-220px; }\n.marwann-volunteer-hero:after { width:280px;height:280px;right:-70px;top:-160px; }\n.marwann-volunteer-hero .volunteer-eyebrow {\n    color:#f7d95d;font-size:12px;font-weight:800;letter-spacing:.14em;\n    text-transform:uppercase;margin-bottom:10px;\n}\n.marwann-volunteer-hero h1 {\n    color:#fff;font-size:clamp(30px,4vw,46px);font-weight:750;\n    line-height:1.15;margin:0 0 12px;\n}\n.marwann-volunteer-hero p {\n    max-width:790px;color:rgba(255,255,255,.82);\n    font-size:15px;line-height:1.75;margin:0 auto;text-align:center;\n}\n.marwann-volunteer-hero .volunteer-breadcrumb {\n    color:rgba(255,255,255,.76);font-size:12px;margin-bottom:15px;\n}\n.marwann-volunteer-hero .volunteer-breadcrumb a {\n    color:#fff;text-decoration:none;\n}\n.marwann-volunteer-hero .volunteer-breadcrumb i {\n    color:#f7d95d;margin:0 8px;\n}\n.marwann-volunteer-main { background:#f8f7f0;padding:65px 0 90px; }\n.marwann-volunteer-intro { max-width:820px;margin:0 auto 38px;text-align:center; }\n.marwann-volunteer-intro .eyebrow {\n    color:#08776e;font-size:12px;font-weight:800;letter-spacing:.14em;\n    text-transform:uppercase;margin-bottom:9px;\n}\n.marwann-volunteer-intro h2 {\n    color:#17212b;font-size:clamp(26px,3vw,36px);line-height:1.2;\n    font-weight:750;margin:0 0 10px;\n}\n.marwann-volunteer-intro p {\n    color:#64748b;font-size:14px;line-height:1.7;margin:0;\n}\n.marwann-opportunity-card {\n    height:100%;padding:25px 23px;background:#fff;\n    border:1px solid rgba(6,79,73,.10);border-radius:16px;\n    box-shadow:0 8px 25px rgba(13,48,43,.045);\n    transition:transform .25s ease,box-shadow .25s ease;\n}\n.marwann-opportunity-card:hover {\n    transform:translateY(-3px);box-shadow:0 14px 30px rgba(13,48,43,.09);\n}\n.marwann-opportunity-icon {\n    width:50px;height:50px;display:grid;place-items:center;\n    border-radius:50%;background:#e5f1ed;color:#075d56;\n    font-size:21px;margin-bottom:15px;\n}\n.marwann-opportunity-card h3 {\n    color:#17212b;font-size:17px;line-height:1.35;\n    font-weight:750;margin:0 0 8px;\n}\n.marwann-opportunity-card p {\n    color:#64748b;font-size:13px;line-height:1.65;margin:0;\n}\n.marwann-volunteer-form-panel {\n    background:#fff;border:1px solid rgba(6,79,73,.10);\n    border-radius:18px;box-shadow:0 12px 35px rgba(13,48,43,.06);\n    padding:32px;height:100%;\n}\n.marwann-volunteer-form-panel h2 {\n    color:#17212b;font-size:23px;font-weight:750;margin:0 0 8px;\n}\n.marwann-volunteer-form-panel .form-intro {\n    color:#64748b;font-size:13px;line-height:1.65;margin:0 0 24px;\n}\n.marwann-volunteer-form .field-group { margin-bottom:17px; }\n.marwann-volunteer-form label.field-label {\n    display:block;color:#17212b;font-size:13px;font-weight:700;margin-bottom:7px;\n}\n.marwann-volunteer-form .form-control,\n.marwann-volunteer-form .form-select {\n    width:100%;min-height:46px;border:1px solid #dce6e3;\n    border-radius:9px;padding:10px 13px;font:inherit;\n    font-size:14px;color:#20312f;background:#fff;\n}\n.marwann-volunteer-form .form-control:focus,\n.marwann-volunteer-form .form-select:focus {\n    border-color:#08776e;box-shadow:0 0 0 .2rem rgba(8,119,110,.12);\n}\n.marwann-volunteer-form .consent-wrap {\n    display:flex;align-items:flex-start;gap:9px;\n    color:#64748b;font-size:12px;line-height:1.55;margin:5px 0 20px;\n}\n.marwann-volunteer-form .consent-wrap input {\n    flex:0 0 auto;margin-top:3px;accent-color:#075d56;\n}\n.marwann-volunteer-submit {\n    width:100%;display:flex;align-items:center;justify-content:center;gap:10px;\n    border:0;border-radius:999px;background:#075d56;color:#fff;\n    padding:14px 18px;font-size:14px;font-weight:800;cursor:pointer;\n    transition:background .2s ease;\n}\n.marwann-volunteer-submit:hover { background:#06433e;color:#fff; }\n.marwann-volunteer-submit:focus-visible { outline:3px solid #f7d95d;outline-offset:3px; }\n.marwann-volunteer-note {\n    border:1px solid #d9e7e2;border-radius:11px;background:#eef6f3;\n    padding:14px 16px;color:#42605a;font-size:12px;line-height:1.65;\n}\n.marwann-volunteer-status {\n    display:none;margin-top:15px;border:1px solid #e9c46a;\n    border-radius:10px;background:#fff8df;padding:13px 15px;\n    color:#6c5210;font-size:13px;line-height:1.55;\n}\n.marwann-volunteer-contact {\n    height:100%;padding:30px;border-radius:18px;\n    background:#064f49;color:#fff;\n}\n.marwann-volunteer-contact h3 { color:#fff;font-size:20px;font-weight:750;margin:0 0 10px; }\n.marwann-volunteer-contact p { color:rgba(255,255,255,.8);font-size:13px;line-height:1.7; }\n.marwann-volunteer-contact a { color:#f7d95d;text-decoration:none; }\n.marwann-volunteer-contact .contact-line {\n    display:flex;align-items:flex-start;gap:11px;margin-top:17px;\n    color:rgba(255,255,255,.9);font-size:13px;line-height:1.5;\n}\n.marwann-volunteer-contact .contact-line i {\n    flex:0 0 20px;color:#f7d95d;margin-top:2px;\n}\n@media(max-width:767.98px) {\n    .marwann-volunteer-hero { padding:48px 0 40px; }\n    .marwann-volunteer-main { padding:42px 0 65px; }\n    .marwann-volunteer-form-panel,.marwann-volunteer-contact { padding:23px; }\n}\n"

const VOLUNTEER_SCRIPT = "\n(function () {\n  var form = document.getElementById(\"marwann-volunteer-form\");\n  var status = document.getElementById(\"volunteer-status\");\n  if (!form) return;\n  function show(msg, ok) {\n    if (!status) return;\n    status.textContent = msg;\n    status.style.display = \"block\";\n    status.style.color = ok ? \"#0b5d44\" : \"#8a1f14\";\n    status.scrollIntoView({ behavior: \"smooth\", block: \"nearest\" });\n  }\n  form.addEventListener(\"submit\", async function (event) {\n    event.preventDefault();\n    if (!form.reportValidity()) return;\n    var fd = new FormData(form);\n    var btn = form.querySelector(\"button[type=submit]\");\n    if (btn) btn.disabled = true;\n    show(\"Sending your application\u2026\", true);\n    try {\n      var res = await fetch(\"/api/backend/volunteer-applications\", {\n        method: \"POST\",\n        headers: { \"Content-Type\": \"application/json\" },\n        body: JSON.stringify({\n          name: fd.get(\"name\"), phone: fd.get(\"mobile\"), email: fd.get(\"email\"), location: fd.get(\"location\"),\n          preferred_programme: fd.get(\"area\"), availability: fd.get(\"availability\"), skills: fd.get(\"skills\") || null,\n          interests: fd.get(\"message\") || null, consent: Boolean(fd.get(\"consent\")), website: \"\"\n        })\n      });\n      var json = await res.json().catch(function () { return {}; });\n      if (!res.ok) {\n        var first = json.errors ? Object.values(json.errors)[0] : null;\n        throw new Error((first && first[0]) || json.message || \"Could not submit your application.\");\n      }\n      form.reset();\n      show(\"Thank you. Your application has been received and the team will contact you soon.\", true);\n    } catch (e) {\n      show(e.message, false);\n    } finally {\n      if (btn) btn.disabled = false;\n    }\n  });\n})();\n"

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
      <style dangerouslySetInnerHTML={{ __html: css2 }} />
      <style dangerouslySetInnerHTML={{ __html: css3 }} />
      <style dangerouslySetInnerHTML={{ __html: css4 }} />
      <main>
        <section className="marwann-volunteer-hero">
          <div className="container">
            <div className="volunteer-breadcrumb">
              <Link href="/">Home</Link>
              {" "}
              <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
              {" "}
              <span>Engage</span>
              {" "}
              <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
              {" "}
              <span>Volunteer</span>
            </div>
            <div className="volunteer-eyebrow">Be Part of the Change</div>
            <h1>Volunteer With MARWANN</h1>
            <p>
              Share your time, skills and compassion to support charitable activities in education, healthcare, food assistance and community welfare. Every helping hand can contribute to meaningful service.
            </p>
          </div>
        </section>
        <section className="marwann-volunteer-main">
          <div className="container">
            <div className="marwann-volunteer-intro" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
              <div className="eyebrow">Volunteer Opportunities</div>
              <h2>Make Your Time Meaningful</h2>
              <p>
                Volunteers can express interest in supporting the Trust's charitable activities. Opportunities and participation are coordinated according to programme needs and availability.
              </p>
            </div>
            <div className="row row-gap-4 m-b-60">
              <div className="col-xl-4 col-md-6">
                <div className="marwann-opportunity-card" data-aos="fade-up" data-aos-duration="800">
                  <div className="marwann-opportunity-icon">
                    <i className="fa-light fa-book-open" aria-hidden="true"></i>
                  </div>
                  <h3>{"Education & Learning"}</h3>
                  <p>
                    Express interest in educational support and learning initiatives for deserving students.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="marwann-opportunity-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
                  <div className="marwann-opportunity-icon">
                    <i className="fa-light fa-heart-pulse" aria-hidden="true"></i>
                  </div>
                  <h3>{"Health & Medical Activities"}</h3>
                  <p>
                    Support the coordination of health camps, awareness activities and medical assistance programmes.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="marwann-opportunity-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
                  <div className="marwann-opportunity-icon">
                    <i className="fa-light fa-bowl-food" aria-hidden="true"></i>
                  </div>
                  <h3>{"Food & Essential Support"}</h3>
                  <p>
                    Help with the organisation of food distribution and essential-supply assistance.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="marwann-opportunity-card" data-aos="fade-up" data-aos-duration="800">
                  <div className="marwann-opportunity-icon">
                    <i className="fa-light fa-house-crack" aria-hidden="true"></i>
                  </div>
                  <h3>{"Emergency & Relief Support"}</h3>
                  <p>
                    Register interest in assisting with community relief activities when support is required.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="marwann-opportunity-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
                  <div className="marwann-opportunity-icon">
                    <i className="fa-light fa-scissors" aria-hidden="true"></i>
                  </div>
                  <h3>Women's Skill Development</h3>
                  <p>
                    Contribute relevant skills or coordination support to women's tailoring and skill-development activities.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="marwann-opportunity-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
                  <div className="marwann-opportunity-icon">
                    <i className="fa-light fa-hand-holding-heart" aria-hidden="true"></i>
                  </div>
                  <h3>Community Welfare</h3>
                  <p>
                    Show interest in supporting children, senior citizens and other community welfare activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="row row-gap-4 align-items-stretch">
              <div className="col-xl-8 col-lg-7">
                <div className="marwann-volunteer-form-panel" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                  <h2>Volunteer Registration</h2>
                  <p className="form-intro">
                    Complete the form to express your interest in volunteering. The Trust can contact you to discuss suitable opportunities.
                  </p>
                  <form id="marwann-volunteer-form" className="marwann-volunteer-form" noValidate>
                    <div className="row">
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="volunteer-name">Full Name *</label>
                        {" "}
                        <input className="form-control" id="volunteer-name" name="name" type="text" maxLength="120" autoComplete="name" placeholder="Enter your full name" required />
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="volunteer-mobile">Mobile Number *</label>
                        {" "}
                        <input className="form-control" id="volunteer-mobile" name="mobile" type="tel" inputMode="numeric" maxLength="10" pattern={"[6-9][0-9]{9}"} autoComplete="tel-national" placeholder="10-digit mobile number" required />
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="volunteer-email">Email Address *</label>
                        {" "}
                        <input className="form-control" id="volunteer-email" name="email" type="email" maxLength="160" autoComplete="email" placeholder="name@example.com" required />
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="volunteer-location">City / District</label>
                        {" "}
                        <input className="form-control" id="volunteer-location" name="location" type="text" maxLength="120" autoComplete="address-level2" placeholder="e.g., Vellore" />
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="volunteer-area">Area of Interest *</label>
                        {" "}
                        <select className="form-select" id="volunteer-area" name="area" required>
                          <option value="">Select an area</option>
                          <option>{"Education & Learning"}</option>
                          <option>{"Health & Medical Activities"}</option>
                          <option>{"Food & Essential Support"}</option>
                          <option>{"Emergency & Relief Support"}</option>
                          <option>Women's Skill Development</option>
                          <option>Community Welfare</option>
                          <option>General Volunteer Support</option>
                        </select>
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="volunteer-availability">Availability *</label>
                        {" "}
                        <select className="form-select" id="volunteer-availability" name="availability" required>
                          <option value="">Select availability</option>
                          <option>Weekdays</option>
                          <option>Weekends</option>
                          <option>Both weekdays and weekends</option>
                          <option>Occasional / Event-based</option>
                          <option>To be discussed</option>
                        </select>
                      </div>
                      <div className="col-12 field-group">
                        <label className="field-label" htmlFor="volunteer-skills">Skills or Experience</label>
                        {" "}
                        <input className="form-control" id="volunteer-skills" name="skills" type="text" maxLength="300" placeholder="e.g., Teaching, healthcare, event coordination" />
                      </div>
                      <div className="col-12 field-group">
                        <label className="field-label" htmlFor="volunteer-message">Why would you like to volunteer?</label>
                        {" "}
                        <textarea className="form-control" id="volunteer-message" name="message" rows="4" maxLength="1000" placeholder="Tell us briefly about your interest (optional)" />
                      </div>
                    </div>
                    <label className="consent-wrap" htmlFor="volunteer-consent">
                      <input type="checkbox" id="volunteer-consent" name="consent" required />
                      {" "}
                      <span>
                        I agree that MARWANN CHARITABLE TRUST may use the details submitted here to contact me about volunteering. *
                      </span>
                    </label>
                    <div className="marwann-volunteer-note">
                      <strong>Note:</strong>
                      {" "}
                      This registration form is a front-end preview. Registration details are not yet sent to the Trust until a secure backend and privacy-compliant submission process are connected.
                    </div>
                    <button type="submit" className="marwann-volunteer-submit m-t-25">
                      Submit Volunteer Interest
                      {" "}
                      <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    <div className="marwann-volunteer-status" id="volunteer-status" role="status" aria-live="polite"></div>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <aside className="marwann-volunteer-contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
                  <h3>Have Questions?</h3>
                  <p>
                    For more information about volunteering and participation, contact MARWANN CHARITABLE TRUST.
                  </p>
                  <div className="contact-line">
                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                    {" "}
                    <span>
                      No. 19, Kullathu Medu, 2nd Street, Kamaraj Nagar,
                      <br />
                      Virupachipuram, Vellore – 632002,
                      <br />
                      Tamil Nadu, India.
                    </span>
                  </div>
                  <div className="contact-line">
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                    {" "}
                    <span>
                      <a href="mailto:marwanncharitabletrust2001@gmail.com">marwanncharitabletrust2001@gmail.com</a>
                    </span>
                  </div>
                  <div className="contact-line">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                    {" "}
                    <span>
                      <a href="tel:+919597831666">+91 95978 31666</a>
                      <br />
                      <a href="tel:+917418741961">+91 74187 41961</a>
                      <br />
                      <a href="tel:+918056116777">+91 80561 16777</a>
                    </span>
                  </div>
                  <div className="m-t-30">
                    <Link href="/program-areas" className="e-primary-btn is-hover-white">Explore Our Work</Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageScript code={VOLUNTEER_SCRIPT} />
    </>
  )
}
