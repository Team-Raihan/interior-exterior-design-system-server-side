const express = require("express");
const { addNewOrder, getAllOrders, getOrderByID, deleteOrderByID, UpdatePayment, getOrderByEmail } = require("../controllers/order.Controlllers");

const router = express.Router();

router.post("/",addNewOrder);
router.get("/",getAllOrders);
router.get("/:email",getOrderByEmail);
router.delete("/:id",deleteOrderByID);
router.patch("/:id",UpdatePayment);

module.exports = router;
