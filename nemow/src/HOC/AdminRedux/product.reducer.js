// Note: Do not update/change the initial state
import {
  ADMIN_SIGN_IN,
  ADMIN_SIGN_OUT,
  UPDATE_PRODUCT_DATA,
  DELETE_PRODUCT_DATA,
  ADD_PRODUCT_DATA,
  SET_ADMIN_PAGE,
  GET_PRODUCTS_DATA,
  FILTER_PRODUCT_DATA,
  GET_PAGES_COUNT_DATA
} from "./product.types";

const adminInitialState = {
  admin: true,
  path: "",
  page: "Admin",
  products:[],
  pagesInfo: {
   
  
  },
  productData: {
    id: "",
    mrpRange: {
      min: "0",
      max: "0",
    },
    sellingPriceRange: {
      min: 0,
      max: 0,
    },
    discountRange: {
      min: 0,
      max: 0,
    },
    name: "",
    brand: "",
    url: "",
    imagePath: "",
    altImagePath: "",
    otherImages: {
      3: "",
      4: "",
      5: "",
    },
    promotions: [
      {
        id: "",
        name: "",
        displayName: "",
        type: "",
        displayDiscount: false,
        noCouponDetails: "",
        brands: [],
        supportedChannel: [],
        discountInPercentage: "",
      },
    ],
    moreColors: "",
    isNew: true,
    sizeChartId: "",
    skus: "",
    video: "",
    allImages: "",
    specs: "",
    sapStyleId: "",
    productTags: [
      {
        tagText: "",
        tagUrl: "",

        tagTextColor: "",
      },
    ],
    imageColor: "",
  
  },
};

export const productReducer = (
  state = adminInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_SIGN_IN:
      return { ...state, admin: true };

    case ADMIN_SIGN_OUT:
      return adminInitialState;
    case UPDATE_PRODUCT_DATA:
      return { ...state, productData: payload.productData, path:payload.path};

    case SET_ADMIN_PAGE:
      return { ...state, page: payload };

    case ADD_PRODUCT_DATA :
      return { ...state, productData: adminInitialState.productData,products:payload };

      case  DELETE_PRODUCT_DATA:
        if(state.pagesInfo[payload.page])
      return { ...state, products: payload.newProductData ,pagesInfo:payload.pagesInfo};
      else{
        return { ...state, products: payload.newProductData };
      }
      case   FILTER_PRODUCT_DATA:
        return { ...state, products: payload };

    case GET_PRODUCTS_DATA : return { ...state,products:payload.Data,path:payload.path}

    case GET_PAGES_COUNT_DATA : return { ...state,pagesInfo:payload}
    default:
      return state;
  }
};
