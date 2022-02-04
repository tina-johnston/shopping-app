import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { products: [], savedItems: [], subTotal: 0, quantity: 0 },
  reducers: {
    addToCart(state, action) {
      const addProduct = action.payload;
      const productInCart = state.products.find(
        (product) => product.id === addProduct.id
      );
      state.quantity++;
      state.subTotal = state.subTotal + addProduct.price;
      if (!productInCart) {
        state.products.push({
          id: addProduct.id,
          title: addProduct.title,
          image: addProduct.image,
          price: addProduct.price,
          totalPrice: addProduct.price,
          totalQuantity: 1,
        });
      } else {
        productInCart.totalQuantity++;
        productInCart.totalPrice =
          productInCart.totalPrice + productInCart.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const productInCart = state.products.find((product) => product.id === id);

      state.quantity--;
      state.subTotal = state.subTotal - productInCart.price;

      if (productInCart.totalQuantity === 1) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        productInCart.totalQuantity--;
        productInCart.totalPrice =
          productInCart.totalPrice - productInCart.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
