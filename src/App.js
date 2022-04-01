import React from "react";
import { NavbarComp } from "./components/NavbarComp";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from "./containers/ItemListContainer"



const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const App = () => {
  return(
    <div className="App-header" style = {styles}>
      <NavbarComp  />
      <ItemListContainer />
      
      
    </div>  
  );
};

export default App; 
