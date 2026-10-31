/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import LiveCampaigns from '@/components/site/LiveCampaigns'
import { publicGet } from '@/lib/laravel'

export const revalidate = 60

export const metadata = {
  "title": "Active Campaigns | MARWANN CHARITABLE TRUST",
  "description": "View active campaign updates from MARWANN CHARITABLE TRUST. No active campaigns are currently listed."
}

const css0 = "\n        .about-intro-visual {\n            min-height: 470px;\n            height: 100%;\n            display: flex;\n            align-items: flex-end;\n            position: relative;\n            overflow: hidden;\n            border-radius: 18px;\n            padding: 36px;\n            background: radial-gradient(circle at 20% 15%, rgba(255,255,255,.16), transparent 32%),\n                        linear-gradient(145deg, #075d56 0%, #073b38 58%, #092b2b 100%);\n        }\n        .about-intro-visual:before,\n        .about-intro-visual:after {\n            content: \"\";\n            position: absolute;\n            border: 1px solid rgba(255,255,255,.16);\n            border-radius: 50%;\n            pointer-events: none;\n        }\n        .about-intro-visual:before { width: 360px; height: 360px; top: -110px; right: -95px; }\n        .about-intro-visual:after { width: 250px; height: 250px; top: -55px; right: -40px; }\n        .about-visual-icon {\n            position: absolute;\n            top: 45px;\n            left: 42px;\n            width: 86px;\n            height: 86px;\n            display: grid;\n            place-items: center;\n            color: #0a544f;\n            background: #f7d95d;\n            border-radius: 50%;\n            font-size: 34px;\n            box-shadow: 0 12px 30px rgba(0,0,0,.15);\n        }\n        .about-visual-copy { position: relative; z-index: 1; max-width: 360px; color: #fff; }\n        .about-visual-copy .since { display: inline-block; color: #f7d95d; font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 12px; }\n        .about-visual-copy h3 { color: #fff; font-size: clamp(28px, 3vw, 40px); line-height: 1.15; margin: 0 0 14px; }\n        .about-visual-copy p { color: rgba(255,255,255,.82); margin: 0; }\n        .about-motto { border-left: 4px solid #f4d44e; background: #f8f7f0; padding: 20px 24px; border-radius: 0 12px 12px 0; margin-top: 26px; }\n        .about-motto p { margin: 0; font-weight: 700; color: #064f49; font-size: 18px; }\n        .about-motto span { display: block; color: #69716f; font-size: 13px; margin-top: 5px; }\n        .about-purpose-card { height: 100%; padding: 34px; border-radius: 16px; background: #fff; border: 1px solid rgba(6,79,73,.10); box-shadow: 0 12px 35px rgba(13,48,43,.06); }\n        .about-purpose-card .purpose-icon { display: inline-grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: #f8f3d8; color: #075d56; font-size: 23px; margin-bottom: 20px; }\n        .about-purpose-card h3 { margin-bottom: 14px; }\n        .about-purpose-card p { margin-bottom: 0; }\n        .about-mission-list { list-style: none; padding: 0; margin: 18px 0 0; }\n        .about-mission-list li { position: relative; padding: 0 0 12px 27px; color: #555f5d; }\n        .about-mission-list li:last-child { padding-bottom: 0; }\n        .about-mission-list li i { position: absolute; left: 0; top: 5px; color: #08776e; }\n        .about-value-card { height: 100%; padding: 24px; background: #fff; border: 1px solid rgba(6,79,73,.10); border-radius: 14px; transition: transform .25s ease, box-shadow .25s ease; }\n        .about-value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(13,48,43,.08); }\n        .about-value-card .value-icon { width: 48px; height: 48px; display: grid; place-items: center; background: #f8f3d8; color: #075d56; border-radius: 50%; margin-bottom: 15px; font-size: 20px; }\n        .about-value-card h5 { margin-bottom: 8px; }\n        .about-value-card p { color: #69716f; margin: 0; font-size: 14px; }\n        .about-founder-panel { padding: 38px; background: #073f3b; border-radius: 18px; color: #fff; }\n        .about-founder-panel h3, .about-founder-panel h5 { color: #fff; }\n        .about-founder-panel p { color: rgba(255,255,255,.82); }\n        .about-founder-mark { width: 86px; height: 86px; display: grid; place-items: center; background: #f7d95d; color: #064f49; border-radius: 50%; font-size: 26px; font-weight: 800; margin-bottom: 20px; }\n        .trustee-card { height: 100%; padding: 25px 20px; border-radius: 14px; background: #fff; border: 1px solid rgba(6,79,73,.10); text-align: center; }\n        .trustee-initial { width: 58px; height: 58px; margin: 0 auto 14px; display: grid; place-items: center; border-radius: 50%; background: #e8f1ef; color: #075d56; font-weight: 800; font-size: 17px; }\n        .trustee-card h5 { margin-bottom: 5px; font-size: 16px; }\n        .trustee-card p { margin: 0; color: #69716f; font-size: 13px; }\n        @media (max-width: 767.98px) {\n            .about-intro-visual { min-height: 330px; padding: 25px; }\n            .about-visual-icon { top: 28px; left: 28px; width: 68px; height: 68px; font-size: 27px; }\n            .about-purpose-card, .about-founder-panel { padding: 26px; }\n        }\n    "

const css1 = "\n.work-page-intro { max-width: 820px; margin: 0 auto; }\n.work-card {\n    height: 100%; padding: 30px 26px; background: #fff;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 16px;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n    transition: transform .25s ease, box-shadow .25s ease;\n}\n.work-card:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(13,48,43,.10); }\n.work-card .work-icon {\n    width: 54px; height: 54px; display: grid; place-items: center;\n    border-radius: 50%; color: #075d56; background: #f8f3d8;\n    font-size: 22px; margin-bottom: 18px;\n}\n.work-card .work-number {\n    display: inline-block; color: #08776e; font-size: 12px;\n    letter-spacing: .12em; font-weight: 800; margin-bottom: 7px;\n}\n.work-card h3 { font-size: 20px; margin-bottom: 10px; }\n.work-card p { color: #69716f; margin: 0; font-size: 15px; }\n.work-category {\n    padding: 34px; height: 100%; border-radius: 18px;\n    background: #fff; border: 1px solid rgba(6,79,73,.10);\n}\n.work-category h3 { margin-bottom: 14px; }\n.work-category ul { list-style: none; padding: 0; margin: 0; }\n.work-category li { position: relative; padding: 9px 0 9px 25px; color: #56615e; border-bottom: 1px solid rgba(6,79,73,.08); }\n.work-category li:last-child { border-bottom: 0; }\n.work-category li i { position: absolute; left: 0; top: 13px; color: #08776e; }\n.campaign-empty {\n    max-width: 850px; margin: 0 auto; padding: 58px 34px;\n    border: 1px solid rgba(6,79,73,.10); border-radius: 20px;\n    background: #fff; text-align: center;\n    box-shadow: 0 14px 40px rgba(13,48,43,.06);\n}\n.campaign-empty .empty-icon {\n    width: 82px; height: 82px; display: grid; place-items: center;\n    margin: 0 auto 22px; background: #f8f3d8; color: #075d56;\n    border-radius: 50%; font-size: 32px;\n}\n.campaign-empty h2 { margin-bottom: 12px; }\n.campaign-empty p { max-width: 630px; margin: 0 auto 24px; color: #69716f; }\n.gallery-card {\n    height: 100%; background: #fff; border: 1px solid rgba(6,79,73,.10);\n    border-radius: 16px; overflow: hidden;\n    box-shadow: 0 12px 35px rgba(13,48,43,.06);\n}\n.gallery-card .gallery-photo { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #e8efed; }\n.gallery-card .gallery-photo img {\n    display: block; width: 100%; height: 100%; object-fit: cover;\n    transition: transform .35s ease;\n}\n.gallery-card:hover .gallery-photo img { transform: scale(1.04); }\n.gallery-card .gallery-caption { padding: 20px 22px 22px; }\n.gallery-card .gallery-caption span {\n    display: block; color: #08776e; font-size: 11px; font-weight: 800;\n    letter-spacing: .12em; text-transform: uppercase; margin-bottom: 6px;\n}\n.gallery-card .gallery-caption h3 { font-size: 18px; margin: 0; }\n.gallery-note {\n    max-width: 800px; margin: 30px auto 0; text-align: center;\n    color: #69716f; font-size: 14px;\n}\n@media (max-width: 767.98px) {\n    .work-card, .work-category { padding: 25px 22px; }\n    .campaign-empty { padding: 42px 22px; }\n}\n"

const css2 = "\n    .campaign-hero {\n        position: relative;\n        overflow: hidden;\n        /* Keep hero content clear of the overlaid desktop header and top bar. */\n        padding: 145px 0 54px;\n        color: #fff;\n        text-align: center;\n        background: linear-gradient(135deg, #064f49 0%, #073d39 68%, #092f2d 100%);\n    }\n    .campaign-hero::before,\n    .campaign-hero::after {\n        content: \"\";\n        position: absolute;\n        border: 1px solid rgba(255,255,255,.13);\n        border-radius: 50%;\n        pointer-events: none;\n    }\n    .campaign-hero::before { width: 390px; height: 390px; top: -235px; right: -95px; }\n    .campaign-hero::after { width: 270px; height: 270px; top: -175px; right: -35px; }\n    .campaign-hero .container { position: relative; z-index: 1; }\n    .campaign-breadcrumb {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-bottom: 22px;\n        color: rgba(255,255,255,.72);\n        font-size: 12px;\n    }\n    .campaign-breadcrumb a { color: #fff; text-decoration: none; transition: color .2s ease; }\n    .campaign-breadcrumb a:hover { color: #f7d95d; }\n    .campaign-breadcrumb i { color: #f7d95d; font-size: 10px; }\n    .campaign-hero-copy { max-width: 850px; margin: 0 auto; }\n    .campaign-eyebrow {\n        display: inline-block;\n        margin-bottom: 10px;\n        color: #f7d95d;\n        font-size: 11px;\n        font-weight: 800;\n        letter-spacing: .16em;\n        text-transform: uppercase;\n    }\n    .campaign-hero h1 {\n        margin: 0 0 12px;\n        color: #fff;\n        font-size: clamp(30px, 4vw, 46px);\n        font-weight: 750;\n        line-height: 1.15;\n        text-align: center;\n    }\n    .campaign-hero p {\n        max-width: 760px;\n        margin: 0 auto;\n        color: rgba(255,255,255,.84);\n        font-size: 15px;\n        line-height: 1.7;\n        text-align: center;\n    }\n    .campaign-main { padding: 54px 0 74px; background: #f8f7f0; }\n    .campaign-empty {\n        max-width: 860px;\n        margin: 0 auto;\n        padding: 42px 34px 38px;\n        border: 1px solid rgba(6,79,73,.10);\n        border-radius: 20px;\n        background: #fff;\n        text-align: center;\n        box-shadow: 0 14px 40px rgba(13,48,43,.06);\n    }\n    .campaign-empty .empty-icon {\n        display: grid;\n        place-items: center;\n        width: 72px;\n        height: 72px;\n        margin: 0 auto 16px;\n        border: 1px solid rgba(7,93,86,.08);\n        border-radius: 50%;\n        background: #e8f3f0;\n        color: #075d56;\n        font-size: 27px;\n    }\n    .campaign-status-pill {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 14px;\n        padding: 7px 12px;\n        border-radius: 999px;\n        background: #f2f6f4;\n        color: #52615e;\n        font-size: 10px;\n        font-weight: 800;\n        letter-spacing: .1em;\n        line-height: 1.2;\n        text-transform: uppercase;\n    }\n    .campaign-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #94a3a0; }\n    .campaign-empty h2 { margin: 0 0 10px; color: #17212b; font-size: clamp(22px, 2.5vw, 30px); line-height: 1.25; }\n    .campaign-empty p { max-width: 650px; margin: 0 auto 23px; color: #69716f; font-size: 14px; line-height: 1.75; }\n    .campaign-actions { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 12px; }\n    .campaign-bottom-note { display: flex; align-items: center; justify-content: center; gap: 8px; margin: 22px auto 0; color: #687571; font-size: 12px; line-height: 1.6; text-align: center; }\n    .campaign-bottom-note i { color: #08776e; }\n    @media (min-width: 768px) and (max-width: 1199.98px) {\n        .campaign-hero { padding-top: 132px; }\n    }\n    @media (max-width: 767.98px) {\n        .campaign-hero { padding: 98px 0 42px; }\n        .campaign-breadcrumb { margin-bottom: 17px; }\n        .campaign-main { padding: 34px 0 55px; }\n        .campaign-empty { padding: 34px 22px 30px; }\n        .campaign-actions { flex-direction: column; }\n        .campaign-actions a { width: 100%; max-width: 310px; justify-content: center; }\n        .campaign-bottom-note { align-items: flex-start; max-width: 95%; }\n    }\n"

export default async function Page() {
  const campaigns = (await publicGet('campaigns'))?.data || []
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css0 }} />
      <style dangerouslySetInnerHTML={{ __html: css1 }} />
      <style dangerouslySetInnerHTML={{ __html: css2 }} />
      <main>
        <section className="campaign-hero" aria-labelledby="campaign-page-title">
          <div className="container">
            <div className="campaign-hero-copy" data-aos="fade-up" data-aos-duration="800">
              <span className="campaign-eyebrow">Campaign Updates</span>
              <h1 id="campaign-page-title">Active Campaigns</h1>
              <p>
                Find updates about fundraising and community initiatives from MARWANN CHARITABLE TRUST. Details will be shared here when campaigns are officially launched.
              </p>
            </div>
          </div>
        </section>
        <section className="campaign-main" aria-labelledby="campaign-status-title">
          <div className="container">
            {campaigns.length > 0 ? (
              <LiveCampaigns campaigns={campaigns} />
            ) : (
<div className="campaign-empty" data-aos="fade-up" data-aos-duration="800">
              <div className="empty-icon">
                <i className="fa-light fa-calendar-check" aria-hidden="true"></i>
              </div>
              <span className="campaign-status-pill">
                <span className="campaign-status-dot" aria-hidden="true"></span>
                Current status
              </span>
              <h2 id="campaign-status-title">No Active Campaigns at Present</h2>
              <p>
                There are no active campaigns at this time. When the Trust launches a new campaign, its purpose, details and updates will be published on this page.
              </p>
              <div className="campaign-actions">
                <Link href="/gallery" className="e-primary-btn has-icon">
                  Explore Past Activities
                  {" "}
                  <span className="icon-wrap">
                    <span className="icon">
                      <i className="fa-regular fa-arrow-right"></i>
                      <i className="fa-regular fa-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                {" "}
                <Link href="/contact" className="e-primary-btn is-hover-white">Contact Us</Link>
              </div>
            </div>
            )}
            <p className="campaign-bottom-note">
              <i className="fa-regular fa-circle-info" aria-hidden="true"></i>
              {" "}
              For general information about the Trust’s work, explore the programme areas or contact the team.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
