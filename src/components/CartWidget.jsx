import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div>
      <Button size="lg" color="#111F5F" bgColor={"#CDC2A6"}>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{quantity}</span>
      </Button>
    </div>
  );
};

export default CartWidget;