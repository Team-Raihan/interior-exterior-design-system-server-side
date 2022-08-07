const express = require("express");
const { addNewOrder, getAllOrders, deleteOrderByID, UpdatePayment, getOrderByEmail, getOrderByDetailsID } = require("../controllers/order.Controlllers");

const router = express.Router();

router.patch("/:orderId",UpdatePayment);
router.post("/",addNewOrder);
router.get("/",getAllOrders);
router.get("/:email",getOrderByEmail);
router.get("/details/:id",getOrderByDetailsID);
router.delete("/:id",deleteOrderByID);

module.exports = router;
