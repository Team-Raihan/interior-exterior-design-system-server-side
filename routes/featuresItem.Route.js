const express = require("express");
const {
  addNewItems,
  getAllItems,
  getItemsByID,
  deleteItemByID,
  searchByText,
} = require("../controllers/featuresItem.Controllers");

const router = express.Router();

router.post("/",addNewItems);
router.get("/",getAllItems);
router.get("/:id",getItemsByID);
router.delete("/:id",deleteItemByID);
router.get("/search/:text",searchByText);

module.exports = router;
