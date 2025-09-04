import React, { useEffect } from 'react'
import "../CSS/productCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsInfo  from '../data/Products'
import { useSearch } from '../context/SearchContext';
import { useContext } from 'react';
import { Authentication } from '../context/Authentication';
import { useNavigate } from 'react-router-dom';
import { AddedItems } from '../context/AddedToCart';
export default function ProductCard({products}) {
//   const products= localStorage.getItem("searchValue") && localStorage.getItem("searchValue")!= " "? ProductsInfo.map(item=>item).filter(item=>item.title== localStorage.getItem("searchValue")):ProductsInfo;
//  console.log(products)
//  console.log(ProductsInfo.map(item=>item).filter(item=> item.title==localStorage.getItem("searchValue")))
const {state}=useContext(Authentication)
const {cart,dispach}=useContext(AddedItems)
const navigate=useNavigate()
const isAuthenticated=(item)=>{
  if (state.logedin !=true){
    navigate("/login")
    
  }else{
    dispach({type:"ADD-ITEM",payload:item})
    
  }
}
useEffect(()=>console.log(cart),[cart])
return (
  <Container>

    <div className='productCard ' >
    
        {products.map(item=>{
          return(  <Col  lg={3}  className='m-3' >
                <Card key={item.id}   >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item. decription}
        </Card.Text>
        <Card.Subtitle variant="primary">{item.price}</Card.Subtitle>
        <Button variant="primary" className='m-2'onClick={()=>isAuthenticated(item)}>Add to cart</Button>
        <Link to={`/productdetails/${item.id}`}><Button variant="primary" > more details</Button>  </Link>
      </Card.Body>
    </Card>
            </Col>
        
            )
        })}
        
        
      
    </div>
        </Container>
  )
}
