import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Signup = () => {

const navigate= useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const payload={
        name:e.target[0].value,
        phone:e.target[1].value,
        password:e.target[2].value
    }
    console.log(payload)
    
    return fetch('https://voosh-backend-ynzp.onrender.com/add-user', {
        
      method: 'POST',
      
      headers: {
        
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    }).then((res)=>res.json())
    .then((res)=>{console.log(res)
    
      alert("sign up succesfull")
      navigate("/login-user")
    })
    
    
    
    
    }
    
    
    
      return (
        <div className='form_div loginform'>
        Sign-up page
        <form onSubmit={handleSubmit} >
        <label>
          Name:
          <input type="text"  placeholder='Enter Name' />
        </label> 
        <br />
        <label>
        Phone
        <input type="number" name="Phone"  placeholder='Enter Phone'/>
      </label>
      <br />
    
        <label>
        Password:
        <input type="text" name="password" placeholder='Enter password'/>
      </label>
      <br />
    
    
        <input className='login_button' type="submit" value="Signup" />
      </form>
         </div>
      )
}

export default Signup