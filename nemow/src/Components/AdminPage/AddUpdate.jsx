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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../HOC/AdminRedux/product.actions";


const pricesRanges = {
  mrpRange: "MRP Range",
  sellingPriceRange: "Selling Price Range",
  discountRange: "Discount Range",
};

//("/"+brand+"-"+name+"-"+id).replaceAll("'", "").replaceAll(" ", "-").toLowerCase()
const AddUpdate = ({intialPrice}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const initialProduactData=useSelector((store)=>store.adminManager.productData)
  const [productData, setProductData] = useState( initialProduactData);
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
  //console.log(promotions[0].name)
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
    // console.log(e, name);
    if (name) {
      
      setProductData({ ...productData, [name]: e });
    } else {
      const { name, value } = e.target;
      setProductData({ ...productData, [name]: value });
    }
   
   
  };
  const getData=async()=>{
    let path="women-perfume "
    const url="https://sephorajsonserver.onrender.com/"+path;
    let res=await axios.get(url)
    // console.log(res)
  }
  const postData=()=>{
    let path="women-perfume "
    let description="Please fill all require data"
    let title="Failed to add Product"
    let mark="warning"
    let status
    if(id && mrpRange&&sellingPriceRange&&discountRange&&name&&brand&&url&&imagePath&&isNew){
     
      let description="Product Added Successfully."
      let title="We've Add  product for you."
      let mark="success"
    dispatch(postProduct(productData,path)).then((res) => {
     //  console.log(res)
     status=res.status
    })}
    
        toast({
          title:title ,
          description:description ,
          status: mark,
          duration: 3000,
          isClosable: true,
        });
     
    
  
}

  useEffect(()=>{
    getData()
   
        },[])
  return (
    <Box w="60%" m="auto">
      
      <Center>
      <Button
        m={15}
        colorScheme="messenger"
        onClick={postData}
      >
        Add Product
      </Button>
    </Center>
        <Grid
          templateColumns={[null, "repeat(1, 1fr)", null, null, "55% 45%"]}
          justifyContent="center"
          gap="30px 80px"
          alignItems="start"
        >
          <FormControl isRequired >
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
          </FormControl>
          <FormControl isRequired>
           <GridItem>
            <FormLabel>Relative URL</FormLabel>
            <Input
              placeholder="Relative URL"
              value={url || (("/"+ brand+" "+name+" "+id.replaceAll("'", "")).replaceAll(" ", "-").toLowerCase())}
              name="url"
              onChange={handleChange}
            />
          </GridItem>
          </FormControl>
          <FormControl isRequired>
          <GridItem>
            <FormLabel>Product Name</FormLabel>
            <Input
              placeholder="Product Name"
              value={name}
              name="name"
              onChange={handleChange}
              
            />
          </GridItem>
          </FormControl>
          <FormControl isRequired>
          <GridItem >
            <FormLabel>Brand Name</FormLabel>
            <Input
              placeholder="Brand Name"
              value={brand}
              name="brand"
              onChange={handleChange}
              
            />
          </GridItem> 

          </FormControl>
          < FormControl isRequired>
          { <GridItem>
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
                   onChange={handleChange}
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
                   onChange={handleChange}
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
                   onChange={handleChange}
                />
              </ListItem>
            </OrderedList>
          </GridItem> }
          </FormControl>
          <GridItem>
          < FormControl isRequired>
            <SimpleGrid templateColumns="40% 60%" gap="5px">
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
                  onChange={handleChange}
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
            </FormControl>
          </GridItem>
          <GridItem>
          < FormControl isRequired>
            <FormLabel textAlign="center">Product Tags</FormLabel>
            <Grid templateColumns="25% 75%" gap="5px">
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
            </FormControl>
          </GridItem>
          {/* display={promotions.length ? "block" : "none"}  */}
          <GridItem>
            <FormLabel textAlign="center">Promotions</FormLabel>

            <Grid templateColumns="40% 60%" gap="5px">
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
                    min={format(range, "min")}
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
        <Center>
      <Button
        m={15}
        colorScheme="messenger"
        onClick={postData}
      >
        Add Product
      </Button>
    </Center>
     
    </Box>
  );
};

export default AddUpdate;
