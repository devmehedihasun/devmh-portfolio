import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function Home2() {
  return (
    <>
      <section
        id="about"
        className="section-hero-2 position-relative pt-130 pb-3"
      >
        <div className="container hero-2">
          <div className="border border-1 rounded-3">
            <div className="box-linear-animation position-relative z-1">
              <div className="row align-items-end py-60">
                <div className="col-lg-5 ps-lg-5 text-lg-start text-center">
                  <div className="position-relative mb-lg-0 mb-5">
                    <img
                      src="assets/imgs/home-page-2/hero-1/people.png"
                      alt="zelio"
                    />
                    <div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
                      <img
                        src="assets/imgs/home-page-2/hero-1/icon.svg"
                        alt="zelio"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mx-lg-auto col-md-12">
                  <div className="p-lg-0 p-md-8 p-3">
                    <div className="text-secondary-2 d-flex align-items-center">
                      &lt;span&gt;
                      <div className="text-dark">
                        <div className="typewriter">
                          <h1 className="fs-6 fw-medium">Hey, I’m MEHEDI HASAN</h1>
                        </div>
                      </div>
                      &lt;/span&gt;
                    </div>
                    <h1 className="fs-50 my-3">
                      Professional{' '}
                      <span className="text-linear-4">
                        {'{'}WordPress{'}'}
                      </span>
                      Theme &amp; Plugin developer<span className="flicker">_</span>
                    </h1>
                    <p className="mb-6 text-secondary-2">
                      &lt;p&gt;
                      <span className="text-dark">
                        Leveraging modern WordPress tools like
                      </span>{' '}
                      <span className="text-secondary-2">Elementor</span>,{' '}
                      <span className="text-secondary-2">Crocoblock</span>,{' '}
                      <span className="text-secondary-2">ACF</span>, and{' '}
                      <span className="text-secondary-2">custom theme frameworks</span>
                      <span className="text-dark">
                       craft visually stunning and technically robust web experiences tailored to each client’s goals.... 
                      </span>
                      &lt;/p&gt;
                    </p>
                    <div className="row">
                      <div className="col-7">
                        {/* Carausel Scroll */}
                        <Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
                          <ul className="carouselTicker__list ">
                            <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/bootstrap.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/php.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/sass.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/html.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                            <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/css.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                             <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/js.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                             <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/webflow.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                             <li className="carouselTicker__item">
                              <Link
                                href="#"
                                className="brand-logo icon_60 icon-shape rounded-3"
                              >
                                <img
                                  src="assets/imgs/home-page-2/hero-1/figma.svg"
                                  alt="brand"
                                />
                              </Link>
                            </li>
                          </ul>
                        </Marquee>
                      </div>
                      <div className="col-5 d-flex align-items-end">
                        <span className="fs-6 text-300 mb-2">...and more</span>
                      </div>
                    </div>
                    <Link
                      href="assets/cv/resume.pdf"
                      className="btn me-2 text-300 ps-0 mt-4"
                      target="_blank"
                    >
                      <i className="ri-download-line text-primary-2" />[
                      Download my CV ]
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background position-absolute top-0 start-0 w-100 h-100">
          <img
            className="bg-w"
            src="assets/imgs/home-page-2/hero-1/bg.png"
            alt="zelio"
          />
          <img
            className="bg-d"
            src="assets/imgs/home-page-2/hero-1/bg-dark.png"
            alt="zelio"
          />
        </div>
      </section>
    </>
  );
}
