import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FlowerContextProvider } from "./context/FlowerContextProvider";
import { FilterContextProvider } from "./context/FilterContextProvider";
import { AuthContextProvider } from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import WishListContextProvider from "./context/WishListContextProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FlowerContextProvider>
          <FilterContextProvider>
            <WishListContextProvider>
              <CartContextProvider>
                <App />
              </CartContextProvider>
            </WishListContextProvider>
          </FilterContextProvider>
        </FlowerContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
