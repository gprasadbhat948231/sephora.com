// admin related  Actions here

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
  GET_PAGES_COUNT_DATA,
} from "./product.types";

// adding data to products key
export const updateProduct_path = (productData, path) => (dispatch) => {
  const data = { productData, path };
  dispatch({ type: UPDATE_PRODUCT_DATA, payload: data });
};

// admin login check
export const adminSignIn = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGN_IN });
};

// admin logout check
export const adminSignout = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGN_OUT });
};

export const reset = () => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_DATA });
};

//set the redirected page
export const setPage = (page) => (dispatch) => {
  dispatch({ type: SET_ADMIN_PAGE, payload: page });
};

// sorting data
export const filterData = (productsData, sortby) => (dispatch) => {
  productsData.sort((a, b) => a[sortby] - b[sortby]);
  const newProductData = productsData;
  dispatch({ type: FILTER_PRODUCT_DATA, payload: newProductData });
};

// delete data from server and update without featching new data from server
export const deleteProduct =
  (id, path, productsData, pagesInfo) => (dispatch) => {
    let newProductData = productsData.filter((product) => product.id !== id);
    const url = `https://sephorajsonserver.onrender.com/${path}/${id}`;
    let res = axios.delete(url);
    if (pagesInfo) {
      let page = Object.keys(pagesInfo).filter(
        (page) => pagesInfo[page].path === path
      );
      pagesInfo[page].count = Number(pagesInfo[page].count) - 1;
    }
    dispatch({
      type: DELETE_PRODUCT_DATA,
      payload: { newProductData, pagesInfo },
    });

    return res;
  };

// add new product in page on server and also add with data without request
export const postProduct = (product, path, products) => async (dispatch) => {
  const url = `https://sephorajsonserver.onrender.com/${path}`;
  const newProductData = [...products, product];

  let res = await axios.post(url, product);
  console.log(res);

  dispatch({ type: ADD_PRODUCT_DATA, payload: newProductData });
  console.log(newProductData);
  return res;
};

// update product on server and dom also
export const updateProduct = (product, path, products) => async (dispatch) => {
  const url = `https://sephorajsonserver.onrender.com/${path}/${product.id}`;
  let res = await axios.put(url, product);
  products.map((pro) => (pro.id === product.id ? product : pro));
  dispatch({ type: ADD_PRODUCT_DATA, payload: products });
  return res;
};

// get data of perticular page and add some keys in it with randome generated data
export const getProducts = (path) => async (dispatch) => {
  const url = `https://sephorajsonserver.onrender.com/${path}`;
  let res = await axios.get(url);
  const Data = res.data.map((product, i) => {
    const num = Math.random();
    const newData = {
      ...product,
      rating: 1 + num * 4,
      numReviews: Math.ceil(num * 1000),
      remain_qnty: Math.floor(num * 500),
    };
    return newData;
  });
  dispatch({ type: GET_PRODUCTS_DATA, payload: { Data, path } });
  return res;
};

// get all pages count from server one by one
export const getPagesCount = (pathsInfo) => (dispatch) => {
  const pagesInfo = { ...pathsInfo };
  Object.keys(pathsInfo).forEach(async (page) => {
    const url = `https://sephorajsonserver.onrender.com/${pathsInfo[page].path}?_page=1&_limit=1`;
    try {
      const res = await axios.get(url);
      const count = res.headers["x-total-count"];
      pagesInfo[page].count = +count;
    } catch (err) {
      console.log(err.message);
    }
  });
  dispatch({ type: GET_PAGES_COUNT_DATA, payload: pagesInfo });
};
