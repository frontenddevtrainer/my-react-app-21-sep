import React from "react";

const commonStyles = {
  padding: "10px",
  margin: "10px",
};

const style = {
  ...commonStyles,
  backgroundColor: "limegreen",
};

const sender = "Praveen";
const reciever = "Manish";

const mail = `Hi ${reciever}, How are you!, 
can you please send me the report?
Thanks
${sender}
`

const OfferCard = () => {
  return <div style={style}>{mail}</div>;
};

export default OfferCard;
