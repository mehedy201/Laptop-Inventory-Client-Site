import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/new-white-logo.png";
import "./Header.css";

const Header = () => {
  return (
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Container>
          <img as={Link} to="/" src={logo} alt="Mehedi" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="add">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="manage-item">
                Manage Item
              </Nav.Link>
              <Nav.Link as={Link} to="my-item">
                My Item
              </Nav.Link>
              <Nav.Link as={Link} to="singIn">
                Sing In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
