import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteFlight, fetchFlights } from "../../../store/slices/flights";
import DeleteModal from "../../../components/delete-modal/delete-modal.component";

const AdminFlightsPage = () => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(null);

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

  const handleFlightDelete = (flight) => {
    setShowDeleteModal(flight);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(null);
  };

  const handleDeleteModalOnDelete = (flight) => {
    dispatch(deleteFlight(flight.id));
    setShowDeleteModal(null);
  };

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
          {flights &&
            flights.length > 0 &&
            flights.map((flight) => {
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
        selected={showDeleteModal}
        show={showDeleteModal}
        title={"Delete Flight"}
        message={"Are you sure?"}
        onClose={handleDeleteModalClose}
        onDelete={handleDeleteModalOnDelete}
      />
    </>
  );
};

export default AdminFlightsPage;
