import React, { createContext, useContext, useReducer } from "react";
import FilterReducer from "../reducer/FilterReducer";
import { useFlower } from "./FlowerContextProvider";
import { initialFilter } from "../reducer/FilterReducer";
import { useNavigate } from "react-router-dom";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { productState } = useFlower();

  // console.log(initialFilter.priceRange);
  // console.log(initialFilter.categoryFilter);
  const [filterState, filterDispatch] = useReducer(
    FilterReducer,
    initialFilter
  );

  const searchFilteredProducts =
    filterState?.search?.length > 0
      ? productState?.products?.filter(({ name }) =>
          name.toLowerCase().includes(filterState?.search.toLowerCase())
        )
      : productState?.products;

  const priceRangeFilteredProducts = searchFilteredProducts?.filter(
    ({ price }) => Number(price) <= Number(filterState.priceRange)
  );

  const categoryFilteredProducts =
    filterState?.categoryFilter?.length > 0
      ? priceRangeFilteredProducts.filter(({ arrangements }) =>
          filterState?.categoryFilter?.includes(arrangements)
        )
      : priceRangeFilteredProducts;

  const colorFilteredProducts =
    filterState?.colorFilter?.length > 0
      ? categoryFilteredProducts?.filter(({ color }) =>
          filterState?.colorFilter?.includes(color)
        )
      : categoryFilteredProducts;

  const ratingFilteredProducts =
    filterState?.ratingFilter?.length > 0
      ? colorFilteredProducts?.filter(
          ({ rating: { value } }) =>
            Number(value) >= Number(filterState?.ratingFilter)
        )
      : colorFilteredProducts;

  const sortByPriceFilteredProducts =
    filterState?.sortByPriceFilter?.length > 0
      ? (() => {
          switch (filterState.sortByPriceFilter) {
            case "LTH":
              return [...ratingFilteredProducts]?.sort(
                (product1, product2) => product1.price - product2.price
              );
            case "HTL":
              return [...ratingFilteredProducts]?.sort(
                (product1, product2) => product2.price - product1.price
              );
            default:
              return ratingFilteredProducts;
          }
        })()
      : ratingFilteredProducts;

  return (
    <div>
      <FilterContext.Provider
        value={{ filterState, filterDispatch, sortByPriceFilteredProducts }}
      >
        {children}
      </FilterContext.Provider>
    </div>
  );
};

export const useFilter = () => useContext(FilterContext);
