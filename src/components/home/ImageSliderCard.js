import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSliderCard.css';

const ImageSliderCard = () => {
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
    
      <div className="card " >
        <img src="assets/img/blog/bag-1.jpg" alt="Image 1" />
        <div className="description">
          <h3>Card 1</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
        </div>
      </div>
    
      <div className="card">
        <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
        <div className="description">
          <h3>Card 2</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
        </div>
      </div>
      <div className="card">
      <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
      <div className="description">
        <h3>Card 2</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
      </div>
    </div>
    <div className="card">
    <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
    <div className="description">
      <h3>Card 2</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
    </div>
  </div>
  <div className="card">
  <img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
  <div className="description">
    <h3>Card 2</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
  </div>
</div>
<div className="card">
<img src="assets/img/blog/bag-1.jpg" alt="Image 2" />
<div className="description">
  <h3>Card 2</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
</div>
</div>


      {/* Add more cards here */}
    </Slider>
    </div>
  );
};

export default ImageSliderCard;
