const asyncHandler = require("express-async-handler");
const FeaturedItem = require("../models/featuresItem.Model");

//@description     Add New FeaturedItem
//@route           POST /api/featured-item/
//@access          Private
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

//@description     Get all FeaturedItem
//@route           GET /api/featured-item/
//@access          Public
const getAllItems = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await FeaturedItem.find(query)).reverse();
  res.send(result);
});
//@description     Get FeaturedItem by id
//@route           GET /api/featured-item/:id
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
//@description   Delete featured items by ID
//@route           DELETE /api/featured-item/id
//@access          Private
const deleteItemByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await FeaturedItem.deleteOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//@description     Search featured items
//@route           GET /api/featured-item/search/:text
//@access          Public
const searchByText = asyncHandler(async (req, res) => {
  try {
    const searchText = req.params.text.toString();
    const query = `{"category":{$er:"${searchText}"}}`;
    let pipeline = [
      {
        $search: {
          index: "searchItem",
          text: {
            query: query,
            path: "category",
            fuzzy: {
              maxEdits: 1,
            },
          },
        },
      },
    ];
    const item = await FeaturedItem.aggregate(pipeline);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {
  addNewItems,
  getAllItems,
  getItemsByID,
  deleteItemByID,
  searchByText,
};
