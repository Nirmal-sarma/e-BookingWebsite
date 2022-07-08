import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <Navbar className="NavBar" variant="light">
        <Container className="NavBarContainer">
          <Link style={{ textDecoration: 'none' }} className="Logo" to="/">
            LetsGo
          </Link>
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: 'none' }}
              className="Page"
              to="/Flight"
            >
              <div class="Page">Flight</div>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              className="Page"
              to="/Train"
            >
              <div class="Page">Train</div>
            </Link>
            <Link style={{ textDecoration: 'none' }} className="Page" to="/Bus">
              <div class="Page">Bus</div>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              className="Page"
              to="/Hotel"
            >
              <div class="Page">Hotels</div>
            </Link>
          </Nav>
          <Nav.Link className="signIn" to="#Signin">
            SignIn
          </Nav.Link>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
