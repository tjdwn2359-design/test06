// import logo from './logo.svg';
import './App.css';

import { Routes, Route, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Hobby from './pages/Hobby';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

import logo from './pages/img/logo.png';

function App() {

    const [cart, setCart] = useState([])

  const addToCart = (product) => {

    const exist = cart.find((item) => item.id === product.id)

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  )


  return (
    <div className="App">
      <header className='header'>
        <div className='logo'>
          <img src={logo} alt="로고 이미지" />
        </div>

        <nav className='gnb'>
          <NavLink className='gnb_list' to='/' >HOME</NavLink>
          <NavLink className='gnb_list' to='/about' >ABOUT</NavLink> 
          <NavLink className='gnb_list' to='/hobby' >HOBBY</NavLink> 
          <NavLink className='gnb_list' to='/contact' >CONTACT</NavLink> 
          <NavLink className='gnb_list' to='/shop'>SHOP</NavLink>
          <NavLink className='gnb_list' to='/cart'>
           CART ({cartCount})
          </NavLink>
        </nav>
      </header>

      <hr />

      <main className='wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hobby' element={<Hobby />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/shop' element={<Shop addToCart={addToCart} />}/> 

          <Route path='/cart' element={<Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} removeItem={removeItem} />} />      
          </Routes>


      </main>

      <hr />

      <Footer />

    </div>
  );
}

export default App;
