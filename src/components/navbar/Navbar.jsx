import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { useFlower } from "../../context/FlowerContextProvider";
import { useFilter } from "../../context/FilterContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";
import { IoLogoTableau } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const { productState } = useFlower();
  const { filterDispatch } = useFilter();
  const [searchText, setSearchText] = useState();
  const navigate = useNavigate();
  const { authState } = useAuth();
  const encodedToken = localStorage.getItem("token");

  useEffect(() => {
    filterDispatch({ type: "SEARCH", payload: searchText });
  }, [searchText, filterDispatch]);

  return (
    <>
      <div className="navbar_container">
        <NavLink to={"/"} className={"text_deco"}>
          <div className=" logo_div">
            <p className="logo">EverBloom</p>
          </div>
        </NavLink>
        <input
          className="search_input"
          type="search"
          placeholder="search for product"
          value={searchText}
          name="search"
          onChange={(e) => {
            navigate("./products");
            setSearchText(e.target.value);
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
          }}
        ></input>
        <div className="nav_right">
          <NavLink className="text_deco nav_right_ele " to={"/products"}>
            <IoLogoTableau style={{ fontSize: "1.7rem" }} />
          </NavLink>
          <NavLink className="text_deco nav_right_ele " to={"/wishList"}>
            <div className="heart">
              <BsSuitHeart style={{ fontSize: "1.7rem" }} />
              <div className="heart_count">
                <span>{encodedToken ? productState?.wishList?.length : 0}</span>
              </div>
            </div>
          </NavLink>
          <NavLink className="text_deco nav_right_ele " to={"/cart"}>
            {/* <p>{productState?.cart?.length}</p> */}
            <div className="heart">
              <IoCartOutline style={{ fontSize: "1.7rem" }} />
              <div className="heart_count">
                <span>{encodedToken ? productState?.cart?.length : 0}</span>
              </div>
            </div>
          </NavLink>
          <NavLink
            className="text_deco nav_right_ele user_name "
            to={authState?.isLoggedIn ? "/acc-detail" : "/signIn"}
          >
            {authState?.isLoggedIn ? (
              <p>{authState.user.firstName}</p>
            ) : (
              <FiUser style={{ fontSize: "1.7rem" }} />
            )}
          </NavLink>
        </div>
      </div>
      {/* <div>
        {productState?.categories?.map(({ _id, categoryName }) => (
          <NavLink
            key={_id}
            to={"/products"}
            onClick={() => {
              filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
              filterDispatch({
                type: "SET_CATEGORY_FILTER",
                payload: categoryName,
              });
            }}
          >
            {categoryName} ||
          </NavLink>
        ))}
      </div> */}
    </>
  );
};

export default Navbar;
