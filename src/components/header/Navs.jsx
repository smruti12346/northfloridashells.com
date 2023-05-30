import React, { useState } from "react";
import "./Navs.css";
import {
  FaSearch,
  FaRegHeart,
 
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {FiShoppingCart} from "react-icons/fi"
import {BiSearch} from 'react-icons/bi';
import { NavLink } from "react-router-dom";

const Navs = () => {
  
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <React.Fragment>
    {/* announcement bar start */}
    <div className="announcement-bar bg-3 py-1 py-lg-2">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-3 d-lg-block d-none">
          <div className="announcement-call-wrapper">
            <div className="announcement-call">
              <a className="announcement-text text-white" href="tel:+1-078-2376">Call: 386.324.2330</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="announcement-text-wrapper d-flex align-items-center justify-content-center">
            <p className="announcement-text text-white">
           
            You can contact us by phone- Monday - Friday
            9:00 a.m. - 4:30 p.m.</p>
          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none">
          <div className="announcement-meta-wrapper d-flex align-items-center justify-content-end">
            <div className="announcement-meta d-flex align-items-center">
              <NavLink className="announcement-login announcement-text text-white" to="/login">
                <svg className="icon icon-user" width={10} height={11} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 0C3.07227 0 1.5 1.57227 1.5 3.5C1.5 4.70508 2.11523 5.77539 3.04688 6.40625C1.26367 7.17188 0 8.94141 0 11H1C1 8.78516 2.78516 7 5 7C7.21484 7 9 8.78516 9 11H10C10 8.94141 8.73633 7.17188 6.95312 6.40625C7.88477 5.77539 8.5 4.70508 8.5 3.5C8.5 1.57227 6.92773 0 5 0ZM5 1C6.38672 1 7.5 2.11328 7.5 3.5C7.5 4.88672 6.38672 6 5 6C3.61328 6 2.5 4.88672 2.5 3.5C2.5 2.11328 3.61328 1 5 1Z" fill="#fff" />
                </svg>
                <span>Login</span>
              </NavLink>
              <span className="separator-login d-flex px-3">
                <svg width={2} height={9} viewBox="0 0 2 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M1 0.5V8.5" stroke="#FEFEFE" strokeLinecap="round" />
                </svg>
              </span>
              <div className="currency-wrapper">
                <button type="button" className="currency-btn btn-reset text-white" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="flag" src="assets/img/flag/usd.jpg" alt="img" />
                  <span>USD</span>
                  <span>
                    <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <ul className="currency-list dropdown-menu dropdown-menu-end px-2">
                  <li className="currency-list-item ">
                    <a className="currency-list-option" href="#" data-value="USD">
                      <img className="flag" src="assets/img/flag/usd.jpg" alt="img" />
                      <span>USD</span>
                    </a>
                  </li>
                  <li className="currency-list-item ">
                    <a className="currency-list-option" href="#" data-value="CAD">
                      <img className="flag" src="assets/img/flag/cad.jpg" alt="img" />
                      <span>CAD</span>
                    </a>
                  </li>
                  <li className="currency-list-item ">
                    <a className="currency-list-option" href="#" data-value="EUR">
                      <img className="flag" src="assets/img/flag/eur.jpg" alt="img" />
                      <span>EUR</span>
                    </a>
                  </li>
                  <li className="currency-list-item ">
                    <a className="currency-list-option" href="#" data-value="JPY">
                      <img className="flag" src="assets/img/flag/jpy.jpg" alt="img" />
                      <span>JPY</span>
                    </a>
                  </li>
                  <li className="currency-list-item ">
                    <a className="currency-list-option" href="#" data-value="GBP">
                      <img className="flag" src="assets/img/flag/gbp.jpg" alt="img" />
                      <span>GBP</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* announcement bar end */}
    <nav className="main-nav">
     {/* 1st logo part  */}
     <div className="logo">
     <h2>
       <span>N</span>orth<span>F</span>lorida
       <span>S</span>hell
     </h2>
   </div>
   {/* 2nd menu part  */}
   <div   className={
    showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
  }>
   <ul>
     <li>
     <NavLink className="nav-link " to="/">
     Home
   </NavLink>
     </li>
     <li>
     <NavLink className="nav-link " to="/about">
     About
   </NavLink>
     </li>
     <li className="dropdown  nav-link ">
     <NavLink to="/products">Shop</NavLink>
     <div className="dropdown-content dropdown-menu ">
       <a href="#"> SEA SPONGES</a>
       <a href="#">SEA SHELL</a>
       <a href="#">CUT AND BANDED SHELLS</a>
       <a href="#">DISPLAY STANDS</a>
       <a href="#">SEA GLASS</a>
       <a href="#">HERMIT CRAB SHELLS</a>
       <a href="#">STARFISH</a>
       <a href="#">SEA FANS & CORAL</a>
       <a href="#">NAUTILUS SEASHELLS</a>
     </div>
   </li>
     <li>
     <NavLink className="nav-link " to="/contact">
     Contact
   </NavLink>
     </li>
     <li>
     <NavLink  className="nav-link " to="/blog">
     Blog
   </NavLink>
     </li>
   </ul>
 </div>
 {/* 3rd social media links */}
 <div className="social-media">
 <ul className="social-media-desktop">
   <li>
     <a
       href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
       target="_thapa">
       <BiSearch className="search" />
     </a>
   </li>
   <li>
   <a
     href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
     target="_thapa">
     <FaRegHeart className="heart" />
   </a>
 </li>
   <li>
     <a
       href="https://www.instagram.com/thapatechnical/"
       target="_thapa">
       <FiShoppingCart className="shcart" />
     </a>
   </li>
  
 </ul>

 {/* hamburget menu start  */}
 <div className="hamburger-menu">
   <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)} >
     <GiHamburgerMenu />
   </a>
 </div>
</div>

    </nav>
    </React.Fragment>
  )
}

export default Navs;