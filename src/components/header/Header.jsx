

import BannerCarousel from './BannerCarousel'
import Navs from './Navs';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Header() {
  

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await axios.get('https://shell-api.thecbdworld.org/wp-json/wp/v2/menu');
      setMenuData(response.data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  };
  return (
    <React.Fragment>
    <Navs menuData={menuData} />
    <BannerCarousel/>
    </React.Fragment>
  )
}

export default Header
