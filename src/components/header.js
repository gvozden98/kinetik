import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../utils/kineti_logo.png";
import styled from "styled-components";

const ImgLogo = styled.img`
  height: 60px;
  width: 100px;
`;

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#f0f0f0" }} expand="lg">
      <ImgLogo src={logo} alt="logo" />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
