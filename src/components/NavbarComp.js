import React from "react";
import NavbarStyle from "./NavbarStyle.css";
import {Navbar, Container, Nav} from "react-bootstrap" 
import { CartWidget } from "./CartWidgets/CartWidget";
import logo from "./imgs/logo.png";
import {NavLink, Link} from "react-router-dom";


export const NavbarComp = () => {

  const categories = [
    { name: "Home", route: "categories/home", id: 1},
    { name: "Productos", route: "categories/productos", id: 2},
    { name: "Nosotros", route: "categories/nosotros", id: 3},
  ]


    return (
        <div>
          <NavLink to="">
            <img className="logo" src={logo} alt="logo" />
            
          </NavLink>
        
        <Navbar variant="light">
          <Container>
            <Navbar.Brand to="home"></Navbar.Brand>
              <Nav className="me-auto">
                  <NavLink to= "#home">Home</NavLink>
                  <NavLink to="#category/producto1">Productos</NavLink>
                  <NavLink to="#nosotros">Nosotros</NavLink>
              </Nav>
          </Container>
        </Navbar>
        <NavLink to="/cart"><CartWidget /></NavLink>
        </div>
    );
};


