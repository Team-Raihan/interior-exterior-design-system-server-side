const express = require("express");
const {
  addNewItems,
  getAllItems,
  getItemsByID,
} = require("../controllers/featuresItem.Controllers");

const router = express.Router();

router.post("/",addNewItems);
router.get("/",getAllItems);
router.get("/:id",getItemsByID);

module.exports = router;
