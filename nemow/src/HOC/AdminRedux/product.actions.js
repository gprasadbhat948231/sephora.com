// Auth Actions here

import axios from "axios";
import {  ADD_PRODUCT_DATA,ADMIN_SIGN_IN,ADMIN_SIGN_OUT ,DELETE_PRODUCT_DATA,UPDATE_PRODUCT_DATA,SET_ADMIN_PAGE } from "./product.types";

export const AddUpdate = (productData,path) =>  (dispatch) => {
  const data={productData,path}
  dispatch({ type: UPDATE_PRODUCT_DATA, payload:data});
  
};
export const adminSignIn = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGN_IN });
};
export const adminSignout = () => (dispatch) => {
  dispatch({ type:ADMIN_SIGN_OUT });
};

export const reset = () => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_DATA });
};

export const setPage = (page) => (dispatch) => {
  dispatch({ type: SET_ADMIN_PAGE,payload:page });
};

export const deleteProduct=  (id,path) =>  (dispatch) => {
  console.log(id)
 // let path="women-perfume"
      const url=`https://sephorajsonserver.onrender.com/${path}/${id}`;
      let res=axios.get(url)
      dispatch({ type: DELETE_PRODUCT_DATA })
     return res
    };

    export const postProduct=  (product,path) =>  (dispatch) => {
     
     // let path="women-perfume"
          const url=`https://sephorajsonserver.onrender.com/${path}`;
          let res = axios.post(url,product)
          dispatch({ type: ADD_PRODUCT_DATA })
         return res
        };
    