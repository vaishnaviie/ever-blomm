import React, { createContext, useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import FlowerReducer from "../reducer/FlowerReducer";
import { initialState } from "../reducer/FlowerReducer";
import { v4 as uuidv4 } from "uuid";

export const FlowerContext = createContext();

export const FlowerContextProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const initialState = {
  //   products: [],
  //   cart: [],
  //   wishList: [],
  //   categories: [],
  // };

  const testUserAddress = {
    id: uuidv4(),
    firstName: "Vaishnavi",
    lastName: "Parate",
    addressLine: "Jesus Colony",
    // addressLine2: "Ram Mandir Road ",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    zipCode: 452369,
    // mobileNumber: 4596321596,
  };

  const [productState, ProductDispatch] = useReducer(
    FlowerReducer,
    initialState
  );

  // console.log(productState?.cart);
  console.log(productState?.wishList);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("api/products");
      // console.log(data);
      ProductDispatch({
        type: "INITIALIZE_PRODUCTS",
        payload: data.products,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const getCategories = async () => {
    try {
      const { data } = await axios.get("api/categories");
      // console.log(data);
      ProductDispatch({
        type: "INITIALIZE_CATEGORIES",
        payload: data.categories,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const initialAddress = () => {
    ProductDispatch({
      type: "SET_ADDRESS",
      payload: testUserAddress,
    });
  };

  const setAddress = (addrData) => {
    ProductDispatch({
      type: "SET_ADDRESS",
      payload: addrData,
    });
  };

  useEffect(() => {
    getProducts();
    getCategories();
    initialAddress();
  }, []);
  // console.log(productState);

  const bestSellingProduct = productState?.products?.filter(
    ({ isBestSeller }) => isBestSeller
  );
  return (
    <div>
      <FlowerContext.Provider
        value={{
          productState,
          ProductDispatch,
          bestSellingProduct,
          setAddress,
          isLoading,
          setLoading,
        }}
      >
        {children}
      </FlowerContext.Provider>
    </div>
  );
};

export const useFlower = () => useContext(FlowerContext);
