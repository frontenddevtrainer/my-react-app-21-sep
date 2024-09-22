import React, { useState } from "react";

const commonStyles = {
  padding: "10px",
  margin: "10px",
};

const style = {
  ...commonStyles,
  backgroundColor: "limegreen",
};

const OfferCard = (props) => {
  const { offer } = props;
  // const [state, setState] = useState(defaultValue);
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div style={style}>
      {offer.text}
      <button onClick={decreaseCounter}>-</button>
      {counter}
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};

export default OfferCard;
