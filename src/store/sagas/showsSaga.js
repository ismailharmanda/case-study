import { call, put, takeEvery } from "redux-saga/effects";
import { showsApi } from "../../utils/apis";
import { getShowsFetch } from "../shows";
import { getShowsSuccess } from "../shows";

function* workGetShowsFetch({ payload }) {
  console.log("SHOWS_PAYLOAD", payload);
  try {
    const shows = yield call(() => {
      return fetch(`${showsApi}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.token,
        },
      });
    });
    const formattedShows = yield shows.json();
    console.log("RAW_SHOWS", shows);
    console.log("FORMATTED_SHOWS", formattedShows);
    yield put(getShowsSuccess(formattedShows));
  } catch (e) {
    console.log("FETCH SHOWS HATA", e);
  }
}

function* showsSaga() {
  yield takeEvery(getShowsFetch, workGetShowsFetch);
}
export default showsSaga;
