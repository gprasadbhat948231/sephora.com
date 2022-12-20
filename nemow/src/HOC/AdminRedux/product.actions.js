// Auth Actions here

import axios from "axios";
import {
  GET_PRODUCTS_DATA,
  ADD_PRODUCT_DATA,
  ADMIN_SIGN_IN,
  ADMIN_SIGN_OUT,
  DELETE_PRODUCT_DATA,
  UPDATE_PRODUCT_DATA,
  SET_ADMIN_PAGE,
  FILTER_PRODUCT_DATA,
  GET_PAGES_COUNT_DATA
} from "./product.types";

export const AddUpdate = (productData, path) => (dispatch) => {
  const data = { productData, path };
  dispatch({ type: UPDATE_PRODUCT_DATA, payload: data });
};
export const adminSignIn = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGN_IN });
};
export const adminSignout = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGN_OUT });
};

export const reset = () => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_DATA });
};

export const setPage = (page) => (dispatch) => {
  dispatch({ type: SET_ADMIN_PAGE, payload: page });
};

export const filterData=(productsData,sortby,quan)=>(dispatch)=>{
  //console.log(productsData[1][sortby],quan)
 // const Quantity=Number(quan)
 
   productsData.sort((a,b)=>a[sortby]-b[sortby])
  // const newProductData=productsData.filter((product,i)=>i<Quantity)
  // console.log(newProductData)
  const newProductData= productsData
  dispatch({ type: FILTER_PRODUCT_DATA ,payload:newProductData });
  // return newProductData
}

export const deleteProduct = (id, path,productsData) => (dispatch) => {
  //console.log(id);
  // let path="women-perfume"
  let newProductData=productsData.filter((product)=>product.id!==id)
  const url = `https://sephorajsonserver.onrender.com/${path}/${id}`;
  let res = axios.delete(url);
  dispatch({ type: DELETE_PRODUCT_DATA ,payload:{newProductData}});
  return res;
};

export const postProduct = (product, path) => (dispatch) => {
  // let path="women-perfume"
  const url = `https://sephorajsonserver.onrender.com/${path}`;
  let res = axios.post(url, product);
  dispatch({ type: ADD_PRODUCT_DATA });
  return res;
};
export const updateProduct = (product, path) => (dispatch) => {
  // let path="women-perfume"
  const url = `https://sephorajsonserver.onrender.com/${path}/${product.id}`;
  let res = axios.put(url,product);
  dispatch({ type: ADD_PRODUCT_DATA });
  return res;
};

export const getProducts =  (path) => async(dispatch) => {
  // let path="women-perfume"
  const url = `https://sephorajsonserver.onrender.com/${path}`;
  let res = await axios.get(url);
  const Data= res.data.map((product, i) => {
    const num = Math.random();

    // console.log()
    const newData = {
      ...product,
      rating:1+ num * 4,
      numReviews: Math.ceil(num * 1000),
      remain_qnty: Math.floor(num * 500),
    };

    return newData;
  });
  //console.log(res.data)
  dispatch({ type: GET_PRODUCTS_DATA, payload: {Data,path}});
  return res;
};

export const getPagesCount =  (pathsInfo) =>  (dispatch) => {

  const pagesInfo={...pathsInfo}
  // let path="women-perfume"
    Object.keys(pathsInfo).forEach(async(page)=>{
    const url = `https://sephorajsonserver.onrender.com/${pathsInfo[page].path}?_page=1&_limit=1`;
    try{
   const res=await axios.get(url)
   const count=res.headers["x-total-count"]
  // console.log(count)
  pagesInfo[page].count=count
 }

 catch(err) {console.log(err.message)}
   
  })
 // console.log(pagesInfo)
  
 dispatch({ type: GET_PAGES_COUNT_DATA, payload: pagesInfo});
 
};
