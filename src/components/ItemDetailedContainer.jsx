import React, { useEffect, useState } from 'react';
import ItemDetailed from './ItemDetailed';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailedContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const muebleRef = doc(db, "licores", `${id}`)
    getDoc(muebleRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      }
      else {
        console.log("NADA")
      };
    });
  }, []);

  return (
    <ItemDetailed licores={producto} id={id} />
  );
};

export default ItemDetailedContainer;