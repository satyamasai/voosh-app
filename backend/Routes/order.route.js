const { Router } = require("express");
const orderController = Router();



const { Authentication } = require("../Middlewares/Authentication");
const { orderModel } = require("../Models/order.model");

orderController.post("/add-order",Authentication,async(req, res) => {
    // console.log(user_id,sub_total,phone,"asasas")
    // res.send({"msg":[user_id,sub_total,phone_number]})
    
    const { user_id, sub_total, phone_number } = req.body;
    try {
        
        const new_order = new orderModel({
            user_id: user_id,
            sub_total: sub_total,
            phone_number:phone_number
        });
        await new_order.save();
        console.log(req.body,"reqbody")
    res.send({ msg: "Order Added ", status: "success" });
  } catch (err) {
    res.send(err);
  }
});



// get order route-------------
orderController.get("/get-order",Authentication,async(req, res) => {
    const {user_id} = req.body;
    const orders = await orderModel.find({user_id:user_id})
  console.log(orders)
// const {name,email} = user
// console.log()
res.send({orders})
     
});





module.exports = {
  orderController,
};
