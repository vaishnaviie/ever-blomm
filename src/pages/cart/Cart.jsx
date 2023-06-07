import React from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import EmptyCart from "./EmptyCart";
import ProductCart from "../../components/productCart/ProductCart";
import { useNavigate } from "react-router-dom";
import CartCard from "../../components/cartcard/CartCard";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { productState } = useFlower();
  console.log(productState);
  const totalPrice = productState?.cart?.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );
  return (
    <div className="cart_container">
      <h2 style={{ textAlign: "center" }}>
        Cart: {productState?.cart?.length}
      </h2>
      <div>
        {productState?.cart?.length === 0 ? (
          <div
            style={{
              margin: "auto",
              // border: "2px solid red",
              // width: "50%",
              textAlign: "center",
            }}
          >
            {/* <h2 style={{ textAlign: "center" }}>
              Cart: {productState?.cart?.length}
            </h2> */}
            <EmptyCart />
          </div>
        ) : (
          <div className="carts">
            <div>
              {/* <h2>Cart {productState?.cart?.length} </h2> */}
              {productState?.cart?.map((product) => (
                <CartCard product={product} />
              ))}
            </div>
            <div className="checkout">
              <h2>Price details</h2>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // border: "1px solid green",
                  width: "75%",
                  margin: "auto",
                }}
              >
                <span>Price ({productState?.cart?.length} products )</span>
                <span>₹{totalPrice}</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // border: "1px solid green",
                  width: "75%",
                  margin: "auto",
                }}
              >
                <span>Delivery Charges</span> <span>₹99</span>
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // border: "1px solid green",
                  width: "75%",
                  margin: "auto",
                }}
              >
                <span>Shipping Charges</span> <span>₹50</span>
              </p>
              <h3>
                <span>Total amount</span>
                <span>
                  {" "}
                  <b>₹{totalPrice + 50 + 99}</b> only
                </span>
              </h3>
              <button
                className="btn_checkout"
                onClick={() => navigate("/checkoutPage")}
              >
                checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
