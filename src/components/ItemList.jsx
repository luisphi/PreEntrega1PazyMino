import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ licores }) => {

  console.log()

  return (
    <>
      <Stack direction='row'>
        <Container maxW="container.sm" className="main-catalogue">
          {licores?.map((datos) => (
            <Item
              key={datos.id}
              id={datos.id}
              name={datos.name}
              description={datos.description}
              price={datos.price}
              stock={datos.stock}
              category={datos.category}
              img={datos.img}
            />
          ))};
        </Container>
      </Stack>
    </>
  );
};

export default ItemList