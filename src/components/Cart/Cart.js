import { display } from '@mui/system';
import { useContext } from 'react';
import { contexto } from '../../Context/CartContext';

export const Cart = () => {
    const {cart, cartTotals, eliminarProducto, clearCart} = useContext(contexto)
    
    const emptyCart =()=>{
        clearCart()
    }
    const deleteItem=(e)=>{
        eliminarProducto(e.target.id)
        }
    return(<>
        {cart.map((producto,p) =>{ 
            return (<div style={estilos} key={producto.id}> <p>Cantidad:{producto.cantidad}{producto.producto} Precio: ${producto.precio} Subtotal: ${producto.cantidad*producto.precio}
            </p><button  id={producto.id} onClick={deleteItem}>Borrar</button> </div> )})
        }
        <h2 style={estilos}>Total: <span>${cartTotals.precio}</span></h2>
    <button onClick={emptyCart}>Vaciar carrito</button>

    </>)

};


const estilos = {
    color: "black",
    display: "flex",
    flexDirection: "column"
}

