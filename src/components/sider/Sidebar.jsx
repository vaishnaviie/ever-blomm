import React from "react";
import { useFlower } from "../../context/FlowerContextProvider";
import { useFilter } from "../../context/FilterContextProvider";
import "./Sidebar.css";

const Sidebar = () => {
  const { productState } = useFlower();
  const { filterState, filterDispatch } = useFilter();
  const colorsArr = productState?.products?.reduce(
    (acc, { color }) => (!acc.includes(color) ? [...acc, color] : acc),
    []
  );
  //   console.log(coloArr);
  const ratingArr = [4, 3, 2, 1];

  const sortByPriceArr = [
    { label: "High to Low", value: "HTL" },
    { label: "Low to Hight", value: "LTH" },
  ];
  // console.log(filterState?.priceRange);
  // console.log(filterState?.categoryFilter);
  // console.log(filterState?.colorFilter);
  // console.log(filterState?.ratingFilter);
  // console.log(filterState?.sortByPriceFilter);
  return (
    <div className="sidebar">
      <span className="filters">filters</span>
      <button
        className="btn_clear"
        onClick={() =>
          filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" })
        }
      >
        clear
      </button>

      <h4>Price</h4>
      <div>{/* <h2>{filterState?.priceRange}</h2> */}</div>
      <input
        type="range"
        min={100}
        max={3000}
        value={filterState?.priceRange}
        onChange={(e) =>
          filterDispatch({ type: "SET_PRICE_RANGE", payload: e.target.value })
        }
      />
      <span>{filterState?.priceRange}</span>

      <h4>Category</h4>
      <div>
        {productState?.categories?.map(({ _id, categoryName }) => (
          <label key={_id}>
            <input
              type="checkbox"
              key={categoryName}
              checked={filterState?.categoryFilter?.includes(categoryName)}
              onChange={() =>
                filterDispatch({
                  type: "SET_CATEGORY_FILTER",
                  payload: categoryName,
                })
              }
            />
            {categoryName}
            <br />
          </label>
        ))}

        <h4>Colors</h4>
        {colorsArr?.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              key={color}
              checked={filterState?.colorFilter?.includes(color)}
              onClick={(e) =>
                filterDispatch({
                  type: "SET_COLOR_FILTER",
                  payload: color,
                })
              }
            />
            {color}
            <br />
          </label>
        ))}

        <h3>Ratings</h3>
        <div>
          {ratingArr?.map((rating) => {
            return (
              <label key={rating}>
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={Number(filterState?.ratingFilter) === Number(rating)}
                  onChange={(e) =>
                    filterDispatch({
                      type: "SET_RATING_FILTER",
                      payload: e.target.value,
                    })
                  }
                />
                {rating}⭐ and above
                <br />
              </label>
            );
          })}
        </div>

        <h3>Sort by Price</h3>
        <div>
          {sortByPriceArr.map(({ label, value }) => (
            <label key={value}>
              <input
                type="radio"
                name="sort"
                value={value}
                checked={filterState?.sortByPriceFilter === value}
                onChange={(e) =>
                  filterDispatch({
                    type: "SET_SORTBYPRICE_FILTER",
                    payload: e.target.value,
                  })
                }
              />
              {label}
              <br />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
