const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).send({ message: "UnAuthorized access" });
  }
  const authToken = authorizationHeader.split(" ")[1];
  jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};
module.exports = verifyToken;
