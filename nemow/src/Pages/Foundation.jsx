import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Fcomponent } from './fcomponent';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Radio, RadioGroup, SimpleGrid, Spacer, Stack } from '@chakra-ui/react'


  const getdata=(type="")=>{
    return  axios.get(`https://sephorajsonserver.onrender.com/womens-Foundation?filter=${type}`)
   
  }

const prices=[1500,1230,2000,750,1620,1200,1000,350,800,1400,1900,2100,630,1550,1500,1230,2000,750,1620,1200,1000,350,800,1400,1900,2100,630,1550,]
const names=["Estée Lauder","Fenty Beauty by Rihanna","Too Faced","Charlotte Tilbury","Armani Beauty","NARS","Kosas","bareMinerals","Anastasia Beverly Hills",
             "Estée Lauder","Fenty Beauty by Rihanna","Too Faced","Charlotte Tilbury","Armani Beauty","NARS","Kosas","bareMinerals","Anastasia Beverly Hills",
             "Estée Lauder","Fenty Beauty by Rihanna","Too Faced","Charlotte Tilbury","Armani Beauty","NARS","Kosas","bareMinerals","Anastasia Beverly Hills"]
export const Foundation = () => {
  const [data,setData]=useState()
  const [type,setType]=useState("")
 console.log(type)
    useEffect(()=>{
        getdata(type).then(res=>setData(res.data))
    },[type])
   
  return (<Box w={'100%'}  border="1px solid yellow">
             
      <Flex justifyContent={'space-around'}>

      <Box  w={"15%"} border="1px solid red">
             <Heading as='h4' size='md'>Foundation</Heading>
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
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
        <Radio value='Dior'>ILIA</Radio>
        <Radio value='Third'>Third</Radio>
      </Stack>
    </RadioGroup>



    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
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
        <Radio value='Dior'>ILIA</Radio>
        <Radio value='Third'>Third</Radio>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>
    <Box w={"75%"} border="1px solid red" >
       <img style={{margin:"auto"}} src="https://www.sephora.com/img/ufe/rmn-fallback-970x90.png" alt="sephora" srcset="" /> 


        

    <SimpleGrid  gap={6} columns={{lg:4,md:3,sm:2}}>
    { 
     data?.map((dt,i)=>(<Fcomponent key={dt.id} image={dt.altImagePath}
      name={names[i]} price={prices[i]} detailes={dt.name} />)
      )
    }
    </SimpleGrid>
    </Box>

    </Flex>
  </Box>
  )
}


