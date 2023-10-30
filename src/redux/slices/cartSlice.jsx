import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Logic to add an item to the cart
      const newItem = action.payload;
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      // Logic to remove an item from the cart
      const itemId = action.payload;
      const updatedCart = state.items.filter((item) => item.id !== itemId);
      state.items = updatedCart;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
