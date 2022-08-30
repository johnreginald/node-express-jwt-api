const UserRepository = require("../repositories/user.repository");
const UserService = require("../services/user.service");
const jwt = require("jsonwebtoken");

const register = async function (req, res) {
  try {
    const user = await UserService.createUser(req.body);
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      errors: [
        {
          username: "Username already taken"
        }
      ]
    });
  }
}

const login = async function (req, res) {
  const user = await UserRepository.findByUsernameAndPassword(req.body.username, req.body.password);
  
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials"
    });
  }
  
  const token = jwt.sign({
    username: user.username,
    email: user.email,
    id: user.id,
  }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN
  }, {});
  
  return res.status(200).json({
    message: "Login successful",
    token: token
  });
}

module.exports = {
  register,
  login
}