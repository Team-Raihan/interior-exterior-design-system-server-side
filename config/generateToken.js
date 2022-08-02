const jwt = require('jsonwebtoken')

const generateToken =(email)=>{
    return jwt.sign({email: email},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"30d"
    })

}
module.exports= generateToken