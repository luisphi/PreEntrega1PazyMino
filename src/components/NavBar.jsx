import React from 'react'
import CartWidget from './CartWidget'
import { Button, Flex, Spacer, Box, Heading, Container, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <Container maxW="150rem" bg="#111F5F">
                <Flex alignItems="center" gap="2">
                    <Link to="/">
                        <img src="/images/logo_habitanto.png" alt="Licores el gato" width={100} />
                    </Link>
                    <Box p="1" w="300" h="30">
                        <Heading size="lg" color={"#CDC2A6"}> Licorería Gato </Heading>
                    </Box>
                    <Spacer />
                    <Box p="1" w="300" h="30">
                        <Menu>
                            <Link to={"/"}>
                                <MenuButton className="boton_menu" as={Button} size="lg" color="#111F5F" bgColor={"#CDC2A6"}>Inicio</MenuButton>
                            </Link>
                        </Menu>
                    </Box>
                    <Spacer />
                    <Box p="1" w="300" h="30">
                        <Menu>
                            <MenuButton className="boton_category" as={Button} size="lg" color="#111F5F" bgColor={"#CDC2A6"}>Categorías</MenuButton>
                            <MenuList>
                                <Link to={`/category/${"silla"}`} >
                                    <MenuItem >Sillas</MenuItem>
                                </Link>
                                <Link to={`/category/${"mesa"}`} >
                                    <MenuItem >Mesas</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                    
                    <Spacer />
                    <Box p="10" w="300" h="100">
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </div>
    );
};

export default NavBar