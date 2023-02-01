
import React from "react";
import {  useNavigate } from "react-router-dom";

const AddOrders = () => {
  const navigate= useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone_number = e.target[0].value;
    const sub_total = e.target[1].value;

    const payload = {
      sub_total,
      phone_number
    }
    fetch("https://voosh-backend-ynzp.onrender.com/add-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("voosh_token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(res.msg)
        navigate("/get-order")
      });
  };

  return (
    <div className="loginform">
      
      <form onSubmit={handleSubmit}>
        <br />
        <label>
        Enter Phone Number :
        <input type="Number" placeholder="Enter Phone_number" />
        </label>
        <br />
        <br />
        <label>
        Enter Sub_total :
        <input type="Number" placeholder="Enter Sub_total" />
        </label>
        <br />
<br />
        <input className="login_button" type="submit" value="Add order" />
      </form>
    </div>
  );
};

export default AddOrders;
