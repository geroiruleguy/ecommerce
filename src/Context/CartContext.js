import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

export const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartTotals, setCartTotals] = useState(0)

  
    const agregarProducto = (producto, quantity) => {
       const productoNuevo = {
         ...producto,
         quantity
       };

    if(IsinCart(producto.id)){
        const buscarProducto = cart.find(producto => producto.id === productoNuevo.id);
        const index = cart.indexOf(buscarProducto);
        const aux = [...cart];
        aux[index].quantity += quantity;
        setCart(aux);
        } else{
        setCart([...cart,productoNuevo])
        }
    };

    const eliminarProducto = (id) => {
      setCart(cart.filter(producto => producto.id == id))
      };
      
      const IsinCart = (id) => {
        const findItem = cart.find(producto =>producto.id === id)
        if (findItem !== undefined){
            return true
        }
        else{   
            return false}
    }

    const cantidadEnCart = () => {
        
        const cantidad = 0
        const sumaPrecioCantidad = 0
        
        cart.forEach(producto => {
            cantidad = cantidad + producto.quantity;
            sumaPrecioCantidad = sumaPrecioCantidad + (producto.cantidad * producto.precio)
        });
        setCartTotals ({cantidad: cantidad, precio: sumaPrecioCantidad})
        return cartTotals
    };

    const getPrecioTotalCarrito = () =>{
      let precioTotal = 0;
      for(let i = 0; i < cart.length; i++){
          precioTotal += (cart[i].precio * cart[i].cantidad)
      }
      return precioTotal;
  }
    
      const clearCart = () => {
        setCart([]);
      }
    
      const ContextValue = {
        cart,
        cartTotals,
        agregarProducto,
        eliminarProducto,
        IsinCart,
        cantidadEnCart,
        getPrecioTotalCarrito,
        clearCart
      }
    
      return (
        <Provider value={ContextValue}>
          {children}
        </Provider>
      );



};    
      
