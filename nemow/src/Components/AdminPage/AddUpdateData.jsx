import {
  Center,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  OrderedList,
  Radio,
  Box,
  RadioGroup,
  SimpleGrid,
  UnorderedList,
  VStack,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const intialPrice = {
  id: "VARDCI5VXL5",
  mrpRange: {
    min: "8150",
    max: "8150",
  },
  sellingPriceRange: {
    min: 8150,
    max: 8150,
  },
  discountRange: {
    min: 0,
    max: 0,
  },
  name: "L'Interdit Eau De Toilette",
  brand: "Givenchy",
  url: "/givenchy-linterdit-eau-de-toilette-VARDCI5VXL5",
  imagePath:
    "https://cdn10.nnnow.com/web-images/medium/styles/VARDCI5VXL5/1665569994739/1.jpg",
  altImagePath:
    "https://cdn19.nnnow.com/web-images/medium/styles/VARDCI5VXL5/1665569994733/2.jpg",
  otherImages: {
    3: "/styles/VARDCI5VXL5/1665569994736/3.jpg",
    4: "/styles/VARDCI5VXL5/1665569994736/2.jpg",
  },
  promotions: [
    {
      id: "f0a9fec1-a69f-49a9-afc1-291f0de1182e",
      name: "ALL15",
      displayName: "Buy For 2999 Get Extra 15% Off",
      type: "coupon",
      displayDiscount: false,
      noCouponDetails: 1,
      brands: [],
      supportedChannel: ["android", "odin", "ios"],
      discountInPercentage: 1,
    },
  ],
  moreColors: 1,
  isNew: true,
  sizeChartId: 1,
  skus: 1,
  video: 1,
  allImages: 1,
  specs: 1,
  sapStyleId: 1,
  productTags: [
    {
      tagText: "NEW",
      tagUrl:
        "https://cdn00.nnnow.com/web-images/master/product_tags/c0d20acc-1b4b-4e7e-86f4-4180f2247ea0/1552980365718/just_arrived.png",
      tagTextColor: "#d50032",
    },
  ],
  imageColor: "#f4e3c9",
};
const pricesRanges = {
  mrpRange: "MRP Range",
  sellingPriceRange: "Selling Price Range",
  discountRange: "Discount Range",
};

const elements=[]
console.log(typeof elements ,"***")
const AddUpdateData = () => {
  const [productData, setProductData] = useState(intialPrice);
  console.log(elements,typeof elements ,"***")
 // const [elements,setElments]=useState([])
  const format = (valKey, type) =>
    valKey === "discountRange"
      ? productData[valKey][type] + "%"
      : "₹ " + productData[valKey][type];

  // }
  // valKey==="discountRange"?value[valKey][type]+"%" :"₹ " + value[valKey][type]};
  const handleValueChange = (val, valKey, type) => {
    setProductData({
      ...productData,
      [valKey]: { ...productData[valKey], [type]: val },
    });
  };
  const handleChange = (e, name) => {
    //console.log(e, name);
    if (name) {
      setProductData({ ...productData, [name]: e });
    } else {
      const { name, value } = e.target;
      setProductData({ ...productData, [name]: value });
    }
  };
  const postData = async () => {
    // console.log(productData);
    //const data=JSON.stringify(productData)
    // console.log(data)
    let path = "women-perfume ";
    const url = "https://sephorajsonserver.onrender.com/" + path;
    let res = await axios.post(url, productData);
    console.log(res);
  };
  return (
    <Box w="60%" m="auto">
      <FormControl isRequired onSubmit={postData}>
        <Grid
          templateColumns={[null, "repeat(1, 1fr)", null, null, "55% 45%"]}
          justifyContent="center"
          gap="30px 80px"
          alignItems="start"
        >
          {Object.keys(productData).map((key, i) =>{
           if( typeof productData[key] === "string" ||
            typeof productData[key] === "number" ||
            typeof productData[key] === "boolean" ){
             if( typeof productData[key] === "string" ){
              return  <GridItem key={i + key}>
                  <FormLabel>{key}</FormLabel>
                  <Input
                    placeholder=" Product ID"
                    value={productData[key]}
                    name={key}
                    onChange={handleChange}
                  />
                </GridItem>
              } else if( typeof productData[key] === "number" ) {
               
               elements.push( <GridItem key={i + key}>
            
                <Box>
                  <FormLabel>{key}</FormLabel>
                  <Input
                    placeholder="moreColors"
                    value={productData[key]}
                    name={key}
                    onChange={handleChange}
                  />
                  </Box>
               
                </GridItem>)
               
} 
              else {
                <GridItem key={i + key}>
                  <SimpleGrid templateColumns="repeat(2,1fr)" gap="5px">
                    <FormLabel>{key}</FormLabel>

                    <RadioGroup
                      onChange={(e) => handleChange(e, "isNew")}
                      name={key}
                      value={productData[key]}
                    >
                      <Radio p="0 10px" value="true">
                        Yes
                      </Radio>
                      <Radio value="false">No</Radio>
                    </RadioGroup>
                  </SimpleGrid>
                </GridItem>
            }
               } else {
              console.log(key, typeof productData[key],typeof elements)
               }
            })}
          
          <SimpleGrid templateColumns="repeat(2,1fr)" gap="5px">{elements.map((ele,i)=><Box>{ele}</Box>)}</SimpleGrid>
         
        </Grid>
 
      </FormControl>
    </Box>
  );
};

export default AddUpdateData;
