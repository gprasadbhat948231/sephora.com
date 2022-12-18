import {
    Button, Modal, ModalBody, ModalCloseButton,
    ModalContent,ModalFooter, ModalHeader,
    Box, Text, Image, Flex, useToast, } from "@chakra-ui/react";
  import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addtocart_Eyecare, addtowishlist_Eyecare,
  cartlistGetdata,  Remove_from_Wishlist, wishlistGetdata,} from "../../HOC/EyecareRedux/Actions"
  const AddToCartModal = ({ onClose, isOpen, CartData = [],}) => {
    // console.log(CartData);
    const toast = useToast();
    const {Wishlist,CartList} = useSelector((store) => store.CartandWishReducer);
    // const CartList = useSelector((store) => store);
    console.log(CartList);
    const dispatch = useDispatch();
    const AddedtoWishlist = (ele) => {
      if (!Wishlist.find((item) => ele.id === item.id)) {
        dispatch(addtowishlist_Eyecare(ele));
        toast({
          title: "Wishlist.",
          description: "Item Added To Wishlist Succesfully.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } else if (Wishlist.find((item) => ele.id === item.id)) {
        dispatch(Remove_from_Wishlist(ele.id));
        toast({
          title: "Wishlist.",
          description: "Item Is Removed From Wishlish.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    };
    const ToknowWishlist = (Eyedata) => {
      if (Wishlist.find((item) => Eyedata.id === item.id)) {
        return true;
      }
      return false;
    };
    const AddedtoCartList = (Cartitem) => {
      if (!CartList.find((item) => Cartitem.id === item.id)) {
        dispatch(addtocart_Eyecare(Cartitem));
        toast({
          title: "Cartlist.",
          description: "Item Added To Cartlist Succesfully.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    };
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader>Product Detaills</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Image carousels Section for Cart*/}
              <Box id="Cart_Carousels_Image_Parents">
                <Image
                  id="Cart_Carousels_Image"
                  w="100%"
                  src={`https://cdn09.nnnow.com/web-images/medium${CartData.otherImages[3]}`}
                  alt="crauser image"
                />
              </Box>
              <Box id="Cart_Carousels">
                {/* <ArrowLeftIcon /> */}
                {/* <ArrowRightIcon /> */}
              </Box>
              <Box id="Cart_Brand" align="left">{CartData.brand}</Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box  id="Cart_Name">
                  {CartData.name}
                </Box>
              </Flex>
              <Box id="Cart_Price"
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                ₹
                </Box>
                {CartData.sellingPriceRange.min}
              </Box>
              <Text fontSize="20px">FREE SHOPING</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" borderRadius={"30px"} mr={3} onClick={()=>{AddedtoCartList(CartData); onClose()}}>
                Add to Basket
              </Button>
              <Button colorScheme="white" color={"black"} border="0.5px solid"  onClick={()=>{AddedtoWishlist(CartData); onClose()}} borderRadius={"30px"} mr={3}>
                Add to Loves
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  export default AddToCartModal;
  export const Carousels = () => {
    const HandleCarousels = () => {};
  };