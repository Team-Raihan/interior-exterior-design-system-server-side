const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  img: { type: "String", required: true },
  category: { type: "String", required: true },
});

const FeaturedItem = mongoose.model("featured-item", reviewSchema);

module.exports = FeaturedItem;
