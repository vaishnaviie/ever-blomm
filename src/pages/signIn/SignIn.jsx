import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const guestUserData = {
    email: "vaishnavi@gmail.com",
    password: "vaishnavi",
  };
  const { authState, userLogin } = useAuth();
  // console.log(authState);
  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(userData);
  };

  const loginAsGuestHandler = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    userLogin(guestUserData);
  };
  return (
    <form>
      <div className="sign_in_container">
        <div className="sign_in_sub_container">
          <h2 className="sign_in_heading">Sign In</h2>
          <label htmlFor="email">
            {/* Email address */}
            <input
              className=" sign_in_email"
              type="text"
              id="email"
              placeholder="test@gmail.com"
              value={userData.email}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            {/* {userData.email} */}
          </label>
          <br />
          <label htmlFor="password">
            {/* Password */}
            <input
              className=" sign_in_password"
              type="password"
              id="password"
              placeholder="*******"
              value={userData.password}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
            {/* {userData.password} */}
          </label>
          <br />
          <button className="sign_in_button" onClick={(e) => loginHandler(e)}>
            Sign in
          </button>
          <br />
          <button
            className="sign_in_guest_button"
            onClick={(e) => loginAsGuestHandler(e)}
          >
            Sign in as Guest
          </button>

          {/* <Link to={"/signUp"}>Create an account</Link> */}
          <p className="account" onClick={() => navigate("/SignUp")}>
            Create an account
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
