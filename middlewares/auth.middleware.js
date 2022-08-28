const jwt = require("jsonwebtoken");

const getJwtToken = function (authorization) {
  if (authorization && authorization.split(" ")[0] === "Bearer") {
    return authorization.split(" ")[1];
  }
  return null;
};

const isAuthenticated = () => {
  return (req, res, next) => {
    // verify jwt token
    const token = getJwtToken(req.headers.authorization);

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
          res.status(401).json({
            errors: [{ message: "Invalid Authentication token" }],
          });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.status(401).json({
        errors: [{ message: "Missing Authentication token" }],
      });
    }
  }
}

module.exports = isAuthenticated;