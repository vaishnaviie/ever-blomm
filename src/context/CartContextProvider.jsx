import React, { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useFlower } from "./FlowerContextProvider";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const { productState, ProductDispatch } = useFlower();
  const getCartData = async () => {
    try {
      const {
        data: { cart },
      } = await axios.get("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      ProductDispatch({ type: "SET_CART", payload: cart });
      //   console.log(cart);
    } catch (e) {
      console.log(e);
    }
  };

  const addItemToCartHandler = async (cartData) => {
    // console.log(cartData);
    try {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        {
          product: cartData,
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      //   console.log(cart);
      ProductDispatch({ type: "SET_CART", payload: cart });
      toast("Item added to cart !");
    } catch (e) {
      console.log(e);
      toast("Something went wrong !");
    }
  };

  const removeFromCartHandler = async (itemId) => {
    console.log(itemId);
    try {
      const {
        data: { cart },
      } = await axios.delete(`/api/user/cart/${itemId}`, {
        headers: { authorization: encodedToken },
      });
      console.log(cart);
      ProductDispatch({ type: "SET_CART", payload: cart });
      toast("Item removed from cart !");
    } catch (e) {
      console.log(e);
    }
  };

  const isItemInCart = (data, id) =>
    data?.find((item) => item?._id === id) ? true : false;

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div>
      <CartContext.Provider
        value={{ addItemToCartHandler, removeFromCartHandler, isItemInCart }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
