const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: { type: "String", required: true },
  img: { type: "String", required: true },
  date: { type: "String", required: true },
  news: { type: "String", required: true },
});

const News = mongoose.model("news", newsSchema);

module.exports = News;
