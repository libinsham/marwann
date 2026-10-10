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
                        <a href="#">Blog Grid</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Blog Grid</h2>
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
        <section className="blog-section p-t-120 p-b-120 p-t-lg-80 p-b-lg-80 p-t-md-60 p-b-md-60 p-t-xs-60 p-b-xs-60">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-32.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>24</h2>
                      <h5>Feb</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">Sustainable Energy for All: Why Your Donation Matters</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-142.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>16</h2>
                      <h5>Feb</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">The Power of One: How Individual Actions Save the Planet</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-135.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>09</h2>
                      <h5>Feb</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">Breaking Down Climate Change: What You Need to Know</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-136.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>02</h2>
                      <h5>Jan</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">10 Simple Ways to Live a Sustainable Lifestyle</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-137.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>05</h2>
                      <h5>Jan</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">The Future of Renewable Energy: Trends and Innovations</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-138.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>13</h2>
                      <h5>Jan</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">Wildlife Conservation: Why It Matters More Than Ever</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-139.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>30</h2>
                      <h5>Dec</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">Water Conservation: Small Changes, Big Impact</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-140.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>26</h2>
                      <h5>Dec</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">The Role of Technology in Fighting Climate Change</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
              <div className="col-xl-4 col-md-6 col-sm-12 m-b-30">
                <div className="blog-card-2">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/thumbs/thumb-141.webp" alt="thumb" />
                    </Link>
                    <div className="event-date">
                      <h2>17</h2>
                      <h5>Mar</h5>
                    </div>
                  </div>
                  <div className="content">
                    <div className="content-top p-0 m-b-20">
                      <div className="author">
                        <div className="admin">
                          <i className="fa-light fa-circle-user"></i>
                          {" "}
                          <span>Admin</span>
                        </div>
                        <div className="solar">
                          <i className="fa-light fa-bookmark"></i>
                          {" "}
                          <span>Solar</span>
                        </div>
                      </div>
                      <div className="title">
                        <h3>
                          <Link href="/blog-details">From Trash to Treasure: Inspiring Recycling Stories</Link>
                        </h3>
                      </div>
                    </div>
                    <div className="content-bottom">
                      <Link href="/blog-details" className="e-primary-btn has-icon has-small read-more-btn">
                        Read More
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
            <div className="row justify-content-center text-center m-t-20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
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
