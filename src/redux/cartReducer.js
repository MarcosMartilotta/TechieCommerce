import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id,
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    addItem: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    lessItem: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id,
      );
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      ); //todos menos action.payload
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, addItem, lessItem } =
  cartSlice.actions;

export default cartSlice.reducer;
