import React from "react";
import Header from "../../components/header/header.component";
import OfferCardGroup from "../../components/offer-card/offer-card-group.component";

const Homepage = () => {
  return (
    <div>
      <Header name="NewTravelApp"/>
      <OfferCardGroup />
    </div>
  );
};

export default Homepage;
