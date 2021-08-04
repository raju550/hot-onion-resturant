import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarMenu.css";

const NavbarMenu = () => {
  return (
    <Navbar expand="lg" variant="light">
      <Container>
        <Link to="/">
          <img
            className="logo-image"
            src="https://i.ibb.co/pd4bQdH/logo2.png"
            alt=""
          />
        </Link>
        <Nav>
          <Link className="nav-item" to="/login">
            LOGIN
          </Link>
          <Link className="nav-item" to="/signup">
            SIGN UP
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
