import { useContext, useEffect, useState } from 'react';
import { contexto } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {addDoc, collection, serverTimestamp, updateDoc, doc, increment} from "firebase/firestore";
import { Formulario } from '../formularioDeCompra/formCompra';





export const Cart = () => {
    const {cart,  eliminarProducto, getPrecioTotalCarrito, clearCart} = useContext(contexto);
    const ventaCollection = collection(db, "ventas");
    const [idVenta, setIdVenta] = useState('');
    const [carritoVacio, setCarritoVacio] = useState(false);
    const [sinProductos, setSinProductos] = useState(true);
    const [finalizar, setFinalizar] = useState(false);


    useEffect(()=>{
        if(cart.length > 0){
            setCarritoVacio(true);
            setSinProductos(false);
        }
    },[cart]);

    const handleFinalizar = () =>{
               
        setFinalizar(true);
        setCarritoVacio(false);
        setSinProductos(false);
    }

    
    const finalizarCompra = (comprador) => {
        addDoc(ventaCollection, {
            comprador,
            productos: cart,
            date: serverTimestamp(),
            total: getPrecioTotalCarrito
        })
        .then((res)=>{
            setIdVenta(res.id);
        })
        .catch(()=>{
            console.log('error');
        })
        cart.forEach((producto)=>{
            const compraDoc = doc(db, "productos", producto.id);
            updateDoc(compraDoc, {stock: increment(-producto.cantidad)});

        })
        clearCart();
    }


    const emptyCart =()=>{
        clearCart()
    };

   
    

 
    const carritoConProductos = cart.map((producto) =>{ 
            return (
            <li className='detallesDeProductosEnCarrito' style={estilos} key={producto.id}> 
                
                <p>Producto: {producto.producto}</p>
                <p>Cantidad:{producto.cantidad}</p>
                <p>Precio: ${producto.precio}</p> 
                <p>SubTotal: ${producto.cantidad*producto.precio}</p>
                <button  id={producto.id} onClick={(()=>eliminarProducto(producto.id))}>Borrar</button> 
            </li> )})

        
    return (
    <div>    
        {carritoVacio && 
            <>
                <div className='detallesDeProductosEnCarrito'>
                    {carritoConProductos}
                    <p>Precio Total ${getPrecioTotalCarrito()}</p>
                </div>
                  
                <button onClick={emptyCart}>Vaciar Carrito</button>
                <button onClick={handleFinalizar}>Comprar</button>
            </>
        }
        {
            sinProductos &&
            <>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Volver al inicio</Link>
            </>
        }
        {
            finalizar &&
            <>    
                <Formulario finalizarCompra={finalizarCompra} />
                <Link to="/">Volver al inicio</Link>                
            </> 
           
        }
        
    </div>    
    )
    

};


const estilos = {
    color: "black",
    display: "flex",
    flexDirection: "column"
}

