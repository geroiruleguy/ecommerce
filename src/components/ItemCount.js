import { display } from "@mui/system";
import React, { useState } from "react";




export const ItemCount = ({stock,initial,onAdd})=>{

    const [contador, setContador]= useState(initial)
            
        const handlerClickAdd = () => {
                if(contador < stock) 
                setContador (contador+1);
                };
            
            const handlerClickSub = () => {
                if(contador > initial)
                setContador (contador -1);
                }
    
            const reset = () => {
                setContador(0);
            }

            const handlerCart = () =>{
                onAdd(contador);
            }
    
          
        
        return(
            <>
                 <h2>{contador}</h2>
                 <button className="contador" onClick = {handlerClickAdd}>+</button>
                 <button className="contador" onClick = {handlerClickSub}>-</button>
                 <button className="contador" onClick = {reset}>Reset</button>
             </>
        )

    
        };