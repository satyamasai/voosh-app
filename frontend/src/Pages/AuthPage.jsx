import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {
//   alert("Login first")
const navigate = useNavigate()
useEffect(()=>{
alert("Login first")
navigate("/")
},[])

  return (
    <div style={{
        
    }}>Log in first</div>
  )
}
