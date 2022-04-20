import React from "react";
import { NavbarComp } from "./components/NavbarComp";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Error } from "./components/Error/Error";
import { CustomProvider } from "../Context/CartContext";



const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const App = () => {
  return(
    <BrowserRouter>
      <CustomProvider>  
      <div className="App-header" style = {styles}>  
        <NavbarComp  />
        <Routes>  
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categories/:categoryID" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} /> //Esto genera que cuando hago click en ver detalle me lleva a ItemDetail\\ 
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>  
      </CustomProvider>
    </BrowserRouter>  
  );
};

export default App; 
