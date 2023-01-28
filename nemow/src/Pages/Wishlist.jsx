import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Image, SimpleGrid, Text, useToast} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addtocart_Eyecare,Remove_from_Wishlist} from '../HOC/EyecareRedux/Actions';
import './Wishlist.css'
const Wishlist = () => {
  const [wishlist, setWishlist] = React.useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const getWishList = () => {
    return axios(`https://sephorajsonserver.onrender.com/wishlist`).then((res) => setWishlist(res.data))
  }

  const addToCart=(item)=>{
    dispatch(addtocart_Eyecare(item));
    toast({
      title: "Cartlist.",
      description: "Item Added To Cartlist Succesfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    dispatch(Remove_from_Wishlist(item.id))
    getWishList()
  }
  useEffect(() => {
    getWishList()
  }, [wishlist])
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} width='80%' margin={'auto'} gap='10px' mt='10px' mb={'20px'}>
      {
        wishlist.length > 0 ? wishlist.map((item) => (
          <Box className='wishlist-card' key={item.id}>
            <Image src={item.imagePath} alt={item.name} width={['250px', null, null, '300px']} h={["250px", null, null, "300"]} />
            <Text fontWeight={'600'}>{item.brand}</Text>
            <Text>{item.name}</Text>
            <Box display={'flex'} alignItems='center' justifyContent={'space-evenly'}>
              <Text fontSize='20px' fontWeight='600' color='green'>₹ {item.sellingPriceRange.max}</Text>
              <Button onClick={()=>addToCart(item)} borderRadius={"30px"} colorScheme="red">Move to Cart</Button>
            </Box>
          </Box>
        )) : <EmptyWishlist />
      }
    </SimpleGrid>
  )
}
const EmptyWishlist = () => {
  return (
    <Box width={'100%'} margin={'auto'} marginTop='20px' mb={'20px'}>
      <Text fontSize={'24px'}>Your Wishlist is Empty...!!</Text>
      <NavLink to="/" ><Text color='#31a3e1' mt='2' decoration={'underline'}>Click here to continue shopping</Text></NavLink>
    </Box>
  );
};

export default Wishlist