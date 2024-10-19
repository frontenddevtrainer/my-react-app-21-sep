import { useTheme } from "../../context/theme.context";

const ChangeTheme = () => {

  const { setTheme } = useTheme()

  return (
    <>
      <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
    </>
  );
};

export default ChangeTheme;
