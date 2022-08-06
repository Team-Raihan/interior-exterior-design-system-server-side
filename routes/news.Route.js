const express = require("express");
const {
  addNews,
  getAllNews,
  getNewsByID,
  deleteNewsByID,
} = require("../controllers/news.Controllers");

const router = express.Router();

router.post("/", addNews);
router.get("/", getAllNews);
router.get("/:id", getNewsByID);
router.delete("/:id", deleteNewsByID);

module.exports = router;
