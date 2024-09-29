import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./slices/flights"

const store = configureStore({
    reducer: reducer
})

export default store;