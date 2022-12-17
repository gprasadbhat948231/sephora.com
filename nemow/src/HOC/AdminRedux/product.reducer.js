// Note: Do not update/change the initial state
import {
  ADMIN_SIGN_IN,
  ADMIN_SIGN_OUT,
  UPDATE_PRODUCT_DATA,
  DELETE_PRODUCT_DATA,
  ADD_PRODUCT_DATA,
  SET_ADMIN_PAGE,
} from "./product.types";

const adminInitialState = {
  admin: true,
  path: "",
  page: "Dashboard",
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
        name: "xsaaaaa",
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
      return { ...state, productData: payload };

    case SET_ADMIN_PAGE:
      return { ...state, page: payload };

    case ADD_PRODUCT_DATA || DELETE_PRODUCT_DATA:
      return { ...state, productData: adminInitialState.productData };

    default:
      return state;
  }
};
