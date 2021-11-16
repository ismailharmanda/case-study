import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authSlice from "./auth";
import authSaga from "./sagas/authSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: [saga],
});
saga.run(authSaga);

export default store;
