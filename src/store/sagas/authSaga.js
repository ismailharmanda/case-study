import { call, put, takeEvery } from "redux-saga/effects";
import { getTokenApi, clientId, clientSecret } from "../../utils/apis";
import { getAuthFetch } from "../auth";

import { getAuthSuccess } from "../auth";

function* workGetAuthFetch() {
  try {
    const accessToken = yield call(() => {
      return fetch(getTokenApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
        },
        json: true,
      });
    });
    const formattedAccessToken = yield accessToken.json();
    yield put(getAuthSuccess(formattedAccessToken));
  } catch (e) {
    console.log("FETCH TOKEN HATA", e);
  }
}

function* authSaga() {
  yield takeEvery(getAuthFetch, workGetAuthFetch);
}
export default authSaga;
