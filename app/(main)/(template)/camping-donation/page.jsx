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
                        <a href="#">Camping Donation</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Forest Cleaning</h2>
                  </div>
                  <div className="shape-1">
                    <img src="/assets/img/shapes/shape-1.webp" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img src="/assets/img/thumbs/thumb-152.webp" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="services-details-section-3 p-t-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="details-layout-wrap">
                  <div className="details-content" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                    <div className="detail-info-wrap m-b-60">
                      <div className="thumb-wrap">
                        <img alt="thumb" src="/assets/img/thumbs/thumb-127.webp" />
                      </div>
                      <div className="detail-info-contents">
                        <div className="count-down-date m-b-20">
                          <i className="fa-light fa-calendar-days"></i>
                          <p>42 Days Left</p>
                        </div>
                        <div className="details-title m-b-15">
                          <h2>Forest Cleaning</h2>
                        </div>
                        <div className="detail-text m-b-25">
                          <p>
                            Ratione doloribus optio minus cum ab. Nostrum rerum minus sapiente eveniet fuga quos tenetur Bicycle rights taxidermy knausgaard,
                            {" "}
                            <b>3 wolf moon schlitz kombucha freegan</b>
                            {" "}
                            ugh ethical kogi Déjà en recherche de nouvelle inspiration pour la prochaine collection, qui sera toujours inspirée de ses origines suisses de son savoir-faire an nouveau matériel arrive!
                          </p>
                        </div>
                        <div className="donation-wrap-3 m-b-30">
                          <div className="left">
                            <div className="d-top">
                              <p>Donation Complete</p>
                              <p>62%</p>
                            </div>
                            <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="62" className="progress" role="progressbar">
                              <div className="progress-bar" style={{ width: "62%" }}></div>
                            </div>
                          </div>
                        </div>
                        <div className="make-donate m-b-30">
                          <div className="details-subtitle m-b-20">
                            <h4>
                              <span>
                                <img alt="icon" src="/assets/img/icons/icon-4.svg" />
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
                          <button className="amount">$100</button>
                          {" "}
                          <button className="amount">$250</button>
                          {" "}
                          <button className="custom-amount">
                            <i className="fa-solid fa-sliders"></i>
                            {" "}
                            Custom Amount
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
                              <input id="test" name="test" type="checkbox" />
                              {" "}
                              <label htmlFor="test">Test Donation</label>
                            </div>
                            <div className="method">
                              <input id="offline" name="offline" type="checkbox" />
                              {" "}
                              <label htmlFor="offline">Offline Donation</label>
                            </div>
                            <div className="method">
                              <input id="credit" name="credit" type="checkbox" />
                              {" "}
                              <label htmlFor="credit">Credit Card</label>
                            </div>
                          </div>
                          <form action="#">
                            <h5>Personal Information:</h5>
                            <div className="info-input m-b-20">
                              <input className="form-control" id="exampleFormControlInput1" placeholder="Jhon Abraham" type="text" />
                              {" "}
                              <input className="form-control" id="exampleFormControlInput2" placeholder="Email Address" type="email" />
                            </div>
                            <div className="m-b-20">
                              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Say Something..." rows="4" />
                            </div>
                            <div className="form-bottom">
                              <button className="e-primary-btn has-icon" type="submit">
                                Send Message
                                {" "}
                                <span className="icon-wrap">
                                  <span className="icon">
                                    <i className="fa-regular fa-arrow-right"></i>
                                    {" "}
                                    <i className="fa-regular fa-arrow-right"></i>
                                  </span>
                                </span>
                              </button>
                              <p>Total Donation: $100</p>
                            </div>
                            <div className="impact-text">
                              <p>
                                <span>Direct Impact:</span>
                                {" "}
                                Your donations reach the most vulnerable communities around the world.
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="details-subtitle m-b-20">
                      <h4>We can change the world together</h4>
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
                    <div className="list-wrapper m-b-60">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>Ecology is the study of the relationship between living</p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>In the long run, solar power is much more economical</p>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <p>Focus on your important tasks and orders</p>
                        </li>
                      </ul>
                    </div>
                    <div className="divider-2"></div>
                  </div>
                  <div className="detail-sidebar" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                    <div className="s-widget-wrap m-b-30">
                      <div className="w-title">
                        <h3>
                          <img alt="icon" src="/assets/img/icons/icon-19.html" />
                          {" "}
                          Diamond Sponsor
                        </h3>
                        <div className="bar-wrap">
                          <div className="bar-1"></div>
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="sponsor-info-wrap">
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-128.webp" />
                        </div>
                        <div>
                          <div className="name">
                            <h3>Michael Floyd</h3>
                          </div>
                          <div className="designation">
                            <p>CO - FavDevs</p>
                          </div>
                          <Link className="view-profile-btn" href="/contact">
                            <span>
                              <i className="fa-brands fa-facebook-f"></i>
                            </span>
                            {" "}
                            View Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="s-widget-wrap m-b-30">
                      <div className="w-title">
                        <h3>Recent Course</h3>
                        <div className="bar-wrap">
                          <div className="bar-1"></div>
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="recent-course-slider-active" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                        <div className="swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="camping-card-2 widget-style">
                                <div className="thumb">
                                  <Link href="/camping-details">
                                    <img alt="thumb-2" src="/assets/img/thumbs/thumb-4.webp" />
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
                                    <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" className="progress" role="progressbar">
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
                                      <Link className="e-primary-btn has-small has-icon d-btn" href="/donations">
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
                                    <img alt="thumb-2" src="/assets/img/thumbs/thumb-3.webp" />
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
                                    <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" className="progress" role="progressbar">
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
                                      <Link className="e-primary-btn has-small has-icon d-btn" href="/donations">
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
                                    <img alt="thumb-2" src="/assets/img/thumbs/thumb-2.webp" />
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
                                    <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" className="progress" role="progressbar">
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
                                      <Link className="e-primary-btn has-small has-icon d-btn" href="/donations">
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
                          <img alt="shape" src="/assets/img/shapes/shape-47.webp" />
                        </div>
                        <div className="icon-info-wrap">
                          <div className="icon-wrap">
                            <div className="icon">
                              <img alt="icon" src="/assets/img/icons/icon-18.html" />
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
                    <div className="s-widget-wrap m-b-30">
                      <div className="w-title">
                        <h3>Our Gallery</h3>
                        <div className="bar-wrap">
                          <div className="bar-1"></div>
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="sidebar-gallery">
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-134.webp" />
                        </div>
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-131.webp" />
                        </div>
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-132.webp" />
                        </div>
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-133.webp" />
                        </div>
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-130.webp" />
                        </div>
                        <div className="thumb">
                          <img alt="thumb" src="/assets/img/thumbs/thumb-129.webp" />
                        </div>
                      </div>
                    </div>
                    <div className="s-widget-wrap">
                      <div className="w-title">
                        <h3>Share With Everyone</h3>
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
        </section>
        {" "}
        <section className="services-details-section-4 p-b-130 p-t-60 p-b-xs-80">
          <div className="container">
            <div className="row m-b-50 m-b-xs-40">
              <div className="col-xl-12">
                <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <img alt="icon-2" src="/assets/img/icons/icon-2.svg" />
                  {" "}
                  <span>Our Camping</span>
                </div>
                <div className="common-title m-b-0 text-start" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <h2>Your Gift For a Greener Tomorrow</h2>
                </div>
              </div>
            </div>
            <div className="row row-gap-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <div className="col-xl-4 col-md-6">
                <div className="camping-card">
                  <div className="thumb">
                    <Link href="/camping-details">
                      <img alt="thumb-2" src="/assets/img/thumbs/thumb-2.webp" />
                    </Link>
                    <div className="category">
                      <Link href="/camping-details">Animal</Link>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top">
                      <div className="date">
                        <img alt="calendar-icon" src="/assets/img/icons/calendar.svg" />
                        {" "}
                        <span>29 Days Left</span>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/camping-details">Sustainable Energy for All: Why Your Donation Matters</Link>
                        </h3>
                      </div>
                      <div className="text">
                        <p>We work to protect and restore the natural environment.</p>
                      </div>
                    </div>
                    <div className="donation-wrap">
                      <div className="d-top">
                        <p>Donation Complete</p>
                        <p>72%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "75%" }}></div>
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
                        <Link className="e-primary-btn has-icon d-btn" href="/donations">
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
                        {" "}
                        <button className="d-wishlist">
                          <i className="fa-regular fa-heart"></i>
                          {" "}
                          <span>259</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="camping-card">
                  <div className="thumb">
                    <Link href="/camping-details">
                      <img alt="thumb-2" src="/assets/img/thumbs/thumb-3.webp" />
                    </Link>
                    <div className="category">
                      <Link href="/camping-details">Plantation</Link>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top">
                      <div className="date">
                        <img alt="calendar-icon" src="/assets/img/icons/calendar.svg" />
                        {" "}
                        <span>29 Days Left</span>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/camping-details">Reforestation and Tree Planting Campaign 2026</Link>
                        </h3>
                      </div>
                      <div className="text">
                        <p>We work to protect and restore the natural environment.</p>
                      </div>
                    </div>
                    <div className="donation-wrap">
                      <div className="d-top">
                        <p>Donation Complete</p>
                        <p>64%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="64" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "64%" }}></div>
                      </div>
                      <div className="fund">
                        <p>
                          Raised:
                          {" "}
                          <span>$6,650</span>
                        </p>
                        <p>
                          Goal:
                          {" "}
                          <span>$10,560</span>
                        </p>
                      </div>
                      <div className="d-bottom">
                        <Link className="e-primary-btn has-icon d-btn" href="/donations">
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
                        {" "}
                        <button className="d-wishlist">
                          <i className="fa-regular fa-heart"></i>
                          {" "}
                          <span>259</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="camping-card">
                  <div className="thumb">
                    <Link href="/camping-details">
                      <img alt="thumb-2" src="/assets/img/thumbs/thumb-4.webp" />
                    </Link>
                    <div className="category">
                      <Link href="/camping-details">Animal</Link>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top">
                      <div className="date">
                        <img alt="calendar-icon" src="/assets/img/icons/calendar.svg" />
                        {" "}
                        <span>29 Days Left</span>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/camping-details">Protecting Endangered Species and Their Habitats</Link>
                        </h3>
                      </div>
                      <div className="text">
                        <p>We work to protect and restore the natural environment.</p>
                      </div>
                    </div>
                    <div className="donation-wrap">
                      <div className="d-top">
                        <p>Donation Complete</p>
                        <p>89%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="89" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "89%" }}></div>
                      </div>
                      <div className="fund">
                        <p>
                          Raised:
                          {" "}
                          <span>$13,650</span>
                        </p>
                        <p>
                          Goal:
                          {" "}
                          <span>$16,560</span>
                        </p>
                      </div>
                      <div className="d-bottom">
                        <Link className="e-primary-btn has-icon d-btn" href="/donations">
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
                        {" "}
                        <button className="d-wishlist">
                          <i className="fa-regular fa-heart"></i>
                          {" "}
                          <span>259</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
