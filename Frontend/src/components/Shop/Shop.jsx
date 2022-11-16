//shop.jsx
import React, { Component,useEffect,useState } from 'react'
import './Shop.css'
import axios from 'axios'


function Shop() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  })

  const getProducts = () => {
    axios.get('http://localhost:3000/products')
    .then(res => setProducts(res.data))
  }

  return (
    <>
<button>Add Product</button> <button>Remove Product</button>
<h1>Shop</h1> 
<section id='shop'>
<table style={{width:"100%"}}> 
<thead>
  <tr>
    <td>Id</td>
    <td>name</td>
    <td>Image</td>
    <td>Price</td>
    <td>Size</td>
    <td>Category</td>
    <td>Quantity</td>
    <td>Add button</td>
  </tr>
</thead>
<tbody>
  {/* {product.map(product =>( */}
  <tr>
    <td><a href="">product.id</a></td>
    <td><a href="">product.name</a></td>
    <td><img src="product.img" alt="" /></td>
    <td><a href="">product.price</a></td>
    <td><input type="number" value=""/></td>
    <td><a href="">product.price</a></td>
    <td><input type="number" value=""/></td>
    <td><button>Add to Cart</button> <button>Edit</button></td>
  </tr>
  {/* )) */}
</tbody>
</table>
</section>

<footer className='section-p1'>...

</footer>
</>
  )
}

export default Shop