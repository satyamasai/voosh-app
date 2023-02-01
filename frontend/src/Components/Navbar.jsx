import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
const navigate= useNavigate()

const handleLogout=()=>{

  console.log("logout")
  localStorage.setItem("voosh_token","")
  navigate("/")
}

  return (
    <div className='navbar'>
    <Button colorScheme={"blue"}> <a href="/">Home</a></Button>
    <Button colorScheme={"blue"}> <a href="/login-user">Login</a></Button>
    <Button colorScheme={"blue"}> <a href="/add-user">Signup</a></Button>
    <Button colorScheme={"yellow"} > <a href="/add-order">Addorder</a></Button>
    <Button colorScheme={"yellow"}> <a href="/get-order">Getorder</a></Button>
    <Button onClick={handleLogout} colorScheme={"red"}>Logout</Button>
  
    
    </div>
  )
}

export default Navbar