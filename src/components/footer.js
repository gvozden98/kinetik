import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "#656568" }}>Terms</Nav.Link>
          <Nav.Link style={{ color: "#656568" }}>Privacy</Nav.Link>
          <Nav.Link style={{ color: "#656568" }}>Contact</Nav.Link>
        </Nav>
        <Navbar.Text style={{ color: "#385f6e" }}>Copyright 2021</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;
