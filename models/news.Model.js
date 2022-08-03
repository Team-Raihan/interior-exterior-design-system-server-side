const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  img: { type: "String", required: true },
  name: { type: "String", required: true },
  title: { type: "String", required: true },
  date: { type: Date, default: Date.now },
  news: { type: "String", required: true },
});

const News = mongoose.model("news", newsSchema);

module.exports = News;
