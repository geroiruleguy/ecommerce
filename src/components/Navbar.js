import React from "react";
import "./Navbar.css";
import logo from "../../imgs/logo-ejemplo.jpg";
import { CartWidget } from "./CartWidget";


const Navbar = () => {
    return (
        <>
        <img src={logo} alt="logo"/>    
        <h1>Bienvenido a tu tienda online REVIVAL </h1>
        <nav>
            <a href="#"> Home</a>
            <a href="#"> Home</a>
            <a href="#"> Home</a>
        </nav>
        <CartWidget color = "primary" />
        </>
    );
};

export default Navbar