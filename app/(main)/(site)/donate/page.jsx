/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PageScript from '@/components/PageScript'

export const metadata = {
  "title": "Donate | MARWANN CHARITABLE TRUST",
  "description": "Support the charitable work of MARWANN CHARITABLE TRUST through a donation."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

const css1 = "\n.work-page-intro { max-width: 820px; margin: 0 auto; }\n.work-card {\n    height: 100%; padding: 30px 26px; background: #fff;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 16px;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n    transition: transform .25s ease, box-shadow .25s ease;\n}\n.work-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,48,43,.10); }\n.work-card .work-icon {\n    width: 54px; height: 54px; display: grid; place-items: center;\n    border-radius: 50%; color: #075d56; background: #f8f3d8;\n    font-size: 22px; margin-bottom: 18px;\n}\n.work-card .work-number {\n    display: inline-block; color: #08776e; font-size: 12px;\n    letter-spacing: .12em; font-weight: 800; margin-bottom: 7px;\n}\n.work-card h3 { font-size: 20px; margin-bottom: 10px; }\n.work-card p { color: #69716f; margin: 0; font-size: 15px; }\n.work-category {\n    padding: 34px; height: 100%; border-radius: 18px;\n    background: #fff; border: 1px solid rgba(6,79,73,.10);\n}\n.work-category h3 { margin-bottom: 14px; }\n.work-category ul { list-style: none; padding: 0; margin: 0; }\n.work-category li { position: relative; padding: 9px 0 9px 25px; color: #56615e; border-bottom: 1px solid rgba(6,79,73,.08); }\n.work-category li:last-child { border-bottom: 0; }\n.work-category li i { position: absolute; left: 0; top: 13px; color: #08776e; }\n.campaign-empty {\n    max-width: 850px; margin: 0 auto; padding: 58px 34px;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 20px;\n    background: #fff; text-align: center;\n    box-shadow: 0 14px 40px rgba(13,48,43,.06);\n}\n.campaign-empty .empty-icon {\n    width: 82px; height: 82px; display: grid; place-items: center;\n    margin: 0 auto 22px; background: #f8f3d8; color: #075d56;\n    border-radius: 50%; font-size: 32px;\n}\n.campaign-empty h2 { margin-bottom: 12px; }\n.campaign-empty p { max-width: 630px; margin: 0 auto 24px; color: #69716f; }\n.gallery-card {\n    height: 100%; background: #fff; border: 1px solid rgba(6,79,73,.10);\n    border-radius: 16px; overflow: hidden;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n}\n.gallery-card .gallery-photo { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #e8efed; }\n.gallery-card .gallery-photo img {\n    display: block; width: 100%; height: 100%; object-fit: cover;\n    transition: transform .35s ease;\n}\n.gallery-card:hover .gallery-photo img { transform: scale(1.04); }\n.gallery-card .gallery-caption { padding: 20px 22px 22px; }\n.gallery-card .gallery-caption span {\n    display: block; color: #08776e; font-size: 11px; font-weight: 800;\n    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;\n}\n.gallery-card .gallery-caption h3 { font-size: 18px; margin: 0; }\n.gallery-note {\n    max-width: 800px; margin: 30px auto 0; text-align: center;\n    color: #69716f; font-size: 14px;\n}\n@media (max-width: 767.98px) {\n    .work-card, .work-category { padding: 25px 22px; }\n    .campaign-empty { padding: 42px 22px; }\n}\n"

const css2 = "\n/* Program areas: aligned archive-style card grid */\n.marwann-programs { background:#f8f7f0; padding:34px 0 110px; }\n.marwann-programs-intro { max-width:820px; margin:0 auto 36px; text-align:center; }\n.marwann-programs-intro .eyebrow {\n    color:#08776e; font-size:12px; font-weight:800; letter-spacing:.14em;\n    text-transform:uppercase; margin-bottom:9px;\n}\n.marwann-programs-intro h1 {\n    color:#17212b; font-size:clamp(28px,3vw,38px); line-height:1.2;\n    font-weight:750; margin:0 0 10px;\n}\n.marwann-programs-intro p { color:#64748b; font-size:14px; line-height:1.7; margin:0 auto; max-width:760px; }\n.marwann-program-filter-wrap { border-top:1px solid #e7ecef; border-bottom:1px solid #e7ecef; background:rgba(255,255,255,.84); margin-bottom:30px; }\n.marwann-program-filters { display:flex; flex-wrap:wrap; align-items:center; gap:8px; padding:12px 0; }\n.marwann-program-filter {\n    appearance:none; border:1px solid transparent; border-radius:999px;\n    background:transparent; color:#64748b; padding:8px 14px;\n    font:inherit; font-size:12px; font-weight:600; line-height:1.2;\n    cursor:pointer; white-space:nowrap; transition:background .2s,color .2s,border-color .2s;\n}\n.marwann-program-filter .count {\n    display:inline-flex; min-width:20px; height:20px; margin-left:6px;\n    align-items:center; justify-content:center; border-radius:999px;\n    background:#edf2f4; color:#52616b; font-size:10px; font-weight:800; padding:0 6px;\n}\n.marwann-program-filter:hover { background:#f2f5f6; color:#142331; }\n.marwann-program-filter.is-active { background:#075d56; color:#fff; border-color:#075d56; }\n.marwann-program-filter.is-active .count { background:rgba(255,255,255,.18); color:#fff; }\n.marwann-program-item[hidden] { display:none !important; }\n.marwann-program-card {\n    display:flex; flex-direction:column; height:100%; overflow:hidden;\n    background:#fff; border:1px solid #e8edf0; border-radius:18px;\n    box-shadow:0 2px 4px rgba(15,23,42,.025);\n    transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;\n}\n.marwann-program-card:hover { transform:translateY(-3px); box-shadow:0 12px 28px rgba(15,23,42,.08); border-color:#d9e3e6; }\n.marwann-program-visual {\n    position:relative; display:flex; align-items:center; justify-content:center;\n    margin:14px 14px 0; aspect-ratio:1.78/1; border-radius:13px; overflow:hidden;\n    background:linear-gradient(135deg,#e6efed,#d5e4e0 58%,#c3dad5);\n}\n.marwann-program-visual.has-image img {\n    display:block; width:100%; height:100%; object-fit:cover;\n    transition:transform .35s ease;\n}\n.marwann-program-card:hover .marwann-program-visual.has-image img { transform:scale(1.035); }\n.marwann-program-visual .program-symbol {\n    display:grid; place-items:center; width:70px; height:70px;\n    border-radius:50%; color:#075d56; background:rgba(255,255,255,.84);\n    border:1px solid rgba(7,93,86,.12); font-size:30px;\n    box-shadow:0 8px 24px rgba(7,50,45,.08);\n}\n.marwann-program-visual.visual-health { background:linear-gradient(135deg,#e8f4f2,#d2e9e5 55%,#c2ded8); }\n.marwann-program-visual.visual-community { background:linear-gradient(135deg,#f5f0df,#e9e2c9 55%,#dfd5b2); }\n.marwann-program-visual.visual-skill { background:linear-gradient(135deg,#edf0f8,#dfe5f4 55%,#cfd8ed); }\n.marwann-program-tag {\n    position:absolute; left:10px; top:10px; border-radius:999px;\n    background:rgba(15,23,42,.88); color:#fff; font-size:9px;\n    font-weight:800; letter-spacing:.06em; padding:5px 9px; text-transform:uppercase;\n}\n.marwann-program-body { display:flex; flex:1; flex-direction:column; padding:15px 18px 17px; }\n.marwann-program-body h2 { color:#142331; font-size:16px; line-height:1.35; font-weight:700; margin:0 0 7px; min-height:42px; }\n.marwann-program-body p { color:#64748b; font-size:12px; line-height:1.65; margin:0 0 14px; min-height:40px; }\n.marwann-program-meta { margin-top:auto; display:flex; align-items:center; gap:6px; padding-bottom:13px; }\n.marwann-program-pill { display:inline-flex; align-items:center; gap:6px; border-radius:999px; padding:5px 9px; background:#e7f7f0; color:#087653; font-size:10px; line-height:1.2; font-weight:700; }\n.marwann-program-actions { display:flex; align-items:center; gap:8px; border-top:1px solid #edf0f2; padding-top:10px; }\n.marwann-program-actions .program-primary {\n    display:flex; flex:1; justify-content:center; align-items:center; gap:8px;\n    border:0; border-radius:999px; padding:9px 12px; background:#075d56;\n    color:#fff; font-size:11px; line-height:1.2; font-weight:700;\n    text-decoration:none; transition:background .2s ease;\n}\n.marwann-program-actions .program-primary:hover { background:#06433e; color:#fff; }\n.marwann-program-actions .program-secondary {\n    display:inline-flex; justify-content:center; align-items:center;\n    border:1px solid #e4e9ec; border-radius:999px; background:#fff;\n    color:#263746; padding:8px 12px; font-size:11px; font-weight:700;\n    text-decoration:none; white-space:nowrap;\n}\n.marwann-program-actions .program-secondary:hover { background:#f7f9fa; color:#08776e; }\n.marwann-program-empty { display:none; text-align:center; padding:38px 18px; color:#64748b; }\n@media(max-width:767.98px) {\n    .marwann-programs { padding-top:22px; }\n    .marwann-program-filters { flex-wrap:nowrap; overflow-x:auto; padding:10px 0; }\n    .marwann-program-filter { flex:0 0 auto; }\n    .marwann-program-body h2,.marwann-program-body p { min-height:0; }\n}\n"

const css3 = "\n/* Dark green navigation strip with readable white controls */\n.header-section-1 .header-bottom-layout-2 {\n    background: #064f49 !important;\n    background-color: #064f49 !important;\n    box-shadow: 0 6px 22px rgba(0, 0, 0, .12);\n}\n.header-section-1 .header-middle,\n.header-section-1 .header-left,\n.header-section-1 .header-right {\n    background: transparent !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a,\n.header-section-1 .header-info-content span,\n.header-section-1 .header-info-content p,\n.header-section-1 .header-info-content p a {\n    color: #fff !important;\n}\n.header-section-1 .main-menu-2 > ul > li > a:hover,\n.header-section-1 .main-menu-2 > ul > li.active > a {\n    color: #f7d95d !important;\n}\n.header-section-1 .header-bar-3 .bar {\n    background-color: #fff !important;\n}\n.header-section-1 .header-info-icon {\n    color: #f7d95d !important;\n}\n@media (max-width: 1199.98px) {\n    .header-section-1 .header-bottom-layout-2 {\n        background: #064f49 !important;\n    }\n}\n"

const css4 = "\n.donate-hero {\n    padding:64px 0 54px; background:linear-gradient(135deg,#064f49 0%,#073d39 70%,#092f2d 100%);\n    color:#fff; position:relative; overflow:hidden; text-align:center;\n}\n.donate-hero .container { position:relative; z-index:1; }\n.donate-hero .donate-breadcrumb { display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:4px; }\n.donate-hero .donate-eyebrow { text-align:center; }\n.donate-hero h1 { text-align:center; }\n.donate-hero p { margin-left:auto; margin-right:auto; text-align:center; }\n.donate-hero:before,.donate-hero:after { content:\"\";position:absolute;border:1px solid rgba(255,255,255,.12);border-radius:50%;pointer-events:none; }\n.donate-hero:before { width:400px;height:400px;right:-130px;top:-220px; }\n.donate-hero:after { width:280px;height:280px;right:-70px;top:-160px; }\n.donate-hero .donate-eyebrow { color:#f7d95d;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px; }\n.donate-hero h1 { color:#fff;font-size:clamp(30px,4vw,46px);font-weight:750;line-height:1.15;margin:0 0 12px; }\n.donate-hero p { max-width:790px;color:rgba(255,255,255,.82);font-size:15px;line-height:1.75;margin:0; }\n.donate-hero .donate-breadcrumb { color:rgba(255,255,255,.76);font-size:12px;margin-bottom:15px; }\n.donate-hero .donate-breadcrumb a { color:#fff;text-decoration:none; }\n.donate-hero .donate-breadcrumb i { color:#f7d95d;margin:0 8px; }\n.donate-main { background:#f8f7f0;padding:58px 0 86px; }\n.donate-panel { background:#fff;border:1px solid rgba(6,79,73,.10);border-radius:18px;box-shadow:0 12px 35px rgba(13,48,43,.06);padding:30px;height:100%; }\n.donate-panel-title { display:flex;align-items:center;gap:12px;margin-bottom:22px; }\n.donate-panel-title .step {\n    flex:0 0 34px;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;\n    background:#e4f1ed;color:#075d56;font-size:13px;font-weight:800;\n}\n.donate-panel-title h2 { margin:0;color:#17212b;font-size:20px;font-weight:750; }\n.donate-help { color:#64748b;font-size:13px;line-height:1.65;margin:-10px 0 20px 46px; }\n.donate-frequency { display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:22px; }\n.donate-frequency label {\n    position:relative;display:flex;align-items:center;justify-content:center;gap:8px;\n    border:1px solid #dce6e3;border-radius:10px;padding:12px 10px;color:#34514c;\n    font-size:13px;font-weight:700;cursor:pointer;transition:all .2s ease;\n}\n.donate-frequency input { position:absolute;opacity:0;pointer-events:none; }\n.donate-frequency label:has(input:checked) { border-color:#075d56;background:#eaf4f1;color:#064f49;box-shadow:inset 0 0 0 1px #075d56; }\n.donate-frequency label:focus-within { outline:2px solid #08776e;outline-offset:2px; }\n.donate-amount-grid { display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:12px; }\n.donate-amount {\n    min-height:48px;border:1px solid #dce6e3;border-radius:10px;background:#fff;\n    color:#075d56;font-size:15px;font-weight:750;cursor:pointer;transition:all .2s ease;\n}\n.donate-amount:hover { border-color:#075d56;background:#f2f8f6; }\n.donate-amount.is-selected { background:#075d56;border-color:#075d56;color:#fff; }\n.donate-custom-label { display:block;color:#17212b;font-size:13px;font-weight:700;margin:16px 0 7px; }\n.donate-form .form-control,.donate-form .form-select {\n    width:100%;min-height:46px;border:1px solid #dce6e3;border-radius:9px;\n    padding:10px 13px;font:inherit;font-size:14px;color:#20312f;background:#fff;\n}\n.donate-form .form-control:focus,.donate-form .form-select:focus {\n    border-color:#08776e;box-shadow:0 0 0 .2rem rgba(8,119,110,.12);\n}\n.donate-form label.field-label { display:block;color:#17212b;font-size:13px;font-weight:700;margin-bottom:7px; }\n.donate-form .field-group { margin-bottom:17px; }\n.donate-purpose-grid { display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px; }\n.donate-purpose {\n    display:flex;align-items:flex-start;gap:9px;padding:11px;border:1px solid #e0e8e5;\n    border-radius:9px;background:#fff;color:#52615e;font-size:12px;line-height:1.4;cursor:pointer;\n}\n.donate-purpose:has(input:checked) { border-color:#075d56;background:#eef6f3;color:#064f49; }\n.donate-purpose input { margin-top:2px;accent-color:#075d56; }\n.donate-selected {\n    display:flex;align-items:center;justify-content:space-between;gap:12px;\n    border:1px solid #dce9e5;background:#f1f7f5;border-radius:11px;padding:14px 16px;margin:18px 0;\n}\n.donate-selected span { font-size:12px;color:#52615e;font-weight:600; }\n.donate-selected strong { color:#075d56;font-size:22px;font-weight:800; }\n.donate-submit {\n    width:100%;display:flex;align-items:center;justify-content:center;gap:10px;\n    border:0;border-radius:999px;background:#075d56;color:#fff;padding:14px 18px;\n    font-size:14px;font-weight:800;cursor:pointer;transition:background .2s ease;\n}\n.donate-submit:hover { background:#06433e;color:#fff; }\n.donate-submit:focus-visible { outline:3px solid #f7d95d;outline-offset:3px; }\n.donate-disclaimer { font-size:11px;line-height:1.6;color:#77817f;text-align:center;margin:12px 0 0; }\n.donate-notice { border:1px solid #d9e7e2;border-radius:11px;background:#eef6f3;padding:14px 16px;color:#42605a;font-size:12px;line-height:1.65; }\n.donate-impact-card {\n    border:1px solid rgba(6,79,73,.10);border-radius:13px;background:#fff;padding:20px;height:100%;\n}\n.donate-impact-card .impact-icon {\n    width:44px;height:44px;display:grid;place-items:center;border-radius:50%;\n    background:#f8f3d8;color:#075d56;font-size:19px;margin-bottom:12px;\n}\n.donate-impact-card h3 { font-size:16px;color:#17212b;font-weight:750;margin:0 0 6px; }\n.donate-impact-card p { color:#64748b;font-size:12px;line-height:1.55;margin:0; }\n.donate-process { list-style:none;padding:0;margin:0; }\n.donate-process li { display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #edf0f2;color:#52615e;font-size:13px;line-height:1.55; }\n.donate-process li:last-child { border:0; }\n.donate-process .process-icon {\n    flex:0 0 30px;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;\n    background:#e4f1ed;color:#075d56;font-size:12px;font-weight:800;\n}\n.donate-status { display:none;margin-top:15px;border:1px solid #e9c46a;border-radius:10px;background:#fff8df;padding:13px 15px;color:#6c5210;font-size:13px;line-height:1.55; }\n@media(max-width:767.98px) {\n    .donate-hero { padding:48px 0 40px; }\n    .donate-main { padding:40px 0 65px; }\n    .donate-panel { padding:22px; }\n    .donate-amount-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }\n    .donate-purpose-grid { grid-template-columns:1fr; }\n}\n"

const css5 = "\n/* Keep the hero heading and its wrapped description centered in the viewport. */\n.donate-hero .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n.donate-hero .donate-eyebrow,\n.donate-hero h1 {\n    width: 100%;\n    text-align: center !important;\n}\n.donate-hero p {\n    width: 100%;\n    max-width: 790px;\n    margin: 0 auto !important;\n    text-align: center !important;\n}\n"

const css6 = "\n/* Center the donation form and stack support information beneath it. */\n.donate-main > .container > .row.justify-content-center.row-gap-4 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 28px;\n}\n.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-xl-7,\n.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-lg-7,\n.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-xl-5,\n.donate-main > .container > .row.justify-content-center.row-gap-4 > .col-lg-5 {\n    flex: 0 0 auto;\n    width: 100%;\n    max-width: 980px;\n}\n@media (max-width: 767.98px) {\n    .donate-main > .container > .row.justify-content-center.row-gap-4 {\n        gap: 20px;\n    }\n}\n"

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
      <style dangerouslySetInnerHTML={{ __html: css2 }} />
      <style dangerouslySetInnerHTML={{ __html: css3 }} />
      <style dangerouslySetInnerHTML={{ __html: css4 }} />
      <style dangerouslySetInnerHTML={{ __html: css5 }} />
      <style dangerouslySetInnerHTML={{ __html: css6 }} />
      <main>
        <section className="donate-hero">
          <div className="container">
            <div className="donate-breadcrumb">
              <Link href="/">Home</Link>
              <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
              {" "}
              <span>Engage</span>
              <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
              {" "}
              <span>Donate</span>
            </div>
            <div className="donate-eyebrow">We Serve God by Serving Others</div>
            <h1>Make a Difference Through Giving</h1>
            <p>
              Your contribution can help MARWANN CHARITABLE TRUST continue its charitable work in education, healthcare, food assistance, women's skill development and community welfare.
            </p>
          </div>
        </section>
        <section className="donate-main">
          <div className="container">
            <div className="row justify-content-center row-gap-4">
              <div className="col-xl-7 col-lg-7">
                <div className="donate-panel">
                  <form id="marwann-donation-form" className="donate-form" noValidate>
                    <div className="donate-panel-title">
                      <span className="step">1</span>
                      <h2>Choose Donation Type</h2>
                    </div>
                    <div className="donate-frequency" role="radiogroup" aria-label="Donation frequency">
                      <label>
                        <input type="radio" name="frequency" value="one-time" defaultChecked />
                        {" "}
                        <i className="fa-regular fa-heart" aria-hidden="true"></i>
                        {" "}
                        One-Time Donation
                      </label>
                      {" "}
                      <label>
                        <input type="radio" name="frequency" value="monthly" />
                        {" "}
                        <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                        {" "}
                        Monthly Donation
                      </label>
                    </div>
                    <div className="donate-panel-title">
                      <span className="step">2</span>
                      <h2>Select Contribution Amount</h2>
                    </div>
                    <p className="donate-help">Choose a suggested amount or enter a custom contribution.</p>
                    <div className="donate-amount-grid" role="group" aria-label="Suggested donation amounts">
                      <button type="button" className="donate-amount" data-amount="500">₹500</button>
                      {" "}
                      <button type="button" className="donate-amount is-selected" data-amount="1000" aria-pressed="true">₹1,000</button>
                      {" "}
                      <button type="button" className="donate-amount" data-amount="2500">₹2,500</button>
                      {" "}
                      <button type="button" className="donate-amount" data-amount="5000">₹5,000</button>
                      {" "}
                      <button type="button" className="donate-amount" data-amount="10000">₹10,000</button>
                      {" "}
                      <button type="button" className="donate-amount" data-amount="25000">₹25,000</button>
                    </div>
                    <label className="donate-custom-label" htmlFor="custom-amount">Custom Amount (INR)</label>
                    {" "}
                    <input className="form-control" id="custom-amount" name="custom_amount" type="number" min="1" step="1" placeholder="Enter amount in ₹" inputMode="numeric" />
                    <div className="donate-selected" aria-live="polite">
                      <span>Selected Contribution</span>
                      {" "}
                      <strong id="selected-amount">₹1,000</strong>
                    </div>
                    <div className="donate-panel-title m-t-30">
                      <span className="step">3</span>
                      <h2>Donor Details</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-12 field-group">
                        <label className="field-label" htmlFor="donor-name">Full Name *</label>
                        {" "}
                        <input className="form-control" id="donor-name" name="donor_name" type="text" maxLength="120" autoComplete="name" placeholder="Enter your full name" required />
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="donor-email">Email Address *</label>
                        {" "}
                        <input className="form-control" id="donor-email" name="donor_email" type="email" maxLength="160" autoComplete="email" placeholder="name@example.com" required />
                      </div>
                      <div className="col-md-6 field-group">
                        <label className="field-label" htmlFor="donor-phone">Mobile Number *</label>
                        {" "}
                        <input className="form-control" id="donor-phone" name="donor_phone" type="tel" inputMode="numeric" maxLength="10" pattern={"[6-9][0-9]{9}"} autoComplete="tel-national" placeholder="10-digit mobile number" required />
                      </div>
                      <div className="col-12 field-group">
                        <label className="field-label" htmlFor="donor-address">Postal Address</label>
                        {" "}
                        <textarea className="form-control" id="donor-address" name="donor_address" rows="3" maxLength="500" placeholder="Enter your address (optional)" />
                      </div>
                    </div>
                    <div className="donate-panel-title m-t-20">
                      <span className="step">4</span>
                      <h2>Donation Preference</h2>
                    </div>
                    <p className="donate-help">Select the area you would like to support.</p>
                    <div className="donate-purpose-grid">
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value={"Education & Student Support"} defaultChecked />
                        {" "}
                        {"Education & Student Support"}
                      </label>
                      {" "}
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value={"Healthcare & Medical Assistance"} />
                        {" "}
                        {"Healthcare & Medical Assistance"}
                      </label>
                      {" "}
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value={"Food & Essential Support"} />
                        {" "}
                        {"Food & Essential Support"}
                      </label>
                      {" "}
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value={"Emergency & Disaster Relief"} />
                        {" "}
                        {"Emergency & Disaster Relief"}
                      </label>
                      {" "}
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value="Women's Skill Development" />
                        {" "}
                        Women's Skill Development
                      </label>
                      {" "}
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value="Senior Citizen Support" />
                        {" "}
                        Senior Citizen Support
                      </label>
                      {" "}
                      <label className="donate-purpose">
                        <input type="radio" name="purpose" value="General Fund" />
                        {" "}
                        General Fund (where most needed)
                      </label>
                    </div>
                    <div className="donate-notice m-t-25">
                      <strong>Donation receipt:</strong>
                      {" "}
                      A contribution acknowledgement should be generated only after the payment is successfully verified. This page does not claim an 80G tax deduction or provide a tax-exemption certificate. The receipt format and automated delivery must be connected to the Trust's approved records and payment system.
                    </div>
                    <button type="submit" className="donate-submit m-t-25">
                      Continue to Secure Payment
                      {" "}
                      <i className="fa-regular fa-arrow-right" aria-hidden="true"></i>
                    </button>
                    <p className="donate-disclaimer">
                      Payment processing is not yet connected. Submitting this form will not collect money or confirm a donation.
                    </p>
                    <div className="donate-status" id="donate-status" role="status" aria-live="polite"></div>
                  </form>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="engage-panel m-b-25">
                  <div className="engage-icon">
                    <i className="fa-light fa-hand-holding-heart" aria-hidden="true"></i>
                  </div>
                  <h3>Your Support Matters</h3>
                  <p>
                    Contributions help sustain the Trust's charitable activities. Donors may indicate a preference for a programme area; allocation is subject to the Trust's needs and applicable processes.
                  </p>
                  <div className="row row-gap-3 m-t-20">
                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-book-open" aria-hidden="true"></i>
                        </div>
                        <h3>Education</h3>
                        <p>Support for deserving students and learning initiatives.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-heart-pulse" aria-hidden="true"></i>
                        </div>
                        <h3>Healthcare</h3>
                        <p>Medical assistance and community health activities.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-bowl-food" aria-hidden="true"></i>
                        </div>
                        <h3>Essential Support</h3>
                        <p>Food and essential supplies for people in need.</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="donate-impact-card">
                        <div className="impact-icon">
                          <i className="fa-light fa-scissors" aria-hidden="true"></i>
                        </div>
                        <h3>Skills</h3>
                        <p>Practical skill development through tailoring classes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="engage-panel">
                  <h3>How Online Donation Will Work</h3>
                  <ul className="donate-process">
                    <li>
                      <span className="process-icon">1</span>
                      <span>
                        <strong>Enter your details</strong>
                        <br />
                        Choose an amount and programme preference.
                      </span>
                    </li>
                    <li>
                      <span className="process-icon">2</span>
                      <span>
                        <strong>Complete payment</strong>
                        <br />
                        The configured payment gateway will securely process the contribution.
                      </span>
                    </li>
                    <li>
                      <span className="process-icon">3</span>
                      <span>
                        <strong>Payment verification</strong>
                        <br />
                        The server confirms the transaction before issuing an acknowledgement.
                      </span>
                    </li>
                    <li>
                      <span className="process-icon">4</span>
                      <span>
                        <strong>Receive your receipt</strong>
                        <br />
                        The approved donation receipt can then be generated and sent to your email.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageScript code={"\n    (function () {\n        const form = document.getElementById(\"marwann-donation-form\");\n        if (!form) return;\n\n        const amountButtons = Array.from(document.querySelectorAll(\".donate-amount\"));\n        const customAmount = document.getElementById(\"custom-amount\");\n        const amountOutput = document.getElementById(\"selected-amount\");\n        const status = document.getElementById(\"donate-status\");\n        let selectedAmount = 1000;\n\n        function formatINR(value) {\n            return new Intl.NumberFormat(\"en-IN\", {\n                style: \"currency\", currency: \"INR\", maximumFractionDigits: 0\n            }).format(value);\n        }\n\n        function setAmount(value, button) {\n            selectedAmount = Number(value) || 0;\n            amountOutput.textContent = selectedAmount > 0 ? formatINR(selectedAmount) : \"₹0\";\n            amountButtons.forEach(function (item) {\n                const active = item === button;\n                item.classList.toggle(\"is-selected\", active);\n                item.setAttribute(\"aria-pressed\", active ? \"true\" : \"false\");\n            });\n            if (status) status.style.display = \"none\";\n        }\n\n        amountButtons.forEach(function (button) {\n            button.addEventListener(\"click\", function () {\n                customAmount.value = \"\";\n                setAmount(button.getAttribute(\"data-amount\"), button);\n            });\n        });\n\n        customAmount.addEventListener(\"input\", function () {\n            amountButtons.forEach(function (button) {\n                button.classList.remove(\"is-selected\");\n                button.setAttribute(\"aria-pressed\", \"false\");\n            });\n            setAmount(customAmount.value, null);\n        });\n\n        form.addEventListener(\"submit\", function (event) {\n            event.preventDefault();\n            if (!form.reportValidity()) return;\n            if (!Number.isInteger(selectedAmount) || selectedAmount < 1) {\n                customAmount.setCustomValidity(\"Please enter a whole amount of at least ₹1.\");\n                customAmount.reportValidity();\n                customAmount.setCustomValidity(\"\");\n                return;\n            }\n            if (status) {\n                status.textContent =\n                    \"Payment integration is pending. No payment has been initiated, no donation has been recorded, and no receipt has been generated. Please contact the Trust to arrange a contribution.\";\n                status.style.display = \"block\";\n                status.scrollIntoView({ behavior: \"smooth\", block: \"nearest\" });\n            }\n        });\n    })();\n    "} />
    </>
  )
}
