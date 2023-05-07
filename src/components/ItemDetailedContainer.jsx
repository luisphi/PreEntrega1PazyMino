import React, { useEffect, useState } from 'react';
import ItemDetailed from './ItemDetailed';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailedContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const muebleRef = doc(db, "muebles", `${id}`)
    getDoc(muebleRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      }
      else {
        console.log("asdasd")
      };
    });
  }, []);

  console.log("asdasd");
  console.log(producto)

  return (
    <ItemDetailed muebles={producto} id={id} />
  );
};

export default ItemDetailedContainer;