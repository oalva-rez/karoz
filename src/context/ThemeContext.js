import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext();

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
