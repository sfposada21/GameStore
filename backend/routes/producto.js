const express = require("express");
const router = express.Router(); 
const ProductoController = require ("../controllers/producto")

// GET POST PUT DELETE
// gttp://localhost:3001/api/role/get

router.post("/registerProducto", ProductoController.registerProducto);
router.get("/listProducto", ProductoController.listProducto);

module.exports = router;
