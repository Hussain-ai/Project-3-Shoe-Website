import React, { Component } from 'react'
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Account from './components/Account/Account'
import Blog from './components/Blog/Blog'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import Contact from './components/Contact/Contact'
import Auth from './components/Auth/Auth'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import useForm from 'react-hook-form'
export default class App extends Component {
  render() {
    return (
      //Java Logic here
      <>
      {/* //html logic here */}
        <Router>
          <nav style={{fontSize:"25px"}}>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/About">About</Link>&nbsp;&nbsp;
            <Link to="/Contact">Contact us</Link>&nbsp;&nbsp;
            <Link to="/Blog">Blog</Link>&nbsp;&nbsp;
            <Link to="/Shop">Shop</Link>&nbsp;&nbsp;
            <Link to="/Cart">Cart</Link>&nbsp;&nbsp;
            <Link to="/Account">Account</Link>&nbsp;&nbsp;
            <Link to="/Auth">Auth</Link>
          </nav>
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/Auth" element={<Auth/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}