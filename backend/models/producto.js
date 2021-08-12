const mongoose = require("mongoose"); 

const productoSchema = new mongoose.Schema({
name : String,
precio : Number,
codigo : Number,
description : String,
date: { type: Date, default: Date.now},
dbStatus: Boolean,
});

const producto = mongoose.model("producto",productoSchema );
module.exports = producto;