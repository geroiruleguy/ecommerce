import React, {useState, useEffect} from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { ItemDetail } from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { CircularProgress } from '@mui/material';
 
 
 
 
export const ItemDetailContainer = () => {
   
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
 
 
    const {id} = useParams();
 
    useEffect(() => {
 
        const productsCollection = collection(db, "productos");
        const refDoc =  doc(productsCollection, id)
        getDoc(refDoc)
        .then((result) => {
            const prod = {
                id,
                ...result.data()
            }
            setProducto(prod);
            setLoading(!loading);
        })      
        .catch((error) => {
            console.error("error: ", error);
          });
      }, [id]);
 
 
   
 
 
    return(
        <div>
            {loading ?  
            (<span> <CircularProgress /> </span>)
            : <ItemDetail producto={ producto } />}
        </div>
    );
   
};
