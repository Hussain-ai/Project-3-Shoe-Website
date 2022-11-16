const express = require('express')
const router = express.Router()
const productController = require('../controllers/carts')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/carts', productController.getAllProduct)

router.get('/carts/:_id', productController.getproduct)

router.post('/carts', isLoggedIn, productController.addproduct)

router.put('/carts/:_id', productController.updateproduct)

router.delete('/carts/:_id', productController.deleteproduct)



// We export our routes 
module.exports = router