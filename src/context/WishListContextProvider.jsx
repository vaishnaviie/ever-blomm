import React, { createContext, useContext } from "react";
import { useFlower } from "./FlowerContextProvider";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const WishListContext = createContext();
export const useWishList = () => useContext(WishListContext);

const WishListContextProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const { productState, ProductDispatch } = useFlower();

  const getWishListData = async () => {
    try {
      const {
        data: { wishlist },
      } = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      //   console.log(wishlist);
      ProductDispatch({ type: "SET_WISHLIST", payload: wishlist });
    } catch (e) {
      console.log(e);
    }
  };

  const addItemToWishList = async (wishListData) => {
    // console.log(wishListData);
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        "/api/user/wishlist",
        {
          product: wishListData,
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(wishlist);
      ProductDispatch({ type: "SET_WISHLIST", payload: wishlist });
      toast("Item added to WishList!");
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromWishList = async (itemId) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`/api/user/wishlist/${itemId}`, {
        headers: { authorization: encodedToken },
      });
      console.log(wishlist);
      ProductDispatch({ type: "SET_WISHLIST", payload: wishlist });
      toast("Item removed from WishList!");
    } catch (e) {
      console.log(e);
    }
  };

  const isItemInWishList = (data, id) =>
    data?.find((item) => item?._id === id) ? true : false;

  useEffect(() => {
    getWishListData();
  }, []);

  return (
    <div>
      <WishListContext.Provider
        value={{ addItemToWishList, removeFromWishList, isItemInWishList }}
      >
        {children}
      </WishListContext.Provider>
    </div>
  );
};

export default WishListContextProvider;
