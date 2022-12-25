// button function page

import { Box, Button, Center, HStack, useToast } from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProduct,
  setPage,
  updateProduct_path,
} from "../../HOC/AdminRedux/product.actions";
import { IoMdAddCircle } from "react-icons/io";
export const UpdateDeleteButton = ({ intialPrice, productsData }) => {
  const toast = useToast();

  const dispatch = useDispatch();
  const { path, pagesInfo } = useSelector((store) => store.adminManager);

  // for updating path with existing value
  const handleUpdate = (product, path) => {
    const nextpage = "Update";
    console.log(product);
    dispatch(updateProduct_path(product, path));
    dispatch(setPage(nextpage));
    // <Navigate to="addproduct"/>;
  };

  // for Deleting product from server
  const handleDelete = (id) => {
    dispatch(deleteProduct(id, path, productsData, pagesInfo)).then((res) => {
      if (res.status === 200)
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
    <Box w="90%" m="auto">
      <HStack justifyContent="space-around">
        <Button
          onClick={() => handleUpdate(intialPrice, path)}
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

// add button with path set(Add Product) cart
export const AddButton = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const nextpage = "Add Product";
    dispatch(setPage(nextpage));
    // <Navigate to="addproduct" />;
  };
  return (
    <Center>
      <Button
        m={15}
        colorScheme="messenger"
        leftIcon={<IoMdAddCircle />}
        onClick={() => handleAdd()}
      >
        Add Product
      </Button>
    </Center>
  );
};
