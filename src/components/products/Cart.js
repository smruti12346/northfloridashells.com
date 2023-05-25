import React from 'react'

function Cart() {
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
                <li>Cart</li>
              </ul>
            </div>
          </div>
          {/* breadcrumb end */}
        
                <main id="MainContent" className="content-for-layout">
                  <div className="cart-page mt-100">
                    <div className="container">
                      <div className="cart-page-wrapper">
                        <div className="row">
                          <div className="col-lg-7 col-md-12 col-12">
                            <table className="cart-table w-100">
                              <thead>
                                <tr>
                                  <th className="cart-caption heading_18">Product</th>
                                  <th className="cart-caption heading_18" />
                                  <th className="cart-caption text-center heading_18 d-none d-md-table-cell">Quantity</th>
                                  <th className="cart-caption text-end heading_18">Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="cart-item">
                                  <td className="cart-item-media">
                                    <div className="mini-img-wrapper">
                                      <img className="mini-img" src="assets/img/products/furniture/1.jpg" alt="img" />
                                    </div>                                    
                                  </td>
                                  <td className="cart-item-details">
                                    <h2 className="product-title"><a href="#">Eliot Reversible Sectional</a></h2>
                                    <p className="product-vendor">XS / Dove Gray</p>                                   
                                  </td>
                                  <td className="cart-item-quantity">
                                    <div className="quantity d-flex align-items-center justify-content-between">
                                      <button className="qty-btn dec-qty"><img src="assets/img/icon/minus.svg" alt="minus" /></button>
                                      <input className="qty-input" type="number" name="qty" defaultValue={1} min={0} />
                                      <button className="qty-btn inc-qty"><img src="assets/img/icon/plus.svg" alt="plus" /></button>
                                    </div>
                                    <a href="#" className="product-remove mt-2">Remove</a>                           
                                  </td>
                                  <td className="cart-item-price text-end">
                                    <div className="product-price">$580.00</div>                           
                                  </td>                        
                                </tr>
                                <tr className="cart-item">
                                  <td className="cart-item-media">
                                    <div className="mini-img-wrapper">
                                      <img className="mini-img" src="assets/img/products/furniture/2.jpg" alt="img" />
                                    </div>                                    
                                  </td>
                                  <td className="cart-item-details">
                                    <h2 className="product-title"><a href="#">Vita Lounge Chair</a></h2>
                                    <p className="product-vendor">XS / Pink</p>                                   
                                  </td>
                                  <td className="cart-item-quantity">
                                    <div className="quantity d-flex align-items-center justify-content-between">
                                      <button className="qty-btn dec-qty"><img src="assets/img/icon/minus.svg" alt="minus" /></button>
                                      <input className="qty-input" type="number" name="qty" defaultValue={1} min={0} />
                                      <button className="qty-btn inc-qty"><img src="assets/img/icon/plus.svg" alt="plus" /></button>
                                    </div>
                                    <a href="#" className="product-remove mt-2">Remove</a>                           
                                  </td>
                                  <td className="cart-item-price text-end">
                                    <div className="product-price">$580.00</div>                           
                                  </td>
                                </tr>
                                <tr className="cart-item">
                                  <td className="cart-item-media">
                                    <div className="mini-img-wrapper">
                                      <img className="mini-img" src="assets/img/products/furniture/3.jpg" alt="img" />
                                    </div>                                    
                                  </td>
                                  <td className="cart-item-details">
                                    <h2 className="product-title"><a href="#">Sarno Dining Chair</a></h2>
                                    <p className="product-vendor">XS / Dove Gray</p>                                  
                                  </td>
                                  <td className="cart-item-quantity">
                                    <div className="quantity d-flex align-items-center justify-content-between">
                                      <button className="qty-btn dec-qty"><img src="assets/img/icon/minus.svg" alt="minus" /></button>
                                      <input className="qty-input" type="number" name="qty" defaultValue={1} min={0} />
                                      <button className="qty-btn inc-qty"><img src="assets/img/icon/plus.svg" alt="plus" /></button>
                                    </div>
                                    <a href="#" className="product-remove mt-2">Remove</a>                           
                                  </td>
                                  <td className="cart-item-price text-end">
                                    <div className="product-price">$580.00</div>                           
                                  </td>                        
                                </tr>
                                <tr className="cart-item">
                                  <td className="cart-item-media">
                                    <div className="mini-img-wrapper">
                                      <img className="mini-img" src="assets/img/products/furniture/4.jpg" alt="img" />
                                    </div>                                    
                                  </td>
                                  <td className="cart-item-details">
                                    <h2 className="product-title"><a href="#">Eliot Reversible Sectional</a></h2>
                                    <p className="product-vendor">XS / Dove Gray</p>                                  
                                  </td>
                                  <td className="cart-item-quantity">
                                    <div className="quantity d-flex align-items-center justify-content-between">
                                      <button className="qty-btn dec-qty"><img src="assets/img/icon/minus.svg" alt="minus" /></button>
                                      <input className="qty-input" type="number" name="qty" defaultValue={1} min={0} />
                                      <button className="qty-btn inc-qty"><img src="assets/img/icon/plus.svg" alt="plus" /></button>
                                    </div>
                                    <a href="#" className="product-remove mt-2">Remove</a>                           
                                  </td>
                                  <td className="cart-item-price text-end">
                                    <div className="product-price">$580.00</div>                           
                                  </td>                        
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col-lg-5 col-md-12 col-12">
                            <div className="cart-total-area">
                              <h3 className="cart-total-title d-none d-lg-block mb-0">Cart Totals</h3>
                              <div className="cart-total-box mt-4">
                                <div className="subtotal-item subtotal-box">
                                  <h4 className="subtotal-title">Subtotals:</h4>
                                  <p className="subtotal-value">$465.00</p>
                                </div>
                                <div className="subtotal-item shipping-box">
                                  <h4 className="subtotal-title">Shipping:</h4>
                                  <p className="subtotal-value">$10.00</p>
                                </div>
                                <div className="subtotal-item discount-box">
                                  <h4 className="subtotal-title">Discount:</h4>
                                  <p className="subtotal-value">$100.00</p>
                                </div>
                                <hr />
                                <div className="subtotal-item discount-box">
                                  <h4 className="subtotal-title">Total:</h4>
                                  <p className="subtotal-value">$1000.00</p>
                                </div>
                                <p className="shipping_text">Shipping &amp; taxes calculated at checkout</p>
                                <div className="d-flex justify-content-center mt-4">
                                  <a href="checkout.html" className="position-relative btn-primary text-uppercase">
                                    Procced to checkout
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>            
                </main>
             
      
    </React.Fragment>
  )
}

export default Cart