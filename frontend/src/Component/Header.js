import React from 'react';
import './Header.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
export default function Header() {
  return (
      <>
      <Navbar className="NavBar"  variant="light">
        <Container className="NavBarContainer">
        <Navbar.Brand className="Logo" href="#home">LetsGo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="Page"  href="#home"><div class="Page">Flight</div></Nav.Link>
          <Nav.Link className="Page" href="#features"><div class="Page">Train</div></Nav.Link>
          <Nav.Link className="Page" href="#pricing"><div class="Page">Bus</div></Nav.Link>
          <Nav.Link className="Page" href="#pricing"><div class="Page">Hotels</div></Nav.Link>

        </Nav>
        <Nav.Link className='signIn' href="#Signin">SignIn</Nav.Link>
        </Container>
      </Navbar>
      <br />
  
    </>
  )
}
