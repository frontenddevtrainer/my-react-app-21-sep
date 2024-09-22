import React from "react";
import OfferCard from "./offer-card.component";

const offersList = [
  {
    id: 1,
    text: "Electronics @ 10% off",
  },
  {
    id: 2,
    text: "iPhone @ 5% off",
  },
  {
    id: 3,
    text: "TVs @ 50% off",
  },
  {
    id: 4,
    text: "Mobile Phones @ 2% off",
  },
  {
    id: 5,
    text: "Washing Machines @ 7% off",
  },
];

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
      {offersList &&
        offersList.length > 0 &&
        offersList.map((offer) => <OfferCard offer={offer} />)}
    </div>
  );
};

export default OfferCardGroup;
