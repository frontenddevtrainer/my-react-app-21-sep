import { createSlice } from "@reduxjs/toolkit"

const MOCK_DATA = [{
    "flight_name": "Flight 3",
    "airline": "Centidel",
    "price": 7771.74,
    "id": 1,
    "departure_time": "3/27/2022 19:09",
    "arrival_time": "3/12/2022 08:27",
    "departure_city": "Kortesjärvi",
    "arrival_city": "Konongo",
    "flight_duration": 1.8,
    "available_seats": 122
  }, {
    "flight_name": "Flight 3",
    "airline": "Kazio",
    "price": 2980.2,
    "id": 2,
    "departure_time": "10/3/2022 08:49",
    "arrival_time": "1/19/2022 06:01",
    "departure_city": "Khotsimsk",
    "arrival_city": "Ladoang",
    "flight_duration": 5.2,
    "available_seats": 176
  }, {
    "flight_name": "Flight 3",
    "airline": "Divanoodle",
    "price": 1947.71,
    "id": 3,
    "departure_time": "12/25/2022 22:03",
    "arrival_time": "6/6/2022 18:17",
    "departure_city": "Gilowice",
    "arrival_city": "Stoczek",
    "flight_duration": 1.5,
    "available_seats": 39
  }, {
    "flight_name": "Flight 2",
    "airline": "Edgeclub",
    "price": 6419.35,
    "id": 4,
    "departure_time": "4/29/2022 22:26",
    "arrival_time": "12/29/2022 14:46",
    "departure_city": "Wiset Chaichan",
    "arrival_city": "Armash",
    "flight_duration": 3.8,
    "available_seats": 43
  }, {
    "flight_name": "Flight 1",
    "airline": "Topiczoom",
    "price": 5291.01,
    "id": 5,
    "departure_time": "2/15/2022 09:48",
    "arrival_time": "6/5/2022 08:41",
    "departure_city": "Kitami",
    "arrival_city": "Qinshan",
    "flight_duration": 3.2,
    "available_seats": 111
  }, {
    "flight_name": "Flight 1",
    "airline": "Gabcube",
    "price": 1454.48,
    "id": 6,
    "departure_time": "4/13/2022 23:30",
    "arrival_time": "9/10/2022 07:36",
    "departure_city": "Tyachiv",
    "arrival_city": "Baisha",
    "flight_duration": 3.8,
    "available_seats": 64
  }, {
    "flight_name": "Flight 2",
    "airline": "Dynava",
    "price": 2845.46,
    "id": 7,
    "departure_time": "9/5/2022 12:41",
    "arrival_time": "7/26/2022 07:28",
    "departure_city": "Angao",
    "arrival_city": "Ukmerge",
    "flight_duration": 3.5,
    "available_seats": 29
  }, {
    "flight_name": "Flight 3",
    "airline": "Viva",
    "price": 5970.54,
    "id": 8,
    "departure_time": "12/4/2022 02:48",
    "arrival_time": "2/18/2022 07:34",
    "departure_city": "Chipyela",
    "arrival_city": "Krugersdorp",
    "flight_duration": 2.6,
    "available_seats": 62
  }, {
    "flight_name": "Flight 1",
    "airline": "Realbridge",
    "price": 1543.85,
    "id": 9,
    "departure_time": "10/22/2022 21:08",
    "arrival_time": "6/29/2022 12:30",
    "departure_city": "Al Ibrāhīmīyah",
    "arrival_city": "Pukhavichy",
    "flight_duration": 3.5,
    "available_seats": 140
  }, {
    "flight_name": "Flight 3",
    "airline": "Flipopia",
    "price": 6727.84,
    "id": 10,
    "departure_time": "6/4/2022 08:29",
    "arrival_time": "1/21/2022 16:56",
    "departure_city": "Gračanica",
    "arrival_city": "Sutysky",
    "flight_duration": 5.4,
    "available_seats": 10
  }]

const FlightsSlice = createSlice({
    initialState : {
        flights : [],
    },
    name: "flights",
    reducers: {
        getFlights : (state, action)=>{
            state.flights = MOCK_DATA;
        },
        filterByPrice : (state, action)=>{
            const { payload } = action;
            const { price } = payload;

            if(price === null) {
                state.flights = MOCK_DATA;
            }
            else {
                state.flights = MOCK_DATA.filter((item)=>{
                    return item.price <= price;
                })
            }
        }
    }
})

const { actions, reducer } = FlightsSlice;
const { getFlights, filterByPrice } = actions;

export {
    reducer, 
    getFlights,
    filterByPrice
}
