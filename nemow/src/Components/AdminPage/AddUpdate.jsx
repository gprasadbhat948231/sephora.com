// form page with validation

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
  VStack,
  Button,
  useToast,
  Stack,
  Select,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postProduct,
  updateProduct,
  updateProduct_path,
} from "../../HOC/AdminRedux/product.actions";

// price rages div hard coded data
const pricesRanges = {
  mrpRange: "MRP Range",
  sellingPriceRange: "Selling Price Range",
  discountRange: "Discount Range",
};

//("/"+brand+"-"+name+"-"+id).replaceAll("'", "").replaceAll(" ", "-").toLowerCase()

const AddUpdate = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { path, page, products, pagesInfo } = useSelector(
    (store) => store.adminManager
  );
  const initialProduactData = useSelector(
    (store) => store.adminManager.productData
  );

  // for avoiding typed data when request is rehected
  const [productData, setProductData] = useState(initialProduactData);

  // key of product data destrutured
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
    remain_qnty = 0,
    sapStyleId,
    productTags,
    // productTags: [{ tagText, tagUrl, tagTextColor }],
    imageColor,
  } = productData;

  // for adding special symbol in input field
  const format = (valKey, type) =>
    valKey === "discountRange"
      ? productData[valKey][type] + "%"
      : "₹" + productData[valKey][type];

  // }

  // handling  range (number) related change
  const handleValueChange = (val, valKey, type) => {
    val.replace(/^\"₹"/, "");
    val = valKey === "discountRange" && val > 100 ? (val = 100) : val;

    const product = { ...productData };
    product[valKey][type] = val;

    setProductData(product);
  };

  // handling  fist level object keys data
  const handleChange = (e, name) => {
    if (name) {
      setProductData({ ...productData, [name]: e });
    } else {
      const { name, value } = e.target;
      setProductData({ ...productData, [name]: value });
    }
  };

  // handling tags related values
  const handleTags = (e) => {
    const { name, value } = e.target;
    const product = { ...productData };
    product.productTags[0][name] = value;
    setProductData(product);
  };

  // handling prmotions related values
  const handlePromotions = (e, radio) => {
    if (radio) {
      const product = { ...productData };
      product.promotions[0][radio] = e;
      setProductData(product);
    } else {
      const { name, value } = e.target;
      const product = { ...productData };
      product.promotions[0][name] = value;
      setProductData(product);
    }
  };

  // post the edited data to server and handale responses
  const postData = () => {
    if (
      id &&
      mrpRange &&
      sellingPriceRange &&
      discountRange &&
      name &&
      brand &&
      imagePath &&
      path
    ) {
      page === "Update"
        ? dispatch(updateProduct(productData, path, products)).then((res) => {
            console.log(res);
            if (res.status === 200) {
              toast({
                title: "Product Updated Successfully.",
                description: "We've Updated product for you.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              setProductData(initialProduactData);
            }
          })
        : dispatch(postProduct(productData, path, products))
            .then((res) => {
              console.log(res);
              if (res.status === 201) {
                toast({
                  title: "Product Added Successfully.",
                  description: "We've Add  product for you.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
                setProductData(initialProduactData);
              }
            })
            .catch((err) => {
              toast({
                title: "Server Error",
                description: err.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            });
    } else {
      toast({
        title: path
          ? "Please fill all require data"
          : "Please select page path at top",
        description: "Failed to add Product",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handlePageSelect = ({ target }) => {
    const path = target.value;
    dispatch(updateProduct_path(initialProduactData, path));
  };

  return (
    <Box w="60%" m="auto">
      <Center mt={"10px"}>
     
        <Select
          placeholder="Select page to add product"
          bg="green.500"
          color="white"
          value={path}
          isDisabled={page === "Update" ? true : false}
          onChange={handlePageSelect}
        >
          {pagesInfo &&
            Object.keys(pagesInfo).map((page) => (
              <option
                key={1001 + page}
                style={{ color: "black" }}
                value={pagesInfo[page].path}
              >
                {page}
              </option>
            ))}
        </Select>
      </Center>
      <Center>
        {/* add or update button */}
        <Button
          m={15}
          colorScheme={page === "Update" ? "twitter" : "whatsapp"}
          onClick={postData}
        >
          {page}
        </Button>
      </Center>

      {/* form append here */}
      <Grid
        templateColumns={[null, "repeat(1, 1fr)", null, null, "55% 45%"]}
        justifyContent="center"
        gap="30px 80px"
        alignItems="start"
      >
        <FormControl isRequired>
          <GridItem>
            <Stack
              direction={["column", null, "row"]}
              justifyContent="space-between"
            >
              <Box>
                <FormLabel>Product ID</FormLabel>
                <Input
                  placeholder=" Product ID"
                  value={id}
                  name="id"
                  onChange={handleChange}
                  isDisabled={page === "Update" ? true : false}
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
            </Stack>
          </GridItem>
        </FormControl>
        <FormControl isRequired>
          <GridItem>
            <FormLabel>Relative URL</FormLabel>
            <Input
              placeholder="Relative URL"
              value={
                url ||
                ("/" + brand + " " + name + " " + id.replaceAll("'", ""))
                  .replaceAll(" ", "-")
                  .toLowerCase()
              }
              name="url"
              onChange={handleChange}
              isDisabled
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
          <GridItem>
            <FormLabel>Brand Name</FormLabel>
            <Input
              placeholder="Brand Name"
              value={brand}
              name="brand"
              onChange={handleChange}
            />
          </GridItem>
        </FormControl>

        {/* image data apeended here */}
        <FormControl isRequired>
          {
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
                    // value={
                    //   otherImages
                    //     ? "https://cdn19.nnnow.com/web-images/medium" +
                    //       otherImages[3]
                    //     : ""
                    // }
                    name="otherImages[3]"
                    onChange={handleChange}
                  />
                </ListItem>
                <ListItem>
                  <Input
                    placeholder="image 4"
                    // value={
                    //   otherImages
                    //     ? otherImages[4]
                    //       ? "https://cdn19.nnnow.com/web-images/medium" +
                    //         otherImages["4"]
                    //       : ""
                    //     : ""
                    // }
                    name="otherImages['4']"
                    onChange={handleChange}
                  />
                </ListItem>
                <ListItem>
                  <Input
                    placeholder="image 5"
                    // value={
                    //   otherImages
                    //     ? otherImages["5"]
                    //       ? "https://cdn19.nnnow.com/web-images/medium" +
                    //         otherImages["5"]
                    //       : ""
                    //     : ""
                    // }
                    name="otherImages['5']"
                    onChange={handleChange}
                  />
                </ListItem>
              </OrderedList>
            </GridItem>
          }
        </FormControl>

        {/* some small input data  here */}
        <GridItem>
          <FormControl isRequired>
            <SimpleGrid templateColumns={["1fr", "40% 60%"]} gap={"5px"}>
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
                <Radio p="0 10px" value="true" defaultChecked>
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

        {/* products tag related data is here */}
        <GridItem>
          <FormControl isRequired>
            <FormLabel textAlign="center">Product Tags</FormLabel>
            <Grid templateColumns={["1fr", "25% 75%"]} gap="5px">
              <FormLabel>Text Tag</FormLabel>
              <Input
                placeholder=" Tag Text"
                value={productTags[0].tagText}
                name="tagText"
                onChange={handleTags}
              />
              <FormLabel>Tag URL</FormLabel>
              <Input
                placeholder=" Tag URL"
                value={productTags[0].tagUrl}
                name="tagUrl"
                onChange={handleTags}
              />
              <FormLabel>Tag Text Color</FormLabel>
              <Input
                placeholder=" Tag Text Color"
                value={productTags[0].tagTextColor}
                name="tagTextColor"
                onChange={handleTags}
              />
            </Grid>
          </FormControl>
        </GridItem>

        {/* promotion related data */}

        <GridItem display={promotions.length > 0 ? "block" : "none"}>
          <FormLabel textAlign="center">Promotions</FormLabel>

          <Grid
            templateColumns="40% 60%"
            gap="5px"
            display={promotions.length > 0 ? "grid" : "none"}
          >
            <FormLabel>Promotion name</FormLabel>
            <Input
              placeholder="name"
              value={promotions[0]?.name}
              name="name"
              onChange={handlePromotions}
            />
            <FormLabel>Display name</FormLabel>
            <Input
              placeholder="displayName"
              value={promotions[0]?.displayName}
              name="displayName"
              onChange={handlePromotions}
            />
            <FormLabel>Promotion Type</FormLabel>
            <Input
              placeholder="type"
              value={promotions[0]?.type}
              name="type"
              onChange={handlePromotions}
            />
            <FormLabel>Display Discount</FormLabel>
            <RadioGroup
              onChange={(e) => handlePromotions(e, "displayDiscount")}
              defaultValue="false"
              value={promotions[0]?.displayDiscount}
            >
              <Radio p="0 20px" value="true">
                Yes
              </Radio>
              <Radio value="false">No</Radio>
            </RadioGroup>
            <FormLabel fontSize={["15px", "16px"]}>
              Discount Percentage
            </FormLabel>
            <Input
              placeholder="discountInPercentage"
              value={promotions[0]?.discountInPercentage}
              name="discountInPercentage"
              onChange={handlePromotions}
            />
          </Grid>
        </GridItem>

        {/* some extra data */}
        <GridItem>
          <FormLabel>Video</FormLabel>
          <Input
            placeholder="video"
            value={video}
            name="video"
            onChange={handleChange}
          />
        </GridItem>
        <GridItem>
          <FormControl isRequired>
            <FormLabel>Quantity</FormLabel>
            <Input
              placeholder="Update Quantity"
              value={remain_qnty}
              name="remain_qnty"
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
      </Grid>

      {/* pricing related data */}
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
                  min={productData[range].min}
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
          colorScheme={page === "Update" ? "twitter" : "whatsapp"}
          onClick={postData}
        >
          {page}
        </Button>
      </Center>
    </Box>
  );
};

export default AddUpdate;
