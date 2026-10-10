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
                        <a href="#">Become a Volunteer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Become a Volunteer</h2>
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
        <section className="why-us-section-2 style-2 p-t-115 p-b-245">
          <div className="container">
            <div className="row align-items-center p-b-80">
              <div className="col-xl-6 px-xl-5">
                <div className="thumb" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                  <div className="thumb-1">
                    <img alt="thumb-1" src="/assets/img/thumbs/thumb-24.webp" />
                    <div className="s-shape">
                      <img alt="shape-1" src="/assets/img/shapes/shape-14.webp" />
                    </div>
                  </div>
                  <div className="thumb-2 style-2">
                    <img alt="thumb-2" src="/assets/img/thumbs/thumb-25.webp" />
                    <div className="experience-shape">
                      <h3>
                        <span className="purecounter" data-purecounter-duration="2" data-purecounter-end="29">0</span>
                        +
                      </h3>
                      <p>Years of experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 px-xl-5">
                <div className="volunteer-form-content" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                  <h3>Introduce Yourself !</h3>
                  <p>Fill out the form and Feel free to say !!</p>
                  <form action="#">
                    <div className="row form-row">
                      <div className="col-xl-6 col-md-6">
                        <div className="input-wrap">
                          <input placeholder="Full Name" type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <div className="input-wrap">
                          <input placeholder="Phone Number" type="tel" />
                        </div>
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-xl-6 col-md-6">
                        <div className="input-wrap">
                          <input placeholder="Email Address" type="email" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <div className="input-wrap">
                          <input placeholder="Current Location" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-xl-6 col-md-6">
                        <div className="input-wrap">
                          <input placeholder="Date of Birth" type="text" />
                        </div>
                      </div>
                      <div className="col-xl-6 col-md-6">
                        <div className="select-wrap">
                          <select id="" name="">
                            <option value="0">Occupation</option>
                            <option value="1">Doctor</option>
                            <option value="2">Engineer</option>
                            <option value="3">Teacher</option>
                          </select>
                          <div className="select-icon">
                            <i className="fa-regular fa-angle-down"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-wrap">
                          <textarea placeholder="Say Something..." />
                        </div>
                        <div className="input-checkbox">
                          <input id="terms" type="checkbox" />
                          {" "}
                          <label htmlFor="terms">
                            <span className="check-mark"></span>
                            {" "}
                            {"I Accept Terms & Conditions"}
                          </label>
                        </div>
                        <div className="input-button">
                          <button className="e-primary-btn has-icon is-hover-white" type="submit">
                            Submit Now
                            {" "}
                            <span className="icon-wrap">
                              <span className="icon">
                                <i className="fa-regular fa-arrow-right"></i>
                                {" "}
                                <i className="fa-regular fa-arrow-right"></i>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="v-summary-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <h4>Summary</h4>
                  <div className="content">
                    <p>
                      Ratione doloribus optio minus cum ab. Nostrum rerum minus sapiente eveniet fuga quos tenetur Bicycle rights taxidermy knausgaard, 3 wolf moon schlitz
                      {" "}
                      <b>kombucha freegan ugh ethical kogi Déjà</b>
                      {" "}
                      recherche de nouvelle.
                    </p>
                    <div className="info-wrapper">
                      <div className="info">
                        <div className="icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <p>Ecology is the study of the relationship between living</p>
                      </div>
                      <div className="info">
                        <div className="icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <p>In the long run, solar power is much more economical</p>
                      </div>
                      <div className="info">
                        <div className="icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <p>Focus on your important tasks and orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-shape-1">
            <img alt="shape-32" src="/assets/img/shapes/shape-32.webp" />
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
