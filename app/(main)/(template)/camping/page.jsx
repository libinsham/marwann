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
                        <a href="#">Camping</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Our Camping</h2>
                  </div>
                  <div className="shape-1">
                    <img src="/assets/img/shapes/shape-1.webp" alt="shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img src="/assets/img/thumbs/thumb-1.webp" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="services-section p-t-100 p-b-120">
          <div className="container">
            <div className="row justify-content-center text-center m-b-50 m-b-xs-40">
              <div className="col-xl-8">
                <div className="common-subtitle" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <img alt="icon-1" src="/assets/img/icons/icon-2.svg" />
                  {" "}
                  <span>Our Camping</span>
                </div>
                <div className="common-title m-b-0" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <h2>Your Gift For a Greener Tomorrow</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="col-xl-4 m-b-30">
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
              <div className="col-xl-4 m-b-30">
                <div className="camping-card active">
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
              <div className="col-xl-4 m-b-30">
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
              <div className="col-xl-4 m-b-30">
                <div className="camping-card">
                  <div className="thumb">
                    <Link href="/camping-details">
                      <img alt="thumb-75" src="/assets/img/thumbs/thumb-75.webp" />
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
                        <span>39 Days Left</span>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/camping-details">Preserve Nature for Future Generations</Link>
                        </h3>
                      </div>
                      <div className="text">
                        <p>We work to protect and restore the natural environment.</p>
                      </div>
                    </div>
                    <div className="donation-wrap">
                      <div className="d-top">
                        <p>Donation Complete</p>
                        <p>22%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="22" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "22%" }}></div>
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
                          <span>$36,560</span>
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
              <div className="col-xl-4 m-b-30">
                <div className="camping-card">
                  <div className="thumb">
                    <Link href="/camping-details">
                      <img alt="thumb-76" src="/assets/img/thumbs/thumb-76.webp" />
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
                        <span>21 Days Left</span>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/camping-details">Water Conservation: Small Changes, Big Impact</Link>
                        </h3>
                      </div>
                      <div className="text">
                        <p>We work to protect and restore the natural environment.</p>
                      </div>
                    </div>
                    <div className="donation-wrap">
                      <div className="d-top">
                        <p>Donation Complete</p>
                        <p>34%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="34" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "34%" }}></div>
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
              <div className="col-xl-4 m-b-30">
                <div className="camping-card">
                  <div className="thumb">
                    <Link href="/camping-details">
                      <img alt="thumb-77" src="/assets/img/thumbs/thumb-77.webp" />
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
                        <span>07 Days Left</span>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/camping-details">From Trash to Treasure: Inspiring Recycling Stories</Link>
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
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="72" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "72%" }}></div>
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
            <div className="row justify-content-center text-center m-t-30">
              <div className="col-xl-6">
                <div className="project-pagination">
                  <ul>
                    <li className="active">
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a href="#">03</a>
                    </li>
                    <li className="icon">
                      <a href="#">
                        <i className="fa-regular fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
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
