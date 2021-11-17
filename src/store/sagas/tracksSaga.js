import { call, put, takeEvery } from "redux-saga/effects";
import { getTracksFetch } from "../tracks";
import { getTracksSuccess } from "../tracks";

function* workGetTracksFetch({ payload }) {
  console.log("TRACKS_PAYLOAD", payload);
  try {
    const tracks = yield call(() => {
      return fetch(
        `https://api.spotify.com/v1/albums/${payload.id}/tracks?offset=${payload.offSet}&limit=10`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + payload.token,
          },
        }
      );
    });
    const formattedTracks = yield tracks.json();
    console.log("FORMATTED_TRACKS", formattedTracks);
    yield put(getTracksSuccess(formattedTracks));
  } catch (e) {
    console.log("FETCH TRACKS HATA", e);
  }
}

function* tracksSaga() {
  yield takeEvery(getTracksFetch, workGetTracksFetch);
}
export default tracksSaga;
