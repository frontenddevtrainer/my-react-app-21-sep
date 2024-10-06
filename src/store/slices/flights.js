import { createSlice } from "@reduxjs/toolkit";

const FlightsSlice = createSlice({
  initialState: {
    rawFlights: [],
    flights: [],
    loading: false,
  },
  name: "flights",
  reducers: {
    fetchFlights: (state, action) => {
      console.log(state, action);
    },

    fetchFlightsSuccess: (state, action) => {
      console.log(state, action);
      state.flights = action.payload;
    },

    fetchFlightsFailure: (state, action) => {
      console.log(state, action);
    },
    filterByPrice: (state, action) => {
      const { payload } = action;
      const { price } = payload;

      if (price === null) {
        state.flights = state.rawFlights;
      } else {
        state.flights = state.rawFlights.filter((item) => {
          return item.price <= price;
        });
      }
    },
  },
});

const { actions, reducer } = FlightsSlice;
const {
  getFlights,
  filterByPrice,
  fetchFlights,
  fetchFlightsFailure,
  fetchFlightsSuccess,
} = actions;

export {
  reducer,
  getFlights,
  filterByPrice,
  fetchFlights,
  fetchFlightsFailure,
  fetchFlightsSuccess,
};
