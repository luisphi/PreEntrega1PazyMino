import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
  
  function ItemList({products}) {
    return (
        <>
        <h2>Bienvenidos a su licorería GATO NEGRO</h2>
        <div id="Item__list">
        {products.map(product => <Item key={product.id} product={product}/>)}
        </div>
        </>
    )
  }
  
  export default ItemList
