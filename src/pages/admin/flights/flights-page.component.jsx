import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../../store/slices/flights";

const AdminFlightsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  const flights = useSelector((store) => {
    console.log(store.flights.flights);
    return store.flights.flights;
  });

  if (!flights) {
    return <div>No Flights found</div>;
  }

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Flight Name</th>
          <th>Airline</th>
        </tr>
      </thead>
      <tbody>
        {flights &&
          flights.length > 0 &&
          flights.map((flight) => {
            return (
              <tr>
                <td>{flight.flight_name}</td>
                <td>{flight.airline}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default AdminFlightsPage;
