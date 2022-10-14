const mongoose = require("mongoose");

const socialLoginSchema = mongoose.Schema({
  email: { type: "String", required: true },
  password: { type: "String", required: true },
});

const SocialLoginCollection = mongoose.model("SocialLogin", socialLoginSchema);

module.exports = SocialLoginCollection;
