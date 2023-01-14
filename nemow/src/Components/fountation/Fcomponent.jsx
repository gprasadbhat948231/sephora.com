import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
export const Fcomponent = ({image,name,price,detailes,onClick}) => {
  return (
    <Box textAlign={'center'} onClick={onClick} cursor="pointer">
        <img   src={image} alt={name} />
        <Heading as='h4' fontSize='md'>{name}</Heading>
        <Text fontSize='md'>{detailes}</Text>
        <Heading fontSize='md'>&#8377; { price}</Heading>
    </Box>
  )
}
