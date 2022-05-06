import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../Images/new-white-logo.png'
import './Header.css'

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="nav-bar">
      <Container>
        <img as={Link} to="/" src={logo} alt="Mehedi" />
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="home">Home</Nav.Link>
          <Nav.Link as={Link} to="blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="add">Add Item</Nav.Link>
          <Nav.Link as={Link} to="singIn">Sing In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
