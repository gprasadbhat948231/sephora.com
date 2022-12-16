import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Fcomponent } from '../Components/fountation/Fcomponent';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Checkbox, Flex, h2, Heading, Radio, RadioGroup, SimpleGrid, Spacer, Stack } from '@chakra-ui/react'
import LoadingIndicator from '../Components/fountation/loading';
  const getdata=(isChecked="")=>{
    return (  isChecked==""?axios.get(`https://sephorajsonserver.onrender.com/womens-Foundation?`):
     axios.get(`https://sephorajsonserver.onrender.com/womens-Foundation?isNew=${isChecked}`))
  }
const prices=[1500,1230,2000,750,1620,1200,1000,350,800,1400,1900,2100,630,1550,1500,1230,2000,750,1620,1200,1000,350,800,1400,1900,2100,630,1550,]
const names=["Estée Lauder","Fenty Beauty by Rihanna","Too Faced","Charlotte Tilbury","Armani Beauty","NARS","Kosas","bareMinerals","Anastasia Beverly Hills",
             "Estée Lauder","Fenty Beauty by Rihanna","Too Faced","Charlotte Tilbury","Armani Beauty","NARS","Kosas","bareMinerals","Anastasia Beverly Hills",
             "Estée Lauder","Fenty Beauty by Rihanna","Too Faced","Charlotte Tilbury","Armani Beauty","NARS","Kosas","bareMinerals","Anastasia Beverly Hills"]
export const Foundation = () => {
  const [data,setData]=useState()
  const [type,setType]=useState("")
  const [isChecked, setIsChecked] = useState()
  const [load,setLoad]=useState(false)
    useEffect(()=>{
      setLoad(true)
        getdata(isChecked).then(res=>{setData(res.data)
          setLoad(false)})
        .catch((err)=>{setLoad(false);console.log(err)})
    },[isChecked])
  return (<Box w={'100%'} >
      <Flex justifyContent={'space-around'}>
      <Box  w={"15%"} >
             <Heading as="h4"  size='md'>Foundation</Heading>
             <br/>
             <br/>
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
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
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
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
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
<Accordion allowToggle>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Price Range
        </Box>
        <AccordionIcon />
      </AccordionButton>
   </h2>
    <AccordionPanel pb={4}>
    <RadioGroup onChange={setType} value={type}>
      <Stack direction='column'>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
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
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
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
<Accordion allowToggle>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Rating
        </Box>
        <AccordionIcon />
      </AccordionButton>
   </h2>
    <AccordionPanel pb={4}>
    <RadioGroup onChange={setType} value={type}>
      <Stack direction='column'>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Concems
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
<Accordion allowToggle>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Coverage
        </Box>
        <AccordionIcon />
      </AccordionButton>
   </h2>
    <AccordionPanel pb={4}>
    <RadioGroup onChange={setType} value={type}>
      <Stack direction='column'>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Finish
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
<Accordion allowToggle>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Formulation
        </Box>
        <AccordionIcon />
      </AccordionButton>
   </h2>
    <AccordionPanel pb={4}>
    <RadioGroup onChange={setType} value={type}>
      <Stack direction='column'>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)} value="" defaultChecked={false}>All</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="true" defaultChecked={false}>Last Week</Checkbox>
      <Checkbox   checked={isChecked} onChange={(e)=>setIsChecked(e.target.value)}  value="false" defaultChecked={false}>Last Month</Checkbox>
      </Stack>
    </RadioGroup>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  <Accordion allowToggle>
  <AccordionItem>
       <h2 as="h4" size={"md"}>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         Skin Type
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
       <img style={{margin:"auto"}} src="https://pubsaf.global.ssl.fastly.net/prmt/9b7aae511e4cb1bb9f3b963a6207979d" alt="sephora" />
    <SimpleGrid  gap={6} columns={{lg:4,md:3,sm:2}}>
    {
      load?<LoadingIndicator/>:
     data?.map((dt,i)=>( <Fcomponent key={dt.id} image={dt.altImagePath}
      name={names[i]} price= { prices[i]} detailes={dt.name} load={load}/>)
      )
    }
    </SimpleGrid>
    </Box>
    </Flex>
  </Box>
  )
}