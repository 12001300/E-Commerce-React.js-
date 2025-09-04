import React from 'react'
import { useContext,useEffect } from 'react'
import { AddedItems } from '../context/AddedToCart'
import { Authentication } from '../context/Authentication'

import "../CSS/Cart.css"
export default function Cart() {
const {cart,dispach}=useContext(AddedItems) 
const {state}=useContext(Authentication) 

const  amount=cart.map(item=>item.quantity).reduce((total,curentVal)=>{return(total+=curentVal)},0)
useEffect(()=>{if (state.logedin!=true){dispach({type:"CLEAR-CART"})}},[state.logedin])
  return (
    <div style={{position:"relative"}}>
      {amount>=1? <><i className="bi bi-chat-square-fill collecter"></i><span className='collecter-amount'>{amount}</span></>:""}
     
      <i className={`bi bi-cart-plus unhovered`}></i>
      
      
    </div>
  )
}
