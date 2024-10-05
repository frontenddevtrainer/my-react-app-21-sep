import TextInput from "../../../components/controls/text-input/text-input.component";

const AddFlightPage = () => {
  return (
    <form>
      <TextInput label={"Flight Name"} name="flight_name" />
      <TextInput label={"Airline"} name="airline" />
      <TextInput label={"Price"} name="price" />
      <TextInput label={"Departure Time"} name="departure_time" />
      <TextInput label={"Arrival Time"} name="arrival_time" />
      <TextInput label={"Departure City"} name="departure_city" />
      <TextInput label={"Arrival City"} name="arrival_city" />
      <TextInput label={"Flight Duration"} name="flight_duration" />
      <TextInput label={"Available Seats"} name="available_seats" />
    </form>
  );
};

export default AddFlightPage;
