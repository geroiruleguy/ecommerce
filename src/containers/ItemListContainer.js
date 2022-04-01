import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import producto1 from "../components/imgs/Producto1.1.jpeg";
import producto2 from "../components/imgs/Producto2.jpeg";
import producto3 from "../components/imgs/Producto3.1.jpeg";
import producto4 from "../components/imgs/Producto4.jpeg";
import producto5 from "../components/imgs/Producto5.jpeg";
import producto6 from "../components/imgs/Producto6.jpeg";
import { ItemList } from "../components/ItemList";



const productos = [
    { id: 1, img: {producto1}, title: "Producto1", price: 1000 },
    { id: 2, img: {producto2}, title: "Producto2", price: 1000 },
    { id: 3, img: {producto3}, title: "Producto3", price: 1000 },
    { id: 4, img: {producto4}, title: "Producto4", price: 1000 },
    { id: 5, img: {producto5}, title: "Producto5", price: 1000 },
    { id: 6, img: {producto6}, title: "Producto6", price: 1000 },
    
];



    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos);
        }, (2000));
    });


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
        promise
          .then((productos) => {
            setProductos(productos);
          })
          .catch((error) => {
            console.error("error: ", error);
          });
      }, []);
  

    return(
        <div> 
            <ItemList productos={ productos } />
        </div>
    );
   
};