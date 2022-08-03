const express = require("express");
const {
  addNewItems,
  getAllItems,
} = require("../controllers/featuresItem.Controllers");

const router = express.Router();

router.route("/").post(addNewItems).get(getAllItems);

module.exports = router;
