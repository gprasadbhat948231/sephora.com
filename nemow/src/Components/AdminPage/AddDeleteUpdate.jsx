import { Box, Button, Center, HStack, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { deleteProduct } from "../../HOC/AdminRedux/product.actions";
import AddUpdate from "./AddUpdate";
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

export const UpdateDeleteButton = () => {
  const toast = useToast();

  const dispatch = useDispatch();

  const handleUpdate = () => {
    <Navigate to="addproduct" />;
  };

  const path = "women-perfume";
  const handleDelete = async (id) => {
    dispatch(deleteProduct(id, path)).then((res) => {
      // console.log(res)
      if (res.status == 200)
        toast({
          title: "Product Deleted Successfully.",
          description: "We've delete your product for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
    });
  };

  return (
    <Box m={20}>
      <HStack>
        <Button
          m={10}
          onClick={(intialPrice) => handleUpdate(intialPrice)}
          colorScheme="orange"
        >
          Update
        </Button>
        <Button colorScheme="red" onClick={() => handleDelete(intialPrice.id)}>
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export const AddButton = () => {
  const handleAdd = () => {
    <Navigate to="addproduct" />;
  };
  return (
    <Center>
      <Button
        m={15}
        colorScheme="messenger"
        onClick={(intialPrice) => handleAdd(intialPrice)}
      >
        Add Product
      </Button>
    </Center>
  );
};
