import React from 'react';
import { Center, Divider, Heading, Stack } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Button, Text, Image, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const Item = ({ id, name, imagen, category, stock, descripcion }) => {

    return (
        <>
            <div>
                <div key={id}>
                    <Center p="1rem">
                        <Card maxW='350px' className='card-main'>
                            <CardBody>
                                <Image src={imagen} />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md' color="#111F5F">{name}</Heading>
                                    <Text color="#111F5F" fontSize='18px'>
                                        Categoria: {category}
                                    </Text>
                                    <Text color="#111F5F" fontSize='18px'>
                                        Stock: {stock}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter className='card-footer'>
                                <ButtonGroup spacing='2' className='btn-center'>
                                    <Button color="#111F5F" bgColor={"#CDC2A6"}>
                                        <Link to={`/item/${id}`}>Ver Mas</Link>
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            </div>
        </>
    );
};

export default Item