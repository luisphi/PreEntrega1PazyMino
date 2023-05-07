import React from 'react'
import { useState } from 'react';
import { Center, Button } from '@chakra-ui/react';
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from 'react';


const ItemCount = ({ data, id }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      console.log(currItems)
      console.log(data)
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          }
          else {
            return item;
          }
        });
      }
      else {
        return [...currItems, { id: id, quantity: count, price: data.price, name: data.name, imagen: data.imagen }];
      }
    });
  };

  return (
    <>
      <Center>
        <p></p>
      </Center>
      <Center color='black'>
        <Button size="md" color="#111F5F" bgColor={"white"} onClick={addQty}>
          +
        </Button>
        <Button size="sm" color="#111F5F" bgColor={"#CDC2A6"} onClick={() => addToCart()}>
          Añadir al carrito: {count}
        </Button>
        <Button size="md" color="#111F5F" bgColor={"white"} onClick={substractQty}>
          -
        </Button>
      </Center>
    </>

  );
};

export default ItemCount