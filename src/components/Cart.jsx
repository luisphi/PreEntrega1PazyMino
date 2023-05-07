import { Button, Container, Center, Text, Box, Heading, Card, CardHeader, CardBody, CardFooter, Image, Alert, AlertIcon, Stack, Spacer } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext';
import { useState, useContext, useEffect } from "react";
import Loading from './Loading';
import Order from './Order';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });
  if (loading) {
    return <Loading />
  };

  function sumaTotal(carrito) {
    var total = 0
    for (var i = 0; i < carrito.length; i++) {
      total = total + carrito[i].price * carrito[i].quantity
    };
    return total
  };

  function borrarProducto(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  if (cart.length > 0) {
    return (
      <>
        <Stack direction='row'>
          {cart.map((item) => {
            return (

              <Container key={item.id} className="cart-items">
                <Card maxW="200px">
                  <Center>
                    <CardHeader>
                      <Heading size="md">{item.name}</Heading>
                    </CardHeader>
                  </Center>
                  <CardBody>
                    <Image src={item.imagen} borderRadius='sm' />
                    <Center>
                      <Text as="b">Cantidad: {item.quantity}</Text>
                    </Center>
                    <Center>
                      <Text>Precio: $ {item.price}</Text>
                    </Center>
                  </CardBody>
                  <Center>
                    <CardFooter>
                      <Button colorScheme="red" onClick={() => borrarProducto(item.id)} size="sm">
                        Eliminar del carro
                      </Button>
                    </CardFooter>
                  </Center>
                </Card>
              </Container>

            );

          })

          };
        </Stack>
        <Center>
          <Heading color="#111F5F" size="md" p="25px">
            <Text>
            Total: $ {sumaTotal(cart)}
            </Text>
            </Heading>
        </Center>
        <Order />
      </>
    )
  }
  else {
    return (
      <>
        <Center p="25px">
          <Heading size="md" color="#111F5F" className='heading'>Ups.. parece que el carro esta vacio</Heading>
        </Center>
        <Container className='vuelta_catalogo'>
          <Center>
            <Button size="md" color="#111F5F" bgColor={"#CDC2A6"}>
              <Link to="/"> volver al catalogo </Link>
            </Button>
          </Center>
        </Container>
      </>
    )

  }
};

export default Cart