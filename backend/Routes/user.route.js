const { Router } = require("express");
const userController = Router();
const { userModel } = require("../Models/user.model");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

// user route for add user---------------------------------------------
userController.post("/add-user", async (req, res) => {
  const { name, phone, password } = req.body;
  console.log(name, phone, password);
  const existing_user = await userModel.findOne({ phone });

  if (existing_user) {
    res.send({ msg: "user already exist" });
    return;
  }
  bcrypt.hash(password, 4, async function (err, hash) {
    if (err) {
      res.send({ msg: "signup failed ..please try again.." });
    } else {
      const new_user = new userModel({
        name,
        password: hash,
        phone,
      });

      await new_user.save();
      res.send({ msg: "User added succesfully.." });
    }
  });
});

// route for user login----------------------------------

userController.post("/login-user", async (req, res) => {
  const { phone, password } = req.body;

  const user = await userModel.findOne({ phone });

  if (user) {
    const hashed_password = user.password;

    const user_id = user._id;

    bcrypt.compare(password, hashed_password, function (err, result) {
      if (err) {
        res.send({ msg: "Something went wrong, try again later" });
      }
      if (result) {
        console.log(user);
        const token = jwt.sign({ user_id }, "kittu1516");
        const name = user.name;

        const phone = user.phone;
        const id = user._id;
        const document = {
          name: name,

          phone: phone,
          id: id,
          token: token,
        };
        res.send({ msg: "Login successfull", document: document });
      } else {
        res.send({ msg: "Login failed" });
      }
    });
  } else {
    res.send({
      msg: "User not found ..please login with correct credentials..",
    });
  }
});

module.exports = {
  userController,
};
