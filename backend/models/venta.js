const mongoose = require("mongoose");
const moment = require("moment");

const ventaSchema = new mongoose.Schema({
  
  producto: String,
  user: String,
  productoId: { type: mongoose.Schema.ObjectId, ref: "producto" },
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  precio: Number,
  date: { type: Date, default: Date.now },
});


const venta = mongoose.model("venta", ventaSchema);
module.exports = venta;
