import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
    numberOfItems: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      let itemToCart = {
        name: action.payload[0].name,
        link: action.payload[0].link,
        price: action.payload[0].price,
        id: action.payload[2],
        quantity: action.payload[1],
      };
      state.numberOfItems += itemToCart.quantity;
      state.itemsInCart.map((product) =>
        product.id === itemToCart.id
          ? (product.quantity += itemToCart.quantity)
          : product
      );
      if (!state.itemsInCart.find((product) => product.id === itemToCart.id)) {
        state.itemsInCart.push(itemToCart);
      }
    },
    deleteFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (product) => product.id !== action.payload[0]
      );
      state.numberOfItems -= action.payload[1];
    },
    deleteAll: (state) => {
      state.numberOfItems = 0;
      state.itemsInCart = [];
    },
  },
});

export const { addToCart, deleteFromCart, deleteAll } = cartSlice.actions;
export default cartSlice.reducer;
