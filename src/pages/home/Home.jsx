import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProductListing from "../../components/productListing/ProductListing";
import { FlowerContext, useFlower } from "../../context/FlowerContextProvider";
import { Carousel } from "react-responsive-carousel";
// import "react-multi-carousel/lib/styles.css";
import ProductCart from "../../components/productCart/ProductCart";

const Home = () => {
  const { bestSellingProduct } = useFlower();
  return (
    <div>
      {/* <h2>best selling products</h2>
      <Carousel>
        {bestSellingProduct.map((item) => (
          <ProductCart product={item} />
        ))}
      </Carousel> */}
      {/* <ProductListing /> */}
    </div>
  );
};

export default Home;
