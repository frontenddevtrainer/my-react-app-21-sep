import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import DeleteModal from "../../../components/delete-modal/delete-modal.component";
import { useQuery, gql } from "@apollo/client";

const FETCH_FLIGHT_QUERY = gql`
  query Flights {
    flights {
      id
      flight_name
      arrival_time
    }
  }
`;

const AdminFlightsPage = () => {
  const { data, loading, error } = useQuery(FETCH_FLIGHT_QUERY);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>Airline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.flights &&
            data.flights.length > 0 &&
            data.flights.map((flight) => {
              return (
                <tr>
                  <td>{flight.flight_name}</td>
                  <td>{flight.airline}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleFlightDelete(flight);
                      }}
                      variant="danger"
                    >
                      Delete Flight
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <DeleteModal
        selected={() => {}}
        show={false}
        title={"Delete Flight"}
        message={"Are you sure?"}
        onClose={() => {}}
        onDelete={() => {}}
      />
    </>
  );
};

export default AdminFlightsPage;
