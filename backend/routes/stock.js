const express = require("express");
const router = express.Router(); 
const StockController = require ("../controllers/stock")

// GET POST PUT DELETE
// gttp://localhost:3001/api/role/get

router.post("/registerStock", StockController.registerStock);
router.get("/listStock", StockController.listStock);

module.exports = router;
