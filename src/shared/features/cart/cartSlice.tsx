import type { ShopItem } from "@/shared/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//To Store in localeStorage
const Items: ShopItem[] =
  localStorage.getItem("data") !== null
    ? JSON.parse(localStorage.getItem("data") as string)
    : [];
const initialState = {
  cartItem: Items,
};
//Create Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, actionPayload: PayloadAction<ShopItem>) => {
      let findItem = state.cartItem.find(
        (el) => el.id === actionPayload.payload.id
      );
      if (findItem) {
        findItem.quantity = actionPayload.payload.quantity;
      } else {
        state.cartItem.push(actionPayload.payload);
      }
      localStorage.setItem("data", JSON.stringify(state.cartItem));
    },
    removeItemFromCart: (state, action: PayloadAction<ShopItem>) => {
      let newProducts = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.cartItem = newProducts;
      localStorage.setItem("data", JSON.stringify(newProducts));
    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
