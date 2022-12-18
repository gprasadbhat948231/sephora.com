//  Suvam Page(EyeCare)=---
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Grid,
  Button,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  useDisclosure,
  useToast,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { BsHeartFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import AddToCartModal from "../Components/EyeCarePages/AddToCartModal";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart_Eyecare,
  addtowishlist_Eyecare,
  cartlistGetdata,
  Remove_from_Wishlist,
  wishlistGetdata,
} from "../HOC/EyecareRedux/Actions";
const data = {
  rating: 4.2,
  numReviews: 120,
};
function EyeCare() {



  const [EyeBrowData, setEyeBrowData] = useState([]);
  const [Allfilterdata, setfilterdata] = useState([]);
  // eyeBrow Data fetching //
  const GetData = () => {
    axios(`https://sephorajsonserver.onrender.com/womens-Eye-Brows`).then(
      (ress) => {
        setEyeBrowData(ress.data);
        setfilterdata(ress.data);
      }
    );
  };
  // for adding wishlist data //
  useEffect(() => {
    GetData();
  }, []);

  // Type fillter start from here
  const HandleFilterByType = (type) => {

    if (type === "All") {
      setfilterdata(EyeBrowData);
    } else {
      let filterdata = EyeBrowData.filter((ele) => ele.name.includes(type));
      setfilterdata(filterdata);
    }
  };

  // Brand filter start from here
  const HandleFilterByBrand = (brand) => {
    if (brand === "All") setfilterdata(EyeBrowData);
    else {
      let filterdata = EyeBrowData.filter((ele) => ele.brand.includes(brand));
      setfilterdata(filterdata);
    }
  };

  // Price filter start from here==-----
  const HandleFilterByPrice = (type) => {
    if (type === "price") {
      setfilterdata(EyeBrowData);
    } else if (type === "price1") {
      let filterdata = EyeBrowData.filter(
        (ele) => ele.mrpRange.min >= 450 && ele.mrpRange.min <= 900
      );
      filterdata.sort((a, b) => a.mrpRange.min - b.mrpRange.min);
      setfilterdata(filterdata);
    } else if (type === "price2") {
      let filterdata = EyeBrowData.filter(
        (ele) => ele.mrpRange.min >= 900 && ele.mrpRange.min <= 1500
      );
      filterdata.sort((a, b) => a.mrpRange.min - b.mrpRange.min);
      setfilterdata(filterdata);
    } else if (type === "price3") {
      let filterdata = EyeBrowData.filter(
        (ele) => ele.mrpRange.min >= 1500 && ele.mrpRange.min <= 2000
      );
      filterdata.sort((a, b) => a.mrpRange.min - b.mrpRange.min);
      setfilterdata(filterdata);
    } else if (type === "price4") {
      let filterdata = EyeBrowData.filter((ele) => ele.mrpRange.min >= 2000);

      filterdata.sort((a, b) => a.mrpRange.min - b.mrpRange.min);
      setfilterdata(filterdata);
    }
  };
  //
  return (
    <>
      <Box
        display={{
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
          md: "inherit",
          sm: "inherit",
        }}
      >
        <Box mt="20px"
          w={{ "2xl": "20%", lg: "20%", xl: "20%", md: "100%", sm: "100%" }}
          h="auto"
        >
          <EyecareLeftSection
            HandleFilterByType={HandleFilterByType}
            HandleFilterByBrand={HandleFilterByBrand}
            HandleFilterByPrice={HandleFilterByPrice}
          />
        </Box>
        <Box mt="40px" visibility={EyeBrowData.length>0?"visible":"hidden"} w={{ "2xl": "80%", lg: "80%", xl: "80%", md: "100%", sm: "100%" }}>
          <EyeCareSection
            setEyeBrowData={setEyeBrowData}
            EyeBrowData={Allfilterdata}
          />
           <Box visibility={EyeBrowData.length===0?"visible":"hidden"} >
      {EyeBrowData.length==0&&<LoadingComponent/>}
      </Box>
        </Box>
       
      </Box>
      
      <Divider color="black" />
      <Box w="96%" m="auto">
        <Heading>Browse More in Eye Care</Heading>
        <Box>
          <Button id="Footer_button1">Eye Creams & Treatments</Button>
          <Button id="Footer_button">Eye Masks</Button>
          <Text id="Footer_text">
            <span>Related Content:</span> Eye Cream & Under Eye Cream for Dark
            Circles, Fragrance, Under Eye Concealer & Concealer for Dark
            Circles, Eye Cream for Men & Men's Under Eye Cream, Eye Masks, Clean
            Hair Products | Natural & Organic Options, Eye Creams for Puffiness,
            Eye Serums for Fine Lines, Eye Creams with Retinols
          </Text>
        </Box>
      </Box>
    </>
  );
}
export default EyeCare;

function EyeCareSection({ EyeBrowData = [] }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [CartData, setCartData] = useState({});
  const toast = useToast();
  const {Wishlist,CartList} = useSelector((store) => store.CartandWishReducer);

  // const CartList = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(wishlistGetdata());
  }, []);
  useEffect(() => {
    dispatch(cartlistGetdata());
  }, []);
  // add to watch list //
  const AddedtoWishlist = (ele) => {
    if (!Wishlist.find((item) => ele.id === item.id)) {
      dispatch(addtowishlist_Eyecare(ele));
      toast({
        title: "Wishlist.",
        description: "Item Added To Wishlist Succesfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else if (Wishlist.find((item) => ele.id === item.id)) {
      dispatch(Remove_from_Wishlist(ele.id));
      toast({
        title: "Wishlist.",
        description: "Item Is Removed From Wishlish.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  // to know wish list //
  const ToknowWishlist = (Eyedata) => {
    if (Wishlist.find((item) => Eyedata.id === item.id)) {
      return true;
    }
    return false;
  };
  const AddedtoCartList = (Cartitem) => {
    if (!CartList.find((item) => Cartitem.id === item.id)) {
      dispatch(addtocart_Eyecare(Cartitem));
      toast({
        title: "Cartlist.",
        description: "Item Added To Cartlist Succesfully.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  // to know wish list //
  const ToknowCartList = (Cartitem) => {
    if (CartList.find((item) => Cartitem.id === item.id)) {
      return true;
    }
    return false;
  };
  //return EyeCareSection here //
  return (
    <Box w="100%" m="auto" justifyContent={"center"}>
      {/* filter aand left side link added here=---  */}
      <Grid
        w="100%"
        m="auto"
        templateColumns={{
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        rowGap={1}
      >
        {CartData.name && (
          <AddToCartModal
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            CartData={CartData}
            ToknowCartList={ToknowCartList}
            AddedtoCartList={AddedtoCartList}
            ToknowWishlist={ToknowWishlist}
          />
        )}
        {EyeBrowData.map((Eyedata) => (
          <Flex
            m="auto"
            w="100%"
            key={Eyedata.id}
            p={5}
            alignItems="center"
            justifyContent="center"
          >
            <Box maxW="sm" rounded="lg" position="relative">
              <Flex>
                <Image
                  onClick={() => {
                    setCartData(Eyedata);
                    onOpen();
                  }}
                  src={Eyedata.imagePath}
                  alt={`Picture of ${Eyedata.name}`}
                  roundedTop="lg"
                  w="400px"
                />
                <Flex
                  position="absolute"
                  right="0px"
                  p={4}
                  alignItems="center"
                  justifyContent={"space-between"}
                  roundedBottom={"sm"}
                  cursor="pointer"
                >
                  <BsHeartFill
                    onClick={() => AddedtoWishlist(Eyedata)}
                    fill={ToknowWishlist(Eyedata) ? "red" : "grey"}
                    fontSize={"24px"}
                  />
                </Flex>
              </Flex>
              <Box
                p="6"
                onClick={() => {
                  setCartData(Eyedata);
                  onOpen();
                }}
              >
                <Box d="flex" alignItems="baseline"></Box>
                <Box align="left">{Eyedata.brand}</Box>
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="12px"
                    color="grey"
                    align="left"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                  >
                    {Eyedata.name}
                  </Box>
                </Flex>
                <Flex justifyContent="space-between" alignContent="center">
                  <Rating rating={data.rating} numReviews={data.numReviews} />
                </Flex>
                <Box
                  align="left"
                  fontSize="2xl"
                  // color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    ₹
                  </Box>
                  {Eyedata.sellingPriceRange.min}
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}


      </Grid>
      {/* grid end here=--- */}
    </Box>
  
  );
}

//  for ratings
function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} {numReviews > 1}
      </Box>
    </Box>
  );
}
const EyecareLeftSection = ({
  HandleFilterByType,
  HandleFilterByBrand,
  HandleFilterByPrice,
}) => {
  return (
    <Box
      display={{
        lg: "inherit",
        xl: "inherit",
        "2xl": "inherit",
        md: "flex",
        sm: "flex",
      }}
      style={{
        alignItems: "left",
        textAlign: "start",
        paddingLeft: "10px",
        fontSize: "15px",
        lineHeight: "25px",
      }}
    >
      <Box>
        <Heading fontSize="23px" p={2}>
          Eye Care
        </Heading>
        <Link>Eye Creams & Treatments</Link>

        <Link>Eye Masks</Link>
      </Box>
      {/* accordian start fron here */}

      <Box
        lineHeight={2}
        w="100%"
        m={"auto"}
        display={{
          lg: "inherit",
          xl: "inherit",
          "2xl": "inherit",
          md: "flex",
          sm: "flex",
        }}
      >
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                backgroundColor="white"
                _expanded={{ bg: "grey", color: "white" }}
              >
                <Box
                  className="Accordian_eyecare_left_dection"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Brand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="Filter_Parents">
              <Link
                className="Filter_Brand_links"
                onClick={() => HandleFilterByBrand("All")}
              >
                All
              </Link>
              <Link
                className="Filter_Brand_links"
                onClick={() => HandleFilterByBrand("Sephora Collection")}
              >
                Sophera Collection
              </Link>
              <Link
                onClick={() => HandleFilterByBrand("CLINIQUE")}
                className="Filter_Brand_links"
              >
                CLINIQUE
              </Link>
              <Link
                onClick={() => HandleFilterByBrand("Anastasia Beverly Hills")}
                className="Filter_Brand_links"
              >
                Anastasia Beverly Hills
              </Link>
              <Link
                onClick={() => HandleFilterByBrand("HUDA BEAUTY")}
                className="Filter_Brand_links"
              >
                HUDA BEAUTY
              </Link>
              <Link
                onClick={() => HandleFilterByBrand("Benefit Cosmetics")}
                className="Filter_Brand_links"
              >
                Benefit Cosmetics
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* Price Accordian here */}
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                backgroundColor="white"
                _expanded={{ bg: "grey", color: "white" }}
              >
                <Box
                  className="Accordian_eyecare_left_dection"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="Filter_Parents">
              <Link
                className="Filter_Price_links"
                onClick={() => HandleFilterByPrice("price")}
              >
                All Price
              </Link>
              <Link
                className="Filter_Price_links"
                onClick={() => HandleFilterByPrice("price1")}
              >
                450-900
              </Link>
              <Link
                className="Filter_Price_links"
                onClick={() => HandleFilterByPrice("price2")}
              >
                900-1500
              </Link>
              <Link
                className="Filter_Price_links"
                onClick={() => HandleFilterByPrice("price3")}
              >
                1500-2000
              </Link>
              <Link
                className="Filter_Price_links"
                onClick={() => HandleFilterByPrice("price4")}
              >
                2000 & Above
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* Type Accordian here */}

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton
                backgroundColor="white"
                _expanded={{ bg: "grey", color: "white" }}
              >
                <Box
                  className="Accordian_eyecare_left_dection"
                  m="auto"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Type
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel className="Filter_Parents">
              <Link
                className="Filter_Type_links"
                onClick={() => HandleFilterByType("All")}
              >
                All Types
              </Link>
              <Link
                onClick={() => HandleFilterByType("Pencil")}
                className="Filter_TYpe_links"
              >
                Eye Brows
              </Link>
              <Link
                onClick={() => HandleFilterByType("Shadow")}
                className="Filter_Type_links"
              >
                Eye Shadows
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export const LoadingComponent=()=>{
    return<Grid templateColumns={"repeat(4,1fr)"}>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />
</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />
</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box><Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box><Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
<Box padding='6' boxShadow='lg' bg='#CBD5E0'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='6' noOfLines={4} spacing='8' skeletonHeight='4' />

</Box>
</Grid>
}
