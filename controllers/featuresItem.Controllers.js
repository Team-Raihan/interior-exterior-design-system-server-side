const asyncHandler = require("express-async-handler");
const FeaturedItem = require("../models/featuresItem.Model");
const Review = require("../models/reviews.Model");

//@description     Add New new Review
//@route           POST /api/review/
//@access          Public
const addNewItems = asyncHandler(async (req, res) => {
  const { img, category, description, adminName, adminEmail, price } = req.body;

  if (!img || !category) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const newFeaturedItem = await FeaturedItem.create({
    img,
    category,
    description,
    adminName,
    adminEmail,
    price,
  });

  if (newFeaturedItem) {
    res.status(201).json({
      _id: newFeaturedItem._id,
      img: newFeaturedItem.img,
      category: newFeaturedItem.category,
    });
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!");
  }
});

//@description     Get all Reviews
//@route           GET /api/review/
//@access          Public
const getAllItems = asyncHandler(async (req, res) => {
  const query = {};
  const result = await (await FeaturedItem.find(query)).reverse();
  res.send(result);
});
//@description     Get all Reviews
//@route           GET /api/review/
//@access          Public
const getItemsByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await FeaturedItem.findOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//@description     Get all Reviews
//@route           GET /api/review/
//@access          Public
const deleteItemByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await FeaturedItem.deleteOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = { addNewItems, getAllItems, getItemsByID,deleteItemByID};
