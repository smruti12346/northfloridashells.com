import React from 'react'

function Product() {
  return (
    <React.Fragment>
      {/* breadcrumb start */}
      <div className="breadcrumb">
        <div className="container">
          <ul className="list-unstyled d-flex align-items-center m-0">
            <li><a href="/">Home</a></li>
            <li>
              <svg className="icon icon-breadcrumb" width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z" fill="#000" />
                </g>
              </svg>
            </li>
            <li>Products</li>
          </ul>
        </div>
      </div>
      {/* breadcrumb end */}
      <main id="MainContent" className="content-for-layout">
        <div className="collection mt-100">
          <div className="container">
            <div className="row flex-row-reverse">
              {/* product area start */}
              <div className="col-lg-9 col-md-12 col-12">
                <div className="filter-sort-wrapper d-flex justify-content-between flex-wrap">
                  <div className="collection-title-wrap d-flex align-items-end">
                    <h2 className="collection-title heading_24 mb-0">All products</h2>
                    <p className="collection-counter text_16 mb-0 ms-2">(237 items)</p>
                  </div>
                  <div className="filter-sorting">
                    <div className="collection-sorting position-relative d-none d-lg-block">
                      <div className="sorting-header text_16 d-flex align-items-center justify-content-end">
                        <span className="sorting-title me-2">Sort by:</span>
                        <span className="active-sorting">Featured</span>
                        <span className="sorting-icon">
                          <svg className="icon icon-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                      <ul className="sorting-lists list-unstyled m-0">
                        <li><a href="#" className="text_14">Featured</a></li>
                        <li><a href="#" className="text_14">Best Selling</a></li>
                        <li><a href="#" className="text_14">Alphabetically, A-Z</a></li>
                        <li><a href="#" className="text_14">Alphabetically, Z-A</a></li>
                        <li><a href="#" className="text_14">Price, low to high</a></li>
                        <li><a href="#" className="text_14">Price, high to low</a></li>
                        <li><a href="#" className="text_14">Date, old to new</a></li>
                        <li><a href="#" className="text_14">Date, new to old</a></li>
                      </ul>
                    </div>
                    <div className="filter-drawer-trigger mobile-filter d-flex align-items-center d-lg-none">
                      <span className="mobile-filter-icon me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-filter">
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                        </svg>
                      </span>
                      <span className="mobile-filter-heading">Filter and Sorting</span>
                    </div>
                  </div>
                </div>
                <div className="collection-product-container">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/DRIED BARNACLE, TUBE SPONGES AND SEA SPONGES\Dried Real Craft Sponges.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/DRIED BARNACLE, TUBE SPONGES AND SEA SPONGES/Dried Real Craft Sponges.jpg" alt="product-img" />
                          </a>
                          <div className="product-badge">
                            <span className="badge-label badge-percentage rounded">-44%</span>
                          </div>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Dried Real Craft Sponges</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular ">$8.95</span>
                           {/*<span className="card-price-compare text-decoration-line-through">$1759</span>*/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/DRIED BARNACLE, TUBE SPONGES AND SEA SPONGES/Florida Purple Barnacle Cluster.jpg" alt="product-img" />
                            <img className="primary-img"  height="353" src="assets/img/products/shell/DRIED BARNACLE, TUBE SPONGES AND SEA SPONGES/Florida Purple Barnacle Cluster.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Florida Purple Barnacle Cluster</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$10.95</span>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353"  src="assets/img/products/shell/10 Assorted Hermit Crab Shells.jpg" alt="product-img" />
                            <img className="primary-img"  height="353" src="assets/img/products/shell/10 Assorted Hermit Crab Shells.jpg" alt="product-img" />
                          </a>
                          <div className="product-badge">
                            <span className="badge-label badge-new rounded">New</span>
                          </div>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">10 Assorted Hermit Crab Shells</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$11.95</span>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/red pipe coral.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/red pipe coral.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Red pipe Coral Clusters</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$19.95</span>
                         
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img"  height="353" src="assets/img/products/shell/Reef Rock Coral.jpg" alt="product-img" />
                            <img className="primary-img"  height="353" src="assets/img/products/shell/Reef Rock Coral.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Reef Rock Coral 5"+</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$5.95</span>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/mushcoral.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/mushcoral.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">White Mushroom Coral</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$6.95</span>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/whitecoralweb.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/whitecoralweb.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">White Coral Clusters</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$32.95</span>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img"  height="353" src="assets/img/products/shell/KNOBBY4INCH.jpg" alt="product-img" />
                            <img className="primary-img"  height="353" src="assets/img/products/shell/KNOBBY4INCH.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Bulk Lots Natural Knobby Starfish</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$8.95</span>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/wsfknsd2.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/wsfknsd2.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">2" White Knobby</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$7.95</span>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/tigernaut.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/tigernaut.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Tiger Nautilus Seashells</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$36.95</span>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/ramosus.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/ramosus.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">

                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">Murex Ramosus Display Hermit Crab Shells</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$5.95</span>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-duration={700}>
                      <div className="product-card">
                        <div className="product-card-img">
                          <a className="hover-switch" href="collection-left-sidebar.html">
                            <img className="secondary-img" height="353" src="assets/img/products/shell/whitearks1132.jpg" alt="product-img" />
                            <img className="primary-img" height="353" src="assets/img/products/shell/whitearks1132.jpg" alt="product-img" />
                          </a>
                          <div className="product-card-action product-card-action-2 justify-content-center">
                            <a href="#quickview-modal" className="action-card action-quickview" data-bs-toggle="modal">
                              <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C15.5117 0 20 4.48828 20 10C20 12.3945 19.1602 14.5898 17.75 16.3125L25.7188 24.2812L24.2812 25.7188L16.3125 17.75C14.5898 19.1602 12.3945 20 10 20C4.48828 20 0 15.5117 0 10C0 4.48828 4.48828 0 10 0ZM10 2C5.57031 2 2 5.57031 2 10C2 14.4297 5.57031 18 10 18C14.4297 18 18 14.4297 18 10C18 5.57031 14.4297 2 10 2ZM11 6V9H14V11H11V14H9V11H6V9H9V6H11Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-wishlist">
                              <svg className="icon icon-wishlist" width={26} height={22} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z" fill="#00234D" />
                              </svg>
                            </a>
                            <a href="#" className="action-card action-addtocart">
                              <svg className="icon icon-cart" width={24} height={26} viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.000183105C9.25391 0.000183105 7 2.25409 7 5.00018V6.00018H2.0625L2 6.93768L1 24.9377L0.9375 26.0002H23.0625L23 24.9377L22 6.93768L21.9375 6.00018H17V5.00018C17 2.25409 14.7461 0.000183105 12 0.000183105ZM12 2.00018C13.6562 2.00018 15 3.34393 15 5.00018V6.00018H9V5.00018C9 3.34393 10.3438 2.00018 12 2.00018ZM3.9375 8.00018H7V11.0002H9V8.00018H15V11.0002H17V8.00018H20.0625L20.9375 24.0002H3.0625L3.9375 8.00018Z" fill="#00234D" />
                              </svg>
                            </a>
                          </div>
                        </div>
                        <div className="product-card-details">
                         
                          <h3 className="product-card-title text-center">
                            <a href="collection-left-sidebar.html">White Ark Shell</a>
                          </h3>
                          <div className="product-card-price text-center">
                            <span className="card-price-regular">$5.95</span>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination justify-content-center mt-100">
                  <nav>
                    <ul className="pagination m-0 d-flex align-items-center">
                      <li className="item disabled">
                        <a className="link">
                          <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-left">
                            <polyline points="15 18 9 12 15 6" />
                          </svg>
                        </a>
                      </li>
                      <li className="item"><a className="link" href="#">1</a></li>
                      <li className="item active"><a className="link" href="#">2</a></li>
                      <li className="item"><a className="link" href="#">3</a></li>
                      <li className="item"><a className="link" href="#">4</a></li>
                      <li className="item">
                        <a className="link" href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-right">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* product area end */}
              {/* sidebar start */}
              <div className="col-lg-3 col-md-12 col-12">
                <div className="collection-filter filter-drawer">
                  <div className="filter-widget d-lg-none d-flex align-items-center justify-content-between">
                    <h5 className="heading_24">Filter By</h5>
                    <button type="button" className="btn-close text-reset filter-drawer-trigger d-lg-none" />
                  </div>
                  <div className="filter-widget d-lg-none">
                    <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom" data-bs-toggle="collapse" data-bs-target="#filter-mobile-sort">
                      <span>
                        <span className="sorting-title me-2">Sort by:</span>
                        <span className="active-sorting">Featured</span>
                      </span>
                      <span className="faq-heading-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                    <div id="filter-mobile-sort" className="accordion-collapse collapse show">
                      <ul className="sorting-lists-mobile list-unstyled m-0">
                        <li><a href="#" className="text_14">Featured</a></li>
                        <li><a href="#" className="text_14">Best Selling</a></li>
                        <li><a href="#" className="text_14">Alphabetically, A-Z</a></li>
                        <li><a href="#" className="text_14">Alphabetically, Z-A</a></li>
                        <li><a href="#" className="text_14">Price, low to high</a></li>
                        <li><a href="#" className="text_14">Price, high to low</a></li>
                        <li><a href="#" className="text_14">Date, old to new</a></li>
                        <li><a href="#" className="text_14">Date, new to old</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom" data-bs-toggle="collapse" data-bs-target="#filter-collection">
                      Categories
                      <span className="faq-heading-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                    <div id="filter-collection" className="accordion-collapse collapse show">
                      <ul className="filter-lists list-unstyled mb-0">
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">DRIED BARNACLE AND SEA SPONGES</span>
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text"> BULK WHOLESALE LOT SPECIALS</span>
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">  CUT AND BANDED SHELLS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text"> DISPLAY STANDS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text"> DRIED FISH, BLOW FISH</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">FLAT, CLAM, SCALLOP & PECTIN SHELLS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">FREE SHIPPING</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">HERMIT CRAB SHELLS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">LARGE SEASHELLS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">MEDIUM SEASHELLS </span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">MUREX RAMOSUS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">NAUTILUS SEASHELLS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">NOVELTY SEA PRODUCTS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">ROUND FLORIDA SAND DOLLARS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SEA FANS & CORAL</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SEA GLASS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SEA LIFE LOTS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SEAHORSE</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SEASHELL MIX - TINY, MEDIUM & LARGE</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SEASHELLS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">STARFISH</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">STARFISH & SAND DOLLARS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">URCHINS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">JEWELRY</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SPECIALS</span>

                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">SHIPPING MATERIALS</span>

                          </label>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom" data-bs-toggle="collapse" data-bs-target="#filter-availability">
                      Availability
                      <span className="faq-heading-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                    <div id="filter-availability" className="accordion-collapse collapse show">
                      <ul className="filter-lists list-unstyled mb-0">
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">In Stock</span>
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            Out of Stock
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom" data-bs-toggle="collapse" data-bs-target="#filter-price">
                      Price
                      <span className="faq-heading-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                    <div id="filter-price" className="accordion-collapse collapse show">
                      <div className="filter-price d-flex align-items-center justify-content-between">
                        <div className="filter-field">
                          <input className="field-input" type="number" placeholder="$0" min={0} max={2000.00} />
                        </div>
                        <div className="filter-separator px-3">To</div>
                        <div className="filter-field">
                          <input className="field-input" type="number" min={0} placeholder="$595.00" max={2000.00} />
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="filter-widget">
                    <div className="filter-header faq-heading heading_18 d-flex align-items-center justify-content-between border-bottom" data-bs-toggle="collapse" data-bs-target="#filter-type">
                      Product Type
                      <span className="faq-heading-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-down">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                    <div id="filter-type" className="accordion-collapse collapse show">
                      <ul className="filter-lists list-unstyled mb-0">
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            <span className="filter-text">Sea Sponges</span>
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                           Sea Shell
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            Sea Glass
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            Sea Horse
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                           StarFish
                          </label>
                        </li>
                        <li className="filter-item">
                          <label className="filter-label">
                            <input type="checkbox" />
                            <span className="filter-checkbox rounded me-2" />
                            Sea Horse
                          </label>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                  <div className="filter-widget">
                    <div className="filter-header faq-heading heading_18 d-flex align-items-center border-bottom">
                      Related products
                    </div>
                    <div className="filter-related">
                      <div className="related-item d-flex">
                        <div className="related-img-wrapper">
                          <img className="related-img" src="assets\img\products\shell\pro\4 leg stand.jpg" alt="img" />
                        </div>
                        <div className="related-product-info">
                          <h2 className="related-heading heading_18">
                            <a href="product.html">PLASTIC SHELL STANDS</a>
                          </h2>
                          <div className="related-review-icon product-icon-star d-flex align-items-center">
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                          </div>
                          <p className="related-price text_16">$9.95</p>
                        </div>
                      </div>
                      <div className="related-item d-flex">
                        <div className="related-img-wrapper">
                          <img className="related-img" src="assets\img\products\shell\pro\jb-1.jpg" alt="img" />
                        </div>
                        <div className="related-product-info">
                          <h2 className="related-heading heading_18">
                            <a href="product.html">SHELL  BRACELET JEWELRY</a>
                          </h2>
                          <div className="related-review-icon product-icon-star d-flex align-items-center">
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                          </div>
                          <p className="related-price text_16">$7.95</p>
                        </div>
                      </div>
                      <div className="related-item d-flex">
                        <div className="related-img-wrapper">
                          <img className="related-img" src="assets\img\products\shell\pro\shellearrings11.jpg" alt="img" />
                        </div>
                        <div className="related-product-info">
                          <h2 className="related-heading heading_18">
                            <a href="product.html"> PEARL  SHELL EARRINGS</a>
                          </h2>
                          <div className="related-review-icon product-icon-star d-flex align-items-center">
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                            <img src="assets/img/icon/star.png" alt="img" />
                          </div>
                          <p className="related-price text_16">$11.95</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* sidebar end */}
            </div>
          </div>
        </div>
      </main>

    </React.Fragment>
  )
}

export default Product