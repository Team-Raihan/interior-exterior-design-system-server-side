const express = require("express");
const { getChatByEmail, addNewChat, getAllChat } = require("../controllers/liveSupportChat.controllers");

const router = express.Router();

router.post("/", addNewChat);
router.get("/", getAllChat);
router.get("/:id", getChatByEmail);

module.exports = router;
