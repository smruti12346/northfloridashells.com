import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider2.css';

const ImageSliderCard2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true
  };

  return (
    <div className="container">
    <Slider {...settings}>
    <div className='card-menu'>
      <div className="card  " >
        <img src="assets/img/blog/bag-1.jpg" alt="Image 1" />
        
      </div>
      </div>
      <div className='card-menu'>
      <div className="card  ">
        <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
        
      </div>
      </div>
      <div className='card-menu'>
      <div className="card  ">
      <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
      
    </div>
    </div>
    <div className='card-menu'>
    <div className="card  ">
    <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
    
  </div>
  </div>
  <div className='card-menu'>
  <div className="card ">
  <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
 
</div>
</div>
<div className='card-menu'>
<div className="card  ">
<img src="assets/img/blog/bag-1.jpg" alt="Image 2" />

</div>
</div>

      {/* Add more cards here */}
    </Slider>
    </div>
  );
};

export default ImageSliderCard2;
