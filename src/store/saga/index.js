import { fetchFlightsSaga, watchFetchData } from "./flights.saga";

export function* rootSaga(){
    yield watchFetchData()
}