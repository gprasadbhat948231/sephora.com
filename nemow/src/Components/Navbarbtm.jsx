import React from 'react'
import { NavLink } from 'react-router-dom';
import {
     Box,
     Flex,
     HStack,
     IconButton, 
     useDisclosure,
     useColorModeValue,
     Stack,
     Link, Image
   } from '@chakra-ui/react';
   import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import "./Navbarbtm.css";
import we from '../Components/Navbarimg/We.png'
const Navbarbtm = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     return (
          <Box bg={useColorModeValue('black','black')} px={4} width={'100%'} margin='auto'>
          <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={5} alignItems={'center'} justifyContent='space-around' width={'100%'} color='whiteAlpha.900'>
               <Image src={we} alt='logo2' width={'80px'} height='auto'/>
              <HStack
                as={'nav'}
                spacing={5}
                fontSize={'14px'}
                color='white'
                margin={'auto'}
                width='auto'
                display={{ base: 'none', md: 'flex' }}>
                  <NavLink to="/new">New</NavLink>              
                  <NavLink to="/eyecare" smooth>Eyecare</NavLink>
                  <NavLink to="/foundation"  smooth>Foundation</NavLink>
                  <Link to="#project" smooth>Brands</Link>
                  <Link to="#contact" smooth>Makeup</Link>
                  <Link to="#contact" smooth>Skincare</Link>
                  <Link to="#contact" smooth>Hair</Link>
                  <Link to="#contact" smooth>Tools & Brushes</Link>
                  <Link to="#contact" smooth>Bath & Body</Link>
                  <Link to="#contact" smooth>Mini Size</Link>
                  <Link to="#contact" smooth>💫Gifts✨</Link>
                  <Link to="#contact" smooth>Beauty under $20</Link>
              </HStack>
            </HStack>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack color='white' as={'nav'} spacing={4}>
                  <NavLink to="/new">New</NavLink>              
                  <NavLink to="#/eyecare" smooth>Eyecare</NavLink>
                  <NavLink to="/foundation"  smooth>Foundation</NavLink>
                  <NavLink to="#project" smooth>Brands</NavLink>
                  <Link to="#contact" smooth>Makeup</Link>
                  <Link to="#contact" smooth>Skincare</Link>
                  <Link to="#contact" smooth>Hair</Link>
                  <Link to="#contact" smooth>Tools & Brushes</Link>
                  <Link to="#contact" smooth>Bath & Body</Link>
                  <Link to="#contact" smooth>Mini Size</Link>
                  <Link to="#contact" smooth>💫Gifts✨</Link>
                  <Link to="#contact" smooth>Beauty under $20</Link>
              </Stack>
            </Box>
          ) : null}
        </Box>
     )
}
export default Navbarbtm;
