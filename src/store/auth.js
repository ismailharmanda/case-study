import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    accessToken: null,
  },
  reducers: {
    getAuthFetch(state) {
      state.isLoading = true;
    },
    getAuthSuccess(state, action) {
      state.accessToken = action.payload;
      state.isLoading = false;
    },
    getAuthFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { getAuthFetch, getAuthSuccess, getAuthFailed } =
  authSlice.actions;

export default authSlice;
