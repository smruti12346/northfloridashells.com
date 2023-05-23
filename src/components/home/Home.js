import React from 'react'

function Home() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Home