import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link  , NavLink} from 'react-router-dom';


const NavbarProduct = () => {
 return (
  <>
     <Navbar fixed='top' className='d-block mt-5' style={{width : '184px', height : '1500px'}} bg="light" expand="lg">
      <Container className='d-flex flex-column'>
        <Link to="/" className="navbar-brand mt-4">product</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-column" >
            <NavLink to="/women's" className="nav-link">women</NavLink>
            <NavLink to="/man" className="nav-link">Men</NavLink>
            <NavLink to="/electronics" className="nav-link">Electronics</NavLink>
            <NavLink to="/jewelery" className="nav-link">Jewelerys</NavLink>
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
 );
}

export default NavbarProduct;
