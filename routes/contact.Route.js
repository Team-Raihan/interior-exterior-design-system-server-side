const express = require("express");
const { getAllContacts, addNewContact } = require("../controllers/contact.Controllers");
const {
  addNews,
  getAllNews,
  getNewsByID,
} = require("../controllers/news.Controllers");

const router = express.Router();

router.post("/", addNewContact);
router.get("/", getAllContacts);


module.exports = router;
