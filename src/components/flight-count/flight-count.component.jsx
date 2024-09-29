import { useSelector } from "react-redux";

const FlightCount = () => {
  const flights = useSelector((state) => {
    const { flights } = state
    return flights.flights;
  });

  return `Total Flights: ${flights.length}`;
};

export default FlightCount;