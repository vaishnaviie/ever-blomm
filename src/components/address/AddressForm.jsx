import React, { useState } from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./AddressForm.css";

const AddressForm = () => {
  const { productState, setAddress } = useFlower();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    addressLine: "",
    // addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    // firstName: productState?.address[0]?.firstName || "",
    // lastName: productState?.address[0]?.lastName || "",
    // addressLine: productState?.address[0]?.addressLine || "",
    // addressLine2: productState?.address[0]?.addressLine2 || "",
    // city: productState?.address[0]?.city || "",
    // state: productState?.address[0]?.state || "",
    // zipCode: productState?.address[0]?.zipCode || "",
    // country: productState?.address[0]?.country || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(formData);
    // onSubmit(formData);
    setFormData({
      firstName: "",
      lastName: "",
      addressLine: "",
      // addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
    navigate("/checkoutPage");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="addr_container">
      <div className="addr_sub_container">
        <h2>Add new address</h2>
        <form onSubmit={handleSubmit}>
          <label>
            {/* First Name: */}
            <input
              className="addr_input"
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {/* Last Name: */}
            <input
              className="addr_input"
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {/* Address Line 1 */}
            <input
              className="addr_input"
              placeholder="Address Line 1"
              type="text"
              name="addressLine"
              value={formData.addressLine}
              onChange={handleChange}
              required
            />
          </label>
          {/* <label>
            
            <input
              className="addr_input"
              placeholder="Address Line 2"
              type="text"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              required
            />
          </label> */}
          <label>
            {/* City: */}
            <input
              className="addr_input"
              placeholder="City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {/* State */}
            <input
              className="addr_input"
              placeholder="State"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {/* Zip Code: */}
            <input
              className="addr_input"
              placeholder="Zip Code"
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            {/* Country: */}
            <input
              className="addr_input"
              placeholder="Country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit" className="btn_addr_form">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
