import React from "react";

const Header = (props) => {
  const applicationName = props.name;
  return <div style={{ backgroundColor: "yellow" }}>{applicationName}</div>;
};

export default Header;
