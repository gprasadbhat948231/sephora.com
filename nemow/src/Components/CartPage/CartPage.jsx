import { PhoneIcon } from "@chakra-ui/icons";

// import 'firebase/auth';
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
  InputGroup,
  InputLeftElement,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillDiagram2Fill, BsMailbox, BsMailbox2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart_Eyecare,
  addtowishlist_Eyecare,
  Remove_from_Cartlist,
  Remove_from_Wishlist,
} from "../../HOC/EyecareRedux/Actions";
import "../EyeCarePages/Eyecare.css";
function CartPage() {
  const [total, settotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { Wishlist, CartList } = useSelector(
    (store) => store.CartandWishReducer
  );

  return (
    <Box>
      <Box id="Cart_heading">My Basket</Box>
      {/* Cartitem Shows here  */}
      <Box
        w={{ lg: "70%", xl: "70%", "2xl": "70%", md: "90%", sm: "90%" }}
        id="Cart_section"
      >
        <Box id="Cart_Header">
          <Text display={"inline-block"} fontWeight="bold">
            Get It Shipped({CartList.length})
          </Text>
          <Text display={"inline-block"} fontWeight="bold">
            Cart Total: ({CartList.length == 0 ? 0 : total})
          </Text>
        </Box>
        {/* cartlist map here */}
        {CartList.length > 0 &&
          CartList.map((el) => (
            <CartListItem ele={el} total={total} settotal={settotal} />
          ))}
        {CartList.length == 0 && <EmptyCart />}
        <Box w="fit-content" m="auto" py={"30px"}>
          {CartList.length > 0 && (
            <Button
              backgroundColor={"black"}
              onClick={onOpen}
              borderRadius="23px"
              fontSize={"13px"}
              color={"white"}
              _hover={{ color: "grey" }}
              m="auto"
            >
              Proceed To Buy
            </Button>
          )}
        </Box>
        <AddtoCartModal
          onOpen={onOpen}
          CartTotal={total}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Box>
      {/* Suggession shows here*/}
      <Box
        margin={"auto"}
        id="Suggession_section"
        w={{ lg: "70%", xl: "70%", "2xl": "70%", md: "90%", sm: "90%" }}
      >
        <Text id="Cart_Header">Loves({Wishlist.length})</Text>
        {Wishlist.length > 0 ? (
          Wishlist.map((ele) => (
            <Box key={ele.id} id="Cartitems_parents">
              <Flex margin={"auto"} fontSize={"13px"} gap={6}>
                <Box w="30%">
                  <Image src={ele.imagePath} />
                </Box>
                <Box>
                  {/* brand name */}
                  <Box>
                    <Text>{ele.brand}</Text>
                    <Text fontSize={"13px"} color="grey">
                      {ele.name}
                    </Text>
                  </Box>
                  {/*remove form Wish and  */}
                  <Box gap={"30px"} display={"flex"}>
                    <Link
                      onClick={() => {
                        dispatch(addtocart_Eyecare(ele));
                        dispatch(Remove_from_Wishlist(ele.id));
                      }}
                      id="Links_for_cart_loves"
                    >
                      Move To Cart
                    </Link>
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
                  <Text>₹{ele.mrpRange.min || 0}</Text>
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
      <Heading color={"gray"} fontSize={"25px"}>
        Basket Is Empty
      </Heading>
    </Box>
  );
};
const EmptyWishlist = () => {
  return (
    <Box id="Empty_if_wish">
      <Heading color={"gray"} fontSize={"25px"}>
        WishList Is Empty
      </Heading>
    </Box>
  );
};

const AddtoCartModal = ({ onOpen, onClose, isOpen, CartTotal }) => {
  return (
    <Box w="700px">
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        size={"xl"}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            w="95%"
            display="flex"
            margin={"auto"}
            justifyContent="space-between"
          >
            <Heading fontSize={"20px"} color="blue.400">
              Proceed To Checkout{" "}
            </Heading>
            <Heading fontSize={"14px"} color="grey">
              Total:{CartTotal}{" "}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody w="90%" pb={6} lineHeight="20px">
            {/* phone number */}
            <Grid templateColumns={"repeat(1,1fr)"} gap="20px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="black" />}
                />
                <Input
                  isRequired
                  borderRadius={"2px"}
                  type="tel"
                  _placeholder={{ color: "blue.200" }}
                  placeholder="Phone number"
                />
              </InputGroup>
              {/* name section */}
              <Box w="100%" id="Checkout_1">
                <Input
                  borderRadius={"2px"}
                  placeholder="Enter Name..."
                  _placeholder={{ color: "blue.200" }}
                />
              </Box>
              <Box id="Checkout">
                <Input
                  _placeholder={{ color: "blue.200" }}
                  borderRadius={"2px"}
                  placeholder="Card..."
                />
              </Box>

              {/* Cvv Section  */}
              <Box
                w="100%"
                display={"flex"}
                margin="auto"
                color={"grey"}
                id="Checkout_4_expary"
              >
                <Input
                  h="40px"
                  color="blue.200"
                  _placeholder={{ color: "blue.200" }}
                  borderRadius={"2px"}
                  placeholder="CVV"
                />
                {/* Date section */}
                <Input
                  color="blue.200"
                  borderRadius={"2px"}
                  placeholder="Select Date and Time"
                  size="sm"
                  type="date"
                  h="40px"
                />
              </Box>
              <InputGroup>
                <Input
                  _placeholder={{ color: "blue.200" }}
                  borderRadius={"2px"}
                  type="tel"
                  placeholder="Gmail"
                />
              </InputGroup>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor="grey"
              color={"white"}
              _hover={{ color: "black", backgroundColor: "grey" }}
              mr={3}
              onClick={() => {
                alert("Order Placed SuccesFully");
                onClose();
              }}
            >
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const CartListItem = ({ ele, settotal, total }) => {
  const { Wishlist, CartList } = useSelector(
    (store) => store.CartandWishReducer
  );

  const dispatch = useDispatch();
  const [pric, setpric] = useState(1);
  const price1 = () => {
    let total1 = 0;
    CartList.forEach((ele) => {
      total1 += Number(pric) * ele.mrpRange.min;
    });
    settotal(total1);
  };
  useEffect(() => {
    price1();
  }, [pric]);
  return (
    <>
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
                onChange={(e) => setpric(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Select>
              <Link
                onClick={() => {
                  dispatch(addtowishlist_Eyecare(ele));
                  dispatch(Remove_from_Cartlist(ele.id));
                }}
                id="Links_for_cart_loves"
              >
                Move To Loves
              </Link>
              <Link
                onClick={() => dispatch(Remove_from_Cartlist(ele.id))}
                id="Links_for_cart_loves"
              >
                Remove
              </Link>
            </Box>
            <Box w="20%" display={"flex"}>
              <Text textAlign={"right"}>₹{ele.mrpRange.min || 0}</Text>
            </Box>
          </Box>
        </Flex>
        <Divider />
      </Box>
    </>
  );
};
// export const FirebaseConfigForOTP=()=>{

// const handleClick=()=>{

//  let recaptcha=new firebase.auth.RecaptchaVerifier("firebase_container")
// let number="+917008369373"
// firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
//   let code =prompt("Enter Otp");
//   if(code==null){
// return
//   }
//   e.confirm(code).then((res)=>{

//     console.log(res)
//   })
// }).catch(()=>{
//   console.log("error")
// })

// }
//   return (<>
//     <div id="firebase_container">
//     <Button onClick={handleClick}>onclick</Button>
//     knsjssfkjfksjo
//     </div>
//     </>
//   )

// }
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
