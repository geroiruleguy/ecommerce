import React from "react";
import NavbarStyle from "./NavbarStyle.css";
import {Navbar, Container, Nav} from "react-bootstrap" 
import { CartWidget } from "./CartWidgets/CartWidget";
import logo from "./imgs/logo.png";
import {NavLink, Link} from "react-router-dom";


export const NavbarComp = () => {

  const categories = [
    { name: "Home", route: "categories/Home", id: 1},
    { name: "Productos", route: "categories/Productos", id: 2},
    { name: "Nosotros", route: "categories/Nosotros", id: 3},
  ]


    return (
        <div>
          <NavLink to="">
            <img className="logo" src={logo} alt="logo" />
          </NavLink>
        
        <Navbar variant="light">
          <Container>
            <Navbar.Brand to="#home"></Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link to="#home">Home</Nav.Link>
                  <Nav.Link to="#features">Productos</Nav.Link>
                  <Nav.Link to="#pricing">Nosotros</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <NavLink to="/Cart"><CartWidget /></NavLink>
        </div>
    );
};


