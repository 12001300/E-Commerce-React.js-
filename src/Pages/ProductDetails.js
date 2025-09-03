import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsInfo from "../data/Products"
import { useParams,useNavigate } from 'react-router-dom'
export default function ProductDetails() {
  const navigate =useNavigate();
  const {id}=useParams()
  const nID =Number(id)

  
  const ITEM=ProductsInfo.filter(productID=>productID.id==nID);
 
  return (
    
    <div>
      {ITEM.map(item=>{return(  <Col  lg={3}  className='m-3' >
                <Card key={item.id}   >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item. decription}
        </Card.Text>
        <Card.Subtitle variant="primary">{item.price}</Card.Subtitle>
        <Button variant="primary" className='m-2'>Add to cart</Button>
        <Button variant="primary" onClick={()=>navigate(-1)}> go back</Button>  
      </Card.Body>
    </Card>
            </Col>
        
            )})}
    </div>
  )
}
