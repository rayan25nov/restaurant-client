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
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const updatedItems = state.items.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + quantity;
          if (newQuantity <= 0) {
            // If the new quantity is zero or negative, remove the item
            return null;
          } else {
            // Calculate the new price based on the original price
            const newPrice = (item.price * newQuantity).toFixed(2);
            return {
              ...item,
              quantity: newQuantity,
              newPrice, // Store the updated price
            };
          }
        }
        return item;
      });

      // Remove items with null values (quantity <= 0)
      state.items = updatedItems.filter((item) => item !== null);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
