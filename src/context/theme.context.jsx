import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

ThemeContext.displayName = "ThemeContext";

const { Provider } = ThemeContext;

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
}

const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;

export { ThemeContext, useTheme };
