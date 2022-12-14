import {
  Box,
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
  RadioGroup,
  SimpleGrid,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";


const data={
  id: "VARDCI5VXL5",
  mrpRange : {
    min: 8150,
    max: 8150
  },
  sellingPriceRange: {
    min:8150,
    max:8150
  },
  discountRange: {
    min: 0,
    max: 0
  },
  name: "L'Interdit Eau De Toilette",
  brand:"Givenchy",
  url: "/givenchy-linterdit-eau-de-toilette-VARDCI5VXL5",
  imagePath: "https://cdn10.nnnow.com/web-images/medium/styles/VARDCI5VXL5/1665569994739/1.jpg",
  altImagePath: "https://cdn19.nnnow.com/web-images/medium/styles/VARDCI5VXL5/1665569994733/2.jpg",
  otherImages:{
    3: "/styles/VARDCI5VXL5/1665569994736/3.jpg"
  },
  promotions:[],
  moreColors: null,
  isNew:true,
  sizeChartId: null,
  skus:null,
  video: null,
  allImages: null,
  specs: null,
  sapStyleId:null,
  productTags:[
    {
      tagText: "NEW",
      tagUrl: "https://cdn00.nnnow.com/web-images/master/product_tags/c0d20acc-1b4b-4e7e-86f4-4180f2247ea0/1552980365718/just_arrived.png",
      tagTextColor: "#d50032"
    }
  ],
  imageColor: "#f4e3c9"
}
const prices=["MRP Range","Selling Price Range","Discount Range"]
const intialPrice={
  mrp:{min:0,max:0},
  selling:{min:0,max:0},
  discount:{min:10,max:0}
}
// range==="discount"?val+"%" :"₹ " + val;
//val.replace(/^\$/, "");
const AddUpdate = () => {
  const [value, setValue] = useState(intialPrice);
  const format = (valKey,type) =>valKey==="discountRange"?value[valKey][type]+"%" :"₹ " + value[valKey][type];
  const handleValueChange = ( val,valKey,type) =>{
    setValue({...value,[valKey]:{...value[valKey],[type]:val}})
  }

 
  return (
    <Box w="60%" m="auto">
      <FormControl isRequired>
        <Grid
          spacing={10}
          columns={[2, null, 3]}
          m="auto"
          templateColumns="repeat(2, 1fr)"
          justifyContent="center"
          gap={10}
          
        >
          <GridItem>

            <FormLabel>Product Name</FormLabel>
            <Input placeholder="Product Name" />
          </GridItem>
          <GridItem>
            <FormLabel>Brand Name</FormLabel>
            <Input placeholder="Brand Name" />
          </GridItem>
          <GridItem>
            <FormLabel>Relative URL</FormLabel>
            <Input placeholder="Relative URL" />
          </GridItem>
          <GridItem>
            <FormLabel>Image URL</FormLabel>
            <OrderedList>
              <ListItem>
                <Input placeholder="image 1" />
              </ListItem>
              {/* <ListItem>
                <Input placeholder="image 2" />
              </ListItem>
              <ListItem>
                <Input placeholder="image 3" />
              </ListItem>
              <ListItem>
                <Input placeholder="image 4" />
              </ListItem>
              <ListItem>
                <Input placeholder="image 5" /> 
              </ListItem>*/}
            </OrderedList>
          </GridItem>
          <GridItem colSpan={2}>
          <HStack gap={12}>
         {prices.map((range)=> 

           <VStack>
            
            <FormLabel>{range}</FormLabel>
           
            <Box>
              <HStack>
            <FormLabel>Min</FormLabel>
            <NumberInput
              onChange={(val) => handleValueChange(val,range.split(" ").slice(0,1).join().toLowerCase(),"min")}
              value={format(range.split(" ").slice(0,1).join().toLowerCase()+range.split(" ").slice(1).join(),"min")}
              min={0}
            >
            
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            
            </NumberInput >
            </HStack>
            <HStack>
            <FormLabel>Max</FormLabel>
            <NumberInput
             // onChange={(valueString) => parse(valueString)}
              value={format(range.split(" ").slice(0,1).join().toLowerCase(),"max")}
              min={0} max={range==="Discount Range"?100:""}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </HStack>
            </Box>
            </VStack>)}</HStack>
            </GridItem>
           
          
          
          <FormLabel>Brand Name</FormLabel>
          <Input placeholder="Brand Name" />
          <FormLabel>Promotions</FormLabel>
          <UnorderedList>
            <Input placeholder="name" />
            <Input placeholder="displayName" />
            <Input placeholder="type" />
            <FormLabel>displayDiscount</FormLabel>

            <RadioGroup>
              <Radio value="1">Yes</Radio>
              <Radio value="2">No</Radio>
            </RadioGroup>
            <Input placeholder="no Coupon Details" />
            <Input placeholder="brands" />
            <Input placeholder="discountInPercentage" />
          </UnorderedList>
          <Input placeholder="moreColors" />
          <FormLabel>New</FormLabel>

          <RadioGroup>
            <Radio value="1">Yes</Radio>
            <Radio value="2">No</Radio>
          </RadioGroup>
          <Input placeholder="sizeChartId" />
          <Input placeholder="skus" />
          <Input placeholder="video" />
          <Input placeholder="allImages" />
          <Input placeholder="specs" />
          <Input placeholder="sapStyleId" />
          <FormLabel>productTags</FormLabel>
          <Input placeholder="productTags" />
        </Grid>
      </FormControl>
    </Box>
  );
};

export default AddUpdate;
