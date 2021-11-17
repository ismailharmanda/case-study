import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import authSlice from "./auth";
import authSaga from "./sagas/authSaga";

import albumsSlice from "./albums";
import albumsSaga from "./sagas/albumsSaga";

import showsSlice from "./shows";
import showsSaga from "./sagas/showsSaga";

import tracksSlice from "./tracks";
import tracksSaga from "./sagas/tracksSaga";

import episodesSlice from "./episodes";
import episodesSaga from "./sagas/episodesSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    albums: albumsSlice.reducer,
    shows: showsSlice.reducer,
    tracks: tracksSlice.reducer,
    episodes: episodesSlice.reducer,
  },
  middleware: [saga],
});

function* rootSaga() {
  yield all([
    authSaga(),
    albumsSaga(),
    showsSaga(),
    tracksSaga(),
    episodesSaga(),
  ]);
}

saga.run(rootSaga);

export default store;
