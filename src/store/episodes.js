import { createSlice } from "@reduxjs/toolkit";

export const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    isLoading: false,
    episodes: [],
    currentEpisodes: null,
  },
  reducers: {
    getEpisodesFetch(state) {
      state.isLoading = true;
    },
    getEpisodesSuccess(state, action) {
      state.isLoading = false;
      state.episodes = [...state.episodes, ...action.payload.items];
      state.currentEpisodes = action.payload;
    },
    getEpisodesFailed(state) {
      state.isLoading = false;
    },
  },
});

export const { getEpisodesFetch, getEpisodesSuccess, getEpisodesFailed } =
  episodesSlice.actions;

export default episodesSlice;
