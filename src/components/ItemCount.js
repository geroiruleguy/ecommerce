import React, { useState } from "react";
import { Link } from 'react-router-dom';



export const ItemCount = ({ stock, initial, onAdd }) => {
  
  const [count, setCount] = useState(initial);

  const handlerAdd = () => {
    if(count < stock) setCount(count + 1);
  };

  const handlerSubtract = () => {
    if(count > 0) setCount(count - 1);
  };

  const handlerAddToCart = () => {
    if(count > 0) onAdd(count);
  };

  return (
    <div>
      <button onClick={handlerAdd}>+</button>
      <span style = {counterStyles}>{count}</span>
      <button onClick={handlerSubtract}>-</button>
      <Link to='/cart'>
      <button onClick={handlerAddToCart}>Agregar al Carrito</button>
      </Link>
    </div>
  );
};

const counterStyles = {
  color: "black"
}