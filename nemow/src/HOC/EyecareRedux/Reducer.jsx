import axios from "axios";
import { useEffect } from "react";
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  GET_CARTLIST_DATA,
  GET_WISHLIST_DATA,
  REMOVE_FROM_CARTLIST,
  REMOVE_FROM_WISHLIST,
} from "./ActionTypes";

const initialState = {
  Wishlist: [],
  CartList: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WISHLIST_DATA:
      return { ...state, Wishlist: payload };
    case GET_CARTLIST_DATA:
      return { ...state, CartList: payload };
    case ADD_TO_CART:
      return { ...state, CartList: [...state.CartList, payload] };
    case ADD_TO_WISHLIST:
      // console.log(state)
      return { ...state, Wishlist: [...state.Wishlist, payload] };
    case REMOVE_FROM_WISHLIST:
      let filterdatawish = state.Wishlist.filter((ele) => ele.id !== payload);
      return { ...state, Wishlist: filterdatawish };
    case REMOVE_FROM_CARTLIST:
      let filterdatacart = state.CartList.filter((ele) => ele.id !== payload);
      return { ...state, CartList: filterdatacart };
    default:
      return state;
  }
};
