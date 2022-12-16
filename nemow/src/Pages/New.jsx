// Ritik
import { useEffect, useState } from "react";
import '../Components/NewPage/New.css'
import Card from "../Components/NewPage/Card.jsx";
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
    textDecoration,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
const New = () => {
    
    const [products, setProducts] = useState([]);
    const getNewData = async (api) => {
        let data = await fetch(api);
        data = await data.json();
        setProducts((prev) => prev = data)
    }
    useEffect(() => {
        getNewData(new_arrival_api)
    }, [])
    
    const new_arrival_api='https://sephorajsonserver.onrender.com/new-arrival';
    const just_dropped_api='https://sephorajsonserver.onrender.com/new-arrival-fragrance';
    const makup_api='https://sephorajsonserver.onrender.com/womens-Concealer';
    const skincare_api='https://sephorajsonserver.onrender.com/womens-Foundation';
    const fragrance_api='https://sephorajsonserver.onrender.com/new-arrival-fragrance';
    const bath_body_api='https://sephorajsonserver.onrender.com/deodrant';
    const eyecare_api='https://sephorajsonserver.onrender.com/womens-Eye-Brows';
    const tools_brushes_api='https://sephorajsonserver.onrender.com/womens-Lip-Stick'
    const handlePageChange=(api)=>{
          getNewData(api)
    }
    const data = {
        isNew: true,
        imageURL:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
        name: "Wayfarer Classic",
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
      };
      
    // brand, imagePath, sellingPriceRange: {min: 440, max: 440}, name: "Color Hit Nail Polish - L153 Blue Suede Shoes", brand, id, discountRange: {min: 0, max: 0}
    return (
        <div style={{ display: 'flex', width: '85%', margin: 'auto', marginTop: '10vh' }}>
            <div className="others-pages-div" style={{ width: '20%', marginRight: '2vw' }}>
                <Text color='#666' fontSize='13' mb='5'>New</Text>
                <Box borderTop='2px solid' borderBottom='2px solid' pt='4' pb='4' lineHeight='1.7'>
                    <Heading fontSize='16px' mb='2'>New</Heading>
                    <Text className="sub-pages" onClick={()=>handlePageChange(just_dropped_api)}>Just Dropped</Text>
                    <Text className="sub-pages" onClick={()=>handlePageChange(makup_api)}>Makeup</Text>
                    <Text className="sub-pages" onClick={()=>handlePageChange(skincare_api)}>Skincare</Text>
                    <Text className="sub-pages" onClick={()=>handlePageChange(fragrance_api)}>Fragrance</Text>
                    <Text className="sub-pages" onClick={()=>handlePageChange(bath_body_api)}>Bath & Body</Text>
                    <Text className="sub-pages" onClick={()=>handlePageChange(eyecare_api)}>Eyecare</Text>
                    <Text className="sub-pages" onClick={()=>handlePageChange(tools_brushes_api)}>Tools & Brushes</Text>
                </Box>
            </div>

            <Box w="85%" borderLeft='1px solid grey' pl='5'>
                <Text align='center' fontSize='32px' mb='8' fontFamily='georgia, times, serif'>New</Text>
                <Grid templateColumns="repeat(4, 1fr)" rowGap={5} columnGap={2}>
                    {products.map((product) => (
                        <Card product={product}/>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}
export default New;