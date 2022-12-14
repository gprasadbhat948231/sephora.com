// Ritik
import { useEffect, useState } from "react";
import {Box,Center,Text,Stack,Image} from '@chakra-ui/react';
const New = () => {
    const new_arrival_api = 'https://sephorajsonserver.onrender.com/new-arrival';
    const [products, setProducts] = useState([]);
    const getNewData = async (api) => {
        let data = await fetch(api);
        data = await data.json();
        setProducts((prev) => prev = data)
    }
    useEffect(() => {
        getNewData(new_arrival_api)
    }, [])

    // brand, imagePath, sellingPriceRange: {min: 440, max: 440}, name: "Color Hit Nail Polish - L153 Blue Suede Shoes", brand, id, discountRange: {min: 0, max: 0}
    return (
        <div style={{ display: 'flex', width: '80%', margin: 'auto', marginTop: '10vh'}}>
            <div className="others-pages-div" style={{ width: '20%',marginRight:'2vw'}}>
                <p>New</p>
                <div style={{borderTop:'2px solid',borderBottom:'2px solid'}}>
                    <h1>New</h1>
                    <p>Just Dropped</p>
                    <p>Makeup</p>
                    <p>Skincare</p>
                    <p>Fragrance</p>
                    <p>Bath & Body</p>
                    <p>Hair</p>
                    <p>Tools & Brushes</p>
                </div>
            </div>
            <div className="products" style={{ width: '80%', border: '1px solid grey'}}>
                <h1>New</h1>
                <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
                {products.map((product) => {
                    return(
                    <Center>
                        <Box
                            role={'group'}
                            maxW={'330px'}
                            w={'full'}
                            bg={('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            pos={'relative'}
                            zIndex={1}>
                            <Box
                                rounded={'lg'}
                                mt={-12}
                                pos={'relative'}
                                height={'50%'}
                                _after={{
                                    transition: 'all .3s ease',
                                    content: '""',
                                    w: 'full',
                                    h: 'full',
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    backgroundImage: `url(₹{product.imagePath})`,
                                    filter: 'blur(15px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Image
                                    rounded={'lg'}
                                    height={'90%'}
                                    width={'75%'}
                                    border='1px solid'
                                    objectFit={'cover'}
                                    src={product.imagePath}
                                />
                            </Box>
                            <Stack pt={10} align={'center'} fontSize='12px'>
                                <Text color={'gray.500'} fontWeight={500}>
                                    {product.name}
                                </Text>
                                <Text textTransform={'uppercase'}>
                                    {product.brand}
                                </Text>
                                <Stack direction={'row'} align={'center'}>
                                    <Text fontWeight={800} fontSize={'xl'}>
                                        ₹{product.sellingPriceRange.min}
                                    </Text>
                                    <Text textDecoration={'line-through'} color={'gray.600'}>
                                        ₹{product.discountRange.max}
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Center>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default New;