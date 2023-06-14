import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/AuthReducer";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { initialAuth } from "../reducer/AuthReducer";
import { ToastContainer, toast } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const initialAuth = {
  //   isLoggedIn: false,
  //   user: {},
  //   token: "",
  // };

  const [authState, authDispatch] = useReducer(authReducer, initialAuth);

  const userLogin = async (loginData) => {
    // console.log(location);
    try {
      const { data } = await axios.post("api/auth/login", loginData);
      // console.log(loginData);
      // console.log(data);
      authDispatch({ type: "SET_LOGGEDIN", payload: true });
      authDispatch({ type: "SET_USER", payload: data?.foundUser });
      authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
      localStorage.setItem("token", data?.encodedToken);
      //   <Navigate to={"/"} replace={true} />;
      // alert("Login Successful!");
      toast("Login Successful!");

      navigate("/");
    } catch (e) {
      authDispatch({ type: "SET_LOGGEDIN", payload: false });
      console.log(e);
      // alert(e.response.data.errors);
    }
  };

  const userSignUp = async (signUpData) => {
    try {
      const { data } = await axios.post("api/auth/signup", signUpData);
      console.log(data?.createdUser);
      authDispatch({ type: "SET_LOGGEDIN", payload: true });
      authDispatch({ type: "SET_USER", payload: data?.createdUser });
      authDispatch({ type: "SET_TOKEN", payload: data?.encodedToken });
      localStorage.setItem("token", data?.encodedToken);
      // <Navigate to={"/"} replace={true} />;
      // alert("Sign up Successful!");
      toast("Sign up Successful!");
      navigate("/");
    } catch (e) {
      console.log(e);
      alert(e.response.data.errors);
    }
  };

  const userLogout = () => {
    authDispatch({ type: "SET_LOGGEDIN", payload: false });
    authDispatch({ type: "SET_USER", payload: {} });
    authDispatch({ type: "SET_TOKEN", payload: "" });
    localStorage.setItem("token", "");
    // alert("You are logged out");
    toast("You are logged out!");
    navigate("/");
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ authState, userLogout, userSignUp, userLogin }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
