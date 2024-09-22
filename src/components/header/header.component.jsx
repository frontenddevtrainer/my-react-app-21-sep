import React from "react";

const Header = (props) => {
  //   const applicationName = props.name;
  //   const count = props.count;

  // Object Destructing
  // const {} = Object Value;
  // const [] = Array Value;

  const { name : applicationName, count } = props

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {applicationName}
      {count}
    </div>
  );
};

export default Header;
