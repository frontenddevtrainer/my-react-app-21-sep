import React from "react";
import OfferCard from "./offer-card.component";

const OfferCardGroup = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridColumnGap: "10px",
        gridRowGap: "10px",
      }}
    >
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />
      <OfferCard />

    </div>
  );
};

export default OfferCardGroup;
