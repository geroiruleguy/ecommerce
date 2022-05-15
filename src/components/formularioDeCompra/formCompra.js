import React, { useState } from 'react';
import './formulario.css'
import { Alert } from '@mui/material';


export const Formulario = ({finalizarCompra}) => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });
    
    
    const handlerSubmit = (event) => {
        event.preventDefault();
        finalizarCompra()
    }
    
    const handlerChangeInputs = (target) => {
        setUser({
            ...user,
            [target.name]:target.value
        });
    }
    const final = () => {
        const mje = <Alert severity="success">This is a success alert — check it out!</Alert>
        return mje
    };

   

    

    return (
        <div className='finalizarCompra'>
            <h2> Ingrese tus datos para finalizar la compra </h2>
            <form className='formStyle' onSubmit={handlerSubmit} onChange={({target})=>{handlerChangeInputs(target)}}>
                <div>
                    <label className='labelForm'>Nombre:
                        <input type="text" name="name" value={user.name}  />
                    </label>
                </div>
                <div>
                    <label className='labelForm'>Email:
                        <input type="email" name="email" value={user.email}  />
                    </label>
                </div>
                <div>
                    <label className='labelForm'>Telefono:
                        <input type="number" name="phone" value={user.phone}  />
                    </label>
                </div>    
                <div>
                    <input type="submit" value="Finalzar Compra" onClick={final} />
                </div>
            </form>    
        </div>
    )
};
