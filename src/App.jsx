import React from "react";
import Header from "./components/header/header.component";
import MasterHead from "./components/master-head/master-head.component";
import OfferCardGroup from "./components/offer-card/offer-card-group.component";

function Application() {
  return (
    <div style={{ backgroundColor: "blue", minHeight: "100px" }}>
      <Header />
      <OfferCardGroup />
      <MasterHead />
    </div>
  );
}

export default Application;
