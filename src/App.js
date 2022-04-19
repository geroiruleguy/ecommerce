import React from "react";
import { NavbarComp } from "./components/NavbarComp";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Error } from "./components/Error/Error";





const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const App = () => {
  return(
    <BrowserRouter>
      <div className="App-header" style = {styles}>
        <NavbarComp  />
        <Routes>  
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:categoryID" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} /> //Esto genera que cuando hago click en ver detalle me lleva a ItemDetail\\ 
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        
      
      </div>  
    </BrowserRouter>  
  );
};

export default App; 
