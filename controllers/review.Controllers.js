const asyncHandler = require("express-async-handler");
const Review = require("../models/reviews.Model");

//@description     Add New new Review
//@route           POST /api/review/
//@access          Public
const addNewReview = asyncHandler(async (req, res) => {
  const { img, name, occupation, review } = req.body;

  if (!name || !occupation || !review) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const newReview = await User.create({
    img,
    name,
    occupation,
    review,
  });

  if (newReview) {
    res.status(201).json({
      _id: newReview._id,
      img: newReview.img,
      name: newReview.name,
      occupation: newReview.occupation,
      review: newReview.review,
    });
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!");
  }
});

//@description     Get all Reviews
//@route           GET /api/review/
//@access          Public
const getAllReviews = asyncHandler(async (req, res) => {
  const query = {};
  const result = await Review.find(query);
  res.send(result);
});

module.exports = { addNewReview, getAllReviews };
