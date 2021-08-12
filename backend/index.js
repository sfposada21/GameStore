const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const Venta = require("./routes/venta");
const Producto = require("./routes/producto");
const Stock = require("./routes/stock");
const User = require("./routes/user");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/venta", Venta);
app.use("/api/producto", Producto);
app.use("/api/stock", Stock);
app.use("/api/user", User);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port : ", process.env.PORT) );

dbConnection();
