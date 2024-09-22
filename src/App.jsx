import React from "react";
import Header from "./components/header/header.component";
import MasterHead from "./components/master-head/master-head.component";
import OfferCardGroup from "./components/offer-card/offer-card-group.component";
import ClassDemo from "./components/class-demo/class-demo.component";

function Application() {

  const counter = 10

  return (
    <div style={{ backgroundColor: "blue", minHeight: "100px" }}>
      <Header name="NewTravelApp" count={counter} />
      <OfferCardGroup />
      <MasterHead />
      <ClassDemo />
    </div>
  );
}

export default Application;
