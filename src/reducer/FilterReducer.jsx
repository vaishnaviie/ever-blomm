export const initialFilter = {
  search: "",
  priceRange: 3000,
  categoryFilter: [],
  colorFilter: [],
  ratingFilter: "",
  sortByPriceFilter: "",
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ALL_FILTERS": {
      return {
        search: "",
        priceRange: 3000,
        categoryFilter: [],
        colorFilter: [],
        ratingFilter: "",
        sortByPriceFilter: "",
      };
    }

    case "SEARCH": {
      return {
        ...state,
        search: action.payload,
      };
    }
    case "SET_PRICE_RANGE": {
      return {
        ...state,
        priceRange: action.payload,
      };
    }

    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: state?.categoryFilter?.includes(action.payload)
          ? state?.categoryFilter?.filter(
              (category) => category !== action.payload
            )
          : [...state?.categoryFilter, action.payload],
      };

    case "SET_COLOR_FILTER":
      return {
        ...state,
        colorFilter: state?.colorFilter?.includes(action.payload)
          ? state?.colorFilter?.filter(
              (category) => category !== action.payload
            )
          : [...state?.colorFilter, action.payload],
      };

    case "SET_RATING_FILTER":
      return {
        ...state,
        ratingFilter: action.payload,
      };

    case "SET_SORTBYPRICE_FILTER":
      return {
        ...state,
        sortByPriceFilter: action.payload,
      };

    default:
      return state;
  }
};

export default FilterReducer;
