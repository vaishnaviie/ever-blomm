import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="empty_cart">
      <h2>Your Cart is Empty!</h2>
      <p>Add something to ypu cart!</p>
      <button className="shop_now" onClick={() => navigate("/products")}>
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
