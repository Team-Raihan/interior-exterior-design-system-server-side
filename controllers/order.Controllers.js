const asyncHandler = require("express-async-handler");
const OrderCollection = require("../models/order.Model");

//@description     Add New new Review
//@route           POST /api/review/
//@access          Private
const addNewOrder = asyncHandler(async (req, res) => {
  const {
    productName,
    buyerEmail,
    productImg,
    orderTotal,
    buyerName,
    buyerPhone,
    billingInfo,
  } = req.body;

  if (
    !productName ||
    !productImg ||
    !orderTotal ||
    !buyerName ||
    !buyerEmail ||
    !buyerPhone ||
    !billingInfo
  ) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const newFeaturedItem = await OrderCollection.create({
    productName,
    productImg,
    orderTotal,
    buyerName,
    buyerEmail,
    buyerPhone,
    billingInfo,
  });

  if (newFeaturedItem) {
    res.status(201).json({
      _id: newFeaturedItem._id,
      img: newFeaturedItem.img,
      category: newFeaturedItem.category,
    });
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!");
  }
});

//@description     Get all Reviews
//@route           GET /api/review/
//@access          Private
const getAllOrders = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await OrderCollection.find(query)).reverse();
  res.send(result);
});
//@description     Get all Reviews
//@route           GET /api/review/
//@access          Private
const getOrderByEmail = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const item = await OrderCollection.find({ buyerEmail: email });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//@description     Get all Reviews
//@route           GET /api/review/
//@access          Private
const deleteOrderByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await OrderCollection.deleteOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//@description     Get all Reviews
//@route           GET /api/review/
//@access          Private
const getOrderByDetailsID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await OrderCollection.findOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@description     Get all Reviews
//@route           GET /api/review/
//@access          Private
const UpdatePayment = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.orderId;
    const filter = { _id };
    const payment = req.body.payment;

    const options = { upsert: true };
    const updateDoc = {
      $set: {
        transactionId: payment.transactionId
          ? payment.transactionId
          : "not found",
        paid: true,
        orderId: payment.orderId ? payment.orderId : "not found",
      },
    };
    const result = await OrderCollection.updateOne(filter, updateDoc, options);
    res.status(201).send(result);
  } catch (error) {
    return res.send({ message: "Data not found" });
  }
});

module.exports = {
  addNewOrder,
  getAllOrders,
  getOrderByEmail,
  deleteOrderByID,
  UpdatePayment,
  getOrderByDetailsID,
};
