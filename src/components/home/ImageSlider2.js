import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider2.css';
import { img_url } from '../../Auth';
const ImageSliderCard2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 4, // Show 4 slides at a time on larger screens
          slidesToScroll: 1,
        },
      },
    ],

  };

  return (
    <div className="container">
    <Slider {...settings}>
    <div className='card-menu'>
      <div className="card  " >
        <img src={`${img_url}/products/shell/resize/img2.png`} alt="Image 1" />
        
      </div>
      </div>
      <div className='card-menu'>
      <div className="card  ">
        <img src={`${img_url}/products/shell/resize/10-Assorted-Hermit-Crab-Shells.png`} alt="Image 2" />
        
      </div>
      </div>
      <div className='card-menu'>
      <div className="card  ">
      <img src={`${img_url}/products/shell/resize/seafans.png`} alt="Image 3" />
      
    </div>
    </div>
    <div className='card-menu'>
    <div className="card  ">
    <img src={`${img_url}/products/shell/BAKING SCALLOP CLAMS SEAFOOD COOKING SHELLS.jpg`} alt="Image 4" />
    
  </div>
  </div>
  <div className='card-menu'>
  <div className="card ">
  <img src={`${img_url}/products/shell/30+ Assorted Hermit Crab Shells.jpg`} alt="Image 5" />
 
</div>
</div>
<div className='card-menu'>
<div className="card  ">
<img src={`${img_url}/products/shell/Reef Rock Coral.jpg`}  alt="Image 6" />

</div>
</div>

      {/* Add more cards here */}
    </Slider>
    </div>
  );
};

export default ImageSliderCard2;
