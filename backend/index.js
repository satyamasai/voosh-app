const express = require("express");
const {connection} = require(".//Config/db");
const app = express();
const {userController}= require("./Routes/user.route")
const cors=require("cors");
const { orderController } = require("./Routes/order.route");
const { Authentication } = require("./Middlewares/Authentication");
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("welcome to the app");
});
app.use("/", userController);
app.use("/", orderController);

app.listen(8001, async () => {
  try{
     await connection;
    console.log("Database connected..");
    console.log("Listening on PORT 8001");
  }catch (err) {
    console.log("Database connection failed..");
    console.log(err);
  }
});
