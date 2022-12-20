import {
  Box,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterData,
  getPagesCount,
  getProducts,
} from "../../HOC/AdminRedux/product.actions";
import Products from "../EyeCarePages/Products";
import ProductsPageInfo from "./ProductsPageInfo";
// EyeBrowData it a key to send data through props
// rating numReviews remain_qnty to key insert in product data

const Dashboard = ({ pathsInfo }) => {
  const products = useSelector((store) => store.adminManager.products);
 
  const [limit, setLimit] = useState(products.length);

  if( products.length!==0  && limit===0){
    setLimit(products.length)
  }
 // console.log(products, pathsInfo);

  const dispatch = useDispatch();
  const [path, setPath] = useState(null);

  const handlePath = (page) => {
    const newPath = pathsInfo[page].path;
//console.log(newPath)
    dispatch(getProducts(newPath));
    setPath(newPath);
   // console.log(111)
  };

  const handleData = ({ target }) => {
    const { name, value } = target;

    const productsData = dispatch(filterData(products, name));
    //const newSortedData = productsData.filter((products, i) => i < value);
   // console.log(111)
    setLimit(value)
    // setProductData(newSortedData);
  };
  

  return (
    <Box width="95%" m="auto" p="40px">
      <Grid
        templateColumns={["repeat(1,1fr)", null, "200px auto", "400px auto"]}
      >
        <Box>
          <Heading size="md">All Types of Products</Heading>

          {Object.keys(pathsInfo).map((page, i) => (
            <Text
              color={path == pathsInfo[page].path ? "blue" : ""}
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
        <Box display={!path ? "block" : "none"}>
          <ProductsPageInfo handlePath={handlePath} />
        </Box>
        <Box
          pl={["5px", null, "7px", null, "10px"]}
          display={path ? "block" : "none"}
        >
          <Stack direction={["column", null, "row"]}>
            <Select
              placeholder="Show low Stock"
              name="remain_qnty"
              bg="green.400"
              onChange={handleData}
              value={limit==5||limit==10||limit==15?limit:0}
            >
              <option value={5}>Last 5 Low Stock Products</option>
              <option value={10}>Last 10 Low Stock Products</option>
              <option value={15}>Last 15 Low Stock Products</option>
              
            </Select>

            <Select
              placeholder="Show low rating"
              variant="filled"
              onChange={handleData}
              value={limit==6||limit==12||limit==20?limit:0}
            >
              <option value={6}>Last 6 Low Rating Products</option>
              <option value={12}>Last 12 Low Rating Products</option>
              <option value={20}>Last 20 Low Rating Products</option>
            </Select>
          </Stack>
          <Text fontWeight={600} m={10} color="green">
         
            Total Products:{products.length}
          </Text>
          <Products  limit={limit} />
        </Box>
      </Grid>
    </Box>
  );
};
export default Dashboard;
