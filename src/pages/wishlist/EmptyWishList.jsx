import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyWishList.css";
import { useFlower } from "../../context/FlowerContextProvider";

const EmptyWishList = () => {
  const navigate = useNavigate();
  // const { productState } = useFlower();
  return (
    <div className="e_wishList">
      {/* <h1 style={{ textAlign: "center" }}>
        wishlist: {productState?.wishList?.length}
      </h1> */}
      <h2>Your Wishlist is Empty!</h2>
      <p>Add something to your Wishlist!</p>
      <button className="shop_now" onClick={() => navigate("/products")}>
        Shop Now
      </button>
    </div>
  );
};

export default EmptyWishList;
