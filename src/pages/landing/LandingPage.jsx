import React from "react";
import video from "../assets/flowerr.mp4";
import "./Landing.css";
import { useFlower } from "../../context/FlowerContextProvider";
import { NavLink } from "react-router-dom";
import { useFilter } from "../../context/FilterContextProvider";

const Landing = () => {
  const { productState } = useFlower();
  const { filterDispatch } = useFilter();
  return (
    <div className="landing_main_container">
      <div className="flower_video">
        <video
          style={{
            height: "500px",
            width: "100%",
            objectFit: "cover",
            opacity: 0.8,
          }}
          className="flower"
          src={video}
          muted
          autoPlay
          loop
          controlsList="nodownload"
          // height={"300px"}
          // width={"100%"}
        ></video>
      </div>

      <div className="description">
        <div className="description_one">From our fram</div>
        <div className="description_two">to your table...</div>
      </div>

      <div className="category_container">
        {productState?.categories?.map(({ _id, categoryName, imgg }) => (
          <NavLink
            style={{ textDecoration: "none" }}
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
            <div className="category_box_container">
              {/* {imgg} */}
              <img className="category_img" src={imgg} alt="pic" />
              <p className="category_name">{categoryName}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Landing;
