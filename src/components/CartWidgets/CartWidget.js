import React from "react";
import { ShoppingCart } from "@mui/icons-material";



const style = {
    container: {
        color: "grey",
        width: "10px", 
        marginTop: "20px",
    }
}

export const CartWidget = () => {
    return (
        <div style={style.container}>
            <ShoppingCart />
        </div>    
    ) 
}
