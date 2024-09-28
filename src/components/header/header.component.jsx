import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  //   const applicationName = props.name;
  //   const count = props.count;

  // Object Destructing
  // const {} = Object Value;
  // const [] = Array Value;

  const { name: applicationName, count } = props;

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {applicationName}

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/customer"}>Customer</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
