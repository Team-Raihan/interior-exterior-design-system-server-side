const express = require("express");
const {
  addNews,
  getAllNews,
  getNewsByID,
} = require("../controllers/news.Controllers");

const router = express.Router();

router.post("/", addNews);
router.get("/", getAllNews);
router.get("/:id", getNewsByID);

module.exports = router;
