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
import { FaRegClosedCaptioning } from "react-icons/fa";
import AddToCartModal from "./AddToCartModal";
import { BsHeartFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Rating } from "../../Pages/EyeCare";
import { useSelector } from "react-redux";
import { UpdateDeleteButton } from "../AdminPage/AddDeleteUpdate";

const Products = ({ EyeBrowData }) => {
  const admin = useSelector((store) => store.adminManager.admin);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [CartData, setCartData] = useState({});
  

  return (
    <Box>
      {/* filter aand left side link added here=---  */}
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
        {CartData.name && (
          <AddToCartModal
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            CartData={CartData}
          />
        )}
        {EyeBrowData.map((Eyedata) => (
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
                  onClick={() => {
                    setCartData(Eyedata);
                    onOpen();
                  }}
                  src={Eyedata.imagePath}
                  alt={`Picture of ₹ {Eyedata.name}`}
                  roundedTop="lg"
                  // w="400px"
                  h={["250px",null,null,"300"]}
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
              <Box
                p="6"
                onClick={() => {
                  setCartData(Eyedata);
                  onOpen();
                }}
                h="180px"
              >
                <Box d="flex" alignItems="baseline" ></Box>
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
              <Box display={admin?"block":"none"}><UpdateDeleteButton intialPrice={Eyedata} productsData={EyeBrowData}/></Box>
            </Box>
            
          </Flex>
        ))}
      </Grid>
      {/* grid end here=--- */}
    </Box>
  );
};
export default Products;
