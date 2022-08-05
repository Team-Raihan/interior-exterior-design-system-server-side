const express = require("express");
const { addNewOrder, getAllOrders, getOrderByID, deleteOrderByID, UpdatePayment } = require("../controllers/order.Controlllers");

const router = express.Router();

router.post("/",addNewOrder);
router.get("/",getAllOrders);
router.get("/:id",getOrderByID);
router.delete("/:id",deleteOrderByID);
router.patch("/:id",UpdatePayment);

module.exports = router;
