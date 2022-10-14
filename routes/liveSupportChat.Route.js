const express = require("express");
const {
  addLiveSupport,
  getSupport,
} = require("../controllers/liveSupportChat.controllers");

const router = express.Router();

router.patch("/", addLiveSupport);
router.get("/", getSupport);

module.exports = router;
