import { call, put, takeEvery } from "redux-saga/effects";
import { albumsApi } from "../../utils/apis";
import { getAlbumsFetch } from "../albums";
import { getAlbumsSuccess } from "../albums";

function* workGetAlbumsFetch({ payload }) {
  try {
    const albums = yield call(() => {
      return fetch(`${albumsApi}?offset=${payload.offSet}&limit=20`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + payload.token,
        },
      });
    });
    const formattedAlbums = yield albums.json();
    yield put(getAlbumsSuccess(formattedAlbums));
  } catch (e) {
    console.log("FETCH ALBUMS HATA", e);
  }
}

function* albumsSaga() {
  yield takeEvery(getAlbumsFetch, workGetAlbumsFetch);
}
export default albumsSaga;
