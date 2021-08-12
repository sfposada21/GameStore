const User = require("../models/user");
const Producto = require("../models/producto");
const Venta = require("../models/venta");

const registerVenta = async (req, res) => {
  if (!req.body.user || !req.body.producto || !req.body.precio)
    return res.status(400).send(" data incomplete");


  let producto = await Producto.findOne({ name: req.body.producto });
  if (!producto) return res.status(400).send(" Failed: No reole was assigned");

  let user = await User.findOne({ name: req.body.user });
  if (!user) return res.status(400).send(" Failed: No reole was assigned");


  let venta = new Venta({
  
    producto: req.body.producto,
    user: req.body.user,
    productoId: producto._id,
    userId: user._id,
    precio: req.body.precio,

  });

  let result = await venta.save();
  if (!result) return res.status(400).send("Failed to register User");
  return res.status(200).send({ venta });


};

const listVenta = async (req, res) => {
    const venta = await Venta.find();
    if (!venta || stock.length === 0) return res.status(400).send("No venta");
    return res.status(200).send({ venta });
  };


module.exports = {registerVenta, listVenta} 