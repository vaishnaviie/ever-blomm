import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFlower } from "../../context/FlowerContextProvider";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { useWishList } from "../../context/WishListContextProvider";
import { ToastContainer, toast } from "react-toastify";
import { BsSuitHeartFill } from "react-icons/bs";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const { productState, ProductDispatch } = useFlower();
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { addItemToCartHandler, removeFromCartHandler, isItemInCart } =
    useCart();
  const { addItemToWishList, removeFromWishList, isItemInWishList } =
    useWishList();

  const getSingleProduct = async (productID) => {
    try {
      const { data } = await axios.get(`/api/products/${productID}`);
      // console.log("vavavavva");
      // console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const singleProductDetails = async () => {
    try {
      const product = await getSingleProduct(productId);
      ProductDispatch({
        type: "SET_PRODUCT_DETAILS",
        payload: product,
      });
      // setParticularProduct(product);
      // console.log(particularProduct);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(productState?.productDetail?.product);
  useEffect(() => {
    singleProductDetails();
  }, []);

  return (
    <div className="main_detail_container">
      <div className="pro_detail_container">
        <img
          className="pro_d_img"
          src={productState?.productDetail?.product?.img}
          alt="pic"
          height={"500px"}
          width={"500px"}
        />
        <div className="other">
          <p className="pro_d_name">
            {productState?.productDetail?.product?.name}
          </p>
          <p className="pro_d_price">
            ₹{productState?.productDetail?.product?.price} only
          </p>
          <p className="pro_d_desc">
            {productState?.productDetail?.product?.description}
          </p>

          <button
            className="pro_d_btn"
            onClick={() => {
              if (authState?.isLoggedIn) {
                if (
                  isItemInCart(
                    productState?.cart,
                    productState?.productDetail?.product?._id
                  )
                ) {
                  navigate("/cart");
                } else {
                  addItemToCartHandler(productState?.productDetail?.product);
                }
              } else {
                toast("please login to continue!");
                // alert("please login to continue");
                navigate("/signIn");
              }
            }}
          >
            {isItemInCart(
              productState?.cart,
              productState?.productDetail?.product?._id
            )
              ? "Go to cart"
              : "Add to cart"}
          </button>
          <br />
          <button
            className="pro_d_btn"
            onClick={() => {
              if (authState?.isLoggedIn) {
                if (
                  isItemInWishList(
                    productState?.wishList,
                    productState?.productDetail?.product?._id
                  )
                ) {
                  removeFromWishList(productState?.productDetail?.product?._id);
                  // alert("removed from wishlist");
                  // navigate("/wishList");
                } else {
                  addItemToWishList(productState?.productDetail?.product);
                  // alert("added to wishlist");
                }
              } else {
                toast("please login to continue!");
                // alert("please login to continue");
                navigate("/signIn");
              }
            }}
          >
            {isItemInWishList(
              productState?.wishList,
              productState?.productDetail?.product?._id
            )
              ? `remove wishList`
              : `Add to wishList`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
