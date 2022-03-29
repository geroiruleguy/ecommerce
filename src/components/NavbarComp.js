import React from "react";
import NavbarStyle from "./NavbarStyle.css";
import {Navbar, Container, Nav} from "react-bootstrap" 
import { CartWidget } from "./CartWidgets/CartWidget";


export const NavbarComp = () => {
    return (
        <div>
        <h1>revival </h1>
        <Navbar variant="light">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Productos</Nav.Link>
                  <Nav.Link href="#pricing">Nosotros</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <CartWidget color = "primary" />
        </div>
    );
};


