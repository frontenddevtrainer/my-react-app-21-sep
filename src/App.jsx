import React, { useState } from "react";
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
import Provider from "./context/theme.context";

function Application() {
  const counter = 10;

  const [theme, setTheme] = useState("light");

  return (
    <Provider value={{ theme: theme }}>
      <ApolloProvider client={graphqlClient}>
        <ReduxProvider store={store}>
          <div style={{ minHeight: "100px" }} className={theme}>
            {/* <Router /> */}
            {/* 
        <MasterHead />
        <ClassDemo />
        <LoginForm /> */}
            <button
              onClick={() => {
                setTheme("light");
              }}
            >
              Light
            </button>
            <button
              onClick={() => {
                setTheme("dark");
              }}
            >
              Dark
            </button>
            <RouterProvider router={Router} />
          </div>
        </ReduxProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default Application;
