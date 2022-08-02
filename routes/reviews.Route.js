const express = require('express');
const { addNewReview, getAllReviews } = require('../controllers/review.Controllers');

const router= express.Router()

router.route("/").post(addNewReview).get(getAllReviews)

module.exports =router