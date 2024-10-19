import React, { useState } from "react";
import Header from "../../components/header/header.component";
import OfferCardGroup from "../../components/offer-card/offer-card-group.component";
import CounterComponent from "../../components/counter/counter.component";
import TotalComponent from "../../components/total/total.component";

const Homepage = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <div>
      <Header name="NewTravelApp" />
      <OfferCardGroup />

      <CounterComponent callback={setCounter1} />
      <CounterComponent callback={setCounter2} />
      <CounterComponent callback={setCounter3} />

      <TotalComponent values={[counter1, counter2, counter3]} />
    </div>
  );
};

export default Homepage;
