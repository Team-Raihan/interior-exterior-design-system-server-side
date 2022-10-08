const express = require("express");
const { SocialLogin } = require("../controllers/socialLogin.Controllers");

const router = express.Router();

router.post("/", SocialLogin);

module.exports = router;
