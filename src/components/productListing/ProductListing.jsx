import React, { useEffect } from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import ProductCart from "../productCart/ProductCart";
import Sidebar from "../sider/Sidebar";
import { useFilter } from "../../context/FilterContextProvider";
import "./ProductListing.css";
import loader from "../../../src/asset/Bees & Bombs.gif";
import { Loader } from "../loader/Loader";

const ProductListing = () => {
  const { sortByPriceFilteredProducts } = useFilter();
  const { isLoading, setLoading } = useFlower();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="sidebar_container">
            <Sidebar />
          </div>
          {/* <h2>
        show all products <small>{sortByPriceFilteredProducts.length}</small>
      </h2> */}
          <ul className="products_container">
            {sortByPriceFilteredProducts?.map((product) => (
              <ProductCart product={product} key={product._id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProductListing;
