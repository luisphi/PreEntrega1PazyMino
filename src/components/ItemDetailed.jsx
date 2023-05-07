import React from 'react'
import { useEffect, useState } from 'react';
import { Center, Divider, Heading, Stack } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Button, Text, Image, ButtonGroup } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Loading from './Loading';


const ItemDetailed = ({ muebles, id }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    });
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Center p="100px">
                <Card maxW='350px' className="card-main">
                    <CardBody>
                        <Image src={muebles.imagen} />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#111F5F'>{muebles.name}</Heading>
                            <Text color='#111F5F' fontSize='15px'>
                                Descripcion: {muebles.descripcion}
                            </Text>
                            <Text color='#111F5F' fontSize='20px'>
                                Precio: ${muebles.price}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter className="card-footer">
                        <ButtonGroup spacing='2'>
                            <ItemCount data={muebles} id={id} />
                        </ButtonGroup>
                        <Center>
                            <Button size="md" color="#111F5F" bgColor={"white"}>
                                <Link to="/cart"> Continua con tu compra </Link>
                            </Button>
                        </Center>
                    </CardFooter>
                </Card>
            </Center>
        </>
    );
};

export default ItemDetailed