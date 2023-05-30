
import React from 'react';
import { useEffect } from 'react';
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

function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <React.Fragment>
    <BrowserRouter basename={'/'} >
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/singleproducts' element={<SingleProduct/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/carts' element={<Cart/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/blog' element={<Blog/>}/>
   </Routes>
    <Footer/>
    </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

