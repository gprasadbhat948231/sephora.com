// Ritik
import './New.css'
import {Box,Text,Flex,Image} from "@chakra-ui/react";

import { BsHeartFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react'
import {addtowishlist_Eyecare} from '../../HOC/EyecareRedux/Actions';
import ModalComponent from './Modal';
const Card = ({ product,AddedtoWishlist,ToKnowWishlist,ToknowCartList, AddedtoCartList}) => {
    const data = { rating: 4.2, numReviews: 120 };
    const { isOpen, onOpen, onClose } = useDisclosure()
    function Rating({rating, numReviews}) {
        return (
            <>
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
            </>
        );
    }

    return (
        <Flex key={product.id} className="card">
          {product.name && (
          <ModalComponent
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
            product={product}
            ToknowCartList={ToknowCartList}
            ToknowWishlist={ToKnowWishlist}
            AddedtoWishlist={AddedtoWishlist}
            AddedtoCartList={AddedtoCartList}
          />
        )}
            <Box>
                <Flex flexDir='column'>
                    <Flex align='center'>
                        <Box align='left' bg='black' color='white' h='4' fontSize='10px' pl='1' pr='1' mt='-100'>NEW</Box>
                        <Image
                            src={product.imagePath}
                            alt={`Picture of product`}
                            background='transparent' w="76%"
                            onClick={onOpen}                            
                             />
                        <BsHeartFill className='like' style={{marginTop:'-100'}}
                            onClick={()=>AddedtoWishlist(product)}
                            fill={ToKnowWishlist(product)? "red" : "grey"} fontSize={"24px"}
                        />
                    </Flex>
                    <Box p="6" align='center'>
                        <Flex className="text-content">
                            <Box
                                fontSize={{ base: '9', md: '8', lg: '13' }}
                                fontWeight="bold"
                                as="h4"
                                margin='auto'
                            >{product.name}
                            </Box>
                            <Box fontSize="13px">{product.brand}</Box>
                        </Flex>
                        <Text className="price">₹{product.sellingPriceRange.min}</Text>
                        <Box display="flex" w='67%'>{Rating(data.rating, data.numReviews)}</Box>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Card;