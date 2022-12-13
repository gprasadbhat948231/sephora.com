import {
  Box,
  Center,
  FormControl,
  FormLabel,
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
} from "@chakra-ui/react";
import React from "react";

const AddUpdate = () => {
  return (
    
    <SimpleGrid spacing={10} columns={[2, null, 3]} m="auto" justifyContent="center" gap={10}>
      <FormControl isRequired>
        <FormLabel>Product Name</FormLabel>
        <Input placeholder="Product Name" />
        <FormLabel>Brand Name</FormLabel>
        <Input placeholder="Brand Name" />
        <FormLabel>Relative URL</FormLabel>
        <Input placeholder="Relative URL" />
        <FormLabel>Image URL</FormLabel>
        <OrderedList>
          <ListItem>
            <Input placeholder="image 1" />
          </ListItem>
          <ListItem>
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
          </ListItem>
        </OrderedList>
        <FormLabel>MRP Range</FormLabel>
        <NumberInput placeholder="min mrp range" max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <NumberInput max={50} min={10} placeholder="max mrp range">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Selling Price Range</FormLabel>
        <NumberInput placeholder="min mrp range" max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <NumberInput max={50} min={10} placeholder="max mrp range">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormLabel>Discount Range</FormLabel>
        <NumberInput placeholder="min mrp range" max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <NumberInput max={50} min={10} placeholder="max mrp range">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
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
        {/* "moreColors": null,
    "isNew": false,
    "sizeChartId": null,
    "skus": null,
    "video": null,
    "allImages": null,
    "specs": null,
    "sapStyleId": null,
    "productTags":  */}
      </FormControl>
    </SimpleGrid>
   
  );
};

export default AddUpdate;
