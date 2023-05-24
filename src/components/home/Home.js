import React from 'react'

function Home() {
  return (
    <React.Fragment>
    <main id="MainContent" className="content-for-layout">
   
    {/* banner start */}
    <div className="banner-section mt-100 overflow-hidden">
    <div className="banner-section-inner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-12" data-aos="fade-right" data-aos-duration={1200}>
            <a className="banner-item position-relative rounded" href="collection-left-sidebar.html">
              <img className="banner-img" src="assets/img/banner/bag-1.jpg" alt="banner-1" />
              <div className="content-absolute content-slide">
                <div className="container height-inherit d-flex align-items-center">
                  <div className="content-box banner-content p-4">
                    <p className="heading_18 mb-3">Mini Backpack</p>
                    <h2 className="heading_34">25% off on <br />all bags</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-12" data-aos="fade-left" data-aos-duration={1200}>
            <a className="banner-item position-relative rounded" href="collection-left-sidebar.html">
              <img className="banner-img" src="assets/img/banner/bag-2.jpg" alt="banner-2" />
              <div className="content-absolute content-slide">
                <div className="container height-inherit d-flex align-items-center">
                  <div className="content-box banner-content p-4">
                    <p className="heading_18 mb-3">New Year Sell</p>
                    <h2 className="heading_34">25% off <br />for women</h2>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* banner end */}
     {/* collection start */}
     <div className="featured-collection mt-100 overflow-hidden">
     <div className="collection-tab-inner">
       <div className="container">
         <div className="section-header text-center">
           <h2 className="section-heading">Popular Products</h2>
         </div>
         <div className="row">
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/11.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/1.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">black backpack</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$1529</span>
                   <span className="card-price-compare text-decoration-line-through">$1759</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/22.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/2.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">lady handbag</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                   <span className="card-price-compare text-decoration-line-through">$759</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/23.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/3.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">men travel bag</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                   <span className="card-price-compare text-decoration-line-through">$759</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/26.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/4.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">nike legend
                     stripe</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/27.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/5.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">nike legend
                     stripe</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/29.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/6.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">nike legend
                     stripe</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/17.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/7.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">women vanity
                     bag</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
             <div className="product-card">
               <div className="product-card-img">
                 <a className="hover-switch" href="collection-left-sidebar.html">
                   <img className="secondary-img" src="assets/img/products/bags/18.jpg" alt="product-img" />
                   <img className="primary-img" src="assets/img/products/bags/8.jpg" alt="product-img" />
                 </a>
                 <div className="product-card-action product-card-action-2">
                   <a href="#quickview-modal" className="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
                   <a href="#" className="addtocart-btn btn-primary">ADD TO CART</a>
                 </div>
                 <a href="wishlist.html" className="wishlist-btn card-wishlist">
                   <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="black" />
                   </svg>
                 </a>
               </div>
               <div className="product-card-details text-center">
                 <h3 className="product-card-title"><a href="collection-left-sidebar.html">women large
                     bag</a>
                 </h3>
                 <div className="product-card-price">
                   <span className="card-price-regular">$529</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* collection end */}
   {/* shop by category start */}
   <div className="shop-category mt-100 overflow-hidden">
   <div className="collection-tab-inner">
     <div className="container">
       <div className="section-header text-center">
         <h2 className="section-heading">Shop By Category</h2>
       </div>
       <div className="grid-container shop-category-inner">
         <a className="grid-item grid-item-1 position-relative rounded mt-0 d-flex" href="collection-left-sidebar.html">
           <img className="banner-img" src="assets/img/banner/bag-3.jpg" alt="banner-1" />
           <div className="content-absolute content-slide">
             <div className="container height-inherit d-flex">
               <div className="content-box banner-content p-4">
                 <p className="heading_16 m-0 primary-color">New Arrivals</p>
                 <h2 className="heading_18">Women Beautiful Handbag</h2>
                 <span className="text_12 mt-2 link-underline d-block">SHOP
                   COLLECTION
                 </span>
               </div>
             </div>
           </div>
         </a>
         <a className="grid-item grid-item-2 position-relative rounded mt-0 d-flex" href="collection-left-sidebar.html">
           <img className="banner-img" src="assets/img/banner/bag-4.jpg" alt="banner-1" />
           <div className="content-absolute content-slide">
             <div className="container height-inherit d-flex">
               <div className="content-box banner-content p-4">
                 <p className="heading_16 m-0 primary-color">New Arrivals</p>
                 <h2 className="heading_18">Bag Bouquet</h2>
                 <span className="text_12 mt-2 link-underline d-block">SHOP
                   COLLECTION
                 </span>
               </div>
             </div>
           </div>
         </a>
         <a className="grid-item grid-item-3 position-relative rounded mt-0 d-flex" href="collection-left-sidebar.html">
           <img className="banner-img" src="assets/img/banner/bag-5.jpg" alt="banner-1" />
           <div className="content-absolute content-slide">
             <div className="container height-inherit d-flex justify-content-end text-end">
               <div className="content-box banner-content p-4">
                 <p className="heading_16 m-0 primary-color">Quality Product</p>
                 <h2 className="heading_18">Leather collection</h2>
                 <span className="text_12 mt-2 link-underline d-block">SHOP
                   COLLECTION
                 </span>
               </div>
             </div>
           </div>
         </a>
         <a className="grid-item grid-item-4 position-relative rounded mt-0 d-flex" href="collection-left-sidebar.html">
           <img className="banner-img" src="assets/img/banner/bag-6.jpg" alt="banner-1" />
           <div className="content-absolute content-slide">
             <div className="container height-inherit d-flex">
               <div className="content-box banner-content p-4">
                 <p className="heading_16 m-0 primary-color">New Arrivals</p>
                 <h2 className="heading_18">Office Carrier</h2>
                 <span className="text_12 mt-2 link-underline d-block">SHOP
                   COLLECTION
                 </span>
               </div>
             </div>
           </div>
         </a>
         <a className="grid-item grid-item-5 position-relative rounded mt-0 d-flex" href="collection-left-sidebar.html">
           <img className="banner-img" src="assets/img/banner/bag-7.jpg" alt="banner-1" />
           <div className="content-absolute content-slide">
             <div className="container height-inherit d-flex">
               <div className="content-box banner-content p-4">
                 <p className="heading_16 m-0 primary-color">New Arrivals</p>
                 <h2 className="heading_18">Travel The World</h2>
                 <span className="text_12 mt-2 link-underline d-block">SHOP
                   COLLECTION
                 </span>
               </div>
             </div>
           </div>
         </a>
       </div>
     </div>
   </div>
 </div>
 {/* shop by category end */}
 {/* latest blog start */}
 <div className="latest-blog-section bg-pink mt-100 pt-100 pb-100 overflow-hidden home-section">
 <div className="latest-blog-inner">
   <div className="container">
     <div className="section-header text-center">
       <h2 className="section-heading">Latest blogs</h2>
     </div>
     <div className="article-card-container position-relative">
       <div className="common-slider" data-slick="{
                         &quot;slidesToShow&quot;: 3, 
                         &quot;slidesToScroll&quot;: 1,
                         &quot;dots&quot;: false,
                         &quot;arrows&quot;: true,
                         &quot;responsive&quot;: [
                           {
                             &quot;breakpoint&quot;: 1281,
                             &quot;settings&quot;: {
                               &quot;slidesToShow&quot;: 2
                             }
                           },
                           {
                             &quot;breakpoint&quot;: 602,
                             &quot;settings&quot;: {
                               &quot;slidesToShow&quot;: 1
                             }
                           }
                         ]
                     }">
         <div className="article-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="article-card">
             <a className="article-card-img-wrapper" href="article.html">
               <img src="assets/img/blog/bag-1.jpg" alt="img" className="article-card-img rounded" />
             </a>
             <p className="article-card-published text_12">30 July 2022</p>
             <h2 className="article-card-heading heading_18">
               <a className="heading_18" href="article.html">
                 The fairycore trend is a 2022 fashion hit as fairies.
               </a>
             </h2>
             <a className="article-card-read-more text_14 link-underline" href="article.html">Read
               More</a>
           </div>
         </div>
         <div className="article-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="article-card">
             <a className="article-card-img-wrapper" href="article.html">
               <img src="assets/img/blog/bag-2.jpg" alt="img" className="article-card-img rounded" />
             </a>
             <p className="article-card-published text_12">30 July 2022</p>
             <h2 className="article-card-heading heading_18">
               <a className="heading_18" href="article.html">
                 TOP 10 most fahionable ladies bag on super sale!
               </a>
             </h2>
             <a className="article-card-read-more text_14 link-underline" href="article.html">Read
               More</a>
           </div>
         </div>
         <div className="article-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="article-card">
             <a className="article-card-img-wrapper" href="article.html">
               <img src="assets/img/blog/bag-3.jpg" alt="img" className="article-card-img rounded" />
             </a>
             <p className="article-card-published text_12">30 July 2022</p>
             <h2 className="article-card-heading heading_18">
               <a className="heading_18" href="article.html">
                 Polish fashion, eco products and the national art seence.
               </a>
             </h2>
             <a className="article-card-read-more text_14 link-underline" href="article.html">Read
               More</a>
           </div>
         </div>
         <div className="article-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="article-card">
             <a className="article-card-img-wrapper" href="article.html">
               <img src="assets/img/blog/bag-2.jpg" alt="img" className="article-card-img rounded" />
             </a>
             <p className="article-card-published text_12">30 July 2022</p>
             <h2 className="article-card-heading heading_18">
               <a className="heading_18" href="article.html">
                 Polish fashion, eco products and the national art seence.
               </a>
             </h2>
             <a className="article-card-read-more text_14 link-underline" href="article.html">Read
               More</a>
           </div>
         </div>
       </div>
       <div className="activate-arrows show-arrows-always article-arrows arrows-white" />
     </div>
   </div>
 </div>
</div>
{/* latest blog end */}
 {/* instagram start */}
 <div className="instagram-section mt-100 overflow-hidden home-section">
 <div className="instagram-inner">
   <div className="container">
     <div className="section-header text-center">
       <div className="section-icon">
         <svg width={54} height={54} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M9.99998 2.62165C12.4031 2.62165 12.6877 2.6308 13.6367 2.6741C14.5142 2.71415 14.9908 2.86077 15.3079 2.98398C15.728 3.14725 16.0278 3.34231 16.3428 3.65723C16.6577 3.97215 16.8528 4.272 17.016 4.69206C17.1392 5.00923 17.2859 5.48577 17.3259 6.36323C17.3692 7.31228 17.3783 7.5969 17.3783 10C17.3783 12.4031 17.3692 12.6878 17.3259 13.6368C17.2859 14.5143 17.1392 14.9908 17.016 15.308C16.8528 15.728 16.6577 16.0279 16.3428 16.3428C16.0278 16.6577 15.728 16.8528 15.3079 17.016C14.9908 17.1393 14.5142 17.2859 13.6367 17.3259C12.6879 17.3692 12.4032 17.3784 9.99998 17.3784C7.59672 17.3784 7.3121 17.3692 6.36323 17.3259C5.48574 17.2859 5.00919 17.1393 4.69206 17.016C4.27196 16.8528 3.97212 16.6577 3.6572 16.3428C3.34227 16.0279 3.14721 15.728 2.98398 15.308C2.86073 14.9908 2.71411 14.5143 2.67406 13.6368C2.63076 12.6878 2.62162 12.4031 2.62162 10C2.62162 7.5969 2.63076 7.31228 2.67406 6.36326C2.71411 5.48577 2.86073 5.00923 2.98398 4.69206C3.14721 4.272 3.34227 3.97215 3.6572 3.65723C3.97212 3.34231 4.27196 3.14725 4.69206 2.98398C5.00919 2.86077 5.48574 2.71415 6.36319 2.6741C7.31224 2.6308 7.59687 2.62165 9.99998 2.62165ZM9.99998 1C7.55571 1 7.24926 1.01036 6.28931 1.05416C5.33133 1.09789 4.67712 1.25001 4.10462 1.47251C3.51279 1.70251 3.01088 2.01025 2.51055 2.51058C2.01021 3.01092 1.70247 3.51283 1.47247 4.10466C1.24997 4.67716 1.09785 5.33137 1.05412 6.28935C1.01032 7.24926 1 7.55575 1 10C1 12.4443 1.01032 12.7508 1.05412 13.7107C1.09785 14.6687 1.24997 15.3229 1.47247 15.8954C1.70247 16.4872 2.01021 16.9891 2.51055 17.4895C3.01088 17.9898 3.51279 18.2975 4.10462 18.5275C4.67712 18.75 5.33133 18.9021 6.28931 18.9459C7.24926 18.9897 7.55571 19 9.99998 19C12.4443 19 12.7507 18.9897 13.7107 18.9459C14.6686 18.9021 15.3228 18.75 15.8953 18.5275C16.4872 18.2975 16.9891 17.9898 17.4894 17.4895C17.9898 16.9891 18.2975 16.4872 18.5275 15.8954C18.75 15.3229 18.9021 14.6687 18.9458 13.7107C18.9896 12.7508 19 12.4443 19 10C19 7.55575 18.9896 7.24926 18.9458 6.28935C18.9021 5.33137 18.75 4.67716 18.5275 4.10466C18.2975 3.51283 17.9898 3.01092 17.4894 2.51058C16.9891 2.01025 16.4872 1.70251 15.8953 1.47251C15.3228 1.25001 14.6686 1.09789 13.7107 1.05416C12.7507 1.01036 12.4443 1 9.99998 1ZM9.99998 5.37838C7.44753 5.37838 5.37835 7.44757 5.37835 10C5.37835 12.5525 7.44753 14.6217 9.99998 14.6217C12.5524 14.6217 14.6216 12.5525 14.6216 10C14.6216 7.44757 12.5524 5.37838 9.99998 5.37838ZM9.99998 13C8.34314 13 6.99996 11.6569 6.99996 10C6.99996 8.34317 8.34314 7 9.99998 7C11.6568 7 13 8.34317 13 10C13 11.6569 11.6568 13 9.99998 13ZM15.8842 5.19579C15.8842 5.79226 15.4007 6.27581 14.8042 6.27581C14.2077 6.27581 13.7242 5.79226 13.7242 5.19579C13.7242 4.59931 14.2077 4.1158 14.8042 4.1158C15.4007 4.1158 15.8842 4.59931 15.8842 5.19579Z" fill="#00234D" />
         </svg>
       </div>
       <h2 className="section-heading">Bag &amp; Water pot</h2>
       <p className="section-subheading">See how our customers styled shoe products in their foot</p>
     </div>
     <div className="instagram-container position-relative mt-48">
       <div className="common-slider" data-slick="{
                         &quot;slidesToShow&quot;: 4, 
                         &quot;slidesToScroll&quot;: 1,
                         &quot;dots&quot;: false,
                         &quot;arrows&quot;: true,
                         &quot;responsive&quot;: [
                           {
                             &quot;breakpoint&quot;: 1281,
                             &quot;settings&quot;: {
                               &quot;slidesToShow&quot;: 3
                             }
                           },
                           {
                             &quot;breakpoint&quot;: 768,
                             &quot;settings&quot;: {
                               &quot;slidesToShow&quot;: 2
                             }
                           }
                         ]
                     }">
         <div className="instagram-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="instagram-card">
             <a className="instagram-img-wrapper" href="index-bag.html">
               <img src="assets/img/instagram/bag1.jpg" alt="img" className="instagram-card-img rounded" />
             </a>
           </div>
         </div>
         <div className="instagram-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="instagram-card">
             <a className="instagram-img-wrapper" href="index-bag.html">
               <img src="assets/img/instagram/bag2.jpg" alt="img" className="instagram-card-img rounded" />
             </a>
           </div>
         </div>
         <div className="instagram-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="instagram-card">
             <a className="instagram-img-wrapper" href="index-bag.html">
               <img src="assets/img/instagram/bag3.jpg" alt="img" className="instagram-card-img rounded" />
             </a>
           </div>
         </div>
         <div className="instagram-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="instagram-card">
             <a className="instagram-img-wrapper" href="index-bag.html">
               <img src="assets/img/instagram/bag4.jpg" alt="img" className="instagram-card-img rounded" />
             </a>
           </div>
         </div>
         <div className="instagram-slick-item" data-aos="fade-up" data-aos-duration={700}>
           <div className="instagram-card">
             <a className="instagram-img-wrapper" href="index-bag.html">
               <img src="assets/img/instagram/bag2.jpg" alt="img" className="instagram-card-img rounded" />
             </a>
           </div>
         </div>
       </div>
       <div className="activate-arrows show-arrows-always article-arrows arrows-white" />
     </div>
   </div>
 </div>
</div>
{/* instagram end */}
  {/* faq start */}
  <div className="faq-section mt-100 overflow-hidden">
  <div className="faq-inner">
    <div className="container">
      <div className="section-header text-center">
        <h2 className="section-heading">Frequently Asked Question</h2>
        <p className="section-subheading">All your questions about Axion answered </p>
      </div>
      <div className="faq-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faq-item rounded">
              <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#faq1">
                Is Bisum a safe investment?
                <span className="faq-heading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#F76B6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>
              <div id="faq1" className="accordion-collapse collapse">
                <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Sit repellat
                  quod facere illo esse cumque inventore veniam necessitatibus totam
                  repudiandae. Hic rerum animi modi sed?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faq-item rounded">
              <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#faq2">
                How do I set up a crypto wallet?
                <span className="faq-heading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#F76B6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>
              <div id="faq2" className="accordion-collapse collapse">
                <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Sit repellat
                  quod facere illo esse cumque inventore veniam necessitatibus totam
                  repudiandae. Hic rerum animi modi sed?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faq-item rounded">
              <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#faq3">
                Where and how do I buy Bisum?
                <span className="faq-heading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#F76B6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>
              <div id="faq3" className="accordion-collapse collapse">
                <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Sit repellat
                  quod facere illo esse cumque inventore veniam necessitatibus totam
                  repudiandae. Hic rerum animi modi sed?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faq-item rounded">
              <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#faq4">
                What often will results be reported?
                <span className="faq-heading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#F76B6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>
              <div id="faq4" className="accordion-collapse collapse">
                <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Sit repellat
                  quod facere illo esse cumque inventore veniam necessitatibus totam
                  repudiandae. Hic rerum animi modi sed?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faq-item rounded">
              <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#faq5">
                How can I get support?
                <span className="faq-heading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#F76B6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>
              <div id="faq5" className="accordion-collapse collapse">
                <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Sit repellat
                  quod facere illo esse cumque inventore veniam necessitatibus totam
                  repudiandae. Hic rerum animi modi sed?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="faq-item rounded">
              <h2 className="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#faq6">
                Is Axion available on a major Product exchange?
                <span className="faq-heading-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#F76B6A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </h2>
              <div id="faq6" className="accordion-collapse collapse">
                <p className="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Sit repellat
                  quod facere illo esse cumque inventore veniam necessitatibus totam
                  repudiandae. Hic rerum animi modi sed?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="view-all text-center" data-aos="fade-up" data-aos-duration={700}>
          <a className="btn-primary" href="faq.html">SEE MORE</a>
        </div>
      </div>
    </div>
  </div>
</div>
{/* faq end */}
  {/* newsletter start */}
  <div className="newsletter-section mt-100 overflow-hidden">
  <div className="newsletter-inner">
    <div className="container">
      <div className="newsletter-container bg-pink">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="newsletter-content newsltter-content-1">
              <div className="newsletter-header">
                <p className="newsletter-subheading colored-text heading_24">News Letter</p>
                <h2 className="newsletter-heading heading_42">Subscribe to our newsletter</h2>
              </div>
              <div className="newsletter-form-wrapper">
                <form action="#" className="newsletter-form d-flex align-items-center rounded">
                  <input className="newsletter-input bg-transparent border-0" type="email" placeholder="Enter your e-mail" autoComplete="off" />
                  <button className="newsletter-btn rounded" type="submit">
                    <svg width={17} height={14} viewBox="0 0 17 14" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.11539 -0.000488604L7.50417 1.99951L11.5769 5.59951L0.500001 5.59951L0.500001 8.19951L11.7049 8.19951L7.50417 11.4995L8.70513 13.9995L16.5 7.19951L9.11539 -0.000488604Z" fill="#FEFEFE" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="newsletter-image">
              <img src="assets/img/newsletter/1.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* newsletter end */}

  {/* newsletter start */}
  <div className="newsletter-section mt-100 overflow-hidden">
  <div className="newsletter-inner">
    <div className="container">
      <div className="newsletter-container bg-pink">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="newsletter-content newsltter-content-1">
              <div className="newsletter-header">
                <p className="newsletter-subheading colored-text heading_24">News Letter</p>
                <h2 className="newsletter-heading heading_42">Subscribe to our newsletter</h2>
              </div>
              <div className="newsletter-form-wrapper">
                <form action="#" className="newsletter-form d-flex align-items-center rounded">
                  <input className="newsletter-input bg-transparent border-0" type="email" placeholder="Enter your e-mail" autoComplete="off" />
                  <button className="newsletter-btn rounded" type="submit">
                    <svg width={17} height={14} viewBox="0 0 17 14" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.11539 -0.000488604L7.50417 1.99951L11.5769 5.59951L0.500001 5.59951L0.500001 8.19951L11.7049 8.19951L7.50417 11.4995L8.70513 13.9995L16.5 7.19951L9.11539 -0.000488604Z" fill="#FEFEFE" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="newsletter-image">
              <img src="assets/img/newsletter/1.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* newsletter end */}
</main>
    </React.Fragment>
  )
}

export default Home