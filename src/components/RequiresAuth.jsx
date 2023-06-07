import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();
  return (
    <div>
      {authState?.isLoggedIn ? (
        children
      ) : (
        <Navigate to={"/signIn"} state={{ from: location }} />
      )}
    </div>
  );
};

export default RequiresAuth;
