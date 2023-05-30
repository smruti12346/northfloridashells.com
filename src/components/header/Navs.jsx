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
     <li className="dropdown  ">
     <NavLink className=" nav-link" to="/products">Shop</NavLink>
    
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

// <li className="dropdown  ">
// <NavLink className=" nav-link" to="/products">Shop</NavLink>
// <div className="dropdown-content dropdown-menu ">
 
//   <a href="#">SEA SHELL</a>
//   <a href="#">CUT AND BANDED SHELLS</a>
//   <a href="#">DISPLAY STANDS</a>
//   <a href="#">SEA GLASS</a>
//   <a href="#">HERMIT CRAB SHELLS</a>
//   <a href="#">STARFISH</a>
//   <a href="#">SEA FANS & CORAL</a>
//   <a href="#">NAUTILUS SEASHELLS</a>
// </div>
// </li>


// <li className="menu-list-item nav-item has-megamenu">
// <div className="mega-menu-header">
//   <NavLink className="nav-link" to="/products">
//     Shop
//   </NavLink>
//   <span className="open-submenu">
//     <svg className="icon icon-dropdown" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
//       <polyline points="6 9 12 15 18 9" />
//     </svg>
//   </span>
// </div>
// <div className="submenu-transform submenu-transform-desktop">
//   <div className="container">
//     <ul className="submenu megamenu-container list-unstyled">
//       <li className="menu-list-item nav-item-sub">
//         <div className="mega-menu-header">
//           <a className="nav-link-sub nav-text-sub megamenu-heading" href="collection-left-sidebar.html">
//             CATEGORY PAGES
//           </a>
//         </div>
//         <div className="submenu-transform megamenu-transform">
//           <ul className="megamenu list-unstyled">
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub " href="collection-left-sidebar.html">DRIED BARNACLE, TUBE SPONGES AND SEA SPONGES</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="collection-right-sidebar.html">BULK WHOLESALE LOT SPECIALS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="collection-left-sidebar.html">CUT AND BANDED SHELLS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="collection-without-sidebar.html">DISPLAY STANDS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="collection-without-sidebar.html">DRIED FISH, BLOW FISH</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//             <a className="nav-link-sub nav-text-sub" href="collection-without-sidebar.html">SEA LIFE LOTS</a>
//           </li>
//           <li className="menu-list-item nav-item-sub">
//           <a className="nav-link-sub nav-text-sub" href="collection-without-sidebar.html">SEAHORSE</a>
//         </li>
//         <li className="menu-list-item nav-item-sub">
//           <a className="nav-link-sub nav-text-sub" href="collection-without-sidebar.html">   JEWELRY</a>
//         </li>
     
//           </ul>
//         </div>
//       </li>
//       <li className="menu-list-item nav-item-sub">
//         <div className="mega-menu-header d-flex align-items-center justify-content-between">
//           <a className="nav-link-sub nav-text-sub megamenu-heading" href="collection-right-sidebar.html">
//            CATAGORIES PAGES
//           </a>
//         </div>
//         <div className="submenu-transform megamenu-transform">
//           <ul className="megamenu list-unstyled">
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">FLAT, CLAM, SCALLOP, AND PECTIN SHELLS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">HERMIT CRAB SHELLS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">LARGE SEASHELLS - SELECT DISPLAY</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">MEDIUM SEASHELLS - SELECT DISPLAY</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product-2.html">MUREX RAMOSUS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//             <a className="nav-link-sub nav-text-sub" href="product-2.html">  SEASHELL MIX - TINY, MEDIUM & LARGE</a>
//           </li>
//           <li className="menu-list-item nav-item-sub">
//             <a className="nav-link-sub nav-text-sub" href="product-2.html"> SEASHELLS</a>
//           </li>
          
          
//           </ul>
//         </div>
//       </li>
//       <li className="menu-list-item nav-item-sub">
//         <div className="mega-menu-header d-flex align-items-center justify-content-between">
//           <a className="nav-link-sub nav-text-sub megamenu-heading" href="index.html">
//           CATAGORIES PAGES
//           </a>
//         </div>
//         <div className="submenu-transform megamenu-transform">
//           <ul className="megamenu list-unstyled">
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product-2.html">NAUTILUS SEASHELLS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">NOVELTY SEA PRODUCTS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">ROUND FLORIDA SAND DOLLARS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">SEA GLASS</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//               <a className="nav-link-sub nav-text-sub" href="product.html">SEA FANS & CORAL</a>
//             </li>
//             <li className="menu-list-item nav-item-sub">
//             <a className="nav-link-sub nav-text-sub" href="product.html"> STARFISH</a>
//           </li>
        
//             <li className="menu-list-item nav-item-sub">
//             <a className="nav-link-sub nav-text-sub" href="product.html">STARFISH & SAND DOLLARS</a>
//           </li>
//           <li className="menu-list-item nav-item-sub">
//           <a className="nav-link-sub nav-text-sub" href="product-2.html"> URCHINS</a>
//         </li>
//           </ul>
//         </div>
//       </li>
//       <li className="menu-list-item nav-item-sub">
//         <div className="mega-menu-header d-flex align-items-center justify-content-between">
//           <a className="mega-menu-img nav-link-sub nav-text-sub" href="collection-left-sidebar.html">
//             <img className="menu-img" src="assets/img/menu/1.jpg" alt="img" />
//             <h2 className="img-menu-heading text_16 mt-2">Featured
//               Collection</h2>
//             <div className="img-menu-action text_12 bg-transparent p-0">
//               <span>DISCOVER NOW</span>
//               <span>
//                 <svg xmlns="http://www.w3.org/2000/svg" width={30} height={18} fill="#000" className="icon-right-long" viewBox="0 0 16 16">
//                   <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
//                 </svg>
//               </span>
//             </div>
//           </a>
//         </div>
//       </li>
//     </ul>
//   </div>
// </div>
// </li>