import React, { useState, useEffect } from "react";

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

  useEffect(()=>{
    console.log("Component Update")
  }, [offer])


  // ComponentDidMount
  useEffect(()=>{
    console.log("ComponentDidMount");
    return ()=>{
        console.log("ComponentWillUnmount")
    }
  }, [])

  
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
