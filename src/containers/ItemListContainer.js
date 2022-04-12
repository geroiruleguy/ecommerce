import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import { ItemList } from "../components/ItemList";
import { ListaProductos } from "../Productos/ListaProductos";
import { useParams } from "react-router-dom"; 



    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(ListaProductos);
            console.log(ListaProductos);
        }, (2000));
    });


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

    const {categoryID} = useParams();
    
    useEffect(() => {
        promise
        .then((productos) => {
                if(categoryID) {
                    const productosFiltrados = productos.find(p => p.category === categoryID)
                    setProductos(productosFiltrados)
                    console.log(productosFiltrados);
                } else  {
                setProductos(productos)
                } 
            })
        
        .catch((error) => {
            console.error("error: ", error);
          });
      }, [categoryID]);
  

    return(
        <div> 
            <ItemList productos={ productos } />
        </div>
    );
   
};