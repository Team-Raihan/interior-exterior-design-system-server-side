const express = require("express");
const {
  registerUser,
  authUser,
  verifyAdmin,
  getAllUser,
  deleteUserByID,
  updateUserByEmail,
  getUserById,
  makeAdmin,
} = require("../controllers/user.Controllers");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.get("/admin/:email", verifyAdmin);
router.get("/", getAllUser);
router.get("/:email", getUserById);
router.patch("/:email", updateUserByEmail);
router.patch("/make-admin/:email", makeAdmin);
router.delete("/:id", deleteUserByID);

module.exports = router;
