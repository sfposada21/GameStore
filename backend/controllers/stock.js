const Stock = require("../models/stock");
const Producto = require("../models/producto");

const registerStock = async (req, res) => {
  if (!req.body.name || !req.body.cantidad)
    return res.status(401).send("process failed: Incomplete data");

  const existingStock = await Stock.findOne({ name: req.body.name });
  if (existingStock)
    return res.status(401).send("Process failed: Role already exist");

  let producto = await Producto.findOne({ name: req.body.name });
  if (!producto) return res.status(400).send(" Failed: No product was assigned");


  const stock = new Stock({
    name: req.body.name,
    productoId : producto._id,
    cantidad : req.body.cantidad,
  });

  const result = await stock.save();
  if (!result) return res.status(400).send("Failed to register stock");
  return res.status(200).send({ stock });
};

const listStock = async (req, res) => {
  const stock = await Stock.find();
  if (!stock || stock.length === 0) return res.status(400).send("No stock");
  return res.status(200).send({ stock });
};

module.exports = { registerStock, listStock };
