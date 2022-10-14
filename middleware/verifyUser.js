const jwt = require("jsonwebtoken");
const verifyUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "unauthorized user" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden User" });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};
module.exports = verifyUser;
