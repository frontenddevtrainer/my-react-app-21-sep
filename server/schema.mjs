import { gql } from "apollo-server";

const typeDefs = gql`
  type Flight {
    flight_name: String
    airline: String
    price: Float
    id: Int
    departure_time: String
    arrival_time: String
    departure_city: String
    arrival_city: String
    flight_duration: Float
    available_seats: Int
  }

  type Query {
    flights: [Flight]
  }
`;

export default typeDefs;
