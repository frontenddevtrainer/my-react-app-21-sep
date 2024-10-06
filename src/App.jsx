import React from "react";
import Header from "./components/header/header.component";
import MasterHead from "./components/master-head/master-head.component";
import OfferCardGroup from "./components/offer-card/offer-card-group.component";
import ClassDemo from "./components/class-demo/class-demo.component";
import LoginForm from "./components/login-form/login-form.component";
import Router from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";

import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import { ApolloProvider } from "@apollo/client";
import { graphqlClient } from "./graphql/client";

function Application() {
  const counter = 10;

  return (
    <ApolloProvider client={graphqlClient}>
      <ReduxProvider store={store}>
        <div style={{ minHeight: "100px" }}>
          {/* <Router /> */}
          {/* 
        <MasterHead />
        <ClassDemo />
        <LoginForm /> */}
          <RouterProvider router={Router} />
        </div>
      </ReduxProvider>
    </ApolloProvider>
  );
}

export default Application;
