import React, { useState, useContext } from "react";
import { ItemCount } from './ItemCount';
import { contexto } from '../Context/CartContext';
import './ItemDetail.css';
 


export const ItemDetail = ({producto}) => {

   
    const { agregarProducto } = useContext(contexto)
    const [agregar, setAgregar] = useState(false)
    const onAdd = (contador) => {
      agregarProducto({cantidad: contador, id: producto.id, producto: producto.title, precio:producto.price})
      setAgregar(true)
    };


    if(!producto){
      return 'No se puede encontrar el producto que buscas'
    }

        return(

          <div className="itemDetailContainer">
            <img className="detailIgm" src={producto.img} alt={producto.title} />
            <h1 style={detailStyles}>{producto.title}</h1>
            <span style={detailStyles}>$ {producto.price}</span> 
            <p style={detailStyles}>Stock: {producto.stock}</p>
            <p style={detailStyles}>{producto.description}</p>
            
            {!agregar ? (
               <ItemCount onAdd = {onAdd} stock = {producto.stock} initial = {1} />
            ) : (
              <h2> Producto no disponible </h2>
            )}
          </div>
        );

};
        


const detailStyles = {
  color: "grey",
 
};
       
        
  
 
