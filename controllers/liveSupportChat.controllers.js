const asyncHandler = require("express-async-handler");
const LiveSupportCollection = require("../models/live_support_chat.Models");

//@description     Add Support
//@route           PATCH /api/live-support
//@access          Private
const addLiveSupport = asyncHandler(async (req, res) => {
  try {
    const filter = { _id: "62ef6a79ab0294634bf427c7" };
    const support = req.body;
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        isOpen: support.isOpen ? support.isOpen : false,
        link: support.link ? support.link : "not available",
      },
    };
    const result = await LiveSupportCollection.updateOne(
      filter,
      updateDoc,
      options
    );
    res.status(201).send(result);
  } catch (error) {
    return res.send({ message: "Data not found" });
  }
});

//@description     Get Support
//@route           GET /api/live-support
//@access         Private
const getSupport = asyncHandler(async (req, res) => {
  try {
    const item = await LiveSupportCollection.findOne({
      _id: "62ef6a79ab0294634bf427c7",
    });
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = { addLiveSupport, getSupport };
