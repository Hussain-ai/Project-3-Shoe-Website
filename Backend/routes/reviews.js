const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviews')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/reviews', reviewsController.getAllreviews)

router.get('/reviews/:_id', reviewsController.getreview)

router.post('/reviews', isLoggedIn, reviewsController.createreview)

router.put('/reviews/:_id', reviewsController.updatereview)

router.delete('/reviews/:_id', reviewsController.deletereview)



// We export our routes 
module.exports = router




