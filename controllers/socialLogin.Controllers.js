const asyncHandler = require("express-async-handler");
const SocialLoginCollection = require("../models/social_login.Model");


const SocialLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await SocialLoginCollection.create({ email, password });
  if(result){
    res.status(201).send({success:true})
  }
   else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});



module.exports = {
    SocialLogin,
  
};
