const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  img:{ type: "String", required: true },
  name: { type: "String", required: true },
  review: { type: "String", required: true },
  rate: { type: "String", required: true },
  occupation: { type: "String", required: true },
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
