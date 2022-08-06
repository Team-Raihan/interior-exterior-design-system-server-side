const express = require("express");
const {
  registerUser,
  authUser,
  verifyAdmin,
  getAllUser,
  deleteUserByID,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/admin/:email", verifyAdmin);
router.get("/", getAllUser);
router.delete("/:id", deleteUserByID);

module.exports = router;
