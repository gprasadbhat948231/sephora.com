// Ritik
import { useEffect, useState } from "react";
import '../Components/NewPage/New.css'
import '../index.css'
import Card from "../Components/NewPage/Card.jsx";
import {Box,Heading,Text,Grid,useToast} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { addtocart_Eyecare, addtowishlist_Eyecare, cartlistGetdata, Remove_from_Wishlist, wishlistGetdata } from "../HOC/EyecareRedux/Actions";
import { LoadingComponent } from "./EyeCare";
const New = () => {
    const {Wishlist,CartList}=useSelector((state)=>state.CartandWishReducer)
    const dispatch=useDispatch()
    const [products, setProducts] = useState([]);

    const toast = useToast();
    const getNewData = async (api) => {
        let data = await fetch(api);
        data = await data.json();
        setProducts((prev) => prev = data)
    }
    useEffect(() => {
        getNewData(new_arrival_api);
        dispatch(wishlistGetdata())
        dispatch(cartlistGetdata())
    }, [])

    const new_arrival_api = 'https://sephorajsonserver.onrender.com/new-arrival';
    const just_dropped_api = 'https://sephorajsonserver.onrender.com/new-arrival-fragrance';
    const makup_api = 'https://sephorajsonserver.onrender.com/womens-Concealer';
    const skincare_api = 'https://sephorajsonserver.onrender.com/womens-Foundation';
    const fragrance_api = 'https://sephorajsonserver.onrender.com/new-arrival-fragrance';
    const bath_body_api = 'https://sephorajsonserver.onrender.com/deodrant';
    const eyecare_api = 'https://sephorajsonserver.onrender.com/womens-Eye-Brows';
    const tools_brushes_api = 'https://sephorajsonserver.onrender.com/womens-Lip-Stick'

    const handlePageChange = (api) => {
        getNewData(api)
    }
    // const [CartData, setCartData] = useState({});
    const AddedtoWishlist = (ele) => {
        if (!Wishlist.find((item) => ele.id === item.id)) {
            dispatch(addtowishlist_Eyecare(ele));
            toast({
                title: "Wishlist.",
                description: "Item Added To Wishlist Succesfully.",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
        } else if (Wishlist.find((item) => ele.id === item.id)) {
            dispatch(Remove_from_Wishlist(ele.id));
            toast({
                title: "Wishlist.",
                description: "Item Is Removed From Wishlish.",
                status: "error",
                duration: 4000,
                isClosable: true,
            });
        }
    };

    // to know wish list //
  const ToKnowWishlist = (product) => {
        if (Wishlist.find((item) => product.id === item.id)) {
            return true;
        }
        return false;
    };

     // to know cart list //
  const ToknowCartList = (Cartitem) => {
    if (CartList.find((item) => Cartitem.id === item.id)) {
      return true;
    }
    return false;
  };

    const AddedtoCartList = (Cartitem) => {
        if (!CartList.find((item) => Cartitem.id === item.id)) {
          dispatch(addtocart_Eyecare(Cartitem));
          toast({
            title: "Cartlist.",
            description: "Item Added To Cartlist Succesfully.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }
      };

    const breakpoints = { sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' }
    // brand, imagePath, sellingPriceRange: {min: 440, max: 440}, name: "Color Hit Nail Polish - L153 Blue Suede Shoes", brand, id, discountRange: {min: 0, max: 0}
    return (
        <div style={{ display: 'flex', width: '85%', margin: 'auto', marginTop: '10vh' }}>
            <div className="others-pages-div" style={{ width: '20%', marginRight: '2vw' }}>
                <Text color='#666' fontSize='13' mb='5'>New</Text>
                <Box borderTop='2px solid' borderBottom='2px solid' pt='4' pb='4' lineHeight='1.7' fontSize={{ base: '6', md: '10', lg: '15' }}>
                    <Heading fontSize='16px' mb='2'>New</Heading>
                    <Text className="sub-pages" onClick={() => handlePageChange(just_dropped_api)}>Just Dropped</Text>
                    <Text className="sub-pages" onClick={() => handlePageChange(makup_api)}>Makeup</Text>
                    <Text className="sub-pages" onClick={() => handlePageChange(skincare_api)}>Skincare</Text>
                    <Text className="sub-pages" onClick={() => handlePageChange(fragrance_api)}>Fragrance</Text>
                    <Text className="sub-pages" onClick={() => handlePageChange(bath_body_api)}>Bath & Body</Text>
                    <Text className="sub-pages" onClick={() => handlePageChange(eyecare_api)}>Eyecare</Text>
                    <Text className="sub-pages" onClick={() => handlePageChange(tools_brushes_api)}>Tools & Brushes</Text>
                </Box>
            </div>

            <Box w="85%" borderLeft='1px solid grey' pl='5'>
                <Text align='center' fontSize='32px' mb='8' fontFamily='georgia, times, serif'>New</Text>
                <Grid templateColumns="repeat(4, 1fr)" rowGap={5} columnGap={2}>
                        {/* {products.length===0?<LoadingComponent/>:
                        products.map((product) => (
                            <Card key={product.id} product={product} AddedtoWishlist={AddedtoWishlist} AddedtoCartList={AddedtoCartList} ToKnowWishlist={ToKnowWishlist} ToknowCartList={ToknowCartList}/>
                        ))
                        } */}
                        {products.map((product) => (
                            <Card key={product.id} product={product} AddedtoWishlist={AddedtoWishlist} AddedtoCartList={AddedtoCartList} ToKnowWishlist={ToKnowWishlist} ToknowCartList={ToknowCartList}/>
                        ))
                        }
                </Grid>
            </Box>
        </div>
    )
}
export default New;