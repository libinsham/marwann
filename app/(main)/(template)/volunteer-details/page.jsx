/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export const metadata = {
  "title": "Econest"
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
                  <div className="breadcrumb-nav" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <a href="#">Volunteer Details</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Volunteer Details</h2>
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
        <section className="volunteer-details-section p-t-130 p-b-120">
          <div className="container">
            <div className="row align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="col-xl-5">
                <div className="volunteer-detail-card">
                  <div className="thumb">
                    <Link href="/volunteer">
                      <img src="/assets/img/thumbs/thumb-83.webp" alt="thumb-83" />
                    </Link>
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
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="volunteer-detail-content">
                  <div className="content-wrap">
                    <h4 className="subtitle">My Name is,</h4>
                    <h3 className="title">BM Ashik (Moni)</h3>
                    <p>Senior Volunteer</p>
                  </div>
                  <div className="details-wrap">
                    <div className="info">
                      <p>Occupation:</p>
                      <span>Student</span>
                    </div>
                    <div className="info">
                      <p>Experience:</p>
                      <span>10 Years</span>
                    </div>
                    <div className="info">
                      <p>Email:</p>
                      <span>Roshua10@gmail.com</span>
                    </div>
                    <div className="info">
                      <p>Phone:</p>
                      <span>+855 (2669) 1234</span>
                    </div>
                  </div>
                  <div className="content-wrap">
                    <h3 className="title style-2">Summary</h3>
                    <p>
                      Hello Friend, My name is Bm Ashik (Moni). I am a Ecology specialists may be involved in a variety of tasks, including conducting field research, analyzing data, developing conservation strategies, or communicating scientific findings to the public or policymakers. They may also collaborate with other specialists, such as biologists, geologists, or environmental.
                    </p>
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
