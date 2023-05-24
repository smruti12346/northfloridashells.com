import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
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
                  <li>Login</li>
                </ul>
              </div>
            </div>
            {/* breadcrumb end */}
            <main id="MainContent" className="content-for-layout">
              <div className="login-page mt-100">
                <div className="container">
                  <form action="#" className="login-form common-form mx-auto">
                    <div className="section-header mb-3">
                      <h2 className="section-heading text-center">Login</h2>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <fieldset>
                          <label className="label">Email address</label>
                          <input type="email" />
                        </fieldset>
                      </div>
                      <div className="col-12">
                        <fieldset>
                          <label className="label">Password</label>
                          <input type="password" />
                        </fieldset>
                      </div>
                      <div className="col-12 mt-3">
                        <a href="#" className="text_14 d-block">Forgot your password?</a>
                        <button type="submit" className="btn-primary d-block mt-4 btn-signin">SIGN IN</button>
                        <NavLink to="/registration" className="btn-secondary mt-2 btn-signin">CREATE AN ACCOUNT</NavLink>
                      </div>
                    </div>
                  </form>
                </div>
              </div>            
            </main>
         
      
    </React.Fragment>
  )
}

export default Login