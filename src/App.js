import React from "react";
import { NavbarComp } from "./components/NavbarComp";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from "./containers/ItemListContainer"


const App = () => {
  return(
    <div className="App-header">
      <NavbarComp  />
      <ItemListContainer greeting = "Bienvenido a mi ecommerce"/>
    </div>  
  );
};

export default App; 
