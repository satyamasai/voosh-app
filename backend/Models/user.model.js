const mongoose = require("mongoose");
// user schema------


const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
