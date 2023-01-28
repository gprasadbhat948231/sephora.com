import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Fcomponent } from '../Components/fountation/Fcomponent';
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem,
  AccordionPanel, Box, Checkbox, Flex, Heading, Radio, RadioGroup, SimpleGrid, Stack
} from '@chakra-ui/react'
import LoadingIndicator from '../Components/fountation/loading';
import {
  useDisclosure,
} from "@chakra-ui/react";

import AddToCartModal from '../Components/fountation/addtocart';
const getdata = (isChecked = "") => {
  return (isChecked === "" ? axios.get(`https://sephorajsonserver.onrender.com/womens-Foundation?`) :
    axios.get(`https://sephorajsonserver.onrender.com/womens-Foundation?isNew=${isChecked}`))

}

const prices = [1500, 1230, 2000, 750, 1620, 1200, 1000, 350, 800, 1400, 1900, 2100, 630, 1550, 1500, 1230, 2000, 750, 1620, 1200, 1000, 350, 800, 1400, 1900, 2100, 630, 1550,]
const names = ["Estée Lauder", "Fenty Beauty by Rihanna", "Too Faced", "Charlotte Tilbury", "Armani Beauty", "NARS", "Kosas", "bareMinerals", "Anastasia Beverly Hills",
  "Estée Lauder", "Fenty Beauty by Rihanna", "Too Faced", "Charlotte Tilbury", "Armani Beauty", "NARS", "Kosas", "bareMinerals", "Anastasia Beverly Hills",
  "Estée Lauder", "Fenty Beauty by Rihanna", "Too Faced", "Charlotte Tilbury", "Armani Beauty", "NARS", "Kosas", "bareMinerals", "Anastasia Beverly Hills"]
export const Foundation = () => {
  const [data, setData] = useState([])
  const [type, setType] = useState("")
  const [isChecked, setIsChecked] = useState()
  const [load, setLoad] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [CartData, setCartData] = useState([]);
  // console.log(CartData)
  useEffect(() => {
    setLoad(true)
    getdata(isChecked).then(res => {
      setData(res.data)
      setLoad(false)
    })
      .catch((err) => { setLoad(false); console.log(err) })
  }, [isChecked])


  return (<Box w={'100%'} >

    <Flex justifyContent={'space-around'}>

      <Box w={"15%"} >
        <Heading as="h4" size='md'>Foundation</Heading>
        <br />
        <br />
        <Accordion allowToggle>


          <AccordionItem>
            <h2 as="h4" size={"md"}>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Pickup
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup onChange={setType} value={type}>
                <Stack direction='column'>
                  <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
                  <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} value="true" defaultChecked={false}>Last Week</Checkbox>
                  <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} value="false" defaultChecked={false}>Last Month</Checkbox>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2 as="h4" size={"md"}>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Date
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup onChange={setType} value={type}>
                <Stack direction='column'>
                  <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
                  <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} value="true" defaultChecked={false}>Last Week</Checkbox>
                  <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.value)} value="false" defaultChecked={false}>Last Month</Checkbox>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2 as="h4" size={"md"}>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Brand
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <RadioGroup onChange={setType} value={type}>
                <Stack direction='column'>
                  <Radio value='Estée Lauder'> Estée Lauder</Radio>
                  <Radio value='Armani Beauty'> Armani Beauty</Radio>
                  <Radio value=' Too Faced'> Too Faced</Radio>
                  <Radio value='ILIA'>ILIA</Radio>
                  <Radio value='Third'>Third</Radio>
                </Stack>
              </RadioGroup>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>


      <Box w={"75%"}  >
        <img style={{ margin: "auto" }} src="https://pubsaf.global.ssl.fastly.net/prmt/9b7aae511e4cb1bb9f3b963a6207979d" alt="sephora" />


        <SimpleGrid gap={6} columns={{ lg: 4, md: 3, sm: 2 }}>
          {
            CartData.name && (
              <AddToCartModal
                onOpen={onOpen}
                onClose={onClose}
                isOpen={isOpen}
                CartData={CartData} />
            )
          }
          {
            load ? <LoadingIndicator /> :
              data?.map((dt, i) => (<Fcomponent key={dt.id} image={dt.altImagePath}
                name={names[i]} price={prices[i]} detailes={dt.name} load={load}
                onClick={() => {
                  setCartData(dt);
                  onOpen()
                }} />)
              )
          }
        </SimpleGrid>
      </Box>
    </Flex>
  </Box>
  )
}


