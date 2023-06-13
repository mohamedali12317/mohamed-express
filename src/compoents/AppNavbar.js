import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const AppNavbar = () => {
  const cart = useSelector (state => state.cart);
 return (
  <>
      <Navbar fixed='top' bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">Mohamed Express</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="https://mohamed-ali-hussain.netlify.app/" className="nav-link">Contact</Link>
            <Link to="/cart" className="nav-link">Cart - {cart.length}</Link>
            <Link to="/admmin" className="nav-link">Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
 );
}



export default AppNavbar;
