// suvam add to cart modal=---

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Box,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./Eyecare.css";

const AddToCartModal = ({ onClose, isOpen, CartData = {},ToknowCartList,AddedtoCartList}) => {
  // console.log(CartData);
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
            <Button colorScheme="red" disabled={ToknowCartList(CartData)} borderRadius={"30px"} mr={3} onClick={()=>{AddedtoCartList(CartData); onClose()}}>
              Add to Basket
            </Button>
            <Button colorScheme="white" color={"black"} border="0.5px solid" borderRadius={"30px"} mr={3}>
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