const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username }).select("-password");
    if (user) return res.status(500).send("Username already exists!");

    const createdUser = await User.create(req.body);
    const token = jwt.sign({ _id: createdUser._id }, process.env.SECRET_KEY);
    return res.json({ user: createdUser, token }).status(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error!");
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("username/password incorrect!");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send("Username/password incorrect!");


    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
    return res.json({ user, token }).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error!");
  }
};

module.exports = {
  register,
  login,
};