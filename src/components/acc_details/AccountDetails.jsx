import React from "react";
import { useAuth } from "../../context/AuthContextProvider";
import { useFlower } from "../../context/FlowerContextProvider";
import "./AccountDetails.css";
import { useNavigate } from "react-router-dom";
import "./AccountDetails.css";
import { AiTwotoneDelete } from "react-icons/ai";

const AccountDetails = () => {
  const navigate = useNavigate();
  const { authState, userLogout } = useAuth();
  const { productState, ProductDispatch } = useFlower();

  const deleteAddr = (addr) => {
    const filteredArr = productState?.address?.filter(
      (address) => address.id !== addr.id
    );
    ProductDispatch({
      type: "DELETE_ADDRESS",
      payload: filteredArr,
    });
  };
  return (
    <div className="acc_container">
      <div>
        {/* <h1>Account Details</h1> */}
        <button
          className="btn_logout"
          style={{ float: "right" }}
          onClick={userLogout}
        >
          Log out
        </button>
      </div>
      <div className="acc_sub_container">
        <div className="acc_details">
          <p>
            {authState?.user?.firstName} {authState?.user?.lastName}{" "}
          </p>
          <p>{authState?.user?.email} </p>
        </div>

        <div>
          <div>
            {productState?.address?.map((addr) => (
              <div className="acc_addr_details">
                <div>
                  <AiTwotoneDelete
                    style={{
                      fontSize: "1.5rem",
                      float: "right",
                      margin: "0.5rem 0.7rem",
                    }}
                    onClick={() => deleteAddr(addr)}
                  />
                </div>
                <li style={{ listStyle: "none", marginTop: "2.5rem" }}>
                  <p>
                    {addr?.firstName} {addr?.lastName},
                  </p>{" "}
                  <p>{addr?.addressLine},</p>{" "}
                  <p>
                    {addr?.city}-{addr?.zipCode}
                  </p>
                  <p>
                    {" "}
                    {addr?.state}, {addr?.country}
                  </p>
                </li>
              </div>
            ))}
          </div>
          <button
            className="btn_add_addr"
            onClick={() => navigate("/addr-form")}
          >
            Add address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
