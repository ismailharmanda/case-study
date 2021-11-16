import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import authSlice from "./auth";
import authSaga from "./sagas/authSaga";

import albumsSlice from "./albums";
import albumsSaga from "./sagas/albumsSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    albums: albumsSlice.reducer,
  },
  middleware: [saga],
});

function* rootSaga() {
  yield all([authSaga(), albumsSaga()]);
}

saga.run(rootSaga);

export default store;
