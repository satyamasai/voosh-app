import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Routes, Route } from "react-router-dom";
import AddOrders from './AddOrders';
import GetOrders from './GetOrders';
import Home from './Home';
import { AuthPage } from './AuthPage';

const AllRoutes = () => {

  const auth= localStorage.getItem("voosh_token") || false;
  console.log(auth,"auth",auth.length)
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login-user" element={<Login />}></Route>
   
    <Route path="/add-user" element={<Signup />}></Route>
    <Route path="/add-order" element={auth?<AddOrders />:<AuthPage />}></Route>
    <Route path="/get-order" element={auth?<GetOrders />:<AuthPage/>}></Route>
    </Routes>
    )
}

export default AllRoutes