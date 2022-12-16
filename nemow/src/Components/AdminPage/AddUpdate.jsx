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
  skus:1,
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
// const intialPrice={
//   mrp:{min:0,max:0},
//   selling:{min:0,max:0},
//   discount:{min:10,max:0}
// }
//("/"+brand+"-"+name+"-"+id).replaceAll("'", "").replaceAll(" ", "-").toLowerCase()
const AddUpdate = () => {
  const [productData, setProductData] = useState(intialPrice);
  const {
    id,

    mrpRange,
    sellingPriceRange,
    discountRange,
    name,
    brand,
    url,
    imagePath,
    altImagePath,
    otherImages,
    promotions,
    moreColors,
    isNew,
    sizeChartId,
    skus,
    video,
    allImages,
    specs,
    sapStyleId,
    productTags,
    productTags: [{ tagText, tagUrl, tagTextColor }],
    imageColor,
  } = productData;
  console.log(promotions[0].name)
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
    console.log(e, name);
    if (name) {
      setProductData({ ...productData, [name]: e });
    } else {
      const { name, value } = e.target;
      setProductData({ ...productData, [name]: value });
    }
   
    //
    //console.log(value,name,value.name)
    //setProductData({ ...productData, [name]:value });
  };
  const getData=async()=>{
    let path="women-perfume "
    const url="https://sephorajsonserver.onrender.com/"+path;
    let res=await axios.get(url)
    console.log(res)
  }
  const postData=async()=>{
    console.log(productData)
     //const data=JSON.stringify(productData)
   // console.log(data)
     let path="women-perfume "
     const url="https://sephorajsonserver.onrender.com/"+path;
     let res=await axios.post(url,productData)
     console.log(res)
    
  }
  const postDelete=async()=>{
let id=1
let path="women-perfume "
    const url="https://sephorajsonserver.onrender.com/"+path+"/"+id;
    let res=await axios.get(url)
    console.log(res)
  }
  useEffect(()=>{
    getData()
    postDelete()
        },[])
  return (
    <Box w="60%" m="auto">
      <FormControl isRequired onSubmit={postData}>
        <Grid
          templateColumns={[null, "repeat(1, 1fr)", null, null, "55% 45%"]}
          justifyContent="center"
          gap="30px 80px"
          alignItems="start"
        >
          <GridItem>
            <HStack justifyContent="space-between">
              <Box>
                <FormLabel>Product ID</FormLabel>
                <Input
                  placeholder=" Product ID"
                  value={id}
                  name="id"
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <FormLabel>Image Colors</FormLabel>

                <Input
                  placeholder="Image Color"
                  value={imageColor}
                  name="imageColor"
                  onChange={handleChange}
                />
              </Box>
            </HStack>
          </GridItem>
          <GridItem>
            <FormLabel>Relative URL</FormLabel>
            <Input
              placeholder="Relative URL"
              value={url}
              name="url"
              onChange={handleChange}
            />
          </GridItem>
          <GridItem>
            <FormLabel>Product Name</FormLabel>
            <Input
              placeholder="Product Name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </GridItem>
          <GridItem col>
            <FormLabel>Brand Name</FormLabel>
            <Input
              placeholder="Brand Name"
              value={brand}
              name="brand"
              onChange={handleChange}
            />
          </GridItem>

          {/* <FormLabel>Brand Name</FormLabel>
          <Input placeholder="Brand Name" name="brand" value="brand" /> */}

          <GridItem>
            <FormLabel>Image URL</FormLabel>
            <OrderedList spacing="4px">
              <ListItem>
                <Input
                  placeholder="image 1"
                  value={imagePath}
                  name="imagePath"
                  onChange={handleChange}
                />
              </ListItem>
              <ListItem>
                <Input
                  placeholder="image 2"
                  value={altImagePath}
                  name="altImagePath"
                  onChange={handleChange}
                />
              </ListItem>
              <ListItem>
                <Input
                  placeholder="image 3"
                  value={
                    otherImages
                      ? "https://cdn19.nnnow.com/web-images/medium" +
                        otherImages["3"]
                      : ""
                  }
                  name="otherImages['3']"
                />
              </ListItem>
              <ListItem>
                <Input
                  placeholder="image 4"
                  value={
                    otherImages
                      ? otherImages[4]
                        ? "https://cdn19.nnnow.com/web-images/medium" +
                          otherImages["4"]
                        : ""
                      : ""
                  }
                  name="otherImages['4']"
                />
              </ListItem>
              <ListItem>
                <Input
                  placeholder="image 5"
                  value={
                    otherImages
                      ? otherImages["5"]
                        ? "https://cdn19.nnnow.com/web-images/medium" +
                          otherImages["5"]
                        : ""
                      : ""
                  }
                  name="otherImages['5']"
                />
              </ListItem>
            </OrderedList>
          </GridItem>
          <GridItem>
            <SimpleGrid templateColumns="repeat(2,1fr)" gap="5px">
              <FormLabel>More Colors</FormLabel>
              <Input
                placeholder="moreColors"
                value={moreColors}
                name="moreColors"
                onChange={handleChange}
              />

              <FormLabel>New</FormLabel>

              <RadioGroup
                onChange={(e) => handleChange(e, "isNew")}
                name="isNew"
                value={isNew}
              >
                <Radio p="0 10px" value="true">
                  Yes
                </Radio>
                <Radio value="false">No</Radio>
              </RadioGroup>

              <FormLabel>Size Chart Id</FormLabel>
              <Input
                placeholder="sizeChartId"
                value={sizeChartId}
                name="sizeChartId"
              />
              <FormLabel>Skus</FormLabel>
              <Input
                placeholder="skus"
                value={skus}
                name="skus"
                onChange={handleChange}
              />

              <FormLabel>Spacial Style Id</FormLabel>
              <Input
                placeholder="sapStyleId"
                value={sapStyleId}
                name="sapStyleId"
                onChange={handleChange}
              />
            </SimpleGrid>
          </GridItem>
          <GridItem>
            <FormLabel textAlign="center">Product Tags</FormLabel>
            <Grid templateColumns="repeat(2,1fr)" gap="5px">
              <FormLabel>Text Tag</FormLabel>
              <Input
                placeholder=" Tag Text"
                value={productTags[0].tagText}
                name="productTags[0].tagText"
                onChange={handleChange}
              />

              <FormLabel>Tag URL</FormLabel>
              <Input
                placeholder=" Tag URL"
                value={productTags[0].tagUrl}
                name="productTags[0].tagUrl"
                onChange={handleChange}
              />
              <FormLabel>Tag Text Color</FormLabel>
              <Input
                placeholder=" Tag Text Color"
                value={productTags[0].tagTextColor}
                name="productTags[0]tagTextColor"
                onChange={handleChange}
              />
            </Grid>
          </GridItem>
          {/* display={promotions.length ? "block" : "none"}  */}
          <GridItem>
            <FormLabel textAlign="center">Promotions</FormLabel>

            <Grid templateColumns="repeat(2,1fr)" gap="5px">
              <FormLabel>Promotion name</FormLabel>

              <Input
                placeholder="name"
                value={promotions[0].name}
                name="promotions[0].name"
                onChange={handleChange}
              />

              <FormLabel>Display name</FormLabel>
              <Input
                placeholder="displayName"
                value={promotions[0].displayName}
                name="promotions[0].displayName"
                onChange={handleChange}
              />

              <FormLabel>Promotion Type</FormLabel>
              <Input
                placeholder="type"
                value={promotions[0].type}
                name="promotions[0].type"
                onChange={handleChange}
              />

              <FormLabel>displayDiscount</FormLabel>

              <RadioGroup
                onChange={(e) => handleChange(e, "promotions[0].displayDiscount")}
              >
                <Radio p="0 20px" value="true">
                  Yes
                </Radio>
                <Radio value="false">No</Radio>
              </RadioGroup>

              <FormLabel>Discount Percentage</FormLabel>
              <Input
                placeholder="discountInPercentage"
                value={promotions[0].discountInPercentage}
                name="promotions[0].discountInPercentage"
                onChange={handleChange}
              />
            </Grid>
          </GridItem>
        </Grid>
        <Box mt={10}>
          <FormLabel>Video</FormLabel>
          <Input placeholder="video" value={video} name="video" onChange={handleChange}/>
          
        </Box>

        <Box mt={10}>
          <SimpleGrid columns={[1, 1, null, 2, null, 3]} spacing={20}>
            {Object.keys(pricesRanges).map((range) => (
              <VStack key={100 + range} alignItems="start">
                <FormLabel>{pricesRanges[range]}</FormLabel>

                <HStack>
                  <FormLabel>Min</FormLabel>
                  <NumberInput
                    onChange={(val) => handleValueChange(val, range, "min")}
                    value={format(range, "min")}
                    min={0}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>

                <HStack>
                  <FormLabel>Max</FormLabel>
                  <NumberInput
                    name={range}
                    onChange={(val) => handleValueChange(val, range, "max")}
                    value={format(range, "max")}
                    min={0}
                    max={range === "discountRange" ? 100 : 10000}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
        <Button onClick={postData}>ADD</Button>
      </FormControl>
    </Box>
  );
};

export default AddUpdate;
