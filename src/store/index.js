import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reducer as flightsReducer } from "./slices/flights";
import { reducer as userReducer } from "./slices/user";

const store = configureStore({
  reducer: combineReducers({
    flights: flightsReducer,
    user: userReducer,
  }),
});

export default store;
