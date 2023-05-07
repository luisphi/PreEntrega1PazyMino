import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [muebles, setMuebles] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const db = getFirestore();
    const mueblesCollection = collection(db, "muebles");
    getDocs(mueblesCollection).then((querySnapshot) => {
      const muebles = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMuebles(muebles);
    });
  }, []);
  const catFilter = muebles.filter((mueble) => mueble.category === category);

  return (
    <>
      {category ? <ItemList muebles={catFilter} /> : <ItemList muebles={muebles} />};
    </>
  );
};

export default ItemListContainer
