import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState ,useReducer} from 'react'
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react';
import { Authentication } from '../context/Authentication';

import "../CSS/Login.css"
export default function Login() {
  const {LogIn,Logout,state,dispach,reducer}=useContext(Authentication)
const[name,setName]=useState("")
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")
// const [logedin,setLogedin]=useState(false)

const navigate=useNavigate()

function validation(){
    if (name && password && email.includes("@")){
        return true
    }
    return false
}
    function handelsubmit(e){
      e.preventDefault()
      
      
      //  setLogedin(true)
      dispach({type:"SET-DATA",payload:{  userName: name,
            userPassword: password,
            userEmail: email,
            logedin: null}})
       
        dispach({type:"LOGIN",payload:{  userName: name,
            userPassword: password,
            userEmail: email,
            logedin: true}})
    
    
      
           setName("");
           setPassword("");
           setEmail("");
           
           
           
           
          }
          if (state.logedin){

            navigate("/")
          }
          
          console.log(state)

  return (
   

   
        <form className='login-form'>
            <h2>Login</h2>
             <Form>
            <Form.Label>userName</Form.Label>
          <Form.Control placeholder="user name"type='text' onChange={(e)=>{setName(e.target.value)}} value={name} required />
        
       
        </Form>
            {/* <label  htmlFor="user-name">User Name:</label>
            <input  placeholder='please enter your name' name="user-name" type='text' onChange={(e)=>{setName(e.target.value)}} value={name} required/> */}
            {/* <label htmlFor="user-password">Password:</label> */}
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder='please enter your password'
        value={password} onChange={(e)=>{setPassword(e.target.value)}}
      />
      <Form.Text id="passwordHelpBlock" muted className='pb-3'>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
            {/* <input  placeholder='please enter your password' name="user-password" type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/> */}
            {/* <label htmlFor="user-email">Email:</label> */}
         <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} required/>
      </Form.Group>
      </Form>
            {/* <input  placeholder='please enter your email....user@example.com' name="user-email" type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} required/> */}
            {email.includes("@")?"":
        
        
        
        <Alert key='warning' variant='warning'>
          the email address doesn't have @
        </Alert>
            }
            <button type='submit' onClick={handelsubmit } disabled={!validation()} >Login</button>
        </form>
    
      
   
  )
}
