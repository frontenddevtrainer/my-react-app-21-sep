import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Pending
// Success / Fulfilled
// Error / Rejected
const fetchFlights = createAsyncThunk("flights/fetchFlights", async () => {
  try {
    const response = await fetch("http://localhost:3000/flights");
    const json = await response.json();
    return json;
  } catch (error) {
    return [];
  }
});

const addFlight = createAsyncThunk("flights/addFlights", async (payload) => {
  try {
    const response = await axios.post("http://localhost:3000/flights", payload);
    return response.data;
  } catch (error) {
    return [];
  }
});

const FlightsSlice = createSlice({
  initialState: {
    rawFlights: [],
    flights: [],
    loading: false,
  },
  name: "flights",
  reducers: {
    getFlights: (state, action) => {
      // state.flights = MOCK_DATA;
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
  extraReducers: (builder) => {
    builder.addCase(fetchFlights.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      const { payload } = action;
      state.flights = payload;
      state.rawFlights = payload;
      state.loading = false;
    });

    builder.addCase(fetchFlights.rejected, (state, action) => {
      state.flights = [];
      state.rawFlights = [];
      state.loading = false;
    });

    builder.addCase(addFlight.pending, () => {});

    builder.addCase(addFlight.fulfilled, () => {});

    builder.addCase(addFlight.rejected, () => {});
  },
});

const { actions, reducer } = FlightsSlice;
const { getFlights, filterByPrice } = actions;

export { reducer, getFlights, filterByPrice, fetchFlights, addFlight };
