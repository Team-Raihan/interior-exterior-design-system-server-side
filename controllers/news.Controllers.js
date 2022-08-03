const asyncHandler = require("express-async-handler");
const News = require("../models/news.Model");

//@description     Add New new Review
//@route           POST /api/review/
//@access          Public
const addNews = asyncHandler(async (req, res) => {
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
const getAllNews = asyncHandler(async (req, res) => {
  const query = {};
  const result = await News.find(query);
  res.send(result);
});

//@description     Get all Reviews
//@route           GET /api/review/
//@access          Public
const getNewsByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await News.findOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = { addNews, getAllNews, getNewsByID };
