import React from "react";
import Header from "./components/header/header.component";
import MasterHead from "./components/master-head/master-head.component";
import OfferCardGroup from "./components/offer-card/offer-card-group.component";
import ClassDemo from "./components/class-demo/class-demo.component";
import LoginForm from "./components/login-form/login-form.component";
import Router from "./routes";

import { RouterProvider } from "react-router-dom";

function Application() {
  const counter = 10;

  return (
    <div style={{ backgroundColor: "blue", minHeight: "100px" }}>
      <Header name="NewTravelApp" count={counter} />
      {/* <Router /> */}
      {/* <OfferCardGroup />
      <MasterHead />
      <ClassDemo />
      <LoginForm /> */}
      <RouterProvider router={Router} />
    </div>
  );
}

export default Application;
