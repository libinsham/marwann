/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import ReachSection from "@/components/home/ReachSection";
import TrustIntroPopup from "@/components/home/TrustIntroPopup";

export const metadata = {
  title: "MARWANN CHARITABLE TRUST — Empowering Communities, Transforming Lives",
};





export default function Page() {
  return (
    <>
      <TrustIntroPopup />

      <main>

        <section className="hero-slider-active-1">

          <div className="swiper">

            <div className="swiper-wrapper">

              <div className="swiper-slide">

                <div className="hero-side" style={{ backgroundImage: "url(/assets/img/bg/hero-bg-1.webp)" }}>

                  <div className="container">

                    <div className="row">

                      <div className="col-xl-12">

                        <div className="hero-content-1">

                          <div className="subtitle" data-animation="animate__fadeInUp" data-delay="0.3s">

                            <span>Empowering Communities, Transforming Lives</span>

                          </div>

                          <div className="title" data-animation="animate__fadeInUp" data-delay="0.4s">

                            <h1>

                              Building a Better Future with

                              {" "}

                              <span>{"Heart & Hope"}</span>

                            </h1>

                          </div>

                          <div className="text" data-animation="animate__fadeInUp" data-delay="0.5s">

                            <p>

                              We are committed to empowering underserved communities through education, healthcare and meaningful social initiatives.

                            </p>

                          </div>

                          <div className="join-us" data-animation="animate__fadeInUp" data-delay="0.6s">

                            <Link href="/about" className="e-primary-btn has-icon">

                              Discover Our Mission

                              {" "}

                              <span className="icon-wrap">

                                <span className="icon">

                                  <i className="fa-regular fa-arrow-right"></i>

                                  {" "}

                                  <i className="fa-regular fa-arrow-right"></i>

                                </span>

                              </span>

                            </Link>

                            <div className="author-wrap">

                              <div className="author-info">

                                <h5>Our Mission</h5>

                                <p>Positive Social Change</p>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="group-shape-1">

                    <img src="/assets/img/shapes/group-shape-1.webp" alt="decorative shape" />

                  </div>

                  <div className="s-shape-1">

                    <img src="/assets/img/shapes/shape-2.webp" alt="decorative shape" />

                  </div>

                </div>

              </div>

              <div className="swiper-slide">

                <div className="hero-side" style={{ backgroundImage: "url(/assets/img/bg/hero-bg-6.webp)" }}>

                  <div className="container">

                    <div className="row">

                      <div className="col-xl-12">

                        <div className="hero-content-1">

                          <div className="subtitle" data-animation="animate__fadeInUp" data-delay="0.3s">

                            <span>Education for Every Generation</span>

                          </div>

                          <div className="title" data-animation="animate__fadeInUp" data-delay="0.4s">

                            <h1>

                              Empowering Youth Through

                              {" "}

                              <span>Education</span>

                            </h1>

                          </div>

                          <div className="text" data-animation="animate__fadeInUp" data-delay="0.5s">

                            <p>

                              We strive to expand educational opportunities and support minority community youth in building brighter futures.

                            </p>

                          </div>

                          <div className="join-us" data-animation="animate__fadeInUp" data-delay="0.6s">

                            <Link href="/program-areas" className="e-primary-btn has-icon">

                              Explore Our Work

                              {" "}

                              <span className="icon-wrap">

                                <span className="icon">

                                  <i className="fa-regular fa-arrow-right"></i>

                                  {" "}

                                  <i className="fa-regular fa-arrow-right"></i>

                                </span>

                              </span>

                            </Link>

                            <div className="author-wrap">

                              <div className="author-info">

                                <h5>Education</h5>

                                <p>Opportunity Through Learning</p>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="group-shape-1">

                    <img src="/assets/img/shapes/group-shape-1.webp" alt="decorative shape" />

                  </div>

                  <div className="s-shape-1">

                    <img src="/assets/img/shapes/shape-2.webp" alt="decorative shape" />

                  </div>

                </div>

              </div>

              <div className="swiper-slide">

                <div className="hero-side" style={{ backgroundImage: "url(/assets/img/bg/hero-bg-2.webp)" }}>

                  <div className="container">

                    <div className="row">

                      <div className="col-xl-12">

                        <div className="hero-content-1">

                          <div className="subtitle" data-animation="animate__fadeInUp" data-delay="0.3s">

                            <span>{"Health, Dignity & Well-being"}</span>

                          </div>

                          <div className="title" data-animation="animate__fadeInUp" data-delay="0.4s">

                            <h1>

                              Building Healthier

                              {" "}

                              <span>Communities Together</span>

                            </h1>

                          </div>

                          <div className="text" data-animation="animate__fadeInUp" data-delay="0.5s">

                            <p>

                              Promoting health awareness and supporting community well-being through compassionate initiatives and social action.

                            </p>

                          </div>

                          <div className="join-us" data-animation="animate__fadeInUp" data-delay="0.6s">

                            <Link href="/program-areas" className="e-primary-btn has-icon">

                              Our Health Initiatives

                              {" "}

                              <span className="icon-wrap">

                                <span className="icon">

                                  <i className="fa-regular fa-arrow-right"></i>

                                  {" "}

                                  <i className="fa-regular fa-arrow-right"></i>

                                </span>

                              </span>

                            </Link>

                            <div className="author-wrap">

                              <div className="author-info">

                                <h5>Healthcare</h5>

                                <p>Care for Every Community</p>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="group-shape-1">

                    <img src="/assets/img/shapes/group-shape-1.webp" alt="decorative shape" />

                  </div>

                  <div className="s-shape-1">

                    <img src="/assets/img/shapes/shape-2.webp" alt="decorative shape" />

                  </div>

                </div>

              </div>

              <div className="swiper-slide">

                <div className="hero-side" style={{ backgroundImage: "url(/assets/img/bg/hero-bg-4.webp)" }}>

                  <div className="container">

                    <div className="row">

                      <div className="col-xl-12">

                        <div className="hero-content-1">

                          <div className="subtitle" data-animation="animate__fadeInUp" data-delay="0.3s">

                            <img src="/assets/img/icons/icon-1.svg" alt="icon" />

                            {" "}

                            <span>Together for Lasting Change</span>

                          </div>

                          <div className="title" data-animation="animate__fadeInUp" data-delay="0.4s">

                            <h1>

                              Every Action Creates

                              {" "}

                              <span>A Brighter Tomorrow</span>

                            </h1>

                          </div>

                          <div className="text" data-animation="animate__fadeInUp" data-delay="0.5s">

                            <p>

                              Through grassroots programmes and collective action, we aim to create meaningful opportunities and lasting community impact.

                            </p>

                          </div>

                          <div className="join-us" data-animation="animate__fadeInUp" data-delay="0.6s">

                            <Link href="/donate" className="e-primary-btn has-icon">

                              Support Our Mission

                              {" "}

                              <span className="icon-wrap">

                                <span className="icon">

                                  <i className="fa-regular fa-arrow-right"></i>

                                  {" "}

                                  <i className="fa-regular fa-arrow-right"></i>

                                </span>

                              </span>

                            </Link>

                            <div className="author-wrap">

                              <div className="author-info">

                                <h5>Join Us</h5>

                                <p>Be Part of the Change</p>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="group-shape-1">

                    <img src="/assets/img/shapes/group-shape-1.webp" alt="decorative shape" />

                  </div>

                  <div className="s-shape-1">

                    <img src="/assets/img/shapes/shape-2.webp" alt="decorative shape" />

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="hero-slider-pagination-1"></div>

          <div className="hero-slider-social">

            <div className="social-links">

              <a href="https://www.facebook.com/p/Marwann-Charitable-Trust-100080103400545/" aria-label="Facebook">

                <i className="fab fa-facebook-f"></i>

              </a>

              {" "}

<a
  href="https://www.youtube.com/@marwanncharitabletrust/videos"
  aria-label="YouTube"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-youtube" aria-hidden="true"></i>
</a>

             

              {" "}

            

              {" "}


            </div>

            <div className="text">Join Social:</div>

          </div>

        </section>

        {" "}

        <section className="about-us-section m-t-120 m-t-md-100 m-t-xs-80">

          <div className="container">

            <div className="row align-items-center">

              <div className="col-xl-6">

                <div className="shape-wrapped-thumb-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">

                  <img src="/assets/img/thumbs/thumb-39.webp" alt="thumb" />

                  <div className="experience-shape-2">

                    <h3>

                      <span className="purecounter" data-purecounter-duration="2" data-purecounter-end="10">0</span>

                      +

                    </h3>

                    <p>Years of experience</p>

                  </div>

                  <div className="award-shape" style={{ backgroundImage: "url(/assets/img/shapes/shape-18.webp)" }}>

                    <img src="/assets/img/icons/icon-6.svg" alt="icon" />

                    <p>We are the best Trust</p>

                  </div>

                  <div className="box-shape">

                    <img src="/assets/img/shapes/shape-14.webp" alt="box-shape" />

                  </div>

                  <div className="positioned-shape">

                    <div className="shape-wrapped-thumb-2">

                      <div className="video-thumb">

                        <img src="/assets/img/thumbs/thumb-40.webp" alt="thumb" />

                        {" "}

                        <a href={"https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"} data-fancybox="" className="video-play-btn">

                          <i className="fa-solid fa-play"></i>

                        </a>

                      </div>

                      <div className="vector-shape">

                        <img src="/assets/img/shapes/shape-19.webp" alt="vector-shape" />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-xl-6">

                <div className="about-us-content px-xxl-5 px-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">

                  <div className="common-subtitle">

                    <span>About Us</span>

                  </div>

                  <div className="common-title text-start">

                    <h2>

                      {"Empowering Communities Through Education, Healthcare & Social Welfare"}

                    </h2>

                  </div>

                  <div className="c-tabs-wrapper">

                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">

                        <button className="nav-link active" id="c-tab-1" data-bs-toggle="tab" data-bs-target="#c-tab-1-pane" type="button" role="tab" aria-controls="c-tab-1-pane" aria-selected="true">Our Story</button>

                      </li>

                      <li className="nav-item" role="presentation">

                        <button className="nav-link" id="c-tab-2" data-bs-toggle="tab" data-bs-target="#c-tab-2-pane" type="button" role="tab" aria-controls="c-tab-2-pane" aria-selected="false">Our Mission</button>

                      </li>

                      <li className="nav-item" role="presentation">

                        <button className="nav-link" id="c-tab-3" data-bs-toggle="tab" data-bs-target="#c-tab-3-pane" type="button" role="tab" aria-controls="c-tab-3-pane" aria-selected="false">Our Vision</button>

                      </li>

                    </ul>

                    <div className="tab-content" id="myTabContent">

                      <div className="tab-pane fade show active" id="c-tab-1-pane" role="tabpanel" aria-labelledby="c-tab-1" tabIndex="0">

                        <div className="text">

                          <p>

                            MARWANN CHARITABLE TRUST is committed to empowering communities and creating opportunities through education, healthcare and social welfare.

                          </p>

                        </div>

                        <div className="benefits">

                          <ul>

                            <li>Supporting education and opportunities for underserved communities</li>

                            <li>Promoting healthcare awareness and community well-being</li>

                            <li>Encouraging grassroots initiatives for meaningful social change</li>

                          </ul>

                        </div>

                      </div>

                      <div className="tab-pane fade" id="c-tab-2-pane" role="tabpanel" aria-labelledby="c-tab-2" tabIndex="0">

                        <div className="text">

                          <p>

                            Our mission is to support underserved communities by expanding access to education, encouraging health awareness and promoting inclusive social development.

                          </p>

                        </div>

                        <div className="benefits">

                          <ul>

                            <li>

                              Expand educational opportunities, particularly for minority community youth

                            </li>

                            <li>Encourage access to healthcare awareness and essential support</li>

                            <li>Strengthen grassroots efforts through community participation</li>

                          </ul>

                        </div>

                      </div>

                      <div className="tab-pane fade" id="c-tab-3-pane" role="tabpanel" aria-labelledby="c-tab-3" tabIndex="0">

                        <div className="text">

                          <p>

                            Our vision is a more inclusive society where communities have opportunities to learn, thrive and achieve a healthier and more secure future.

                          </p>

                        </div>

                        <div className="benefits">

                          <ul>

                            <li>A future with greater access to education</li>

                            <li>Healthier and more empowered communities</li>

                            <li>Sustainable social progress through collective action</li>

                          </ul>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="annual-donation-wrap">

                    <Link href="/about" className="e-primary-btn has-icon">

                      Explore More

                      {" "}

                      <span className="icon-wrap">

                        <span className="icon">

                          <i className="fa-regular fa-arrow-right"></i>

                          {" "}

                          <i className="fa-regular fa-arrow-right"></i>

                        </span>

                      </span>

                    </Link>

                    <div className="rating-wrap">

                      <div className="star-rating">

                        <div className="author-info">

                          <h5>Our Commitment</h5>

                        </div>

                      </div>

                      <p>{"Education, Healthcare & Social Welfare"}</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        <section className="what-we-do-section p-t-100 p-b-100 p-t-xs-80 p-b-xs-80">

          <div className="container">

            <div className="row m-b-50 m-b-xs-40">

              <div className="col-xl-12">

                <div className="text-center">

                  <div className="common-subtitle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

                    <span>Our Focus Areas</span>

                  </div>

                  <div className="common-title mb-0" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">

                    <h2>{"Education & Health at the Heart of Our Work"}</h2>

                  </div>

                  <div className="text mt-3">

                    <p>

                      Creating opportunities through education and supporting healthier communities.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="row row-gap-md-5 row-gap-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">

              <div className="col-xl-6 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas">

                      <img src="/assets/img/thumbs/thumb-14.webp" alt="Education and youth empowerment" />

                    </Link>

                    <div className="number">

                      <Link href="/program-areas">01</Link>

                    </div>

                    <div className="content">

                      <h5>{"Education & Empowerment"}</h5>

                      <p>

                        Exploring educational opportunities and supporting minority community youth through learning and empowerment.

                      </p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn is-hover-white has-icon">

                          Explore Education

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

              <div className="col-xl-6 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas">

                      <img src="/assets/img/thumbs/thumb-15.webp" alt="Healthcare and community well-being" />

                    </Link>

                    <div className="number">

                      <Link href="/program-areas">02</Link>

                    </div>

                    <div className="content">

                      <h5>{"Health & Well-being"}</h5>

                      <p>

                        Promoting health awareness and supporting community well-being through healthcare initiatives.

                      </p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn is-hover-white has-icon">

                          Explore Healthcare

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

        </section>

        {" "}

<section

  className="company-achievements-section marwann-impact-section"

  aria-labelledby="impact-heading" >

  <div className="container">



    {/* Section Heading */}

    <div

      className="text-center marwann-impact-heading"

      data-aos="fade-up"

      data-aos-delay="100"

      data-aos-duration="1000"

    >

      <div className="marwann-impact-eyebrow">

        TURNING BELIEF INTO IMPACT

      </div>



      <h2 id="impact-heading">

        Verified Scale of Grassroots Transformation

      </h2>



      <p className="marwann-impact-intro">

        A snapshot of our programmes, community reach and measurable

        charitable activities.

      </p>

    </div>



    {/* Education & Digital Empowerment */}

    <div

      className="marwann-impact-group"

      data-aos="fade-up"

      data-aos-delay="200"

      data-aos-duration="1000"

    >

      <h3>Education &amp; Digital Empowerment</h3>



      <div className="marwann-impact-grid">



        <div className="marwann-impact-card">

          <strong>1,00,000+</strong>

          <span>LIVES IMPACTED</span>

        </div>



        <div className="marwann-impact-card">

          <strong>20+</strong>

          <span>DIGITAL CLASSROOMS &amp; CENTERS</span>

        </div>



        <div className="marwann-impact-card">

          <strong>25,000+</strong>

          <span>CERTIFICATES &amp; DIPLOMAS</span>

        </div>



        <div className="marwann-impact-card">

          <strong>110+</strong>

          <span>DISTRICTS REACHED</span>

        </div>



      </div>

    </div>



    {/* Women Livelihoods, Health & Environment */}

    <div

      className="marwann-impact-group"

      data-aos="fade-up"

      data-aos-delay="300"

      data-aos-duration="1000"

    >

      <h3>Women Livelihoods, Health &amp; Environment</h3>



      <div className="marwann-impact-grid">



        <div className="marwann-impact-card">

          <strong>10,000+</strong>

          <span>RURAL WOMEN SKILLED</span>

        </div>



        <div className="marwann-impact-card">

          <strong>65+</strong>

          <span>FREE HEALTH CAMPS</span>

        </div>



        <div className="marwann-impact-card">

          <strong>40+</strong>

          <span>SOLAR WATER UNITS</span>

        </div>



        <div className="marwann-impact-card">

          <strong>21+</strong>

          <span>STATES &amp; UTS ACTIVE</span>

        </div>



      </div>

    </div>



  </div>

</section>

        {" "}

        {" "}

        <section className="what-we-do-section m-t-80 p-t-100 p-b-120 p-b-md-100 p-t-xs-80 p-b-xs-80" style={{ backgroundImage: "url(/assets/img/bg/what-we-do-bg.webp)" }}>

          <div className="container">

            <div className="section-top-2">

              <div className="left">

                <div className="common-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">

                  <img src="/assets/img/icons/icon-1.svg" alt="" />

                  {" "}

                  <span>What We Do</span>

                </div>

                <div className="common-title text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">

                  <h2>Core Pillars of Grassroots Action</h2>

                </div>

              </div>

              <div className="right" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">

                <p>

                  From healthcare and food distribution to education and livelihood support, our activities focus on serving communities with compassion.

                </p>

                <Link href="/program-areas" className="service-btn e-primary-btn has-icon">

                  Explore Our Work

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

            <div className="row row-gap-md-5 row-gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Child orphanage support">

                      <img src="/assets/img/thumbs/child-orphan.webp" alt="Child welfare and orphanage support" />

                    </Link>

                    <div className="number">

                      <span></span>

                    </div>

                    <div className="content">

                      <h5>Child Orphanage Support</h5>

                      <p>Extending charitable assistance to children in orphanages.</p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="COVID-19 food distribution">

                      <img src="/assets/img/thumbs/covid-food.webp" alt="Food distribution programme" />

                    </Link>

                    <div className="number">

                      <span></span>

                    </div>

                    <div className="content">

                      <h5>COVID-19 Food Distribution</h5>

                      <p>

                        Distributing food to support communities during the COVID-19 pandemic.

                      </p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Nilavembu Kasayam distribution">

                      <img src="/assets/img/thumbs/nilavembu.webp" alt="Community health awareness initiative" />

                    </Link>

                    <div className="number">

                      <span>     </span>

                    </div>

                    <div className="content">

                      <h5>Nilavembu Kasayam Distribution</h5>

                      <p>

                        Organising Nilavembu Kasayam distribution in communities and public institutions.

                      </p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Eye camps">

                      <img src="/assets/img/thumbs/eye-camp.webp" alt="Eye camp and community healthcare" />

                    </Link>

                    <div className="number">

                      <span>       </span>

                    </div>

                    <div className="content">

                      <h5>Eye Camps</h5>

                      <p>Organising eye camps as part of our community healthcare activities.</p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Rice bag distribution">

                      <img src="/assets/img/thumbs/rice-bag.webp" alt="Rice bag distribution initiative" />

                    </Link>

                    <div className="number">

                      <span>   </span>

                    </div>

                    <div className="content">

                      <h5>Rice Bag Distribution</h5>

                      <p>Providing rice bags as part of our food assistance activities.</p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Independence Day and flood relief">

                      <img src="/assets/img/thumbs/independenceday.webp" alt="Community support and relief activities" />

                    </Link>

                    <div className="number">

                      <span>  </span>

                    </div>

                    <div className="content">

                      <h5>{"Independence Day & Flood Relief"}</h5>

                      <p>

                        Supporting Independence Day activities and providing flood relief assistance.

                      </p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Old age home support">

                      <img src="/assets/img/thumbs/old-age-home.webp" alt="Support for older people" />

                    </Link>

                    <div className="number">

                      <span></span>

                    </div>

                    <div className="content">

                      <h5>Old Age Home Support</h5>

                      <p>Extending charitable support to residents of old age homes.</p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Medical assistance">

                      <img src="/assets/img/thumbs/medical-assitance.webp" alt="Medical assistance programme" />

                    </Link>

                    <div className="number">

                      <span></span>

                    </div>

                    <div className="content">

                      <h5>Medical Assistance</h5>

                      <p>Providing medical assistance to people in need.</p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

              <div className="col-xl-4 col-md-6 col-sm-12">

                <div className="project-card">

                  <div className="thumb">

                    <Link href="/program-areas" aria-label="Women's tailoring classes">

                      <img src="/assets/img/thumbs/tailoring.webp" alt="Tailoring skills training for women" />

                    </Link>

                    <div className="number">

                      <span></span>

                    </div>

                    <div className="content">

                      <h5>Women's Tailoring Classes</h5>

                      <p>Conducting tailoring classes to develop practical skills among women.</p>

                      <div className="details-btn">

                        <Link href="/program-areas" className="e-primary-btn has-icon is-hover-white">

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

          <div className="shape-10">

            <img src="/assets/img/shapes/shape-10.webp" alt="" aria-hidden="true" />

          </div>

          <div className="shape-11">

            <img src="/assets/img/shapes/shape-11.webp" alt="" aria-hidden="true" />

          </div>

        </section>

        {" "}

        <section className="why-us-section p-t-100 p-b-100 p-t-xs-80 p-b-xs-80" style={{ backgroundImage: "url(/assets/img/bg/why-us-bg.webp)" }}>

          <div className="container">

            <div className="row row-gap-5 align-items-center">

              <div className="col-xl-6">

                <div className="thumb px-xl-5 left" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

                  <div className="thumb-1">

                    <img alt="thumb-1" src="/assets/img/thumbs/thumb-23.webp" />

                    <div className="s-shape-1">

                      <img alt="shape-1" src="/assets/img/shapes/shape-14.webp" />

                    </div>

                  </div>

                  <div className="thumb-2">

                    <img alt="thumb-2" src="/assets/img/thumbs/thumb-22.webp" />

                  </div>

                  <div className="thumb-3">

                    <div className="shape-wrapped-thumb">

                      <img alt="thumb-3" src="/assets/img/thumbs/thumb-21.webp" />

                      <div className="s-shape-1">

                        <img alt="shape-1" src="/assets/img/shapes/shape-13.webp" />

                      </div>

                      <div className="s-shape-2">

                        <img alt="shape-2" src="/assets/img/shapes/shape-15.webp" />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="col-xl-6">

                <div className="why-us-content" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">

                  <div className="common-subtitle">

                    <span>Why Our Work Matters</span>

                  </div>

                  <div className="common-title text-start">

                    <h2>Creating Opportunities for a Better Tomorrow</h2>

                  </div>

                  <div className="text">

                    <p>

                      We are committed to supporting underserved communities through education, healthcare and grassroots social initiatives.

                    </p>

                  </div>

                  <div className="services">

                    <div className="service-left">

                      <div className="service">

                        <i className="fa-solid fa-check"></i>

                        <p>{"Education & Empowerment"}</p>

                      </div>

                      <div className="service">

                        <i className="fa-solid fa-check"></i>

                        <p>Community Participation</p>

                      </div>

                    </div>

                    <div className="service-right">

                      <div className="service">

                        <i className="fa-solid fa-check"></i>

                        <p>{"Health & Well-being"}</p>

                      </div>

                      <div className="service">

                        <i className="fa-solid fa-check"></i>

                        <p>Grassroots Initiatives</p>

                      </div>

                    </div>

                  </div>

                  <div className="annual-donation-wrap">

                    <Link className="e-primary-btn has-icon" href="/program-areas">

                      Explore Our Work

                      {" "}

                      <span className="icon-wrap">

                        <span className="icon">

                          <i className="fa-regular fa-arrow-right"></i>

                          {" "}

                          <i className="fa-regular fa-arrow-right"></i>

                        </span>

                      </span>

                    </Link>

                    <div className="annual-donation">

                      <img alt="Donation icon" src="/assets/img/icons/icon-4.svg" />

                      <div className="annual-text">

                        <p>Be Part of the Change</p>

                        <h5>Support Our Mission</h5>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        <section className="contact-us" style={{ backgroundImage: "linear-gradient(\n                rgba(0, 0, 0, 0.60),\n                rgba(0, 0, 0, 0.60)\n            ),\n            url('/assets/img/bg/contact-us-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

          <div className="container">

            <div className="contact-form" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

              <div className="form-content">

                <div className="form-content-top">

                  <h3>

                    Send Us a Message

                    <br />

                    <span>To Donate</span>

                  </h3>

                  <p>

                    The point of using lorem ipsum is that it has more-or-less packages normal

                  </p>

                </div>

                <form id="contact-form" action="#" method="post">

                  <div className="input-wrap-3 m-b-15">

                    <input placeholder="Enter your name" type="text" name="name" />

                  </div>

                  <div className="input-wrap-3 m-b-15">

                    <input placeholder="example@gmail.com" type="email" name="email" />

                  </div>

                  <div className="input-wrap-3 m-b-15">

                    <input placeholder="+91 xxx xxx xxxx" type="text" name="phone" />

                  </div>

                  <div className="input-wrap-3 m-b-15">

                    <textarea placeholder="Say Something..." name="message" />

                  </div>

                  <button className="e-primary-btn is-hover-white has-icon" type="submit">

                    Submit Now

                    {" "}

                    <span className="icon-wrap">

                      <span className="icon">

                        <i className="fa-regular fa-arrow-right"></i>

                        <i className="fa-regular fa-arrow-right"></i>

                      </span>

                    </span>

                  </button>

                </form>

                <p className="form-message"></p>

                <div className="shape">

                  <img alt="shape-5" src="/assets/img/shapes/shape-5.webp" />

                </div>

              </div>

            </div>

          </div>

          <div className="shape-6">

            <img alt="shape-6" src="/assets/img/shapes/shape-6.webp" />

          </div>

          <div className="shape-7">

            <img alt="shape-7" src="/assets/img/shapes/shape-7.webp" />

          </div>

        </section>

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

        {" "}

      </main>


    {/* Our Reach & Grassroots Presence */}



<ReachSection />

    </>

  );

}
