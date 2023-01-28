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
    <Box bg={useColorModeValue('black', 'black')} px={4} width={'100%'} margin='auto' >
      <Flex h={14} alignItems={'center'} position='sticky' top='0px' justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={5} alignItems={'center'} justifyContent='space-around' width={'100%'} color='whiteAlpha.900'>
          <Image src={we} alt='logo2' width={'80px'} height='auto' />
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
            <NavLink to="/foundation" smooth>Foundation</NavLink>
            <NavLink to="/" smooth>Brands</NavLink>
            <NavLink to="/" smooth>Makeup</NavLink>
            <NavLink to="/" smooth>Skincare</NavLink>
            <NavLink to="/" smooth>Hair</NavLink>
            <NavLink to="/" smooth>Tools & Brushes</NavLink>
            <NavLink to="/" smooth>Bath & Body</NavLink>
            <NavLink to="/" smooth>Mini Size</NavLink>
            <NavLink to="/" smooth>💫Gifts✨</NavLink>
            <NavLink to="/" smooth>Beauty under $20</NavLink>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack color='white' as={'nav'} spacing={4}>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/eyecare" smooth>Eyecare</NavLink>
            <NavLink to="/foundation" smooth>Foundation</NavLink>
            <NavLink to="/" smooth>Brands</NavLink>
            <NavLink to="/" smooth>Makeup</NavLink>
            <NavLink to="/" smooth>Skincare</NavLink>
            <NavLink to="/" smooth>Hair</NavLink>
            <NavLink to="/" smooth>Tools & Brushes</NavLink>
            <NavLink to="/" smooth>Bath & Body</NavLink>
            <NavLink to="/" smooth>Mini Size</NavLink>
            <NavLink to="/" smooth>💫Gifts✨</NavLink>
            <NavLink to="/" smooth>Beauty under $20</NavLink>
            <NavLink to="/" smooth>Community</NavLink>
            <NavLink to="/wishlist" smooth>Wishlist</NavLink>
            <NavLink to="#contact" smooth>Message</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}
export default Navbarbtm;
