import React from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { useWishList } from "../../context/WishListContextProvider";
import "./ProductCart.css";
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

const ProductCart = ({ product }) => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { productState } = useFlower();
  const { addItemToCartHandler, removeFromCartHandler, isItemInCart } =
    useCart();
  const { addItemToWishList, removeFromWishList, isItemInWishList } =
    useWishList();

  console.log(productState?.wishList);
  return (
    <div className="product">
      <li
        style={{ listStyle: "none" }}
        onClick={() => navigate(`/products/${product._id}`)}
      >
        <img
          style={{ border: "5px double hotpink" }}
          src={product.img}
          className="product_cart_img"
          alt="pic"
          height={"250px"}
          width={"250px"}
        />
        {/* "Ospanen Sans" */}

        <span
          style={{
            fontFamily: "Open Sans",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
            // marginLeft: "1rem",
            // padding: "1rem",
            // border: "2px solid red",
            marginTop: "0.2rem",
            display: "inline-block",
          }}
        >
          {product.name}
        </span>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
            marginTop: "0.5rem",
            width: "12rem",
            fontSize: "1.1rem",

            // border: "1px solid red",
          }}
        >
          <span
            style={{
              fontFamily: "Open Sans",
              fontWeight: "bolder",
              // fontSize: "1.3rem",
            }}
          >
            ₹{product.price}
          </span>
          <span style={{ fontFamily: "Open Sans", fontWeight: "bolder" }}>
            Delivery: {product.delivery}
          </span>
        </p>
        <p
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 500,
            fontSize: "1.2rem",
            // display: "inline-block",
            // width: "100%",
            textAlign: "left",
            paddingLeft: "1rem",
            marginTop: "0.7rem",
            display: "flex",
            justifyContent: "space-between",
            // border: "2px solid green",
            width: "13rem",
            margin: "auto",
          }}
        >
          {" "}
          <span>
            <span>{product.rating.value}</span>
            <span
              style={{
                color: "purple",
                fontSize: "1.5rem",
              }}
            >
              ★{" "}
            </span>
          </span>
          <span
            style={{
              fontFamily: "Ospanen Sans",
              float: "right",
              paddingTop: "0.5rem",
              fontSize: "1rem",
            }}
          >
            {/* {product.rating.count} */}
            {product.rating.review} review
          </span>{" "}
        </p>
      </li>
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          // border: "2px solid red",
          width: "13rem",
          marginLeft: "2rem",
          marginTop: "0.6rem",
          margin: "auto",
        }}
      >
        <button
          className="btn"
          onClick={() => {
            if (authState?.isLoggedIn) {
              if (isItemInCart(productState?.cart, product._id)) {
                navigate("/cart");
              } else {
                addItemToCartHandler(product);
              }
            } else {
              toast("please login to continue!");
              // alert("please login to continue");
              navigate("/signIn");
            }
          }}
        >
          {isItemInCart(productState?.cart, product._id)
            ? "Go to cart"
            : "Add to cart"}
        </button>

        {/* <button
        onClick={() => {
          removeFromCartHandler(product._id);
        }}
      >
        remove from cart
      </button> */}

        <BsSuitHeartFill
          className={`${
            isItemInWishList(productState?.wishList, product._id)
              ? `colored`
              : `gray`
          }`}
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
          {/* {isItemInWishList(productState?.wishList, product._id) ? (
            <BsSuitHeartFill />
          ) : (
            <BsSuitHeart />
          )} */}
        </BsSuitHeartFill>

        {/* <button
        onClick={() => {
          removeFromWishList(product._id);
        }}
      >
        remove from cart
      </button> */}
      </span>
    </div>
  );
};

export default ProductCart;
