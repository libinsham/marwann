/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const metadata = {
  "title": "Econest — Ecology & Environment HTML5 Template"
}

export default function Page() {
  return (
    <>
      <main>
        <section className="breadcrumb-section bg-cream">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="breadcrumb-content" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.webp)" }}>
                  <div className="breadcrumb-nav" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <a href="#">Service</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <h2>Our Service</h2>
                  </div>
                  <div className="shape-1">
                    <img alt="shape" src="/assets/img/shapes/shape-1.webp" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                <div className="breadcrumb-thumb">
                  <img alt="thumb" src="/assets/img/thumbs/thumb-1.webp" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="services-section bg-cream p-t-100 p-b-70">
          <div className="container">
            <div className="row justify-content-center text-center m-b-50 m-b-xs-40">
              <div className="col-xl-6">
                <div className="common-subtitle" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <img alt="icon-1" src="/assets/img/icons/icon-2.svg" />
                  {" "}
                  <span>What We Do</span>
                </div>
                <div className="common-title m-b-0" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <h2>We Offer Different Services For Helped You</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="col-xl-4 m-b-30">
                <div className="project-card style-service">
                  <div className="thumb">
                    <Link href="/services-details">
                      <img alt="thumb-63" src="/assets/img/thumbs/thumb-63.webp" />
                    </Link>
                    <div className="tag">
                      <p>No - 01</p>
                    </div>
                    <div className="content">
                      <h5>Waste Management</h5>
                      <p>Energy consulting involves providing of advice and guidance on energy</p>
                      <div className="join-us">
                        <Link className="e-primary-btn has-icon is-hover-white" href="/services-details">
                          Read More
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
              <div className="col-xl-4 m-b-30">
                <div className="project-card style-service">
                  <div className="thumb">
                    <Link href="/services-details">
                      <img alt="thumb-63" src="/assets/img/thumbs/thumb-64.webp" />
                    </Link>
                    <div className="tag">
                      <p>No - 02</p>
                    </div>
                    <div className="content">
                      <h5>Cleaning Ocean</h5>
                      <p>Energy consulting involves providing of advice and guidance on energy</p>
                      <div className="join-us">
                        <Link className="e-primary-btn has-icon is-hover-white" href="/services-details">
                          Read More
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
              <div className="col-xl-4 m-b-30">
                <div className="project-card style-service">
                  <div className="thumb">
                    <Link href="/services-details">
                      <img alt="thumb-63" src="/assets/img/thumbs/thumb-65.webp" />
                    </Link>
                    <div className="tag">
                      <p>No - 03</p>
                    </div>
                    <div className="content">
                      <h5>Plastic Recycling</h5>
                      <p>Energy consulting involves providing of advice and guidance on energy</p>
                      <div className="join-us">
                        <Link className="e-primary-btn has-icon is-hover-white" href="/services-details">
                          Read More
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
              <div className="col-xl-4 m-b-30">
                <div className="project-card style-service">
                  <div className="thumb">
                    <Link href="/services-details">
                      <img alt="thumb-63" src="/assets/img/thumbs/thumb-66.webp" />
                    </Link>
                    <div className="tag">
                      <p>No - 04</p>
                    </div>
                    <div className="content">
                      <h5>Tree Planting Initiatives</h5>
                      <p>Energy consulting involves providing of advice and guidance on energy</p>
                      <div className="join-us">
                        <Link className="e-primary-btn has-icon is-hover-white" href="/services-details">
                          Read More
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
              <div className="col-xl-4 m-b-30">
                <div className="project-card style-service">
                  <div className="thumb">
                    <Link href="/services-details">
                      <img alt="thumb-63" src="/assets/img/thumbs/thumb-67.webp" />
                    </Link>
                    <div className="tag">
                      <p>No - 05</p>
                    </div>
                    <div className="content">
                      <h5>Eco Restoration</h5>
                      <p>Energy consulting involves providing of advice and guidance on energy</p>
                      <div className="join-us">
                        <Link className="e-primary-btn has-icon is-hover-white" href="/services-details">
                          Read More
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
              <div className="col-xl-4 m-b-30">
                <div className="project-card style-service">
                  <div className="thumb">
                    <Link href="/services-details">
                      <img alt="thumb-63" src="/assets/img/thumbs/thumb-68.webp" />
                    </Link>
                    <div className="tag">
                      <p>No - 06</p>
                    </div>
                    <div className="content">
                      <h5>Green Energy Audits</h5>
                      <p>Energy consulting involves providing of advice and guidance on energy</p>
                      <div className="join-us">
                        <Link className="e-primary-btn has-icon is-hover-white" href="/services-details">
                          Read More
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
          <div className="c-shape-1">
            <img alt="shape-30" src="/assets/img/shapes/shape-30.webp" />
          </div>
          <div className="c-shape-2">
            <img alt="shape-31" src="/assets/img/shapes/shape-31.webp" />
          </div>
        </section>
        {" "}
        <div className="process-section p-t-140 p-b-100">
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row justify-content-center text-center m-b-50 m-b-xs-40">
                  <div className="col-xl-6">
                    <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <img alt="icon-1" src="/assets/img/icons/icon-2.svg" />
                      {" "}
                      <span>Work Process</span>
                    </div>
                    <div className="common-title m-b-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                      <h2>How To Work With Us</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <div className="col-xl-4">
                <div className="service-card">
                  <div className="service-top">
                    <h4>Think Identifying</h4>
                    <div className="number">
                      <span>01</span>
                    </div>
                  </div>
                  <div className="service-content">
                    <p>Many desktop publishing packages and web page editors now use.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="service-card">
                  <div className="service-top">
                    <h4>Work Planning</h4>
                    <div className="number">
                      <span>02</span>
                    </div>
                  </div>
                  <div className="service-content">
                    <p>
                      Readable english specimen book. It has survived not only five centuries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="service-card">
                  <div className="service-top">
                    <h4>Product Installation</h4>
                    <div className="number">
                      <span>03</span>
                    </div>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem Ipsum is not simply random text has roots in a piece of classical.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-shape-1">
            <img alt="shape-32" src="/assets/img/shapes/shape-32.webp" />
          </div>
        </div>
        {" "}
        <section className="dust-recycling-section" style={{ backgroundImage: "url(/assets/img/bg/dust-recycling-bg.webp)" }}>
          <div className="container">
            <div className="row justify-content-center align-items-xl-start align-items-center">
              <div className="col-lg-10 col-12 order-2 order-lg-1">
                <div className="dust-recycle-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <div className="dust-recycle-top">
                    <h5>Dust Recycling</h5>
                    <div className="services-4">
                      <div className="service-2">
                        <i className="fa-light fa-badge-check"></i>
                        <p>Work With Professional Team</p>
                      </div>
                      <div className="service-2">
                        <i className="fa-light fa-badge-check"></i>
                        <p>Emergency Solution Anytime</p>
                      </div>
                    </div>
                  </div>
                  <div className="campaign-progress">
                    <div className="environmental">
                      <div className="top">
                        <p>Environmental Experience</p>
                        <p>82%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="82" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "82%" }}></div>
                      </div>
                    </div>
                    <div className="campaigns">
                      <div className="top">
                        <p>Campaigns</p>
                        <p>94%</p>
                      </div>
                      <div aria-label="Basic example" aria-valuemax="100" aria-valuemin="0" aria-valuenow="94" className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 order-1 order-lg-2 m-b-md-60 m-b-xs-60" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className="btn-layer">
                  <a className="play-btn" data-fancybox="" href={"https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"}>Play</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {" "}
        <section className="faq-section style-service p-t-120 p-b-240" style={{ backgroundImage: "url(/assets/img/bg/why-us-bg-3.webp)" }}>
          <div className="container">
            <div className="row faq">
              <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="common-subtitle">
                  <img alt="icon-2" src="/assets/img/icons/icon-2.svg" />
                  {" "}
                  <span>{"Question & Answer"}</span>
                </div>
                <div className="common-title text-start">
                  <h2>
                    Frequently Asked Question
                    {" "}
                    <span>?</span>
                  </h2>
                </div>
                <div className="text">
                  <p>We work to protect and restore the natural environment.</p>
                </div>
                <div className="blog-btn">
                  <Link className="e-primary-btn has-icon" href="/contact">
                    Have You Any Questions?
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
                <div className="top-right">
                  <img alt="authors" src="/assets/img/authors/author-1.webp" />
                  <div className="people-joined">
                    <h5>2603</h5>
                    <span>Peoples Registered</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                <div className="accordion faq-accordion" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button aria-controls="flush-collapseOne" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#flush-collapseOne" data-bs-toggle="collapse" type="button">
                        <span className="accordion-title">1.</span>
                        How do I get started?
                        {" "}
                        <span className="icon">
                          <span className="icon-plus"></span>
                          {" "}
                          <span className="icon-minus"></span>
                        </span>
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" id="flush-collapseOne">
                      <div className="accordion-body">
                        The point of using lorem ipsum is that has more-less packages normal commercial management in construction ensures the planning, execution and coordination.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button aria-controls="flush-collapseTwo" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#flush-collapseTwo" data-bs-toggle="collapse" type="button">
                        <span className="accordion-title">2.</span>
                        What fees do you charge?
                        {" "}
                        <span className="icon">
                          <span className="icon-plus"></span>
                          {" "}
                          <span className="icon-minus"></span>
                        </span>
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" id="flush-collapseTwo">
                      <div className="accordion-body">
                        The point of using lorem ipsum is that has more-less packages normal commercial management in construction ensures the planning, execution and coordination.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button aria-controls="flush-collapseThree" aria-expanded="false" className="accordion-button" data-bs-target="#flush-collapseThree" data-bs-toggle="collapse" type="button">
                        <span className="accordion-title">3.</span>
                        Where should I incorporate my business?
                        {" "}
                        <span className="icon">
                          <span className="icon-plus"></span>
                          {" "}
                          <span className="icon-minus"></span>
                        </span>
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample" id="flush-collapseThree">
                      <div className="accordion-body">
                        The point of using lorem ipsum is that has more-less packages normal commercial management in construction ensures the planning, execution and coordination.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button aria-controls="flush-collapseFour" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#flush-collapseFour" data-bs-toggle="collapse" type="button">
                        <span className="accordion-title">4.</span>
                        What type of company is measured?
                        {" "}
                        <span className="icon">
                          <span className="icon-plus"></span>
                          {" "}
                          <span className="icon-minus"></span>
                        </span>
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" id="flush-collapseFour">
                      <div className="accordion-body">
                        The point of using lorem ipsum is that has more-less packages normal commercial management in construction ensures the planning, execution and coordination.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button aria-controls="flush-collapseFive" aria-expanded="false" className="accordion-button collapsed" data-bs-target="#flush-collapseFive" data-bs-toggle="collapse" type="button">
                        <span className="accordion-title">5.</span>
                        How can I safely use files?
                        {" "}
                        <span className="icon">
                          <span className="icon-plus"></span>
                          {" "}
                          <span className="icon-minus"></span>
                        </span>
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" id="flush-collapseFive">
                      <div className="accordion-body">
                        The point of using lorem ipsum is that has more-less packages normal commercial management in construction ensures the planning, execution and coordination.
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
