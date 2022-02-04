import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { saved: false, openCheckout: false, toggleProductPage: false },
  reducers: {
    checkout(state) {
      state.openCheckout = !state.openCheckout;
    },
    togglePage(state) {
      state.toggleProductPage = !state.toggleProductPage;
    },
    save(state) {
      state.saved = !state.saved;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
