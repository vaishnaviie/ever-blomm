import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { userSignUp } = useAuth();
  const [userDetail, setuserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    if (userDetail?.password !== userDetail?.confirmPassword) {
      alert("password and confirm password should be same");
    } else {
      userSignUp(userDetail);
    }
  };
  return (
    <div className="sign_up_container">
      <div className="sign_up_sub_container">
        <h2>Sign Up</h2>
        <form onSubmit={(e) => signUpHandler(e)}>
          <label htmlFor="firstName">
            {/* First Name */}
            <input
              className="sign_up_input"
              type="text"
              id="firstName"
              placeholder="first name"
              value={userDetail.firstName}
              onChange={(e) =>
                setuserDetail((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              required
            />
          </label>
          <label htmlFor="lastName">
            {/* Last Name */}
            <input
              className="sign_up_input"
              type="text"
              id="lastName"
              placeholder="last name"
              value={userDetail.lastName}
              onChange={(e) =>
                setuserDetail((prev) => ({ ...prev, lastName: e.target.value }))
              }
              required
            />
          </label>
          <label htmlFor="email">
            {/* Email address */}
            <input
              className="sign_up_input"
              type="text"
              id="email"
              placeholder="test@gmail.com"
              value={userDetail.email}
              onChange={(e) =>
                setuserDetail((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </label>
          <label htmlFor="password">
            {/* Password */}
            <input
              className="sign_up_input"
              type="password"
              id="password"
              placeholder="password"
              value={userDetail.password}
              onChange={(e) =>
                setuserDetail((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </label>
          <label htmlFor="confirmPassword">
            {/* Confirm Password */}
            <input
              className="sign_up_input"
              type="password"
              id="confirmPassword"
              placeholder="confirm password"
              value={userDetail.confirmPassword}
              onChange={(e) =>
                setuserDetail((prev) => ({
                  ...prev,
                  confirmPassword: e.target.value,
                }))
              }
              required
            />
          </label>
          <br />
          <button className="btn_sign_up" type="submit">
            Sign up
          </button>
          {/* <Link to={"/signIn"}>Already have an account ?</Link> */}
          <p className="already_account" onClick={() => navigate("/signIn")}>
            Already have an account ?
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
