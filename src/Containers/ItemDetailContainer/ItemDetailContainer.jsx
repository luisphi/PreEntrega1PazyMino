import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { myPromise } from '../../Products/Licores';
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} =useParams()
  
  useEffect(() => {
    myPromise()
      .then(res => setProduct(res.find(el => el.id == id)))
      .catch(fail => console.log(fail))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
    {loading ?
      <img id="img__loading" src="https://usagif.com/wp-content/uploads/loading-2.gif" alt="" />
                              : <ItemDetail product={product}/>
    }
    </> 
  )
}

export default ItemDetailContainer