const asyncHandler = require("express-async-handler");
const User = require("../models/user.Model");
const generateToken = require("../config/generateToken");

//@description     Register new user
//@route           POST /api/user/
//@access          Private
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user.email),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@description     Auth the user
//@route           POST /api/user/login
//@access          Private
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.email,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user.email),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});
//@description     Verify Admin
//@route           GET /api/user/admin/:email
//@access          Private
const verifyAdmin = asyncHandler(async (req, res) => {
  const requester = req.params.email;
  const requesterAccount = await User.findOne({
    email: requester,
  });
  if (requesterAccount?.email) {
    const isAdmin = requesterAccount.isAdmin;
    res.send({ admin: isAdmin });
  } else {
    res.status(401).send({ message: "Unauthorized User", admin: false });
  }
});

//@description     All user
//@route           Get /api/user
//@access          Private

const getAllUser = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await User.find(query)).reverse();
  res.send(result);
});

//@description     Delete User by id
//@route           Delete /api/user/:id
//@access          Private

const deleteUserByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await User.deleteOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//@description     Get user by ID
//@route           GET /api/user/:email
//@access          Private

const getUserById = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const item = await User.findOne({ email });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@description     Update user by email
//@route           PATCH /api/user/:email
//@access          Private

const updateUserByEmail = asyncHandler(async (req, res) => {
  try {
    const email = req.params.email;
    const filter = { email };
    const { occupation, phoneNumber, postCode, city, billingAddress } =
      req.body;
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        occupation,
        phoneNumber,
        postCode,
        city,
        billingAddress,
      },
    };
    const result = await User.updateOne(filter, updateDoc, options);
    res.status(201).send(result);
  } catch (error) {
    return res.send({ message: "Data not found" });
  }
});

module.exports = {
  registerUser,
  authUser,
  verifyAdmin,
  getAllUser,
  deleteUserByID,
  updateUserByEmail,
  getUserById,
};
