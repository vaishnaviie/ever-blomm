import React from "react";

const Auth = () => {
  return (
    <button
      onClick={() => {
        console.log(localStorage.getItem("encodedToken"));
      }}
    >
      get Token
    </button>
  );
};

export default Auth;
