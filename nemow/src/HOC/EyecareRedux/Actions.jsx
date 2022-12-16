import axios from "axios"
import { ADD_TO_CART, ADD_TO_WISHLIST, GET_CARTLIST_DATA, GET_WISHLIST_DATA } from "./ActionTypes"

export const addtowishlist_Eyecare=(data)=>(dispatch)=>{
axios.post(`https://sephorajsonserver.onrender.com/wishlist`,data)
    dispatch({type:ADD_TO_WISHLIST,payload:data})
}
export const addtocart_Eyecare=(data)=>(dispatch)=>{
    axios.post(`https://sephorajsonserver.onrender.com/Cart`,data)
      dispatch({type:ADD_TO_CART,payload:data})
    }
    export const wishlistGetdata=()=>async(dispatch)=>{
       let res=await fetch(`https://sephorajsonserver.onrender.com/wishlist`)
       let wishlistdata=await res.json()
       console.log("wishlistdata")
       dispatch({type:GET_WISHLIST_DATA,payload:wishlistdata})
    }
    
    export const cartlistGetdata=()=>async(dispatch)=>{
        let res=await fetch(`https://sephorajsonserver.onrender.com/Cart`)
        let cartlistdata=await res.json()
        console.log("cartcalled")
        dispatch({type:GET_CARTLIST_DATA,payload:cartlistdata})
     }