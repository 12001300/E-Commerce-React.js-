import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import "../CSS/navbar.css"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { useContext,createContext } from 'react';
import Home from '../Pages/Home';
import { useSearch } from '../context/SearchContext';


// let parseduserinfo=JSON.parse(localStorage.getItem("userInfo","logedin"));
// parseduserinfo.logedin=false
// console.log(parseduserinfo)


export default function Navbarr() {
//   console.log(JSON.parse(localStorage.getItem("userInfo")).
// logedin)
  
  const {searchTerm,setSearchTerm}=useSearch()


  return (
    
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand ><Link to="/" className="linkstyle">Shopping</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                  Shopping
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link ><Link  className="linkstyle"to="/">Home</Link></Nav.Link>
                  <Nav.Link ><Link className="linkstyle" to="/profile">profile</Link></Nav.Link>
                  <Nav.Link ><Link  className="linkstyle"to="/login">log in</Link></Nav.Link>
                
                  
                  {/* <NavDropdown
                    title=""
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e)=>{
                      setSearchTerm(e.target.value)
                    }}
                  />

                  <Button variant="outline-success" onClick={e=>e.preventDefault()}>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    
  )
}
