import React from "react";
import { Link } from "react-router-dom";
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
    <>
      <Navbar
        className={"font-link"}
        style={{ backgroundColor: "#f0f0f0" }}
        expand="lg">
        <Link to="/library">
          <ImgLogo src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/library">Library</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
