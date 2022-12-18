import axios from "axios"
import { useEffect } from "react"
import { ADD_TO_CART, ADD_TO_WISHLIST, GET_CARTLIST_DATA, GET_WISHLIST_DATA } from "./ActionTypes"

const initialState={
    Wishlist:[],
    CartList:[],
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
case GET_WISHLIST_DATA:
    return{...state,Wishlist:payload}
case GET_CARTLIST_DATA:
    return{...state,CartList:payload}
case ADD_TO_CART:
    return {...state,CartList:[...state.CartList,payload]}
case ADD_TO_WISHLIST:
    return {...state,Wishlist:[...state.Wishlist,payload]}
default:

    return state

    }
}

