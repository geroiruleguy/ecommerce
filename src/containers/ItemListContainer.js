import React from "react";
import {ItemCount} from "../components/ItemCount";
import "./ItemListContainer.css"
import { height } from "@mui/system";
import producto1 from "../components/imgs/Producto1.1.jpeg";
import producto2 from "../components/imgs/Producto2.jpeg";
import producto3 from "../components/imgs/Producto3.1.jpeg";
import producto4 from "../components/imgs/Producto4.jpeg";
import producto5 from "../components/imgs/Producto5.jpeg";
import producto6 from "../components/imgs/Producto6.jpeg";
import producto7 from "../components/imgs/Producto7.jpeg";
import producto8 from "../components/imgs/Producto8.jpeg";
import producto9 from "../components/imgs/Producto9.jpeg";
import producto10 from "../components/imgs/Producto10.jpeg";


export const ItemListContainer = () => {
    return(
        <div className="counter"> 
        <h5>Producto 1</h5>
        <ItemCount stock={5} inicial={1} />
        </div>
    )
   

}