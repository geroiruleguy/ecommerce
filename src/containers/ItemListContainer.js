import React, {useState, useEffect} from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./ItemListContainer.css"
import { ItemList } from "../components/ItemList";
import { ListaProductos } from "../Productos/ListaProductos";
import { useParams } from "react-router-dom"; 
import { db } from "../firebase/firebase";



    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(ListaProductos);
            console.log(ListaProductos);
        }, (2000));
    });


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([]);

    const {categoryID} = useParams();

    const [inexistente, setInexistente] = useState(false);
    
    useEffect(() => {

        const productsCollection = collection(db, "productos")
        let q

        if(categoryID){
            q = query(productsCollection, where("category", "==", categoryID) );
            setProductos()

        } else{
            q = productsCollection;

        }
        
        getDocs(q)
        .then((result)=> {
         const docs = result.docs;
         
         if(docs.length<0){
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
         }
         
        })


        /* promise
        .then((productos) => {
                if(categoryID) {
                    const productosFiltrados = productos.filter(p => p.category === categoryID)
                    setProductos(productosFiltrados)
                    console.log(productosFiltrados);
                } else  {
                setProductos(productos)
                } 
            })
        
        .catch((error) => {
            console.error("error: ", error);
          });
        */ },   [categoryID]);
  
    if (productos.length < 1) {
        return <h2>Cargando</h2>
    } 


    return(
        <div> 
            {inexistente ? <h3>No se encontraron productos en esta categoría.</h3>
            : <ItemList productos={ productos } />}
        </div>
    );
   
};