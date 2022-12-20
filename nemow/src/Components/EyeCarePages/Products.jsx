import {
  Box,
  Circle,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import AddToCartModal from "./AddToCartModal";

import { Rating } from "../../Pages/EyeCare";
import { useSelector } from "react-redux";
import { AddButton, UpdateDeleteButton } from "../AdminPage/AddDeleteUpdate";

const Products = ({ limit }) => {
  const { admin, products } = useSelector((store) => store.adminManager);
  const { isOpen, onOpen, onClose } = useDisclosure();

  
console.log(products,"***")
  return (
    <Box>
      {/* filter aand left side link added here=---  */}
      <Box display={admin ? "block" : "none"}>
        <AddButton />
      </Box>
      <Grid
        w="100%"
        templateColumns={[
          "repeat(1, 1fr)",
          null,
          "repeat(2, 1fr)",
          null,
          "repeat(3, 1fr)",
        ]}
        rowGap={1}
      >
        
        {products.filter((product,i) => i<26).map(Eyedata=>(
          <Flex
            key={Eyedata.id}
            p={4}
            w="full"
            alignItems="start"
            justifyContent="center"
          >
            <Box maxW="sm" rounded="lg" position="relative">
              <Flex>
                <Image
                  src={Eyedata.imagePath}
                  alt={`Picture of ₹ {Eyedata.name}`}
                  roundedTop="lg"
                  // w="400px"
                  h={["250px", null, null, "300"]}
                />
                <Flex
                  position="absolute"
                  right="0px"
                  p={2}
                  alignItems="center"
                  justifyContent={"space-between"}
                  roundedBottom={"sm"}
                  cursor="pointer"
                >
                  <Box
                    bg={Eyedata.remain_qnty < 10 ? "tomato" : "green.500"}
                    p="7px"
                    fontSize="12px"
                    borderRadius="50%"
                    lineHeight="10px"
                    color="white"
                  >
                    <VStack>
                      <Text>Stock</Text>
                      <Text>{Eyedata.remain_qnty}</Text>
                    </VStack>
                  </Box>
                  {/* <BsHeartFill
                          onClick={() => AddedtoWishlist(Eyedata)}
                          fill={
                            ToknowWatchlist(Eyedata.id, watchlist)?"red": "grey"
                          }
                          fontSize={"24px"}
                        /> */}
                </Flex>
              </Flex>
              <Box p="6" h={["auto", "auto", "auto", "auto", "180px"]}>
                <Box d="flex" alignItems="baseline"></Box>
                <Heading size="xs" align="left">
                  {Eyedata.brand}
                </Heading>
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Text
                    color="grey"
                    align="left"
                    fontWeight="semibold"
                    size="sm"
                    lineHeight="tight"
                  >
                    {Eyedata.name}
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" alignContent="center">
                  <Rating
                    rating={Eyedata.rating}
                    numReviews={Eyedata.numReviews}
                  />
                </Flex>
                <Box
                  align="left"
                  fontSize="2xl"
                  // color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    ₹ :
                  </Box>
                  {" " + Eyedata.sellingPriceRange.min}
                </Box>
              </Box>
              <Box display={admin ? "block" : "none"}>
                <UpdateDeleteButton
                  intialPrice={Eyedata}
                  productsData={products}
                />
              </Box>
            </Box>
          </Flex>
        ))}
      </Grid>
      {/* grid end here=--- */}
    </Box>
  );
};
export default Products;
