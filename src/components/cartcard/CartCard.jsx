import React from "react";
import "./CartCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { useFlower } from "../../context/FlowerContextProvider";
import { updateQuantityChange } from "../../utils/updateQuantityChange";
import { useCart } from "../../context/CartContextProvider";
import { useWishList } from "../../context/WishListContextProvider";
import { BsSuitHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const CartCard = ({ product }) => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { productState, ProductDispatch } = useFlower();
  const { removeFromCartHandler } = useCart();
  const { addItemToWishList, removeFromWishList, isItemInWishList } =
    useWishList();
  //   console.log(product.qty);
  return (
    <div className="cartcard">
      <img
        style={{ border: "5px double hotpink" }}
        src={product.img}
        className="product_cart_img"
        alt="pic"
        height={"250px"}
        width={"250px"}
      />
      <div className="cartcard_details">
        <p style={{ marginBottom: "0.3rem", fontSize: "1.2rem" }}>
          {product.name}
        </p>
        <p style={{ fontSize: "1.3rem", margin: "0.5rem 1rem" }}>
          ₹{product.price}
        </p>

        <button
          className="minus"
          onClick={() => {
            if (product.qty > 1) {
              updateQuantityChange(ProductDispatch, product._id, "decrement");
            }
          }}
          disabled={product.qty < 1}
        >
          -
        </button>
        <span className="qty-count">{product.qty}</span>
        <button
          className="plus"
          onClick={() => {
            updateQuantityChange(ProductDispatch, product._id, "increment");
          }}
        >
          +
        </button>
        <br />
        <button
          className="remove_cart"
          onClick={() => {
            removeFromCartHandler(product._id);
          }}
        >
          remove from cart
        </button>
        <br />
        <button
          className="remove_wishList"
          onClick={() => {
            if (authState?.isLoggedIn) {
              if (isItemInWishList(productState?.wishList, product._id)) {
                removeFromWishList(product._id);
                // alert("removed from wishlist");
                // navigate("/wishList");
              } else {
                addItemToWishList(product);
                // alert("added to wishlist");
              }
            } else {
              toast("please login to continue!");
              // alert("please login to continue");
              navigate("/signIn");
            }
          }}
        >
          {isItemInWishList(productState?.wishList, product._id)
            ? `remove wishList`
            : `Add to wishList`}
        </button>
      </div>
    </div>
  );
};

export default CartCard;
