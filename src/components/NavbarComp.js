import React from "react";
import "./NavbarStyle.css";
import {Navbar, Container, Nav} from "react-bootstrap" 
import { CartWidget } from "./CartWidgets/CartWidget";
import logo from "./Logo/logo.png";
import { NavLink } from "react-router-dom";


const categories = [
  { name: "Barra de Cereal", route: "categories/barraCereal", id: "barraCereal"},
  { name: "Barra de Arroz", route: "categories/barraArroz", id: "barraArroz" },
  { name: "Snacks", route: "categories/snacks", id: "snacks"},
  { name: "Mix Frutos Secos", route: "categories/mixed", id: "mixed"},
]


export const NavbarComp = () => {

    return (
        <div>
          <NavLink to="/">
            <img className="logo" src={logo} alt="logo" />
            
          </NavLink>
        
        <Navbar variant="light">
          <Container>
            <Navbar.Brand to="home"></Navbar.Brand>
              <Nav className="me-auto">
                {categories.map((element) => {
                  return(
                  <NavLink key={element.id}  to={element.route} >{element.name}</NavLink>
                  );
                })};
                  
              </Nav>
          </Container>
        </Navbar>
        <NavLink to="/cart"><CartWidget /></NavLink>
        </div>
    );
};


