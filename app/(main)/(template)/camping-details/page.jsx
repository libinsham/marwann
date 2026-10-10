/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const metadata = {
  "title": "Econest"
}

export default function Page() {
  return (
    <>
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
                        <Link href="/camping">Camping</Link>
                      </li>
                      <li>
                        <a href="#">Camping Details</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Tree Plantation</h2>
                  </div>
                  <div className="shape-1">
                    <img src="/assets/img/shapes/shape-1.webp" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img src="/assets/img/thumbs/thumb-110.webp" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="services-details-section p-t-120 p-b-250 p-t-lg-80 p-t-md-80 p-t-xs-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="details-layout-wrap">
                  <div className="details-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="thumb-wrap m-b-30">
                      <img src="/assets/img/thumbs/thumb-114.webp" alt="thumb" />
                    </div>
                    <div className="count-down-date m-b-20">
                      <i className="fa-light fa-calendar-days"></i>
                      <p>42 Days Left</p>
                    </div>
                    <div className="details-title m-b-15">
                      <h2>Reforestation and Tree Planting Campaign 2026</h2>
                    </div>
                    <div className="detail-text m-b-30">
                      <p>
                        Ratione doloribus optio minus cum ab. Nostrum rerum minus sapiente eveniet fuga quos tenetur Bicycle rights taxidermy knausgaard,
                        {" "}
                        <b>3 wolf moon schlitz kombucha freegan</b>
                        {" "}
                        ugh ethical kogi Déjà en recherche de nouvelle inspiration pour la prochaine collection, qui sera toujours inspirée de ses origines suisses de son savoir-faire an nouveau matériel arrive!
                      </p>
                    </div>
                    <div className="donation-card m-b-50">
                      <h4>The environment is beautiful with your help.</h4>
                      <p>
                        Ratione doloribus optio minus cum ab. Nostrum rerum minus sapiente eveniet fuga quos tenetur Bicycle rights taxidermy knausgaard,
                        <b>3 wolf moon schlitz kombucha</b>
                      </p>
                      <div className="donation-wrap-2">
                        <div className="left">
                          <div className="d-top">
                            <p>Donation Complete</p>
                            <p>72%</p>
                          </div>
                          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "72%" }}></div>
                          </div>
                          <div className="d-bottom">
                            <div className="fund">
                              <p>
                                Raised:
                                {" "}
                                <span>$14,650</span>
                              </p>
                              <p>-</p>
                              <p>
                                Goal:
                                {" "}
                                <span>$36,560</span>
                              </p>
                            </div>
                            <button className="d-wishlist">
                              <i className="fa-regular fa-heart"></i>
                              {" "}
                              <span>259</span>
                            </button>
                          </div>
                        </div>
                        <Link href="/donations" className="right">
                          <span className="icon">
                            <i className="fa-solid fa-hand-holding-circle-dollar"></i>
                          </span>
                          {" "}
                          Donate Now
                        </Link>
                      </div>
                    </div>
                    <div className="details-title m-b-15">
                      <h2>About The Forest</h2>
                    </div>
                    <div className="detail-text m-b-25">
                      <p>
                        We work to protect and restore the natural environment. then a dental prosthetic is added. Readable and Packages editors now use Lorem Ipsum as their default model textlayout. The point forusing the some is that it has a more-or-less normal distribution of letters as opposed to using. Ratione doloribus optio minus rerum minus sapiente eveniet fuga quos tenetur.
                      </p>
                    </div>
                    <div className="list-wrapper m-b-40">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>Nature ecologically aiming to optimize.</p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>It’s reliable and immune inspirée de ses</p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>Focus on your important to scale</p>
                        </li>
                      </ul>
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>In the long run, solar power aiming to optimize.</p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>Dental prosthetic is added a leader</p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>Ecology is the study of seeking</p>
                        </li>
                      </ul>
                    </div>
                    <div className="gallery-slider-active m-b-50">
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="banner-slide-wrap">
                              <div className="thumb">
                                <img src="/assets/img/thumbs/thumb-109.webp" alt="thumb" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="banner-slide-wrap">
                              <div className="thumb">
                                <img src="/assets/img/thumbs/thumb-109.webp" alt="thumb" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="banner-slide-wrap">
                              <div className="thumb">
                                <img src="/assets/img/thumbs/thumb-109.webp" alt="thumb" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-pagination-wrap">
                        <div className="gallery-pagination"></div>
                      </div>
                    </div>
                    <div className="details-title-2 m-b-30">
                      <h2>Recent Donors</h2>
                      <div className="top-right">
                        <img src="/assets/img/authors/author-1.webp" alt="authors" />
                      </div>
                    </div>
                    <div className="donator-cards m-b-60">
                      <div className="donator-card">
                        <div className="thumb">
                          <img src="/assets/img/thumbs/thumb-115.webp" alt="thumb" />
                        </div>
                        <div className="donator-name">
                          <h6>Michael Floyd</h6>
                        </div>
                        <div className="date-of-donate">
                          <p>Mar 18, 2024</p>
                        </div>
                        <div className="donation-amount">
                          <p>
                            Total:
                            {" "}
                            <span>$200</span>
                          </p>
                        </div>
                      </div>
                      <div className="donator-card">
                        <div className="thumb">
                          <img src="/assets/img/thumbs/thumb-116.webp" alt="thumb" />
                        </div>
                        <div className="donator-name">
                          <h6>Bm Ashik</h6>
                        </div>
                        <div className="date-of-donate">
                          <p>Apr 20, 2024</p>
                        </div>
                        <div className="donation-amount">
                          <p>
                            Total:
                            {" "}
                            <span>$150</span>
                          </p>
                        </div>
                      </div>
                      <div className="donator-card">
                        <div className="thumb">
                          <img src="/assets/img/thumbs/thumb-117.webp" alt="thumb" />
                        </div>
                        <div className="donator-name">
                          <h6>Shuvo Islam</h6>
                        </div>
                        <div className="date-of-donate">
                          <p>May 30, 2024</p>
                        </div>
                        <div className="donation-amount">
                          <p>
                            Total:
                            {" "}
                            <span>$400</span>
                          </p>
                        </div>
                      </div>
                      <div className="donator-card">
                        <div className="thumb">
                          <img src="/assets/img/thumbs/thumb-118.webp" alt="thumb" />
                        </div>
                        <div className="donator-name">
                          <h6>Sonar Chad</h6>
                        </div>
                        <div className="date-of-donate">
                          <p>Mar 06, 2024</p>
                        </div>
                        <div className="donation-amount">
                          <p>
                            Total:
                            {" "}
                            <span>$300</span>
                          </p>
                        </div>
                      </div>
                      <div className="donator-card">
                        <div className="thumb">
                          <img src="/assets/img/thumbs/thumb-119.webp" alt="thumb" />
                        </div>
                        <div className="donator-name">
                          <h6>HM. Rony</h6>
                        </div>
                        <div className="date-of-donate">
                          <p>Mar 10, 2024</p>
                        </div>
                        <div className="donation-amount">
                          <p>
                            Total:
                            {" "}
                            <span>$100</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comment-section">
                      <div className="comments m-b-50">
                        <div className="details-title m-b-50">
                          <h2>Comments (02)</h2>
                        </div>
                        <div className="comment-wrap m-b-40">
                          <div className="thumb">
                            <img src="/assets/img/thumbs/thumb-125.webp" alt="thumb" />
                          </div>
                          <div className="info">
                            <div className="name">
                              <p>Abraham John</p>
                            </div>
                            <div className="date">
                              <p>February 03, 2024</p>
                            </div>
                            <div className="text">
                              <p>
                                Readable and Packages editors now use Lorem Ipsum as their default model textlayout. The point forusing the some !! ❤️
                              </p>
                            </div>
                            <a className="reply-btn">Reply</a>
                          </div>
                        </div>
                        <div className="comment-wrap">
                          <div className="thumb">
                            <img src="/assets/img/thumbs/thumb-126.webp" alt="thumb" />
                          </div>
                          <div className="info">
                            <div className="name">
                              <p>BMW Group</p>
                            </div>
                            <div className="date">
                              <p>March 04, 2024</p>
                            </div>
                            <div className="text">
                              <p>
                                Normal distribution of letters as opposed to using. Ratione doloribus optio minus rerum minus sapiente.
                              </p>
                            </div>
                            <a className="reply-btn">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className="leave-comment m-b-60">
                        <div className="details-title m-b-30">
                          <h2>Leave a Comment</h2>
                        </div>
                        <form action="#">
                          <div className="info-input m-b-20">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jhon Abraham  " />
                            {" "}
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email Address" />
                          </div>
                          <div className="m-b-20">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Say Something..." rows="4" />
                          </div>
                          <button type="submit" className="e-primary-btn has-icon">
                            Send Message
                            {" "}
                            <span className="icon-wrap">
                              <span className="icon">
                                <i className="fa-regular fa-arrow-right"></i>
                                <i className="fa-regular fa-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="detail-sidebar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <div className="detail-sidebar-inner">
                      <div className="s-widget-wrap m-b-30">
                        <div className="w-title">
                          <h3>
                            <img src="/assets/img/icons/icon-20.html" alt="icon" />
                            {" "}
                            Organizer
                          </h3>
                          <div className="bar-wrap">
                            <div className="bar-1"></div>
                            <div className="bar-2"></div>
                          </div>
                        </div>
                        <div className="organizer-info-wrap">
                          <div className="thumb">
                            <img src="/assets/img/thumbs/thumb-120.webp" alt="thumb" />
                          </div>
                          <div className="name">
                            <h3>Bm Ashik</h3>
                          </div>
                          <div className="text">
                            <p>“Improve your scientific skills including research”</p>
                          </div>
                          <div className="divider"></div>
                          <div className="date m-b-10">
                            <i className="fa-light fa-calendar-days"></i>
                            <p>24th Oct, 2024</p>
                          </div>
                          <div className="location">
                            <i className="fa-light fa-location-dot"></i>
                            <p>Grant Ave Park (Carteret)</p>
                          </div>
                        </div>
                      </div>
                      <div className="s-widget-wrap m-b-30">
                        <div className="w-title">
                          <h3>Recent Campaigns</h3>
                          <div className="bar-wrap">
                            <div className="bar-1"></div>
                            <div className="bar-2"></div>
                          </div>
                        </div>
                        <div className="recent-campaigns">
                          <div className="campaign">
                            <div className="thumb">
                              <img src="/assets/img/thumbs/thumb-121.webp" alt="thumb" />
                            </div>
                            <div>
                              <div className="date">
                                <p>Plantation- Jun 13, 2024</p>
                              </div>
                              <div className="name">
                                <h5>Sustainable Energy for All: Donation Matters</h5>
                              </div>
                            </div>
                          </div>
                          <div className="campaign">
                            <div className="thumb">
                              <img src="/assets/img/thumbs/thumb-122.webp" alt="thumb" />
                            </div>
                            <div>
                              <div className="date">
                                <p>Forest- Jun 20, 2024</p>
                              </div>
                              <div className="name">
                                <h5>Renewable Energy Technology of Secrets</h5>
                              </div>
                            </div>
                          </div>
                          <div className="campaign">
                            <div className="thumb">
                              <img src="/assets/img/thumbs/thumb-123.webp" alt="thumb" />
                            </div>
                            <div>
                              <div className="date">
                                <p>Cleaning - Feb 09, 2024</p>
                              </div>
                              <div className="name">
                                <h5>Nature’s Symphony: Exploring Ecology</h5>
                              </div>
                            </div>
                          </div>
                          <div className="campaign campaign-last">
                            <div className="thumb">
                              <img src="/assets/img/thumbs/thumb-124.webp" alt="thumb" />
                            </div>
                            <div>
                              <div className="date">
                                <p>Forest - Jan 30, 2024</p>
                              </div>
                              <div className="name">
                                <h5>Grow with Us: Tree Planting Day</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="s-widget-wrap">
                        <div className="w-title">
                          <h3>Share This Project</h3>
                          <div className="bar-wrap">
                            <div className="bar-1"></div>
                            <div className="bar-2"></div>
                          </div>
                        </div>
                        <div className="socials">
                          <div className="social-links">
                            <a href="https://facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            {" "}
                            <a href="https://twitter.com/">
                              <i className="fab fa-x-twitter"></i>
                            </a>
                            {" "}
                            <a href="https://www.instagram.com/">
                              <i className="fab fa-instagram"></i>
                            </a>
                            {" "}
                            <a href="https://linkedin.com/">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-shape-1">
            <img src="/assets/img/shapes/shape-31.webp" alt="shape-31" />
          </div>
        </section>
        {" "}
        <section className="contact-info-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-info-layout">
                  <a className="contact-info active" href="mailto:support.econest@gmail.com">
                    <div className="icon-wrap">
                      <div className="icon-shape"></div>
                      <div className="icon">
                        <i className="fa-solid fa-paper-plane"></i>
                      </div>
                    </div>
                    <h3>support.econest@gmail.com</h3>
                    <p>Send a Email</p>
                  </a>
                  {" "}
                  <a className="contact-info" href="tel:+70264566579">
                    <div className="icon-wrap">
                      <div className="icon-shape"></div>
                      <div className="icon">
                        <i className="fa-solid fa-phone-arrow-up-right"></i>
                      </div>
                    </div>
                    <h3>+70 264 566 579</h3>
                    <p>Any Time Call Us</p>
                  </a>
                  {" "}
                  <a className="contact-info" href="#">
                    <div className="icon-wrap">
                      <div className="icon-shape"></div>
                      <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                    </div>
                    <h3>Jones Street, New York, USA</h3>
                    <p>Our Address</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
