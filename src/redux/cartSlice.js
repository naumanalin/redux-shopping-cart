import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    // Add product to the cart or increase its quantity if it already exists
    add(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove product from the cart
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },

    // Add one more unit of the product
    addonemore(state, action) {
      const existingItem = state.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    // Remove one unit of the product; remove from cart if quantity is 1
    removebyone(state, action) {
      const existingItem = state.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        return state.filter(item => item.id !== action.payload); // Remove if quantity is 1
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, addonemore, removebyone } = cartSlice.actions;

export default cartSlice.reducer;
