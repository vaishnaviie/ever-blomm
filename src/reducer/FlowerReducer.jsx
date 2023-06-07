export const initialState = {
  products: [],
  cart: [],
  wishList: [],
  categories: [],
  address: [],
  selectedAddressId: "",
  productDetail: {},
};

const FlowerReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: action.payload };

    case "INITIALIZE_CATEGORIES":
      return { ...state, categories: action.payload };

    case "SET_CART":
      return { ...state, cart: action.payload };

    case "SET_WISHLIST":
      return { ...state, wishList: action.payload };

    case "SET_ADDRESS":
      return {
        ...state,
        address:
          state?.address?.length >= 0
            ? [...state?.address, action.payload]
            : "",
      };

    case "DELETE_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };

    case "SET_SELECTED_ADDRESS_ID":
      return {
        ...state,
        selectedAddressId: action.payload,
      };

    case "SET_PRODUCT_DETAILS":
      return {
        ...state,
        productDetail: action.payload,
      };

    default:
      return state;
  }
};

export default FlowerReducer;
