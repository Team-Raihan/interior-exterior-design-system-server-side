const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
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
//@route           POST /api/users/login
//@access          Public
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
//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
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

//@description    All user
//@route           Get /api/users
//@access          Public

const getAllUser = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await User.find(query)).reverse();
  res.send(result);
});

//@description     user
//@route           Delete /api/users
//@access          Public

const deleteUserByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const item = await User.deleteOne({ _id });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {
  registerUser,
  authUser,
  verifyAdmin,
  getAllUser,
  deleteUserByID,
};
