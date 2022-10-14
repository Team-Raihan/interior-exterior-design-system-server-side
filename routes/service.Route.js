const express = require("express");
const {
  addNewService,
  getAllServices,
  getServiceByID,
  deleteServiceByID,
} = require("../controllers/service.Controllers");

const router = express.Router();

router.post("/", addNewService);
router.get("/", getAllServices);
router.get("/:id", getServiceByID);
router.delete("/:id", deleteServiceByID);

module.exports = router;
