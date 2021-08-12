const Producto = require("../models/producto");

const registerProducto = async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.precio || !req.body.codigo)
    return res.status(401).send("process failed: Incomplete data");

  const existingProducto = await Producto.findOne({ name: req.body.name });
  if (existingProducto)
    return res.status(401).send("Process failed: Product already exist");

  const producto = new Producto({
    name: req.body.name,
    description: req.body.description,
    precio : req.body.precio,
    codigo : req.body.codigo,
    dbStatus: true,
  });

  const result = await producto.save();
  if (!result) return res.status(400).send("Failed to register role");
  return res.status(200).send({ producto });
};

const listProducto = async (req, res) => {
  const producto = await Producto.find();
  if (!producto || producto.length === 0) return res.status(400).send("No producto");
  return res.status(200).send({ producto });
};

module.exports = { registerProducto, listProducto };
