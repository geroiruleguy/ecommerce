import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import { ItemList } from "../components/ItemList";
import { ListaProductos } from "../Productos/ListaProductos";
import { useParams } from "react-router-dom"; 




    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(ListaProductos);
        }, (2000));
    });


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

    const {id} = useParams();
    
  
    useEffect(() => {
        promise
        .then((productos) => {
            if(id){
            //guardar en productos un filter de productos con id
            } else {
            setProductos(productos);
            }  
        })
          .catch((error) => {
            console.error("error: ", error);
          });
      }, [id]);
  

    return(
        <div> 
            <ItemList productos={ productos } />
        </div>
    );
   
};