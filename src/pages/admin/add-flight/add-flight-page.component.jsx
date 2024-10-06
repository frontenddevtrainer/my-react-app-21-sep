import { useDispatch } from "react-redux";
import TextInput from "../../../components/controls/text-input/text-input.component";
import { Formik } from "formik";
// import { addFlight } from "../../../store/slices/flights";

const AddFlightPage = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        console.log(values);
        // dispatch(addFlight(values));
      }}
    >
      {({ errors, handleChange, handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <TextInput
              value={values["flight_name"]}
              change={handleChange}
              label={"Flight Name"}
              name="flight_name"
            />
            <TextInput
              value={values["airline"]}
              change={handleChange}
              label={"Airline"}
              name="airline"
            />
            <TextInput
              value={values["price"]}
              change={handleChange}
              label={"Price"}
              name="price"
            />
            <TextInput
              value={values["departure_time"]}
              change={handleChange}
              label={"Departure Time"}
              name="departure_time"
            />
            <TextInput
              value={values["arrival_time"]}
              change={handleChange}
              label={"Arrival Time"}
              name="arrival_time"
            />
            <TextInput
              value={values["departure_city"]}
              change={handleChange}
              label={"Departure City"}
              name="departure_city"
            />
            <TextInput
              value={values["arrival_city"]}
              change={handleChange}
              label={"Arrival City"}
              name="arrival_city"
            />
            <TextInput
              value={values["flight_duration"]}
              change={handleChange}
              label={"Flight Duration"}
              name="flight_duration"
            />
            <TextInput
              value={values["available_seats"]}
              change={handleChange}
              label={"Available Seats"}
              name="available_seats"
            />
            <button type="submit"> Add Flight </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddFlightPage;
