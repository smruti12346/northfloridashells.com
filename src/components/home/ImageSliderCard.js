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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
      {
        breakpoint: 768, // Set a breakpoint for mobile screens (adjust as needed)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Set a breakpoint for tablets (adjust as needed)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Set a breakpoint for larger screens (adjust as needed)
        settings: {
          slidesToShow: 3, // Show 3 slides at a time on larger screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
    <Slider {...settings}>
    <div className='card-menu'>
      <div className="card article-card " >
        <img src="assets/img/products/shell/Sugar Starfish Dried.jpg" alt="Image 1" />
        <div className="description">
          <h3>Card 1</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
        </div>
      </div>
      </div>
      <div className='card-menu'>
      <div className="card article-card ">
        <img src="assets/img/products/shell/10 Assorted Hermit Crab Shells.jpg" alt="Image 2" />
        <div className="description">
          <h3>Card 2</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
        </div>
      </div>
      </div>
      <div className='card-menu'>
      <div className="card article-card ">
      <img src="assets/img/products/shell/Fernandezi Snail Hermit Crab shells.jpg" alt="Image 2" />
      <div className="description">
        <h3>Card 2</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
      </div>
    </div>
    </div>
    <div className='card-menu'>
    <div className="card article-card ">
    <img src="assets/img/products/shell/Irish Flat Scallop Shells.jpg" alt="Image 2" />
    <div className="description">
      <h3>Card 2</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
    </div>
  </div>
  </div>
  <div className='card-menu'>
  <div className="card article-card ">
  <img src="assets/img/products/shell/BAKING SCALLOP CLAMS SEAFOOD COOKING SHELLS.jpg" alt="Image 2" />
  <div className="description">
    <h3>Card 2</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
  </div>
</div>
</div>
<div className='card-menu'>
<div className="card article-card ">
<img src="assets/img/products/shell/DEER COWRIE CYPRAEA VITELLUS.jpg" alt="Image 2" />
<div className="description">
  <h3>Card 2</h3>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis porro voluptatibus provident reiciendis incidunt et eaque rem veniam enim necessitatibus.</p>
</div>
</div>
</div>

      {/* Add more cards here */}
    </Slider>
    </div>
  );
};

export default ImageSliderCard;
