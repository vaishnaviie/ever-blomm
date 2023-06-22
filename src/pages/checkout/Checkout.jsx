import React, { useState } from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { productState, ProductDispatch } = useFlower();
  const navigate = useNavigate();
  const totalPrice = productState?.cart?.reduce(
    (acc, { price, qty }) => acc + price * qty,
    0
  );

  const selectedAddr = productState?.address?.find(
    (addr) => addr.id === productState?.selectedAddressId
  );

  console.log(productState?.selectedAddressId);

  return (
    <div className="checkout_container">
      {/* <div className="contain"> */}
      <ul className="addr_radio">
        <h3 style={{ textAlign: "center" }}>Select an address</h3>
        {productState?.address?.length ? (
          productState?.address?.map((addr) => (
            <li className="select_aadr" style={{ margin: "1.3rem 0rem" }}>
              <label htmlFor={addr.id} key={addr.id}>
                <input
                  style={{ border: "1px solid blue" }}
                  type="radio"
                  name="address"
                  id={addr.id}
                  value={addr.id}
                  checked={productState?.selectedAddressId === addr.id}
                  onChange={(e) =>
                    ProductDispatch({
                      type: "SET_SELECTED_ADDRESS_ID",
                      payload: addr.id,
                    })
                  }
                />
                <div
                  style={{
                    // border: "1px solid green",
                    textAlign: "center",
                    marginTop: "-1.5rem",
                    // width: "50%",
                    textAlignLast: "left",
                    paddingLeft: "2.5rem",
                  }}
                >
                  <p>
                    {addr.firstName} {addr.lastName},
                  </p>{" "}
                  <p>{addr.addressLine},</p>{" "}
                  <p>
                    {addr.city}-{addr.zipCode}
                  </p>
                  <p>
                    {" "}
                    {addr.state}, {addr.country}
                  </p>
                </div>
              </label>
            </li>
          ))
        ) : (
          <p>No address available.</p>
        )}
        <button
          className="btn_add_address"
          onClick={() => navigate("/acc-detail")}
        >
          add address
        </button>
      </ul>

      {/* </div> */}
      {/* <button onClick={() => navigate("/addr-form")}>add address</button> */}

      <div className="checkout_all_details">
        <div
          style={{
            borderBottom: "3.5px double purple",
            paddingBottom: "0.5rem",
            // border: "2px dotted red",
          }}
        >
          <h3 style={{ textAlign: "center", fontWeight: "900" }}>
            Order summary
          </h3>
          {productState?.cart?.map((cartItem) => (
            <li
              style={{
                listStyle: "none",
                // border: "2px solid red",
                display: "flex",
                justifyContent: "space-between",
                lineHeight: "1.7rem",
              }}
            >
              <span>
                {cartItem?.name} ({cartItem?.price} X {cartItem?.qty})
              </span>
              <span>{cartItem?.qty}</span>
            </li>
          ))}
        </div>

        <div
          style={{
            lineHeight: "1.7rem",
            borderBottom: "3.5px double purple",
            paddingBottom: "0.5rem",
            // border: "2px dotted red",
          }}
        >
          {/* <div className="checkout"> */}
          <h3 style={{ textAlign: "center" }}>Price details</h3>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              // border: "1px solid green",
              // width: "75%",
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
              // width: "75%",
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
              // width: "75%",
              margin: "auto",
            }}
          >
            <span>Shipping Charges</span> <span>₹50</span>
          </p>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              // border: "1px solid green",
              // width: "75%",
              margin: "auto",
            }}
          >
            <span>Grand Total</span>
            <span style={{ fontSize: "1.3rem" }}>₹{totalPrice + 50 + 99}</span>
          </p>

          {/* </div> */}
        </div>
        <div
          style={{
            borderBottom: "3.5px double purple",
            paddingBottom: "0.5rem",
            // border: "2px dotted red",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Deliver To</h3>
          {/* ------------- */}
          {productState?.selectedAddressId?.length ? (
            <div
              style={{
                // border: "1px solid green",
                textAlign: "left",
                // marginTop: "-1.5rem",
                // width: "50%",
                // textAlignLast: "left",
                // paddingLeft: "2.5rem",
                lineHeight: "0.5rem",
              }}
            >
              <p>
                {selectedAddr?.firstName} {selectedAddr?.lastName},
              </p>{" "}
              <p>{selectedAddr?.addressLine},</p>{" "}
              <p>
                {selectedAddr?.city}-{selectedAddr?.zipCode}
              </p>
              <p>
                {" "}
                {selectedAddr?.state}, {selectedAddr?.country}
              </p>
            </div>
          ) : (
            <p>select address </p>
          )}

          {/* ------------- */}
        </div>
        <button
          onClick={() => navigate("/orderPlaced")}
          style={{ textAlign: "center" }}
          className="btn_place_order"
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
