import { createContext } from "react";

const ThemeContext = createContext();

ThemeContext.displayName = "ThemeContext";

const { Provider } = ThemeContext;

export default Provider;

export { ThemeContext };
