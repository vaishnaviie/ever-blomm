import axios from "axios";

export const updateQuantityChange = async (Dispatch, itemId, type) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { data } = await axios.post(
      `api/user/cart/${itemId}`,
      { action: { type } },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    Dispatch({ type: "SET_CART", payload: data?.cart });
  } catch (error) {
    console.log(error);
  }
};
