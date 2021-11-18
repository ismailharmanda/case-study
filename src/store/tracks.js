import { createSlice } from "@reduxjs/toolkit";

export const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    isLoading: false,
    tracks: [],
    currentTracks: {},
  },
  reducers: {
    getTracksFetch(state) {
      state.isLoading = true;
    },
    getTracksSuccess(state, action) {
      state.isLoading = false;
      state.tracks = [...state.tracks, ...action.payload.items];
      state.currentTracks = action.payload;
    },
    getTracksFailed(state) {
      state.isLoading = false;
    },
    cleanTracks(state) {
      state.tracks = [];
    },
  },
});

export const {
  getTracksFetch,
  getTracksSuccess,
  getTracksFailed,
  cleanTracks,
} = tracksSlice.actions;

export default tracksSlice;
