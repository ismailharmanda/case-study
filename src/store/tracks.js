import { createSlice } from "@reduxjs/toolkit";

export const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    isLoading: false,
    tracks: [],
    currentTracks: null,
  },
  reducers: {
    getTracksFetch(state) {
      state.isLoading = true;
    },
    getTracksSuccess(state, action) {
      state.isLoading = false;
      state.tracks = action.payload.items;
      state.currentTracks = action.payload;
    },
    getTracksFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { getTracksFetch, getTracksSuccess, getTracksFailed } =
  tracksSlice.actions;

export default tracksSlice;
