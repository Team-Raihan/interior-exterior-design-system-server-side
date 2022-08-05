const express = require("express");
const {
  addNewReview,
  getAllReviews,
} = require("../controllers/review.Controllers");

const router = express.Router();

router.post("/", addNewReview);
router.get("/", getAllReviews);

module.exports = router;
