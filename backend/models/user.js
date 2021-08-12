const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,  
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});


const user = mongoose.model("user", userSchema);
module.exports = user;
