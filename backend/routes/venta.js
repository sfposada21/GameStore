const express = require("express");
const router = express.Router(); 
const VentaController = require ("../controllers/venta")

// GET POST PUT DELETE
// gttp://localhost:3001/api/role/get

router.post("/registerVenta", VentaController.registerVenta);
router.get("/listVenta", VentaController.listVenta);

module.exports = router;
