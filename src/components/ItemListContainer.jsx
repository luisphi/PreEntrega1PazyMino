import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [licores, setLicores] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const licoresCollection = collection(db, "licores");
    getDocs(licoresCollection).then((querySnapshot) => {
      const licores = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLicores(licores)
    });
  }, [])
  const catFilter = licores.filter((mueble) => mueble.category === category);

  return (
    <>
      {category ? <ItemList licores={catFilter} /> : <ItemList licores={licores} />};
    </>
  );
}

export default ItemListContainer
