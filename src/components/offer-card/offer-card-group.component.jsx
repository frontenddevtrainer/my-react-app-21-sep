import React, { useEffect, useState } from "react";
import OfferCard from "./offer-card.component";

const OfferCardGroup = () => {
  const [offersList, setOffersList] = useState(null);

  // Component Did Mount
  useEffect(() => {
    const callAPI = () => {
      // const response = await fetch("http://localhost:3000/offers");
      // const json = await response.json();

      fetch("http://localhost:3000/offers")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setOffersList(json);
        });
    };
    callAPI();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridColumnGap: "10px",
        gridRowGap: "10px",
      }}
    >
      {offersList === null && <div>Loading...</div>}
      {offersList &&
        offersList.length > 0 &&
        offersList.map((offer) => <OfferCard offer={offer} />)}
    </div>
  );
};

export default OfferCardGroup;
