//cart.jsx
import React, { Component,useEffect,useState } from 'react'
import './Cart.css'
import axios from 'axios'


function Cart() {

  const [Cart, setCart] = useState([])

  useEffect(() => {
    getCart()
  })
  const getCart = () => {
    axios.get('http://localhost:3000/Cart')
    .then(res => setCart(res.data))
  }
<>
<h1>Cart</h1>
<section id='cart'>
<table style={{width:"100%"}}> 
<thead>
  <tr>
    <td>Id</td>
    <td>name</td>
    <td>Image</td>
    <td>Price</td>
    <td>Quantity</td>
  </tr>
</thead>
<tbody>
  {/* amount of products are added by customer in shop page */}
  <tr>
    <td><a href="">cart.id</a></td>
    <td><a href="">cart.name</a></td>
    <td><img src="cart.img" alt="" /></td>
    <td><a href="">cart.price</a></td>
    <td>cart.quantity</td>
  </tr>
  {/* }) */}
</tbody>
</table>
</section>
<section id='subtotal'>
  <table>
    <tr>
      <td>Cart Subtotal</td>
      <td>price.sum</td>
    </tr>
    <tr>
      <td>Shipping</td>
      <td>5$</td>
    </tr>
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>price.total</strong></td>
    </tr>
  </table>
</section>

</>


}
export default Cart