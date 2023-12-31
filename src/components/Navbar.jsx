import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const MyNavbar = () => {
  return (
    
    
    
    <Navbar bg="success" data-bs-theme="dark">
      <Container className="nav">
        <Navbar.Brand className="nav"href="#home"><h2>Gau-Gram-Tree</h2></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/book/list">Add details</Nav.Link>
          <Nav.Link href="/show/details">Show Details</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
    

    
    
  );
};

export default MyNavbar;
