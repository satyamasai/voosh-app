import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = e.target[0].value;
    const password = e.target[1].value;

    const payload = {
      phone,
      password,
    };
    console.log(payload);

    return fetch("https://voosh-backend-ynzp.onrender.com/login-user", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res,"REs")
        const voosh_token = res.document.token;
        localStorage.setItem("voosh_token", voosh_token);

        alert("log in succesfull");
        navigate("/add-order");
      })
      .catch((err) => {
        console.log(err);
        alert("Password incorrect..");
      });
  };

  return (
    <div className="loginform">
    LOGIN PAGE
      <form onSubmit={handleSubmit}>
        <label>
          Phone:
          <input type="phone" name="phone" placeholder="Enter Mobile" />
        </label>
<br />
<br />
        <label>
          Password:
          <input type="password" name="password" placeholder="Enter password" />
        </label>
<br />
<br />
        <input className="login_button" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
