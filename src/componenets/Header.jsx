import React from 'react'

//bootstrap navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//link import from react router dom
import { Link } from 'react-router-dom';

function Header() {
  return (
    // bg-dark navbar-dark to make the navbar dark
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-3">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link> */}

 {/* c- here instead of using href we will be using link */}
 {/* c- here we are linking and referring it to the path in router */}
 {/* c- Nav link is removed to avoid errors */}
            <Link to={'/'}>Home</Link> 
            <Link to={'about'}>About</Link>
            <Link to={'profile'}>Profile</Link>
            <Link to={'login'}>Login</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Header