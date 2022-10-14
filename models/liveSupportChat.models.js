const mongoose = require("mongoose");

const liveSupportChatSchema = mongoose.Schema({
  isOpen: { type: Boolean, required: false },
  link: { type: "String", required: false },
});

const LiveSupportCollection = mongoose.model(
  "live-support-chat",
  liveSupportChatSchema
);

module.exports = LiveSupportCollection;
