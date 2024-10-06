import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reducer as flightsReducer } from "./slices/flights";
import { reducer as userReducer } from "./slices/user";

import sagaMiddleware from "./saga/middleware";
import { rootSaga } from "./saga";

const store = configureStore({
  reducer: combineReducers({
    flights: flightsReducer,
    user: userReducer,
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
