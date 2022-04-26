import React, {useState, useEffect} from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { ItemDetail } from "../components/ItemDetail";
import { ListaProductos } from "../Productos/ListaProductos";
import { useParams } from "react-router-dom"; 
import { db } from "../firebase/firebase";



const promise = new Promise ((res, rej) => {
    setTimeout(() => {
        res(ListaProductos);
    }, (2000));
});

export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
  

    const {id} = useParams();

    useEffect(() => {

        const productsCollection = collection(db, "productos");
        const refDoc =  doc(productsCollection, id)
        getDoc(refDoc)
        .then((result) => {
            setProducto(result.data());
        })




        promise.then((prod) => {
            if(id) {
                const filtrarProducto = prod.find(producto => producto.id == id );
                setProducto(filtrarProducto);
                setLoading(false);
            }
        })
        
        .catch((error) => {
            console.error("error: ", error);
          });
      }, [id]);
  

    if(loading){
        return <h2>Cargando!</h2>
    }
  

    return(
        <div> 
            <ItemDetail producto={ producto } />
        </div>
    );
   
};