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
                        <a href="#">Donations</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Donations</h2>
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
        <section className="services-details-section-2 p-t-120 p-b-225">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="details-layout-wrap">
                  <div className="details-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="detail-info-wrap m-b-60">
                      <div className="detail-info-contents">
                        <div className="notice m-b-35">
                          <img src="/assets/img/icons/icon-21.html" alt="icon" />
                          <p>
                            <span>Notice:</span>
                            {" "}
                            Test Mode Is Enabled. While In Test Mode No Live Donations Are Processed.
                          </p>
                        </div>
                        <div className="make-donate m-b-30">
                          <div className="details-subtitle m-b-20">
                            <h4>
                              <span>
                                <img src="/assets/img/icons/icon-4.svg" alt="icon" />
                              </span>
                              {" "}
                              Your donation helps us
                            </h4>
                          </div>
                          <div className="icon-wrap">
                            <input className="selected-amount" placeholder="0" defaultValue="240" />
                            {" "}
                            <i className="fa-solid fa-dollar-sign"></i>
                          </div>
                        </div>
                        <div className="choose-currency-2 m-b-15">
                          <p>Choose Currency:</p>
                          <button className="amount">$10</button>
                          {" "}
                          <button className="amount">$25</button>
                          {" "}
                          <button className="amount">$50</button>
                          {" "}
                          <button className="amount active">$100</button>
                          {" "}
                          <button className="amount">$250</button>
                          {" "}
                          <button className="custom-amount">
                            <i className="fa-solid fa-sliders"></i>
                            {" "}
                            Custom Amoun
                          </button>
                        </div>
                        <div className="thank-you-text m-b-30">
                          <p>❤️Thank You For Donation !!</p>
                        </div>
                        <div className="payment-method-form">
                          <div className="payment-title">
                            <h3>Select Payment Method</h3>
                          </div>
                          <div className="select-payment-method">
                            <div className="method">
                              <input type="checkbox" name="test" id="test" />
                              {" "}
                              <label htmlFor="test">Test Donation</label>
                            </div>
                            <div className="method">
                              <input type="checkbox" name="offline" id="offline" />
                              {" "}
                              <label htmlFor="offline">Offline Donation</label>
                            </div>
                            <div className="method">
                              <input type="checkbox" name="credit" id="credit" />
                              {" "}
                              <label htmlFor="credit">Credit Card</label>
                            </div>
                          </div>
                          <form action="#">
                            <h5>Personal Information:</h5>
                            <div className="info-input m-b-20">
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jhon Abraham  " />
                              {" "}
                              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Email Address" />
                            </div>
                            <div className="m-b-20">
                              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Say Something..." rows="4" />
                            </div>
                            <div className="form-bottom">
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
                              <p>Total Donation: $100</p>
                            </div>
                            <div className="impact-text">
                              <p>
                                <span>Direct Impact:</span>
                                Your donations reach the most vulnerable communities around the world.
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detail-sidebar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <div className="s-widget-wrap m-b-30">
                      <div className="w-title">
                        <h3>Recent Course</h3>
                        <div className="bar-wrap">
                          <div className="bar-1"></div>
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="recent-course-slider-active" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        <div className="swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="camping-card-2 widget-style">
                                <div className="thumb">
                                  <Link href="/camping-details">
                                    <img src="/assets/img/thumbs/thumb-4.webp" alt="thumb-2" />
                                  </Link>
                                  <div className="date">
                                    <i className="fa-regular fa-clock"></i>
                                    {" "}
                                    <span>42 Days Left</span>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="donation-wrap">
                                    <div className="content-top">
                                      <div className="title">
                                        <h3>
                                          <Link href="/camping-details">Reforestation and Tree Planting Campaign 2026</Link>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="d-top">
                                      <p>Donation Complete</p>
                                      <p>72%</p>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                      <div className="progress-bar" style={{ width: "72%" }}></div>
                                    </div>
                                    <div className="fund">
                                      <p>
                                        Raised:
                                        {" "}
                                        <span>$9,650</span>
                                      </p>
                                      <p>
                                        Goal:
                                        {" "}
                                        <span>$16,560</span>
                                      </p>
                                    </div>
                                    <div className="d-bottom">
                                      <Link href="/donations" className="e-primary-btn has-small has-icon d-btn">
                                        Donate Now
                                        {" "}
                                        <span className="icon-wrap">
                                          <span className="icon">
                                            <i className="fa-regular fa-arrow-right"></i>
                                            {" "}
                                            <i className="fa-regular fa-arrow-right"></i>
                                          </span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="camping-card-2 widget-style">
                                <div className="thumb">
                                  <Link href="/camping-details">
                                    <img src="/assets/img/thumbs/thumb-3.webp" alt="thumb-2" />
                                  </Link>
                                  <div className="date">
                                    <i className="fa-regular fa-clock"></i>
                                    {" "}
                                    <span>42 Days Left</span>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="donation-wrap">
                                    <div className="content-top">
                                      <div className="title">
                                        <h3>
                                          <Link href="/camping-details">Sustainable Energy for All: Why Your Donation Matters</Link>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="d-top">
                                      <p>Donation Complete</p>
                                      <p>72%</p>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                      <div className="progress-bar" style={{ width: "72%" }}></div>
                                    </div>
                                    <div className="fund">
                                      <p>
                                        Raised:
                                        {" "}
                                        <span>$9,650</span>
                                      </p>
                                      <p>
                                        Goal:
                                        {" "}
                                        <span>$16,560</span>
                                      </p>
                                    </div>
                                    <div className="d-bottom">
                                      <Link href="/donations" className="e-primary-btn has-small has-icon d-btn">
                                        Donate Now
                                        {" "}
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
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="camping-card-2 widget-style">
                                <div className="thumb">
                                  <Link href="/camping-details">
                                    <img src="/assets/img/thumbs/thumb-2.webp" alt="thumb-2" />
                                  </Link>
                                  <div className="date">
                                    <i className="fa-regular fa-clock"></i>
                                    {" "}
                                    <span>42 Days Left</span>
                                  </div>
                                </div>
                                <div className="content">
                                  <div className="donation-wrap">
                                    <div className="content-top">
                                      <div className="title">
                                        <h3>
                                          <Link href="/camping-details">Protecting Endangered Species and Their Habitats</Link>
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="d-top">
                                      <p>Donation Complete</p>
                                      <p>72%</p>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                      <div className="progress-bar" style={{ width: "72%" }}></div>
                                    </div>
                                    <div className="fund">
                                      <p>
                                        Raised:
                                        {" "}
                                        <span>$9,650</span>
                                      </p>
                                      <p>
                                        Goal:
                                        {" "}
                                        <span>$16,560</span>
                                      </p>
                                    </div>
                                    <div className="d-bottom">
                                      <Link href="/donations" className="e-primary-btn has-small has-icon d-btn">
                                        Donate Now
                                        {" "}
                                        <span className="icon-wrap">
                                          <span className="icon">
                                            <i className="fa-regular fa-arrow-right"></i>
                                            {" "}
                                            <i className="fa-regular fa-arrow-right"></i>
                                          </span>
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="recent-course-pagination-wrap">
                          <div className="recent-course-pagination"></div>
                        </div>
                      </div>
                    </div>
                    <div className="s-widget-wrap m-b-30">
                      <div className="detail-contact text-center">
                        <div className="thumb">
                          <img src="/assets/img/shapes/shape-47.webp" alt="shape" />
                        </div>
                        <div className="icon-info-wrap">
                          <div className="icon-wrap">
                            <div className="icon">
                              <img src="/assets/img/icons/icon-18.html" alt="icon" />
                            </div>
                            <div className="bar-wrap">
                              <div className="bar-1"></div>
                              <div className="bar-2"></div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>
                              <a href="tel:+70264566579">+70 264 566 579</a>
                            </h3>
                            <p>Need Help?</p>
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
            <img src="/assets/img/shapes/shape-30.webp" alt="shape-30" />
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
