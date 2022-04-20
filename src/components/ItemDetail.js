import React, { useState } from "react";

import { ItemCount } from './ItemCount';
 


export const ItemDetail = ({producto}) => {

    const [agregar, setAgregar] = useState(false);

    const onAdd = (contador) => {
      console.log(`Se agregaran ${contador} productos al cart`);
      setAgregar(true);
    };


    if(!producto){
      return 'No hay nada'
    }

        return(

          <div style={styles}>
            <img src={producto.img} alt={producto.title} />
            <h1>{producto.title}</h1>
            <span style={detailStyles}>{producto.price}</span>
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
        
const styles = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "top",
  marginLeft: 250,
  marginRight: 250,
  marginTop: 50,
  marginBottom: 100,          
  backgroundColor: "white", 
};

const detailStyles = {
  color: "black",
  display: "flex",
  flexDirection: "row",
}
       
        
  
 