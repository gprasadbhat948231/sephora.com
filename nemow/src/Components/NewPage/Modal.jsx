//Ritik
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Image, Box, Flex, Select } from '@chakra-ui/react'
import { BsHeartFill } from "react-icons/bs";

import './New.css'
export default function ModalComponent({ isOpen, onOpen, onClose, product,AddedtoWishlist,AddedtoCartList,ToknowCartList,ToknowWishlist}) {
    // const data = { rating: 4.2, numReviews: 120 };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex align='center'>
                            <Flex align='center'>
                                <Box align='left' bg='black' color='white' h='4' fontSize='10px' pl='1' pr='1' mt='-100'>NEW</Box>
                                <Image
                                    src={product.imagePath}
                                    alt={`Picture of product`}
                                    background='transparent' w="100%" h='90%'
                                    onClick={onOpen} />
                            </Flex>
                            <Box p="6">
                                <Flex className="text-content">
                                    <Box
                                        fontSize="16px"
                                        fontWeight="bold"
                                        as="h4"
                                        margin='auto'
                                    >{product.name}
                                    </Box>
                                    <Box fontSize="15px">{product.brand}</Box>
                                </Flex>
                                <Text className="price" fontWeight='black'>₹{product.sellingPriceRange.min}</Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent='end'>
                            <Select w='15'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </Select>
                            <Flex direction='column' ml='3'>
                                <Button borderRadius='3xl' bg='red' color='white' disabled={ToknowCartList(product)} onClick={()=>AddedtoCartList(product)}>Add to Basket</Button>
                                <Button borderRadius='3xl' border='2px solid black' color='black' mt='2' disabled={ToknowWishlist(product)} onClick={()=>AddedtoWishlist(product)}>
                                    <BsHeartFill fill={ToknowWishlist(product)? "red" : "grey"}/>
                                    <Text>Add to Loves</Text>
                                </Button>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}