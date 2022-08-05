const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  img: { type: "String", required: true },
  category: { type: "String", required: true },
  description: { type: "String", required: true },
  adminName: { type: "String", required: true },
  adminEmail: { type: "String", required: true },
  price: { type: "String", required: true },
});

const FeaturedItem = mongoose.model("featured-item", reviewSchema);

module.exports = FeaturedItem;
