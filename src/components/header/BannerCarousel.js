import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './banner-carousel.css';

const BannerCarousel= () => {
  return (
    <div className="hero-slider-container">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div className="slide">
          <img src="assets/img/slideshow/ban1.png" alt="Slide 1" />
          <div className="slide-text">
            <h3>Slide 1 Title</h3>
            <p>Slide 1 Description</p>
          </div>
        </div>
        <div className="slide">
          <img src="assets/img/slideshow/ban2.png" alt="Slide 2" />
          <div className="slide-text">
            <h3>Slide 2 Title</h3>
            <p>Slide 2 Description</p>
          </div>
        </div>
        <div className="slide">
          <img src="assets/img/slideshow/ban3.png" alt="Slide 3" />
          <div className="slide-text">
            <h3>Slide 3 Title</h3>
            <p>Slide 3 Description</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
