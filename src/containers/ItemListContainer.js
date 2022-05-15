import React, {useState, useEffect} from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./ItemListContainer.css"
import { ItemList } from "../components/ItemList";
import { useParams } from "react-router-dom"; 
import { db } from "../firebase/firebase";
import { CircularProgress } from '@mui/material';






export const ItemListContainer = ({greeting}) => {

    const [bienvenida, setBienvenida] = useState(greeting);
    
    const [productos, setProductos] = useState([]);

    const {categoryID} = useParams();

    const [loading, setLoading] = useState(true);

    const [inexistente, setInexistente] = useState(false);
    
    useEffect(() => {

        const productsCollection = collection(db, "productos");
        let q

        if(categoryID){
            q = query(productsCollection, where("category", "==", categoryID) );
            setBienvenida(categoryID.toUpperCase())

        } else{
            q = productsCollection;
            setBienvenida("Bienvenido")
        }
        
        getDocs(q)
        .then((result)=> {
         const docs = result.docs;
         
         if(docs.length > 0){
            const lista = docs.map(producto => {
            const id = producto.id
            const product = {
                id,
                ...producto.data()
            }
            return product;
            })
            setProductos(lista)
         } else{
            setInexistente(true)
            setBienvenida("Disculpa, se ha producido un error. Ya lo estamos solucionando.")
            }
        })
        .catch(error => {console.log(error)})
         .finally(() => {
             setLoading(false)
         })

    },   [categoryID]);
  
   

    return(
        <div> 
            {loading ? (
                <span> <CircularProgress /> </span>
            ) : inexistente ? <h3>No se encontraron productos en esta categoría.</h3>
            : <ItemList productos={ productos } greeting = {bienvenida} />}
        </div>
    );
   
};