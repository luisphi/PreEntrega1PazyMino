import React from 'react'
import { useState } from 'react'
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { FormLabel, Input, Button, Container, Center, Box, Heading, Alert, AlertIcon } from '@chakra-ui/react'

const Order = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [alerta, setAlerta] = useState(null);

    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    };
    const order = {
        name,
        email,
    }
    const ordersCollection = collection(db, "orden")

    function llamadoAlerta() {
        const codigoAlerta = (
            <Alert status='success'>
                <AlertIcon />
                Su compra fue realizada con exito!
            </Alert>
        )
        setAlerta(codigoAlerta);
    };

    return (
        <Container className="cart-container">
            <Box p="0" w="350" h="10">
                <Heading size="sm" color={"#111F5F"}> Si desea finalizar la compra complete el siguiente formulario: </Heading>
            </Box>
            <form onSubmit={handleSubmit}>
                <FormLabel color={"#111F5F"}>Nombre</FormLabel>
                <Input placeholder='Nombre' onChange={(e) => setName(e.target.value)} />
                <FormLabel color={"#111F5F"}>Email</FormLabel>
                <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <Center>
                    <Box p="1" w="350" h="50">
                        <Button as={Button} color="#111F5F" bgColor={"#CDC2A6"} type='submit' onClick={() => llamadoAlerta()}>
                            Finalizar
                        </Button>
                    </Box>
                </Center>
                <Box p="1" w="350" h="50">
                    <p>Numero de order: {orderId}</p>
                </Box>
            </form>
            {alerta}
        </Container>
    );
};

export default Order