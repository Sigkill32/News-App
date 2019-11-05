import { takeEvery, select, put, all } from "redux-saga/effects";
import axios from "axios";

const getSources = async () => {
  const { data } = await axios.get(
    "https://newsapi.org/v2/sources?apiKey=b4545b8f6921462e939829eb257719b0"
  );
  return data.sources;
};

const getArticles = async source => {
  const { data } = await axios.get(
    "https://newsapi.org/v2/top-headlines?sources=" +
      source +
      "&apiKey=b4545b8f6921462e939829eb257719b0"
  );
  return data.articles;
};

const getCurrnetArticle = state => state.get("currentSource");

function* asyncGetSources() {
  const sources = yield getSources();
  yield put({ type: "FETCHED_SOURCES", sources: sources });
}

function* asyncGetArticles() {
  const currentSource = yield select(getCurrnetArticle);
  const articles = yield getArticles(currentSource);
  yield put({ type: "UPDATE_NEWS", articles });
}

export function* watchGetSources() {
  yield takeEvery("FETCH_SOURCES", asyncGetSources);
}

export function* watchGetArticles() {
  yield takeEvery("GET_NEWS", asyncGetArticles);
}

export function* rootSaga() {
  yield all([watchGetArticles(), watchGetSources()]);
}
