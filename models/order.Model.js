const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  productName: { type: "String", required: true },
  productImg: { type: "String", required: true },
  orderTotal: { type: "String", required: true },
  buyerName: { type: "String", required: true },
  buyerEmail: { type: "String", required: true },
  buyerPhone: { type: "String", required: true },
  billingInfo: { type: "String", required: true },
  transactionId: { type: "String", required: false },
  orderId: { type: "String", required: false },
  paid: { type: Boolean, required: false },
});

const OrderCollection = mongoose.model("order", orderSchema);

module.exports = OrderCollection;
