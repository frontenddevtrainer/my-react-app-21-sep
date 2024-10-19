import { useEffect, useState } from "react";

export default function CounterComponent({ callback }) {
  const [counter, setCounter] = useState(0);

  const callAPI = () => {};

  useEffect(() => {
    callAPI();
  }, [counter]);

  const update = (type) => {
    setCounter((counter) => {
      if (type === "inc") {
        return counter + 1;
      } else {
        return counter - 1;
      }
    });
  };

  return (
    <section>
      <button
        onClick={() => {
          update("inc");
        }}
      >
        +
      </button>
      {counter}
      <button
        onClick={() => {
          update("dec");
        }}
      >
        -
      </button>
    </section>
  );
}
