import { ADD_TO_CART, ADD_TO_WISHLIST } from "./ActionTypes"
const initialState={
    Wishlist:[],
    CartList:[],
} 
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
case ADD_TO_CART:
    return {...state,CartList:[...state.CartList,payload.data]}
case ADD_TO_WISHLIST:
    return {...state,Wishlist:[...state.Wishlist,payload.data]}
default:
    return 
     state
    }
}

