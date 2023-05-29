import React from 'react'
import Navbar from './Navbar'
import BannerCarousel from './BannerCarousel'
import Navs from './Navs';


function Header() {
  const images = [
    {
      src: 'image1.jpg',
      alt: 'Image 1',
      description: 'Description 1',
    },
    {
      src: 'image2.jpg',
      alt: 'Image 2',
      description: 'Description 2',
    },
    {
      src: 'image3.jpg',
      alt: 'Image 3',
      description: 'Description 3',
    },
  ];
  return (
    <React.Fragment>
    <Navs/>
    <BannerCarousel/>
    </React.Fragment>
  )
}

export default Header
// <Navs/>