const MOCK_FLIGHTS = [
  {
    flight_name: "Flight 2",
    airline: "Dynava",
    price: 2845.46,
    id: 7,
    departure_time: "9/5/2022 12:41",
    arrival_time: "7/26/2022 07:28",
    departure_city: "Angao",
    arrival_city: "Ukmerge",
    flight_duration: 3.5,
    available_seats: 29,
  },
  {
    flight_name: "Flight 3",
    airline: "Viva",
    price: 5970.54,
    id: 8,
    departure_time: "12/4/2022 02:48",
    arrival_time: "2/18/2022 07:34",
    departure_city: "Chipyela",
    arrival_city: "Krugersdorp",
    flight_duration: 2.6,
    available_seats: 62,
  },
  {
    flight_name: "Flight 1",
    airline: "Realbridge",
    price: 1543.85,
    id: 9,
    departure_time: "10/22/2022 21:08",
    arrival_time: "6/29/2022 12:30",
    departure_city: "Al Ibrāhīmīyah",
    arrival_city: "Pukhavichy",
    flight_duration: 3.5,
    available_seats: 140,
  },
  {
    flight_name: "Flight 3",
    airline: "Flipopia",
    price: 6727.84,
    id: 10,
    departure_time: "6/4/2022 08:29",
    arrival_time: "1/21/2022 16:56",
    departure_city: "Gračanica",
    arrival_city: "Sutysky",
    flight_duration: 5.4,
    available_seats: 10,
  },
];

const resolvers = {
  Query: {
    flights: () => {
      return MOCK_FLIGHTS;
    },
    flight: (context, { flightId }) => {
      return MOCK_FLIGHTS.find((flight) => {
        return flight.flightId === flightId;
      });
    },
  },
  Mutation : {
    addFlight : ()=>{
        
    }
  }
};

export default resolvers;
