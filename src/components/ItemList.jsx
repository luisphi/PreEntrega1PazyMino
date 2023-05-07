import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ muebles }) => {

  console.log()

  return (
    <>
      <Stack direction='row'>
        <Container maxW="container.sm" className="main-catalogue">
          {muebles?.map((datos) => (
            <Item
              key={datos.id}
              id={datos.id}
              name={datos.name}
              descripcion={datos.descripcion}
              price={datos.price}
              stock={datos.stock}
              category={datos.category}
              imagen={datos.imagen}
            />
          ))};
        </Container>
      </Stack>
    </>
  );
};

export default ItemList