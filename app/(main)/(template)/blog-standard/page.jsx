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
                        <a href="#">Blog Standard</a>
                      </li>
                    </ul>
                  </div>
                  <div className="breadcrumb-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <h2>Blog Standard</h2>
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
        <section className="services-details-section p-t-120 p-b-250 p-t-lg-80 p-t-md-80 p-t-xs-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="details-layout-wrap">
                  <div className="details-content" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="blog-card-4 m-b-30">
                      <div className="thumb">
                        <Link href="/blog-details">
                          <img src="/assets/img/thumbs/thumb-144.webp" alt="thumb-1" />
                        </Link>
                        <div className="category">
                          <Link href="/blog-details">Plantation</Link>
                        </div>
                      </div>
                      <div className="content">
                        <div className="blog-info">
                          <div className="publisher-info">
                            <img src="/assets/img/thumbs/thumb-143.webp" alt="thumb" />
                            <p>By Rebecca</p>
                          </div>
                          <div className="date">
                            <i className="fa-light fa-calendar-days"></i>
                            <p>12th Sep, 2024</p>
                          </div>
                          <div className="comment">
                            <i className="fa-light fa-comments"></i>
                            <p>02 Comments</p>
                          </div>
                          <div className="view">
                            <i className="fa-light fa-eye"></i>
                            <p>630 Views</p>
                          </div>
                        </div>
                        <div className="title">
                          <h3>
                            <Link href="/blog-details">Reforestation and Tree Planting Campaign 2026</Link>
                          </h3>
                        </div>
                        <div className="text">
                          <p>
                            Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using are Ipsum is that it has a more-or-less normal distribution of letterng...
                          </p>
                        </div>
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
                    <div className="blog-card-4 m-b-30">
                      <div className="thumb">
                        <Link href="/blog-details">
                          <img src="/assets/img/thumbs/thumb-145.webp" alt="thumb-1" />
                        </Link>
                        <div className="category">
                          <Link href="/blog-details">Plantation</Link>
                        </div>
                      </div>
                      <div className="content">
                        <div className="blog-info">
                          <div className="publisher-info">
                            <img src="/assets/img/thumbs/thumb-143.webp" alt="thumb" />
                            <p>By Rebecca</p>
                          </div>
                          <div className="date">
                            <i className="fa-light fa-calendar-days"></i>
                            <p>12th Sep, 2024</p>
                          </div>
                          <div className="comment">
                            <i className="fa-light fa-comments"></i>
                            <p>02 Comments</p>
                          </div>
                          <div className="view">
                            <i className="fa-light fa-eye"></i>
                            <p>630 Views</p>
                          </div>
                        </div>
                        <div className="title">
                          <h3>
                            <Link href="/blog-details">Sustainable Energy for All: Why Your Donation Matters</Link>
                          </h3>
                        </div>
                        <div className="text">
                          <p>
                            Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using are Ipsum is that it has a more-or-less normal distribution of letterng...
                          </p>
                        </div>
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
                    <div className="blog-card-4 m-b-30">
                      <div className="thumb">
                        <Link href="/blog-details">
                          <img src="/assets/img/thumbs/thumb-146.webp" alt="thumb-1" />
                        </Link>
                        <div className="category">
                          <Link href="/blog-details">Plantation</Link>
                        </div>
                      </div>
                      <div className="content">
                        <div className="blog-info">
                          <div className="publisher-info">
                            <img src="/assets/img/thumbs/thumb-143.webp" alt="thumb" />
                            <p>By Rebecca</p>
                          </div>
                          <div className="date">
                            <i className="fa-light fa-calendar-days"></i>
                            <p>12th Sep, 2024</p>
                          </div>
                          <div className="comment">
                            <i className="fa-light fa-comments"></i>
                            <p>02 Comments</p>
                          </div>
                          <div className="view">
                            <i className="fa-light fa-eye"></i>
                            <p>630 Views</p>
                          </div>
                        </div>
                        <div className="title">
                          <h3>
                            <Link href="/blog-details">From Trash to Treasure: Inspiring Recycling Stories</Link>
                          </h3>
                        </div>
                        <div className="text">
                          <p>
                            Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using are Ipsum is that it has a more-or-less normal distribution of letterng...
                          </p>
                        </div>
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
                    <div className="blog-card-4 m-b-50">
                      <div className="thumb">
                        <Link href="/blog-details">
                          <img src="/assets/img/thumbs/thumb-144.webp" alt="thumb-1" />
                        </Link>
                        <div className="category">
                          <Link href="/blog-details">Plantation</Link>
                        </div>
                      </div>
                      <div className="content">
                        <div className="blog-info">
                          <div className="publisher-info">
                            <img src="/assets/img/thumbs/thumb-147.webp" alt="thumb" />
                            <p>By Rebecca</p>
                          </div>
                          <div className="date">
                            <i className="fa-light fa-calendar-days"></i>
                            <p>12th Sep, 2024</p>
                          </div>
                          <div className="comment">
                            <i className="fa-light fa-comments"></i>
                            <p>02 Comments</p>
                          </div>
                          <div className="view">
                            <i className="fa-light fa-eye"></i>
                            <p>630 Views</p>
                          </div>
                        </div>
                        <div className="title">
                          <h3>
                            <Link href="/blog-details">The Power of One: How Individual Actions Save the Planet</Link>
                          </h3>
                        </div>
                        <div className="text">
                          <p>
                            Packages and web page editors now use Lorem Ipsum as their default model textlayout. The point of using are Ipsum is that it has a more-or-less normal distribution of letterng...
                          </p>
                        </div>
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
                    <div className="project-pagination text-center m-b-30">
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
                  <div className="detail-sidebar" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <div className="s-widget-wrap m-b-30">
                      <div className="w-title">
                        <h3>Search Here</h3>
                        <div className="bar-wrap">
                          <div className="bar-1"></div>
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="search-bar">
                        <input type="text" placeholder="Search Type.." />
                        {" "}
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <div className="categories">
                        <button>Forest</button>
                        {" "}
                        <button>Cleaning</button>
                        {" "}
                        <button>Plantation</button>
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
                            <img alt="thumb" src="/assets/img/thumbs/thumb-121.webp" />
                          </div>
                          <div>
                            <div className="date">
                              <p>Plantation - Jun 13, 2024</p>
                            </div>
                            <div className="name">
                              <Link href="/blog-details">
                                <h5>Sustainable Energy for All: Donation Matters</h5>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="campaign">
                          <div className="thumb">
                            <img alt="thumb" src="/assets/img/thumbs/thumb-122.webp" />
                          </div>
                          <div>
                            <div className="date">
                              <p>Forest - Jun 20, 2024</p>
                            </div>
                            <div className="name">
                              <Link href="/blog-details">
                                <h5>Renewable Energy Technology of Secrets</h5>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="campaign">
                          <div className="thumb">
                            <img alt="thumb" src="/assets/img/thumbs/thumb-123.webp" />
                          </div>
                          <div>
                            <div className="date">
                              <p>Cleaning - Feb 09, 2024</p>
                            </div>
                            <div className="name">
                              <Link href="/blog-details">
                                <h5>Nature’s Symphony: Exploring Ecology</h5>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="campaign campaign-last">
                          <div className="thumb">
                            <img alt="thumb" src="/assets/img/thumbs/thumb-124.webp" />
                          </div>
                          <div>
                            <div className="date">
                              <p>Forest - Jan 30, 2024</p>
                            </div>
                            <div className="name">
                              <Link href="/blog-details">
                                <h5>Grow with Us: Tree Planting Day</h5>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="s-widget-wrap m-b-30">
                      <div className="w-title">
                        <h3>Categories</h3>
                        <div className="bar-wrap">
                          <div className="bar-1"></div>
                          <div className="bar-2"></div>
                        </div>
                      </div>
                      <div className="detail-list">
                        <ul>
                          <li>
                            <Link href="/services">
                              Tree Plantation
                              {" "}
                              <span className="icon">
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Forest Pollution
                              <span className="icon">
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Dust Recycling
                              <span className="icon">
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Cleaning Ocean
                              <span className="icon">
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Plant Seedlings
                              <span className="icon">
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services">
                              Solar Power Solution
                              <span className="icon">
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="s-widget-wrap">
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
            <img src="/assets/img/shapes/shape-31.webp" alt="shape-31" />
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
