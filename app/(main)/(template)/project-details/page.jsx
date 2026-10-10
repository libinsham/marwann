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
                        <Link href="/project">Projects</Link>
                      </li>
                      <li>
                        <a href="#">Project Details</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Waste Management</h2>
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
                  <div className="details-content" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                    <div className="thumb-wrap m-b-50">
                      <img alt="thumb" src="/assets/img/thumbs/thumb-111.webp" />
                    </div>
                    <div className="details-title m-b-15">
                      <h2>Waste Management</h2>
                    </div>
                    <div className="detail-text m-b-30">
                      <p>
                        <b>
                          “Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. The point of using is that it has a more-or-less normal distribution of letters”
                        </b>
                      </p>
                      <p>
                        Ratione doloribus optio minus cum ab. Nostrum rerum minus sapiente eveniet fuga quos tenetur Bicycle rights taxidermy knausgaard,
                        {" "}
                        <b>3 wolf moon schlitz kombucha freegan</b>
                        {" "}
                        ugh ethical kogi Déjà en recherche de nouvelle inspiration pour la prochaine collection, qui sera toujours inspirée de ses origines suisses de son savoir-faire an nouveau matériel arrive!
                      </p>
                    </div>
                    <div className="details-title m-b-15">
                      <h2>Project Challenging Story</h2>
                    </div>
                    <div className="detail-text m-b-25">
                      <p>We work to protect and restore the natural environment.</p>
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
                                <img alt="thumb" src="/assets/img/thumbs/thumb-109.webp" />
                                {" "}
                                <a className="play-btn" data-fancybox="" href={"https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"}>Play</a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="banner-slide-wrap">
                              <div className="thumb">
                                <img alt="thumb" src="/assets/img/thumbs/thumb-109.webp" />
                                {" "}
                                <a className="play-btn" data-fancybox="" href={"https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"}>Play</a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="banner-slide-wrap">
                              <div className="thumb">
                                <img alt="thumb" src="/assets/img/thumbs/thumb-109.webp" />
                                {" "}
                                <a className="play-btn" data-fancybox="" href={"https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"}>Play</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="gallery-pagination-wrap">
                        <div className="gallery-pagination"></div>
                      </div>
                    </div>
                    <div className="testimonial-wrap m-b-60">
                      <div className="icon">
                        <img alt="icon" src="/assets/img/icons/icon-17.html" />
                      </div>
                      <p className="review">
                        Readable and Packages editors now use Lorem Ipsum as their default model textlayout. The point of using the some is that it has a more-or-less normal distribution of letters as opposed to using.
                      </p>
                      <div className="author">
                        <h3>Bm Ashik (Moni)</h3>
                        <p>Sr. Volunteer</p>
                      </div>
                    </div>
                    <div className="details-title m-b-15">
                      <h2>{"Activities & Features"}</h2>
                    </div>
                    <div className="detail-text m-b-20">
                      <p>
                        Readable and Packages editors now use Lorem Ipsum as their default model textlayout. The point of using the some is that it has a more-or-less normal distribution of letters as opposed to using.
                      </p>
                    </div>
                    <div className="list-wrapper m-b-50">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>
                            Whether you’re an entrepreneur seeking to scale your venture, a leader aiming to optimize.
                          </p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>We work to protect and restore the natural environment.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="view-project-wrap">
                      <div className="previous-project">
                        <div className="project-thumb-wrap">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-112.webp" />
                        </div>
                        <div className="project-content-wrap">
                          <div className="view-project-btn">
                            <Link href="/project">
                              <span className="icon-1">
                                <i className="fa-regular fa-arrow-right"></i>
                              </span>
                              {" "}
                              Previous Project
                            </Link>
                          </div>
                          <div className="project-title">
                            <h5>Plantation Product</h5>
                          </div>
                          <div className="published-date">
                            <p>26 September, 2023</p>
                          </div>
                        </div>
                      </div>
                      <div className="next-project">
                        <div className="project-thumb-wrap">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-113.webp" />
                        </div>
                        <div className="project-content-wrap">
                          <div className="view-project-btn">
                            <Link href="/project">
                              Next Project
                              {" "}
                              <span className="icon-2">
                                <i className="fa-regular fa-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                          <div className="project-title">
                            <h5>Forest Cleaning</h5>
                          </div>
                          <div className="published-date">
                            <p>12 November, 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-sidebar" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                    <div className="detail-sidebar-inner">
                      <div className="s-widget-wrap m-b-30">
                        <div className="w-title">
                          <h3>Project Information</h3>
                          <div className="bar-wrap">
                            <div className="bar-1"></div>
                            <div className="bar-2"></div>
                          </div>
                        </div>
                        <div className="project-info-wrap">
                          <div className="project-text">
                            <p>Improve your scientific skills including research.</p>
                          </div>
                          <div className="project-info">
                            <div className="icon">
                              <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="key-value">
                              <div className="key">
                                <p>Client Name</p>
                              </div>
                              <div className="value">
                                <h6>John Henry</h6>
                              </div>
                            </div>
                          </div>
                          <div className="project-info">
                            <div className="icon">
                              <i className="fa-regular fa-filter"></i>
                            </div>
                            <div className="key-value">
                              <div className="key">
                                <p>Category</p>
                              </div>
                              <div className="value">
                                <h6>Metallurgy</h6>
                              </div>
                            </div>
                          </div>
                          <div className="project-info">
                            <div className="icon">
                              <i className="fa-regular fa-clock-rotate-left"></i>
                            </div>
                            <div className="key-value">
                              <div className="key">
                                <p>Start time</p>
                              </div>
                              <div className="value">
                                <h6>01 Jan, 2024</h6>
                              </div>
                            </div>
                          </div>
                          <div className="project-info">
                            <div className="icon">
                              <i className="fa-regular fa-alarm-clock"></i>
                            </div>
                            <div className="key-value">
                              <div className="key">
                                <p>end time</p>
                              </div>
                              <div className="value">
                                <h6>26 Apr, 2024</h6>
                              </div>
                            </div>
                          </div>
                          <div className="project-info">
                            <div className="icon">
                              <i className="fa-regular fa-dollar-sign"></i>
                            </div>
                            <div className="key-value">
                              <div className="key">
                                <p>Budget</p>
                              </div>
                              <div className="value">
                                <h6>$20,00,500</h6>
                              </div>
                            </div>
                          </div>
                          <div className="project-info project-info-last">
                            <div className="icon">
                              <i className="fa-regular fa-location-dot"></i>
                            </div>
                            <div className="key-value">
                              <div className="key">
                                <p>location</p>
                              </div>
                              <div className="value">
                                <h6>42 Mamnoun Street, UK</h6>
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
            <img alt="shape-31" src="/assets/img/shapes/shape-31.webp" />
          </div>
        </section>
        {" "}
        <section className="contact-info-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-info-layout">
                  <a href="mailto:support.econest@gmail.com" className="contact-info active">
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
                  <a href="tel:+70264566579" className="contact-info">
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
                  <a href="#" className="contact-info">
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
