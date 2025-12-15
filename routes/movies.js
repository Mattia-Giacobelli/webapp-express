const express = require('express')

//Import conreoller
const moviesController = require('../controller/moviesController')

//Create movies router 
const router = express.Router()

//Index route
router.get('/', moviesController.index)

//Show route
router.get('/:id', moviesController.show)

//Store review route
router.post('/:id/reviews', moviesController.storeReview)

module.exports = router