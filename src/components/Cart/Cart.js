import { useContext } from 'react';
import { contexto } from '../Context/CartContext';

export const Cart = () => {
    const {cart, eliminarProducto, clearCart} = useContext(contexto)
    
    const emptyCart =()=>{
        clearCart()
    }
    const deleteItem=(e)=>{
        eliminarProducto(e.target.id)
        }
    return(<>
        {cart.map((producto,p) =>{ 
            return (<div key={producto.id}> <p>{producto.cantidad}{producto.producto}  {producto.precio} Subtotal {producto.cantidad*producto.precio}
            </p><button id={producto.id} onClick={deleteItem}>Borrar</button> </div> )})
        }
        <h2>Total: <span>${sumaCarrito.precio}</span></h2>
    <button onClick={emptyCart}>Vaciar carrito</button>

    </>)

};
