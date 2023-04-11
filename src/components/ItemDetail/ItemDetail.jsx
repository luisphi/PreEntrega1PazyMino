import React from 'react'
import ChangeButton from '../ChangeButton/ChangeButton'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
function ItemDetail({ product}) {
  
  function addToCart(cant) {
    console.log(`Compraste: ${cant} ${product.name}`)
  }

  return (
    <>
    <section id="item__detail">
      <div className='div__item'>
        <h3 id="item__title">{product.name}</h3>
        <img id="item__img" src={product.img} alt="" />
        <p className='item__info'>Categoría: {product.category}</p>
        <p className='item__info'>Precio: ${product.price}</p>
        <p className='item__info'>Stock: {product.stock}</p>
      </div>
      <div className='"div__item'>
        <ItemCount stock={product.stock} addToCart={addToCart}/>
      </div>
    </section>
    </>
  )
}

export default ItemDetail