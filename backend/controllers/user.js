const User = require("../models/user");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password)
    return res.status(400).send(" data incomplete");

  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send("Failed: the email user is already registered");

  let hash = await bcrypt.hash(req.body.password, 10);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
    dbStatus: true,
  });

  let result = await user.save();
  if (!result) return res.status(400).send("Failed to register User");
  return res.status(200).send({ user });


};

const listUser = async (req, res) => {
  const user = await User.find();
  if (!user || user.length === 0) return res.status(400).send("No user");
  return res.status(200).send({ user });
};

module.exports = {registerUser, listUser} 