import {
  Box,
  Text,
  Image,
  Divider,
  Select,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "../EyeCarePages/Eyecare.css";
function CartPage() { 
  const CartList = useSelector((store) => store.CartList);
  console.log(CartList);
  return (
    <Box>
      <Box id="Cart_heading">My Basket</Box>

      {/* Cartitem Shows here  */}
      <Box
        w={{ lg: "70%", xl: "70%", "2xl": "70%", md: "90%", sm: "90%" }}
        id="Cart_section"
      >
        <Text
          textAlign={"left"}
          fontWeight="bold"
          backgroundColor={"grey"}
          pl="20px"
          py="12px"
        >
          Get It Shipped({CartList.length})
        </Text>
        {CartList.length > 0 &&
          CartList.map((ele) => (
            <Box id="Cartitems_parents">
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
                    <Link id="Links_for_cart_loves">Move To Loves</Link>
                    <Link id="Links_for_cart_loves">Remove</Link>
                  </Box>
                  <Box w="20%" display={"flex"}>
                    <Text textAlign={"right"}>₹   {ele.mrpRange.min}</Text>
                  </Box>
                </Box>
              </Flex>

              <Divider />
            </Box>
          ))}
      </Box>
      {/* Suggession shows here*/}
      <Box id="Suggession_section"></Box>
    </Box>
  );
}

export default CartPage;

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
