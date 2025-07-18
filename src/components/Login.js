import React from 'react'
import { useState } from 'react'
import "../CSS/Login.css"
export default function Login() {
const[name,setName]=useState("")
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")


    function handelsubmit(e){
        e.preventDefault()
       const userInfo={userName:name,userPassword:password,userEmail:email}
       localStorage.setItem("userInfo",JSON.stringify(userInfo))
           setName("") 
           setPassword("") 
           setEmail("") 

    }
  return (
   

   
        <form className='login-form'>
            <h2>Login</h2>
            <label  htmlFor="user-name">User Name:</label>
            <input  placeholder='please enter your name' name="user-name" type='text'required onChange={(e)=>{setName(e.target.value)}} value={name}/>
            <label htmlFor="user-password">Password:</label>
            <input  placeholder='please enter your password' name="user-password" type='password'required value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <label htmlFor="user-email">Email:</label>
            <input  placeholder='please enter your email' name="user-email" type="email"required value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
            <button type='submit' onClick={handelsubmit}>Login</button>
        </form>
    
      
   
  )
}
