import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { _id, size, color, quantity, price } = action.payload;
      // Find if a product with the same ID, size, and color exists
      const existingProduct = state.products.find(
        (product) =>
          product._id === _id &&
          product.size === size &&
          product.color === color
      );

      if (existingProduct) {
        // If product exists with the same size and color, increment the quantity
        existingProduct.quantity += quantity;
        state.total += price * quantity;
      } else {
        // If product does not exist, add as new product
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += price * quantity;
      }
    },
    removeProduct: (state, action) => {
      const { _id, size, color } = action.payload;
      const productIndex = state.products.findIndex(
        (product) =>
          product._id === _id &&
          product.size === size &&
          product.color === color
      );
      if (productIndex >= 0) {
        state.total -= state.products[productIndex].price * state.products[productIndex].quantity;
        state.products.splice(productIndex, 1);
        state.quantity -= 1;
      }
    },
    removeAllProduct: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, removeAllProduct } = cartSlice.actions;
export default cartSlice.reducer;
