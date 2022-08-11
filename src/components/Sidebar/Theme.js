import React from "react";
import iconDark from "../../assets/icon-dark-theme.svg";
import iconLight from "../../assets/icon-light-theme.svg";
import { useThemeContext } from "../../context/ThemeContext";

function Theme() {
  const [darkTheme, setDarkTheme] = useThemeContext();
  return (
    <div className="sidebar--theme">
      <img src={iconLight} alt="light" />
      <label className="switch">
        <input type="checkbox" onChange={() => setDarkTheme((prev) => !prev)} />
        <span className="slider round"></span>
      </label>
      <img src={iconDark} alt="dark" />
    </div>
  );
}
export default Theme;
