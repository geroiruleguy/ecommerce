import React from "react";
import { Item } from "./Item";


const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  };


export const ItemList = ({productos}) => {

  return(
    <div style={styles.container}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
        


    

