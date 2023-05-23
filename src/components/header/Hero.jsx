import React from 'react'

function Hero() {
  return (
    <React.Fragment>
  {/* slideshow start */}
  <div className="slideshow-section position-relative">
  <div className="slideshow-active activate-slider" data-slick="{
              &quot;slidesToShow&quot;: 1, 
              &quot;slidesToScroll&quot;: 1, 
              &quot;dots&quot;: true,
              &quot;arrows&quot;: true,
              &quot;responsive&quot;: [
                  {
                      &quot;breakpoint&quot;: 768,
                      &quot;settings&quot;: {
                          &quot;arrows&quot;: false
                      }
                  }
              ]
          }">
    <div className="slide-item slide-item-bag position-relative">
      <img className="slide-img d-none d-md-block" src="assets/img/slideshow/b1.jpg" alt="slide-1" />
      <img className="slide-img d-md-none" src="assets/img/slideshow/b1-m.jpg" alt="slide-1" />
      <div className="content-absolute content-slide">
        <div className="container height-inherit d-flex align-items-center justify-content-end">
          <div className="content-box slide-content py-4">
            <p className="slide-text heading_24 animate__animated animate__fadeInUp" data-animation="animate__animated animate__fadeInUp">
              Top Branded
            </p>
            <h2 className="slide-heading heading_72 animate__animated animate__fadeInUp" data-animation="animate__animated animate__fadeInUp">
              Best Bags 2022
            </h2>
            <a className="btn-primary slide-btn animate__animated animate__fadeInUp" href="collection-left-sidebar.html" data-animation="animate__animated animate__fadeInUp">SHOP
              NOW</a>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item position-relative">
      <img className="slide-img d-none d-md-block" src="assets/img/slideshow/b2.jpg" alt="slide-2" />
      <img className="slide-img d-md-none" src="assets/img/slideshow/b2-m.jpg" alt="slide-2" />
      <div className="content-absolute content-slide">
        <div className="container height-inherit d-flex align-items-center">
          <div className="content-box slide-content py-4">
            <p className="slide-text heading_24 animate__animated animate__fadeInUp" data-animation="animate__animated animate__fadeInUp">
              Top Branded
            </p>
            <h2 className="slide-heading heading_72 animate__animated animate__fadeInUp" data-animation="animate__animated animate__fadeInUp">
              Best Bags 2022
            </h2>
            <a className="btn-primary slide-btn animate__animated animate__fadeInUp" href="collection-left-sidebar.html" data-animation="animate__animated animate__fadeInUp">SHOP
              NOW</a>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-item position-relative">
      <img className="slide-img d-none d-md-block" src="assets/img/slideshow/b3.jpg" alt="slide-3" />
      <img className="slide-img d-md-none" src="assets/img/slideshow/b3-m.jpg" alt="slide-3" />
      <div className="content-absolute content-slide">
        <div className="container height-inherit d-flex align-items-center justify-content-end">
          <div className="content-box slide-content py-4">
            <p className="slide-text heading_24 animate__animated animate__fadeInUp" data-animation="animate__animated animate__fadeInUp">
              Top Branded
            </p>
            <h2 className="slide-heading heading_72 animate__animated animate__fadeInUp" data-animation="animate__animated animate__fadeInUp">
              Best Bags 2022
            </h2>
            <a className="btn-primary slide-btn animate__animated animate__fadeInUp" href="collection-left-sidebar.html" data-animation="animate__animated animate__fadeInUp">SHOP
              NOW</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="activate-arrows" />
  <div className="activate-dots dot-tools" />
</div>
{/* slideshow end */}
    </React.Fragment>
  )
}

export default Hero
