import React, {useState, useEffect} from "react";
import "./ItemListContainer.css"
import { ItemList } from "../components/ItemList";
import { ListaProductos } from "../Productos/ListaProductos";
import { useParams } from "react-router-dom"; 
import { ProductionQuantityLimitsSharp } from "@mui/icons-material";




    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(ListaProductos);
        }, (2000));
    });


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

   

    const {name} = useParams();
    
    
  
    useEffect(() => {
    

        promise
        .then((productos) => {

                if(name) {
                    setProductos(productos.filter(p=>p.category == name ))
                
                } else  {
                setProductos(productos)
                } 
            })
        
        .catch((error) => {
            console.error("error: ", error);
          });
      }, [name]);
  

    return(
        <div> 
            <ItemList productos={ productos } />
        </div>
    );
   
};