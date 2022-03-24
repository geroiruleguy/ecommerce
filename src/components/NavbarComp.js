import React from "react";
import NavbarStyle from "./NavbarStyle.css";
import logo from "./imgs/logo-ejemplo.jpg";
import {Navbar, Container, Nav} from "react-bootstrap" 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const NavbarComp = () => {
    return (
        <div>
        <img src={logo} alt="logo"/>    
        <h1>REVIVAL </h1>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Productos</Nav.Link>
                  <Nav.Link href="#pricing">Nosotros</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        <ShoppingCartIcon />
        </div>
    );
};


