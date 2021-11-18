import { call, put, takeEvery } from "redux-saga/effects";
import { getEpisodesFetch } from "../episodes";
import { getEpisodesSuccess } from "../episodes";

function* workGetEpisodesFetch({ payload }) {
  try {
    const episodes = yield call(() => {
      return fetch(
        `https://api.spotify.com/v1/shows/${payload.id}/episodes?offset=${payload.offSet}&limit=5`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + payload.token,
          },
        }
      );
    });
    const formattedEpisodes = yield episodes.json();
    yield put(getEpisodesSuccess(formattedEpisodes));
  } catch (e) {
    console.log("FETCH EPISODES HATA", e);
  }
}

function* episodesSaga() {
  yield takeEvery(getEpisodesFetch, workGetEpisodesFetch);
}
export default episodesSaga;
