import { Box, Grid, GridItem, Heading, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../HOC/AdminRedux/product.actions";
import Products from "../EyeCarePages/Products";
// EyeBrowData it a key to send data through props
// rating numReviews remain_qnty to key insert in product data
const Paths = {
  "Eye Care": "womens-Eye-Brows",
};
const Dashboard = () => {
  const products = useSelector((store) => store.adminManager.products);
 

 
  console.log(products);
  //console.log(products)
  const dispatch = useDispatch();
  const [path, setPath] = useState("null");
console.log (path)
  const handlePath = (path) => {
    const newPath = Paths[path];
    console.log(newPath);
    dispatch(getProducts(newPath));
    setPath(newPath);
  };

  //   useEffect(()=>{
  // dispatch(getProducts(path))
  //   },[path])
  // const handleData()
  return (
    <Box width="95%" m="auto" p="40px">
      <Grid
        templateColumns={["repeat(1,1fr)", null, "200px auto", "400px auto"]}
      >
        <Box>
          <Heading size="md">All Types of Products</Heading>

          {Object.keys(Paths).map((page, i) => (
            <Text
              color={path?"blue":""}
              key={i + page}
              cursor="pointer"
              m="10px"
              onClick={() => {
                handlePath(page);
              }}
            >
              {page}
            </Text>
          ))}
        </Box>

        <Box display={path!=null ? "block" : "none"}>
          <Stack direction={["column",null,"row"]}>
            
          <Select placeholder="Show low Stock"  bg="green.400"color="white">
  <option value={5}>Last 5</option>
  <option value={10}>Last 10</option>
  <option value={15}>Last 15</option>
</Select>

          <Select placeholder='Show low rating'>
  <option value={6}>Last 6</option>
  <option value={12}>Last 12</option>
  <option value={20}>Last 20</option>
</Select>

          </Stack>
          <Products EyeBrowData={products} />
        </Box>
      </Grid>
    </Box>
  );
};
export default Dashboard;
