import { createSlice } from "@reduxjs/toolkit"

const FlightsSlice = createSlice({
    initialState : {
        flights : [],
    },
    name: "flights",
    reducers: {
        getFlights : (state, action)=>{
            state.flights = [{ id: "1", route : "del > blr", price: 10000  }];
        }
    }
})

const { actions, reducer } = FlightsSlice;
const { getFlights } = actions;

export {
    reducer, 
    getFlights
}
