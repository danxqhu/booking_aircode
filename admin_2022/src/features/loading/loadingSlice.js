import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false,
  },
  reducers: {
    toOpen: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      console.log(state.value);
    },
    toClose: state => {
      state.value = false;
      console.log(state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toOpen, toClose } = loadingSlice.actions;

export const selectLoading = state => state.loading.value;

export default loadingSlice.reducer;
