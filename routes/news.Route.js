const express = require("express");
const {
  addNews,
  getAllNews,
  getNewsByID,
  deleteNewsByID,
  getNewsByDate,
} = require("../controllers/news.Controllers");

const router = express.Router();

router.post("/", addNews);
router.get("/", getAllNews);
router.get("/:id", getNewsByID);
router.get("/filter/:date", getNewsByDate);
router.delete("/:id", deleteNewsByID);

module.exports = router;
