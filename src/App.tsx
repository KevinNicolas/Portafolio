import { Router } from "./Routes";

import { Theme, GlobalStyles, darkTheme, lightTheme } from "@assets/styles";
import { useThemeStore } from "@store/theme";
import { useEffect } from "react";

function App() {
  const { colors, changeTheme } = useThemeStore();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return changeTheme(theme === "light" ? lightTheme : darkTheme);

    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <>
      <GlobalStyles theme={colors} />
      <Theme theme={colors} />
      <Router />;
    </>
  );
}

export default App;
