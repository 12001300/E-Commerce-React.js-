import React from 'react'
import "../CSS/Cart.css"
export default function Cart() {
  return (
    <div style={{position:"relative"}}>
      <i className="bi bi-chat-square-fill collecter"></i><span className='collecter-amount'>1</span>
      <i className={`bi bi-cart-plus unhovered`}></i>
      
      
    </div>
  )
}
