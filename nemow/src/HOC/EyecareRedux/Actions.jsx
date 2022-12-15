import axios from "axios"
import { ADD_TO_CART, ADD_TO_WISHLIST } from "./ActionTypes"

export const addtowishlist_Eyecare=(data)=>{
axios.post(`https://sephorajsonserver.onrender.com//wishlist`,data)
    return {type:ADD_TO_WISHLIST,payload:data}
}
export const addtocart_Eyecare=(data)=>{
    axios.post(`https://sephorajsonserver.onrender.com/Cart`,data)
        return {type:ADD_TO_CART,payload:data}
    }