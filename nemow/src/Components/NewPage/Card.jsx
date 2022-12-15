import './New.css'
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
const Card = ({ product }) => {
    return (
        <Flex key={product.id} className="card">
            <Box>
                <Flex flexDir='column'>
                    <Flex align='center'>
                        <Box align='left' bg='black' color='white' h='4' fontSize='10px' pl='1' pr='1' mt='-100'>NEW</Box>
                        <Image
                            src={product.imagePath}
                            alt={`Picture of product`}
                            background='transparent'
                            w="76%" />
                        <Box className='like' mt='-100'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg></Box>
                    </Flex>
                    <Box p="6" align='center'>
                        <Flex className="text-content">
                            <Box
                                fontSize="12px"
                                fontWeight="bold"
                                as="h4"
                                margin='auto'
                            >{product.name}
                            </Box>
                            <Box fontSize="13px">{product.brand}</Box>
                        </Flex>
                        <Text className="price">₹{product.sellingPriceRange.min}</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Card;