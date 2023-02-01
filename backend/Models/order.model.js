const mongoose = require("mongoose");
// user schema------


const orderSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  sub_total: { type: Number, required: true },
  phone_number: { type: Number, required: true },
},{timestamps:true});

const orderModel = mongoose.model("order", orderSchema);

module.exports = {
  orderModel,
};
