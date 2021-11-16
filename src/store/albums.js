import { createSlice } from "@reduxjs/toolkit";

export const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    isLoading: false,
    currentAlbums: null,
    albums: [],
  },
  reducers: {
    getAlbumsFetch(state) {
      state.isLoading = true;
    },
    getAlbumsSuccess(state, action) {
      state.isLoading = false;
      state.currentAlbums = action.payload;
      state.albums = [...state.albums, ...action.payload.items];
    },
    getAlbumsFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { getAlbumsFetch, getAlbumsSuccess, getAlbumsFailed } =
  albumsSlice.actions;

export default albumsSlice;
