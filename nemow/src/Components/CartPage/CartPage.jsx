import {
  Box,
  Text,
  Image,
  Divider,
  Select,
  Flex,
  Link,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart_Eyecare,
  addtowishlist_Eyecare,
  Remove_from_Cartlist,
  Remove_from_Wishlist,
} from "../../HOC/EyecareRedux/Actions";
import "../EyeCarePages/Eyecare.css";
function CartPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [CartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  const CartList = useSelector((store) => store.CartList);
  const Wishlist = useSelector((store) => store.Wishlist);
  const CalculateTotal = () => {
    let cart = 0;
    CartList.forEach((ele) => {

      cart += ele.mrpRange.min || 0;
    });
    setCartTotal(cart);
  };
  useEffect(() => {
    if(CartList.length>0){
    CalculateTotal();}
  }, [CartList]);
  return (
    <Box>
      <Box id="Cart_heading">My Basket</Box>
      {/* Cartitem Shows here  */}
      <Box
        w={{ lg: "70%", xl: "70%", "2xl": "70%", md: "90%", sm: "90%" }}
        id="Cart_section"
      >
        <Box
         id="Cart_Header"
        >
          <Text display={"inline-block"} fontWeight="bold">
            Get It Shipped({CartList.length})
          </Text>
          <Text display={"inline-block"} fontWeight="bold">
            Cart Total: ({CartTotal})
          </Text>
        </Box>

        {CartList.length >0 ? (
          CartList.map((ele) => (
            <Box key={ele.id} id="Cartitems_parents">
              <Flex w="100%">
                <Box w="30%">
                  <Image h="200px" src={ele.imagePath} />
                </Box>
                <Box>
                  {/* brand name */}
                  <Box w="100%">
                    <Text>{ele.brand}</Text>
                    <Text fontSize={"13px"} color="grey">
                      {ele.name}
                    </Text>
                  </Box>

                  {/* select tag and remove form cart and  */}
                  <Box gap={"30px"} display={"flex"}>
                    <Select
                      verticalAlign={"center"}
                      w="60px"
                      type="number"
                      defaultValue={"1"}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Select>
                    <Link  onClick={()=>{dispatch(addtowishlist_Eyecare(ele));dispatch(Remove_from_Cartlist(ele.id))}} id="Links_for_cart_loves">Move To Loves</Link>
                    <Link
                      onClick={() => dispatch(Remove_from_Cartlist(ele.id))}
                      id="Links_for_cart_loves"
                    >
                      Remove
                    </Link>
                  </Box>
                  <Box w="20%" display={"flex"}>
                    <Text textAlign={"right"}>₹ 
                    {ele.mrpRange.min || 0}
                    </Text> 
                  </Box>
                </Box>
              </Flex>
              <Divider/>

            </Box>
          ))
        ) : (
          <EmptyCart />
        )}
<Box w="200px" m="auto" py={"30px"}>
  
       {CartList.length>0&&<Button backgroundColor={"black"}  onClick={onOpen}  borderRadius="23px" fontSize={"13px"} p="10px" color={"white"} _hover={{color:"grey"}} m="auto">Proceed To Buy</Button>}
       
        </Box>
        <AddtoCartModal 
         onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}/>
      </Box>
      {/* Suggession shows here*/}
      <Box
        margin={"auto"}
        id="Suggession_section"
        w={{ lg: "70%", xl: "70%", "2xl": "70%", md: "90%", sm: "90%" }}
      >
        <Text id="Cart_Header"
         
        >
          Loves({Wishlist.length})
        </Text>
        {Wishlist.length > 0 ? (
          Wishlist.map((ele) => (
            <Box key={ele.id} id="Cartitems_parents">
              <Flex margin={"auto"}  fontSize={"13px"} gap={6} >
                <Box w="30%">
                  <Image src={ele.imagePath} />
                </Box>
                <Box>
                  {/* brand name */}
                  <Box >
                    <Text>{ele.brand}</Text>
                    <Text fontSize={"13px"} color="grey">
                      {ele.name}
                    </Text>
                  </Box> 
                  {/*remove form Wish and  */}
                  <Box gap={"30px"} display={"flex"}>
                    <Link onClick={()=>{dispatch(addtocart_Eyecare(ele));dispatch(Remove_from_Wishlist(ele.id))}} id="Links_for_cart_loves">Move To Cart</Link>
                    <Link
                      onClick={() => dispatch(Remove_from_Wishlist(ele.id))}
                      id="Links_for_cart_loves"
                    >
                      Remove
                    </Link>
                  </Box>
                  <Box w="20%" display={"flex"}>
                    <Text textAlign={"right"}></Text>
                  </Box>
                  <Text >₹ 
                    {ele.mrpRange.min || 0}
                    </Text> 
                </Box>
              </Flex>

              <Divider />
            </Box>
          ))
        ) : (
          // empty page here
          <EmptyWishlist />
        )}
      </Box>
    </Box>
  );
}
export default CartPage;

const EmptyCart = () => {
  return (
    <Box id="Empty_if_cart">
      <Heading color={"gray"} fontSize={"25px"}>Basket Is Empty</Heading>
    </Box>
  );
};
const EmptyWishlist = () => {
  return (
    <Box id="Empty_if_wish">
      <Heading color={"gray"} fontSize={"25px"}>WishList Is Empty</Heading>
    </Box>
  );
};

const AddtoCartModal=({onOpen,onClose,isOpen})=>{
return(

  <Box w="700px">
  
  {/* <Button onClick={onOpen}>Open Modal</Button> */}
  

<Modal size={"2xl"} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Proceed To Checkout</ModalHeader>
    <ModalCloseButton />
    <ModalBody  w="90%"  pb={6} lineHeight="20px">
      <Box display={"flex"} margin={"auto"} justifyContent="space-between">
      <Input w={"50%"}/>
    <Input/>
      </Box>
    <Input/>
    <Input/>
    <Input/>
    </ModalBody>

    <ModalFooter>
      <Button variantColor="blue" mr={3}>
        Save
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
  </Box>
)

}
















// 0
// :
// {id: 'D9K496TC6TD', mrpRange: {…}, sellingPriceRange: {…}, discountRange: {…}, name: 'Gimme Brow + Volumizing Pencil - Shade 03 Warm Light Brown', …}
// 1
// :
// allImages
// :
// null
// altImagePath
// :
// "https://cdn15.nnnow.com/web-images/medium/styles/9VSW5CNFCXW/1622445771745/2.jpg"
// brand
// :
// "Anastasia Beverly Hills"
// discountRange
// :
// {min: 0, max: 0}
// id
// :
// "9VSW5CNFCXW"
// imageColor
// :
// "#f4e0e9"
// imagePath
// :
// "https://cdn00.nnnow.com/web-images/medium/styles/9VSW5CNFCXW/1622445771747/1.jpg"
// isNew
// :
// false
// moreColors
// :
// null
// mrpRange
// :
// {min: 2400, max: 2400}
// name
// :
// "Brow Definer - Ash Brown"
// otherImages
// :
// {3: '/styles/9VSW5CNFCXW/1622445771746/3.jpg', 4: '/styles/9VSW5CNFCXW/1622445771743/4.jpg', 5: '/styles/9VSW5CNFCXW/1622525120513/5.jpg'}
// productTags
// :
// [{…}]
// promotions
// :
// (4) [{…}, {…}, {…}, {…}]
// sapStyleId
// :
// null
// sellingPriceRange
// :
// {min: 2400, max: 2400}
// sizeChartId
// :
// null
// skus
// :
// null
// specs
// :
// null
// url
// :
// "/anastasia-beverly-hills-brow-definer---ash-brown-9VSW5CNFCXW"
// video
// :
// null
// [[Prototype]]
// :
// Object
// 2
// :
// {id: 'WZ2MW513T8J', mrpRange: {…}, sellingPriceRange: {…}, discountRange: {…}, name: 'Brow Powmade - Shade 05 - Warm Black Brown', …}
// length
// :
// 3
// [[Prototype]]
// :
// Array(0)
