import {
  Progress, ButtonGroup, FormControl,
  GridItem, FormLabel, SimpleGrid,
  InputLeftAddon, FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';


import {
  Box, Text,
  Image, Divider, Select, Flex,
  Link,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  Grid,
  Badge,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtowishlist_Eyecare,
  AfterOrderPlaced,
  Remove_from_Cartlist,
} from "../../HOC/EyecareRedux/Actions";
import "../EyeCarePages/Eyecare.css";
function CartPage() {
  const [total, settotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { Wishlist, CartList } = useSelector(
    (store) => store.CartandWishReducer
  );
  return (
    <Box>
      <Box id="Cart_heading" textAlign={'center'}>My Basket</Box>
      {/* Cartitem Shows here  */}
      <Box
        w={{ lg: "70%", xl: "70%", "2xl": "70%", md: "90%", sm: "90%" }}
        id="Cart_section"
      >
        <Box id="Cart_Header">
          <Text display={"inline-block"} fontWeight="bold">
            Get It Shipped({CartList.length})
          </Text>
          <Text display={"inline-block"} fontWeight="bold">
            Cart Total: ({CartList.length == 0 ? 0 : total})
          </Text>
        </Box>
        {/* cartlist map here */}
        {CartList.length > 0 &&
          CartList.map((el) => (
            <Box>
              <CartListItem ele={el} total={total} settotal={settotal} />
            </Box>
          ))}
        {CartList.length == 0 && <EmptyCart />}
        <Box w="fit-content" h="100px" m="auto" py={"30px"}>
          {CartList.length > 0 && (
            <Button
              backgroundColor={"black"}
              onClick={onOpen}
              borderRadius="23px"
              fontSize={"13px"}
              color={"white"}
              _hover={{ color: "grey" }}

            >
              Proceed To Buy
            </Button>

          )}
        </Box>
        <AddtoCartModal
          onOpen={onOpen}
          CartTotal={total}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Box>
      {/* Suggession shows here*/}
    </Box>
  );
}
export default CartPage;

const EmptyCart = () => {
  return (
    <Box id="Empty_if_cart">
      <Heading color={"gray"} fontSize={"25px"}>
        Basket Is Empty
      </Heading>
    </Box>
  );
};
const EmptyWishlist = () => {
  return (
    <Box id="Empty_if_wish">
      <Heading color={"gray"} fontSize={"25px"}>
        WishList Is Empty
      </Heading>
    </Box>
  );
};
// cart item here
const CartListItem = ({ ele, settotal, total }) => {
  const { Wishlist, CartList } = useSelector(
    (store) => store.CartandWishReducer
  );

  const dispatch = useDispatch();
  const [pric, setpric] = useState(1);
  const price1 = () => {
    let total1 = 0;
    CartList.forEach((ele) => {
      total1 += Number(pric) * ele.mrpRange.min;
    });
    settotal(total1);
  };
  useEffect(() => {
    price1();
  }, [pric]);
  return (
    <>
      <Box key={ele.id} id="Cartitems_parents">
        <SimpleGrid columns={[1, 1, 2, 2]} w="100%">
          <Box w="100%">
            <Image h="200px" src={ele.imagePath} margin='auto' />
          </Box>
          <Box margin={'auto'}>
            {/* brand name */}
            <Box w="100%">
              <Text>{ele.brand}</Text>
              <Text fontSize={"13px"} color="grey">
                {ele.name}
              </Text>

            </Box>

            {/* select tag and remove form cart and  */}
            <Box gap={"30px"} display={"flex"}>
              <Select
                verticalAlign={"center"}
                w="60px"
                type="number"
                defaultValue={"1"}
                onChange={(e) => setpric(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Select>
              <Link
                onClick={() => {
                  dispatch(addtowishlist_Eyecare(ele));
                  dispatch(Remove_from_Cartlist(ele.id));
                }}
                id="Links_for_cart_loves"
              >
                Move To Loves
              </Link>
              <Link
                onClick={() => dispatch(Remove_from_Cartlist(ele.id))}
                id="Links_for_cart_loves"
              >
                Remove
              </Link>
            </Box>
            <Box w="20%" display={"flex"}>
              <Text textAlign={"right"}>₹{ele.mrpRange.min || 0}</Text>
            </Box>
            <Badge colorScheme='linkedin' fontSize={"10px"} size="sm" my={"20px"}>FREE SHOPING</Badge>
          </Box>
        </SimpleGrid>
        <Divider />
      </Box>
    </>
  );
};

//  wishlist start here
const AddtoCartModal = ({ onOpen, onClose, isOpen, CartTotal }) => {

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const toast = useToast()
  const dispatch = useDispatch()
  return (
    <Box w="700px">
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        size={"sm"}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            w="95%"
            display="flex"
            margin={"auto"}
            justifyContent="space-between"
          >
            <Heading fontSize={"20px"} color="blue.400">
              Proceed To Checkout{" "}
            </Heading>
            <Heading fontSize={"14px"} color="grey">
              Total:{CartTotal}{" "}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody w="90%" pb={6} lineHeight="20px">
            <Box

              rounded="lg"
              p={6}
              m="10px auto"
              as="form">
              <Progress
                hasStripe
                value={progress}
                mb="5%"
                mx="5%"
                isAnimated>
              </Progress>
              {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
              <ButtonGroup mt="5%" w="100%">
                <Flex w="100%" justifyContent="space-between">
                  <Flex>
                    <Button
                      onClick={() => {
                        setStep(step - 1);
                        setProgress(progress - 33.33);
                      }}
                      isDisabled={step === 1}
                      colorScheme="teal"
                      variant="solid"
                      w="7rem"
                      mr="5%">
                      Back
                    </Button>
                    <Button
                      w="7rem"
                      isDisabled={step === 3}
                      onClick={() => {
                        setStep(step + 1);
                        if (step === 3) {
                          setProgress(100);
                        } else {
                          setProgress(progress + 33.33);
                        }
                      }}
                      colorScheme="teal"
                      variant="outline">
                      Next
                    </Button>
                  </Flex>

                </Flex>
              </ButtonGroup>
            </Box>
          </ModalBody>
          <ModalFooter>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Order...',
                    description: 'Order Placed Succesfully.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: "top",

                  })
                  dispatch(AfterOrderPlaced())
                  onClose();
                }}
              >
                Submit
              </Button>
            ) : null}

          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" fontSize={"23px"} color="red" py="10px" textAlign={'center'} fontWeight="normal" mb="2%">
        Enter Details
      </Heading>
      <Flex>
        <FormControl mr="5%"  isRequired>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>

      <Heading w="100%" fontSize={"23px"} color="red" py="10px" textAlign={'center'} fontWeight="normal" mb="2%">
        Adress
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>India</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}isRequired>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />

      </FormControl>
    </>
  );
};

const Form3 = () => {
  return (
    <Box >
      <Heading w="100%" fontSize={"23px"} color="red" py="10px" my="20px" textAlign={'center'} fontWeight="normal">
        Enter Cart Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <InputGroup my="20px" size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              Card No
            </InputLeftAddon>
            <Input
              type="number"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>

          {/* cvv and expary */}
          <Grid my="50px" templateColumns={"repeat(2,1fr)"} gap="2px" >
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                cvv
              </InputLeftAddon>
              <Input w="50px"
                type="number"
                maxLength={3}
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                Expary
              </InputLeftAddon>
              <Input w="130px"
                type="date"

                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
          </Grid>

        </FormControl>


      </SimpleGrid>
    </Box>
  );
};
