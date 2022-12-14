//  Suvam Page(EyeCare)=---
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Circle,
  Image,
  Grid,
  Button,
  VStack,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  BsArrowUpRight,
  BsHeartFill,
  BsHeart,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import '../index.css';

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
function EyeCareSection({watchlist,setwatchlist,setEyeBrowData,EyeBrowData=[],AddedtoWishlist,ToknowWatchlist}) {
  return (
    <Box display="flex" w="95%">
      {/* filter aand left side link added here=---  */}
      <Grid w="100%" templateColumns="repeat(4, 1fr)" rowGap={1}>
        {EyeBrowData.map((Eyedata) => (
          <Flex 
            key={Eyedata.id}
            p={4}
            w="full"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              maxW="sm"
              // borderWidth="1px"
              rounded="lg"
              // shadow="lg"
              position="relative"
            >
              <Flex>
                <Image
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
                  borderLeft={"1px"}
                  cursor="pointer"
                >
                  <BsHeartFill
                    onClick={() => AddedtoWishlist(Eyedata)}
                    fill={
                      ToknowWatchlist(Eyedata.id, watchlist) ? "red" : "grey"
                    }
                    fontSize={"24px"}
                  />
                </Flex>
              </Flex>
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                
                </Box>
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
                    $:
                  </Box>
                  {Eyedata.sellingPriceRange.min}
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
function EyeCare() {
  const [EyeBrowData, setEyeBrowData] = useState([]);
  const [watchlist, setwatchlist] = useState([]);
  const [Allfilterdata,setfilterdata]=useState([])
  
   // eyeBrow Data fetching
   const GetData = () => {
    axios(`https://sephorajsonserver.onrender.com/womens-Eye-Brows`).then((ress) => {
      setEyeBrowData(ress.data);
      setfilterdata(ress.data)
    });
  };  
  // for adding wishlist data //
  const AddedtoWishlist = (ele) => {
    setwatchlist([...watchlist, ele]);
  };
  // console.log(watchlist)
  const ToknowWatchlist = (id, watchlist) => {
    if (watchlist.find((item) => id == item.id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    GetData();
  
  }, []);
const HandleFilterByType=(type)=>{
   console.log(EyeBrowData)

if(type=="All"){
  setfilterdata(EyeBrowData)
}
else{
let filterdata=EyeBrowData.filter((ele)=>{
if(ele.name.includes(type)){
  return ele
}
})
 setfilterdata(filterdata)}
}

const HandleFilterByBrand=(brand)=>{
  console.log(EyeBrowData)

if(brand=="All")
setfilterdata(EyeBrowData)
else{
let filterdata=EyeBrowData.filter((ele)=>{
if(ele.brand.includes(brand)){
 return ele
}
})
setfilterdata(filterdata)}
}
  return (
    <div style={{display:'flex'}}>
      <Box w="20%" h="auto" border="1px solid">
     <EyecareLeftSection  HandleFilterByType={HandleFilterByType} HandleFilterByBrand={HandleFilterByBrand}/>
      </Box>
      <Box w="80%">
      <EyeCareSection watchlist={watchlist} AddedtoWishlist={AddedtoWishlist} ToknowWatchlist={ToknowWatchlist} setwatchlist={setwatchlist} setEyeBrowData={setEyeBrowData} EyeBrowData={Allfilterdata}/>
      </Box>
    </div>
  );
  }

export default EyeCare;
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
const EyecareLeftSection = ({HandleFilterByType,HandleFilterByBrand,HandleFilterByPrice}) => {
  return (
    <div
      style={{
        alignItems: "left",
        textAlign: "start",
        paddingLeft: "10px",
        fontSize: "15px",
        lineHeight: "25px",
      }}
    >
      <Heading fontSize="25px" p={2}>
        Eye Care
      </Heading>
      <Link>Eye Creams & Treatments</Link>
      <br />
      <Link>Eye Masks</Link>
      {/* accordian start fron here */}
      <Box lineHeight={2}>
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton backgroundColor="white" _expanded={{ bg: 'grey', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          Brand
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className="Filter_Parents">
    <Link  className="Filter_Brand_links" onClick={ ()=>HandleFilterByBrand("All")}>All</Link>
   <Link  className="Filter_Brand_links" onClick={ ()=>HandleFilterByBrand("Sephora Collection")}>Sophera Collection</Link>
   <Link onClick={ ()=>HandleFilterByBrand("CLINIQUE")} className="Filter_Brand_links">CLINIQUE</Link>
   <Link onClick={ ()=>HandleFilterByBrand("Anastasia Beverly Hills")} className="Filter_Brand_links">Anastasia Beverly Hills</Link>
   <Link onClick={ ()=>HandleFilterByBrand("HUDA BEAUTY")} className="Filter_Brand_links">HUDA BEAUTY</Link>
   <Link onClick={ ()=>HandleFilterByBrand("Benefit Cosmetics")} className="Filter_Brand_links">Benefit Cosmetics</Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* Price Accordian here */}
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton backgroundColor="white" _expanded={{ bg: 'grey', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          Price
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className="Filter_Parents">
   <Link className="Filter_Price_links"onClick={()=>HandleFilterByPrice("900","1500")}>450-900</Link>
   <Link className="Filter_Price_links" onClick={()=>HandleFilterByPrice("900","1500")}>900-1500</Link>
   <Link className="Filter_Price_links"onClick={()=>HandleFilterByPrice("900","1500")}>1500-2000</Link>
   <Link className="Filter_Price_links" onClick={()=>HandleFilterByPrice("2000")}>2000 & Above</Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
{/* Type Accordian here */}
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton backgroundColor="white" _expanded={{ bg: 'grey', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          Type
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>

    <AccordionPanel className="Filter_Parents">
   <Link className="Filter_Type_links"  onClick={ ()=>HandleFilterByType("All")}>All Types</Link>
   <Link  onClick={ ()=>HandleFilterByType("Pencil")}className="Filter_TYpe_links">Eye Brows</Link>
   <Link  onClick={ ()=>HandleFilterByType("Shadow")} className="Filter_Type_links">Eye Shadows</Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>

    </div>
  );
};
