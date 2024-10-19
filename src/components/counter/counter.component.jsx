import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme.context";

export default function CounterComponent({ callback }) {
  const [counter, setCounter] = useState(0);
  const theme = useContext(ThemeContext);

  console.log(theme);

  const callAPI = () => {};

  useEffect(() => {
    callAPI();
  }, [counter]);

  const update = async (type) => {
    await setCounter((counter) => {
      if (type === "inc") {
        return counter + 1;
      } else {
        return counter - 1;
      }
    });
  };

  return (
    <section style={{ background: theme.theme === "light" ? "red" : "blue" }}>
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
