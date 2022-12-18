import React from 'react'
import { Box, HStack, Text, Input ,useDisclosure, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
Button,Stack,FormLabel,Select, Divider} from '@chakra-ui/react';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import './Navbar1.css';
import storeicon from '../Components/Navbarimg/storeicon.png';
import Sephora from '../Components/Navbarimg/Sephora.png'
import community from '../Components/Navbarimg/community.png'
import cart from '../Components/Navbarimg/cart.png'
import wishlist from '../Components/Navbarimg/wishlist.png'
import notify from '../Components/Navbarimg/notify.png'
import Navbarbtm from './Navbarbtm';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
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
          <Box className='storebox'>
            <img src={storeicon} alt="store" className='storeicon' />
            <Box className='storetext'>
              <p>Stores & Services</p>
              <p>Choose your store</p>
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
          <>
      <Button bg='white' _hover={{backgroundColor:'white'}} color={'black'} onClick={onOpen}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px' textAlign={'center'}>
            <Text fontFamily={'"Lucida Sans Unicode", "Lucida Grande", sans-serif;"'}>Login</Text>
          </DrawerHeader>

          <DrawerBody>
            <Text fontSize={'2xl'} textAlign='center' fontFamily={'Lucida Sans Unicode'}><u style={{textDecorationColor:'orange'}}>Beauty Insider </u></Text>
            <Text fontSize={'sm'} marginTop='10px'>Join the beauty insider loyalty program,Earn Points,get <b>FREE standard shipping,</b>redeem reward, and more</Text>
            <Stack spacing='24px'marginTop={'20px'}>
              <Box display={'flex'} justifyContent='space-between'>
                <Input
                  id='email'
                  placeholder='Email Address'
                  width={'49%'}
                  />
                <Input
                  id='email'
                  type={'password'}
                  width={'49%'}
                  placeholder='Password'
                />
              </Box>
              <Box>
                <FormLabel htmlFor='owner'>Enter your birthdate to receive a free gift every year.</FormLabel>
                <Box display={'flex'} justifyContent='space-between'>
                <Select id='month' defaultValue='Month' width={'49%'}>
                  <option value='January'>January</option>
                  <option value='February'>February</option>
                  <option value='March'>March</option>
                  <option value='April'>April</option>
                  <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
                </Select>
                <Select id='day' defaultValue='1' width={'49%'}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                </Select>
                </Box>
              </Box>
              <Box width={'100%'} margin='auto'>
              <Input
                  id='email'
                  type={'number'}
                  placeholder='Phone Number (optional)'
                />
              </Box>
              <Divider/>
              <Box>
                <Button background={'black'} color='white' _hover={{background:'gray.600'}} borderRadius='50px' width={'50%'}>Join Now</Button>
              </Box>
              <Text fontSize={'13px'}>New to Nemow ? <ul style={{color:'#059BE5 '}}>Login Here</ul></Text>
              <Divider/>
              <Box>
                <Text fontSize={'12px'}>By clicking “Join Now” you acknowledge that you are a U.S. or Canada resident and (1) have read Sephora’s <u style={{color:'#059BE5 '}}>Privacy Policy</u>and <u  style={{color:'#059BE5 '}}>Notice of Financial Incentive,</u> (2), agree to <u  style={{color:'#059BE5 '}}>Terms of Use, Beauty Insider Terms,</u> and to automatically receive Beauty Insider offers and notifications via email.</Text>
                <Text fontSize={'12px'} marginTop='10px'>Sephora uses Google ReCaptcha and by registering, users are subject to Google’s <u style={{color:'#059BE5 '}}>privacy policy </u>& <u style={{color:'#059BE5 '}}>terms.</u></Text>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
          <Box className='lastbox'>
            <img className='iconscwc' src={notify} alt='chat' />
            <img className='iconscwc' src={wishlist} alt='wishlist' />
  <NavLink to='/cart'><img className='iconscwc' src={cart} alt='cart' /></NavLink>
          </Box>
        </Box>
      </Box>
      <Navbarbtm />
    </div>
  )
}

export default Navbar