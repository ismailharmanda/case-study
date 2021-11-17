import { createSlice } from "@reduxjs/toolkit";

export const showsSlice = createSlice({
  name: "shows",
  initialState: {
    isLoading: false,
    show: null,
  },
  reducers: {
    getShowsFetch(state) {
      state.isLoading = true;
    },
    getShowsSuccess(state, action) {
      state.isLoading = false;
      state.show = action.payload;
    },
    getShowsFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { getShowsFetch, getShowsSuccess, getShowsFailed } =
  showsSlice.actions;

export default showsSlice;
