import React from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import EmptyWishList from "./EmptyWishList";
import { useNavigate } from "react-router-dom";
import ProductCart from "../../components/productCart/ProductCart";
import "./WishList.css";

const WishList = () => {
  const { productState } = useFlower();
  const navigate = useNavigate();
  return (
    <div>
      {/* {productState?.wishList?.length === 0 ? (
        <EmptyWishList />
      ) : (
        <div>
          <h1> WishList {productState?.wishList?.length} </h1>
        </div>
      )} */}

      <div>
        {/* <button onClick={() => navigate("/checkoutPage")}>checkout</button> */}
        <h2 style={{ textAlign: "center" }}>
          Wishlist: {productState?.wishList?.length}
        </h2>
        {productState?.wishList?.length === 0 ? (
          <EmptyWishList />
        ) : (
          <div className="wishList_container">
            {productState?.wishList?.map((product) => (
              <ProductCart product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
