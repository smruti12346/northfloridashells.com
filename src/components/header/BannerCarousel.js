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
            <h3>SEASHELLS</h3>
           
          </div>
        </div>
        <div className="slide">
          <img src="assets/img/slideshow/ban2.png" alt="Slide 2" />
          <div className="slide-text">
            <h3>STARFISH</h3>
           
          </div>
        </div>
        <div className="slide">
          <img src="assets/img/slideshow/ban3.png" alt="Slide 3" />
          <div className="slide-text">
            <h3>NAUTILUS SEASHELLS</h3>
        
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
