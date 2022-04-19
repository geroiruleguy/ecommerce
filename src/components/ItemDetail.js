import React from "react";








export const ItemDetail = (producto) => {
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
      
     
      
      
        return(

          <div style={styles}>
            <img src={producto.img} alt={producto.title} />
            <h1>{producto.title}</h1>
            <span>${producto.price}</span>
            <p>{producto.description}</p>
        </div>



         
        );
};