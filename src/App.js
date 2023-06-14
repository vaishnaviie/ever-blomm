import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Landing from "./Landing";
import Auth from "./Auth";
import Home from "./pages/home/Home";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import ProductDetails from "./pages/product details/ProductDetails";
import ProductListing from "./components/productListing/ProductListing";
import RequiresAuth from "./components/RequiresAuth";
import AccountDetails from "./components/acc_details/AccountDetails";
import AddressForm from "./components/address/AddressForm";
import Checkout from "./pages/checkout/Checkout";
import LandingPage from "./pages/landing/LandingPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useFlower } from "./context/FlowerContextProvider";
import Footer from "./components/footer/Footer";

// https://fkhadra.github.io/react-toastify/introduction
// https://mui.com/material-ui/react-backdrop/
// https://react-icons.github.io/react-icons/search?q=filter
// https://www.npmjs.com/package/react-spinners

// florish;
// everbloom;

function App() {
  const { isLoading, setLoading } = useFlower();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/wishList"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/acc-detail" element={<AccountDetails />} />
        <Route path="/addr-form" element={<AddressForm />} />
        <Route path="/checkoutPage" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
