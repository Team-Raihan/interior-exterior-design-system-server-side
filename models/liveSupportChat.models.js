const mongoose = require("mongoose");

const liveSupportChatSchema = mongoose.Schema({
  img: { type: "String", required: true },
  name: { type: "String", required: true },
  title: { type: "String", required: true },
  date: { type: Date, default: Date.now },
  news: { type: "String", required: true },
});

const LiveSupportCollection = mongoose.model("live-support-chat", liveSupportChatSchema);

module.exports = LiveSupportCollection;
