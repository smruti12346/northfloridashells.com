import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const BannerCarousel = () => {
    return (
      <Carousel>
        <div>
          <img  src="assets/img/slideshow/ban1.png" alt="Banner 1" />
        </div>
        <div>
          <img src="assets/img/slideshow/ban2.png" alt="Banner 2" />
        </div>
        <div>
          <img src="assets/img/slideshow/ban3.png" alt="Banner 3" />
        </div>
      </Carousel>
    );
  };
export default BannerCarousel  