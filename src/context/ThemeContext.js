import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
