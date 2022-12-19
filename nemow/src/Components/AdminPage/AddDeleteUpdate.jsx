import { Box, Button, Center, HStack, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { deleteProduct, setPage,AddUpdate } from "../../HOC/AdminRedux/product.actions";



export const UpdateDeleteButton = ({intialPrice,productsData}) => {
  
  const toast = useToast();

  const dispatch = useDispatch();
  const path = useSelector((store) => store.adminManager.path);
  const handleUpdate = (product,path) => {
   const page="Add Product"
   console.log(product)
      dispatch(AddUpdate(product,path))
     dispatch(setPage(page))
    // <Navigate to="addproduct"/>;
  };

 
  const handleDelete =  (id) => {
    dispatch(deleteProduct(id, path,productsData)).then((res) => {
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
    <Box w="90%" m="auto" >
      <HStack justifyContent="space-around" >
        <Button
        
          onClick={() => handleUpdate(intialPrice, "dummy")}
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
  const dispatch = useDispatch();

  const handleAdd = () => {
   const path="Add Product"
    dispatch(setPage(path))
   // <Navigate to="addproduct" />;
  };
  return (
    <Center>
      <Button
        m={15}
        colorScheme="messenger"
        onClick={() => handleAdd()}
      >
        Add Product
      </Button>
    </Center>
  );
};
