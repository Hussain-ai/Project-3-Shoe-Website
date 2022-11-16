const express = require('express')
const router = express.Router()
const productController = require('../controllers/shops')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/shops', productController.getAllProduct)

router.get('/shops/:_id', productController.getproduct)

router.post('/shops', isLoggedIn, productController.addproduct)

router.put('/shops/:_id', productController.updateproduct)

router.delete('/shops/:_id', productController.deleteproduct)



// We export our routes 
module.exports = router