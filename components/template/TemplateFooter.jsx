/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
export default function TemplateFooter() {
  return (
    <>
      <footer className="footer-section p-t-125" style={{ backgroundImage: "url(/assets/img/bg/footer-bg.webp)" }}>
        <div className="container">
          <div className="row justify-content-between row-gap-md-5 row-gap-4 p-b-30">
            <div className="col-xl-4 col-lg-8 col-md-7">
              <div className="footer-widget">
                <div className="about-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <img alt="logo" src="/assets/img/logo/logo-white.svg" />
                    </Link>
                  </div>
                  <div className="text">
                    <p>
                      Introducing our team of talented and skilled professionals who are ready to increase your productivity and bring your business.
                    </p>
                  </div>
                  <div className="info">
                    <p>
                      <b>We Are Available !!</b>
                    </p>
                    <p>
                      Mon-Sat:
                      {" "}
                      <span>10:00am to 07:30pm</span>
                    </p>
                  </div>
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
            <div className="col-xl-2 col-lg-4 col-md-5">
              <div className="footer-widget">
                <h3 className="w-title">Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/about">About Company</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Causes</Link>
                  </li>
                  <li>
                    <Link href="/camping-donation">Investor Presentation</Link>
                  </li>
                  <li>
                    <Link href="/donations">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="/volunteer">Meet Our Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-5">
              <div className="footer-widget">
                <h3 className="w-title">Our Services</h3>
                <ul>
                  <li>
                    <Link href="/camping-details">Tree Plantation</Link>
                  </li>
                  <li>
                    <Link href="/camping-donation">Forest Cleaning</Link>
                  </li>
                  <li>
                    <Link href="/services-details">Plastic Recycling</Link>
                  </li>
                  <li>
                    <Link href="/project">Natural Power</Link>
                  </li>
                  <li>
                    <Link href="/project">Renewable Energy</Link>
                  </li>
                  <li>
                    <Link href="/project-details">Water Refine</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5">
              <div className="footer-widget">
                <h3 className="w-title">Newsletter</h3>
                <div className="subscribe-form">
                  <form action="#">
                    <div className="input-wrap">
                      <input placeholder="ashikulislambsl@gmail.com" type="text" />
                    </div>
                    <div className="input-button">
                      <button className="e-primary-btn has-icon is-hover-white" type="submit">
                        Subscribe Now
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
                    <div className="input-checkbox">
                      <input id="agree" type="checkbox" />
                      {" "}
                      <label htmlFor="agree">
                        <span className="check-mark"></span>
                        {" "}
                        I agree the policy
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-3">
            <div className="footer-bottom-layout-2">
              <div className="footer-copyright">© 2026 Econest. All Rights Reserved.</div>
              <div className="footer-bottom-menu">
                <ul>
                  <li>
                    <Link href="/contact">{"Terms & Condition"}</Link>
                  </li>
                  <li>
                    <Link href="/contact">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
