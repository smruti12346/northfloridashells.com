import React, { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Product from './components/products/Product';
import Login from './components/login/Login';
import Registration from './components/login/Registration';
import Cart from './components/products/Cart';
import Wishlist from './components/products/Wishlist';
import SingleProduct from './components/products/SingleProduct';
import Blog from './components/blog/Blog'
import SeaSponge from './components/products/category_page/SeaSponge';
import HermitCrabShell from './components/products/category_page/HermitCrabShell';
import SeaShell from './components/products/category_page/SeaShell';
import Error from './components/error/Error';
import SeaGlass from './components/products/category_page/SeaGlass';
import SeaFan from './components/products/category_page/SeaFan';

function App() {
  useEffect(()=>{
    AOS.init();
  })

  
  return (
    <React.Fragment>
    <BrowserRouter basename={'/shell'} >
    <Header/>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/singleproducts/:id' element={<SingleProduct/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/carts' element={<Cart/>}/>
    <Route path='/wishlist' element={<Wishlist/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/seasponge' element={<SeaSponge/>}/>
    <Route path='/hermitshell' element={<HermitCrabShell/>}/>
    <Route path='/seashell' element={<SeaShell/>}/>
    <Route path='/seaglass' element={<SeaGlass/>}/>
    <Route path='/seafan' element={<SeaFan/>}/>

    <Route path="*" element={<Error/>}/>
   </Routes>
    <Footer/>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

