import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  fetchFlights,
  fetchFlightsFailure,
  fetchFlightsSuccess,
} from "../slices/flights";

function fetchAPIdata() {
  return axios("http://localhost:3000/flights").then((response) => {
    return response.data;
  });
}

export function* fetchFlightsSaga() {
  try {
    const data = yield call(fetchAPIdata);
    console.log(data, "data");
    yield put(fetchFlightsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(fetchFlightsFailure());
  }
}

export function* watchFetchData() {
  yield takeEvery(fetchFlights.type, fetchFlightsSaga);
}
