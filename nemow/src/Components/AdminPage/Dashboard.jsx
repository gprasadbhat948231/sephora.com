// admin dashboard page
import { Box, Grid, Heading, Select, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, getProducts } from "../../HOC/AdminRedux/product.actions";
import Products from "../EyeCarePages/Products";
import PiChart from "./PiChart";
import ProductsPageInfo from "./ProductsPageInfo";



const Dashboard = ({ pathsInfo }) => {
  const{ products} = useSelector((store) => store.adminManager);
  const dispatch = useDispatch();
  const [path, setPath] = useState(null);

  // setting limit as per select tag defalt as per products data length
  const [limit, setLimit] = useState(0);

 
  // set path with help of reducer to fetch data from path
  const handlePath = (page) => {
    const newPath = pathsInfo[page].path;
    dispatch(getProducts(newPath));
    setPath(newPath);
  };

  // sorting(filter) data using action and also set limit
  const handleData = ({ target }) => {
    const { name, value } = target;
    dispatch(filterData(products, name));
    setLimit(value);
  };
useEffect(()=>{
  setLimit(products.length)
},[products])
  return (
    <Box width="95%" m="auto" p="40px">
      <Grid
        templateColumns={["repeat(1,1fr)", null,null,null, !path ? "auto 500px" : "500px auto"]}
        alignItems="center"
        gap="30px"
      >
        {/* all pages avilable in website */}
        
        <Box display={path ? "block" : "none"}>
          <Heading size="md">All Types of Products</Heading>

          {Object.keys(pathsInfo).map((page, i) => (
            <Text
              color={path === pathsInfo[page].path ? "blue" : ""}
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
       

        {/* display only when any page selected  product information*/}
        <Box display={!path ? "block" : "none"}>
          <ProductsPageInfo handlePath={handlePath} />
        </Box>
        <Box display={!path ? "block" : "none"} mt="60px">
      <PiChart />
       
        </Box>
        <Box
          pl={["5px", null, "7px", null, "10px"]}
          display={path ? "block" : "none"}
        >
          <Stack direction={["column", null, "row"]}>
            {/* tag for sorting stock */}
            <Select
              placeholder="Show low Stock"
              name="remain_qnty"
              bg="green.400"
              onChange={handleData}
              value={limit === "5" || limit === "10" || limit === "15" ? limit : 0}
            >
              <option value={5}>Last 5 Low Stock Products</option>
              <option value={10}>Last 10 Low Stock Products</option>
              <option value={15}>Last 15 Low Stock Products</option>
            </Select>

            {/* tag for sorting stock*/}
            <Select
              placeholder="Show low rating"
              variant="filled"
              onChange={handleData}
              value={limit === "6" || limit === "12" || limit === "20" ? limit : 0}
            >
              <option value={6}>Last 6 Low Rating Products</option>
              <option value={12}>Last 12 Low Rating Products</option>
              <option value={20}>Last 20 Low Rating Products</option>
            </Select>
          </Stack>

          {/* showing all products below the limit */}
          <Products limit={limit} />
        </Box>
      </Grid>
    </Box>
  );
};
export default Dashboard;
