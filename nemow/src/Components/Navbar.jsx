import React from 'react'
import { Box, HStack, Text, Input } from '@chakra-ui/react';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import './Navbar1.css';
import storeicon from '../Components/Navbarimg/storeicon.png';
import Sephora from '../Components/Navbarimg/Sephora.png'
import community from '../Components/Navbarimg/community.png'
import login from '../Components/Navbarimg/login.png'
import cart from '../Components/Navbarimg/cart.png'
import wishlist from '../Components/Navbarimg/wishlist.png'
import notify from '../Components/Navbarimg/notify.png'
import Navbarbtm from './Navbarbtm';
const Navbar = () => {
   return (
    
    <div>
    
      <HStack className='nav-top-1'>
        <Text className='nav-top-1-text'><b>Join Beauty Insider and get 20% off* Full-Size Fragrances with code FRAGRANCE20.</b>*Terms Apply.<b>SEE DETAILS</b><ChevronRightIcon /></Text>
      </HStack>
      <Box className='nav-top-2'>
        <Box>
          <img className='sephora-logo' src={Sephora} alt='logo' />
        </Box>
        <Box className='inputsec'>
          <SearchIcon marginLeft={'20px'} /><Input placeholder='Search' className='nav-searchbar' />
        </Box>
        <Box className='nav-midright'>
          <Box className='nav-mid3'>
            <Box className='storebox'>
              <img src={storeicon} alt="store" className='storeicon' />
              <Box className='storetext'>
                <p>Stores & Services</p>
                <p>Choose your store</p>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className='storebox'>
              <img src={community} alt="Community" className='storeicon' />
              <Box className='communitytext'>
                <p>Community</p>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className='storebox'>
              <img src={login} alt="login" className='storeicon' />
              <Box className='storetext'>
                <p>Sign In</p>
                <p>For free shipping</p>
              </Box>
            </Box>
          </Box>
          <Box className='lastbox'>
            <img className='iconscwc' src={notify} alt='chat' />
            <img className='iconscwc' src={wishlist} alt='wishlist' />
            <img className='iconscwc' src={cart} alt='cart' />
          </Box>
        </Box>
      </Box>
      <Navbarbtm/>
    </div>
  )
}

export default Navbar