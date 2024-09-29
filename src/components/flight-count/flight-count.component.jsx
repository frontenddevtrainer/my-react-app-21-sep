import { useSelector } from "react-redux";

const FlightCount = () => {
  const flights = useSelector((state) => {
    return state.flights;
  });

  return `Total Flights: ${flights.length}`;
};

export default FlightCount;