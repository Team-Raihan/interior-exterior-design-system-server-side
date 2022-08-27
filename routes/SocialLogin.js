const express = require("express");
const { SocialLogin } = require("../controllers/SocialLogin");

const router = express.Router();

router.post("/", SocialLogin);

module.exports = router;
