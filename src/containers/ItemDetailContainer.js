import React, {useState, useEffect} from "react";
import { ItemDetail } from "../components/ItemDetail";
import { ListaProducto } from "../Productos/listaProducto";



const promise = new Promise ((res, rej) => {
    setTimeout(() => {
        res(ListaProducto);
    }, (2000));
});

export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([]);
  
    useEffect(() => {
        promise
          .then((producto) => {
            setProducto(producto);
          })
          .catch((error) => {
            console.error("error: ", error);
          });
      }, []);
  

    return(
        <div> 
            <ItemDetail producto={ producto } />
        </div>
    );
   
};