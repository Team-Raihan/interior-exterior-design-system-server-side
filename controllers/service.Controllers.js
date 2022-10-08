const asyncHandler = require("express-async-handler");
const Service = require("../models/service.Model");

//@description     Add New Service
//@route           POST /api/service
//@access          Private
const addNewService = asyncHandler(async (req, res) => {
  const newService = req.body;
  const addedService = await Service.create({
    newService,
  });

  if (addedService) {
    res.status(201).json(addedService);
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!");
  }
});

//@description     Get all Services that have been added to the services collection
//@route           GET /api/service
//@access          Public
const getAllServices = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await Service.find(query)).reverse();
  res.send(result);
});

//@description     Get a single service by it's id
//@route           GET /api/service/:id/
//@access          Public
const getServiceByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const service = await Service.findOne({ _id });
    res.status(200).send(service);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//@description     DELETE a service
//@route           DELETE /api/service/:id
//@access          Private
const deleteServiceByID = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const service = await Service.deleteOne({ _id });
    res.status(200).send(service);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {
  addNewService,
  getAllServices,
  getServiceByID,
  deleteServiceByID,
};
