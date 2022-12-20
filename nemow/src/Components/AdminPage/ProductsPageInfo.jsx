// pages count cards comonent

import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import {
  GiArmoredPants,
  GiBelt,
  GiDelicatePerfume,
  GiEyelashes,
  GiFragrance,
  GiLipstick,
  GiMailShirt,
  GiMonclerJacket,
  GiPoloShirt,
} from "react-icons/gi";
import HidingLogic from "../../HOC/HidingLogic";
import { FaTshirt } from "react-icons/fa";

//   interface StatsCardProps {
//     title: string;
//     stat: string;
//     icon: ReactNode;
//   handleFunc:function
//   }

// card function for buiding card
function StatsCard(props) {
  const { title, stat, icon, handleFunc, callBackFunc } = props;

  // redirecting to selected page
  const handleClick = () => {
    callBackFunc(handleFunc);
  };
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      onClick={handleClick}
      cursor="pointer"
    >
      {/* all comonent placed in */}
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function ProductsPageInfo({ handlePath }) {
  const pagesInfo = useSelector((store) => store.adminManager.pagesInfo);

  const compo = [
    GiMonclerJacket,
    FaTshirt,
    GiEyelashes,
    GiBelt,
    GiDelicatePerfume,
    GiLipstick,
    GiFragrance,
    GiMailShirt,
    GiPoloShirt,
    GiArmoredPants,
  ];

  // for making comonent
  var Ico = "";

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 10, md: 15 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={["xl", null, "2xl", "3xl", "4xl"]}
        py={10}
        fontWeight={"bold"}
        color="teal.400"
      >
        All current Products available in website.
      </chakra.h1>
      <SimpleGrid
        columns={[1, 2, null, null, 3, 4]}
        spacing={{ base: 5, lg: 8 }}
      >
        {pagesInfo &&
          Object.keys(pagesInfo).map((page, i) => {
            {
              var iconCol = pagesInfo[page].color.split(".");
            }
            {
              // this logic select component (functional )from its name
              var lin = compo.filter(
                (icon) => icon.name == pagesInfo[page].icon
              );
            }

            // this logic makes react comonent
            <HidingLogic>{(Ico = lin[0])}</HidingLogic>;
            return (
              <StatsCard
                title={page}
                stat={pagesInfo[page].count}
                key={page + i}
                handleFunc={page}
                callBackFunc={handlePath}
                icon={<Ico size={"3em"} color={iconCol[0]} />}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
}
