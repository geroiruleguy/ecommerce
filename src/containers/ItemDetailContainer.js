import React, {useState, useEffect} from "react";
import { ItemDetail } from "../components/ItemDetail";
import { ListaProducto } from "../Productos/listaProducto";
import { useParams } from "react-router-dom"; 



const promise = new Promise ((res, rej) => {
    setTimeout(() => {
        res(ListaProducto);
        console.log(ListaProducto);
    }, (2000));
});

export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState([]);
  

    const {id} = useParams();

    useEffect(() => {
        promise.then((prod) => {

                if(id) {
                    const filtrarProducto = prod.filter(producto => producto.id === id )
                    console.log(filtrarProducto[0]);
                
                } else  {
                setProducto(producto)
                } 
            })
        
        .catch((error) => {
            console.error("error: ", error);
          });
      }, [id]);
  

    return(
        <div> 
            <ItemDetail producto={ producto } />
        </div>
    );
   
};