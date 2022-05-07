import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Images/new-white-logo.png";
import "./Header.css";

const Header = () => {
    // Get Data From Firebase
    const [user] = useAuthState(auth)
    // Navigate User
    const navigate = useNavigate()

    // Handle Log In Button
    const handleLoginButton = () => {
        navigate('/singIn')
    }
    // Handle Sing Out Button
    const handleSingOutButton = () => {
        signOut(auth)
    }
    

  return (
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Container>
          <img as={Link} to="/" src={logo} alt="Mehedi" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="add">Add Item</Nav.Link>
              <Nav.Link as={Link} to="manage-item">Manage Item</Nav.Link>
              <Nav.Link as={Link} to="my-item">My Item</Nav.Link>
              {
                user ?
                <h6 className='m-auto cursor-pointer' onClick={handleSingOutButton}>Sing Out</h6>
                :
                <h6 className='m-auto cursor-pointer' onClick={handleLoginButton}>Log In</h6>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;
