const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  img: { type: "String", required: true },
  category: { type: "String", required: true },
  description: { type: "String", required: true },
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
