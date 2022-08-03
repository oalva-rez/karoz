import React from "react";
import iconDark from "../../assets/icon-dark-theme.svg";
import iconLight from "../../assets/icon-light-theme.svg";

function Theme() {
  return (
    <div className="sidebar--theme">
      <img src={iconLight} alt="light" />
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <img src={iconDark} alt="dark" />
    </div>
  );
}
export default Theme;
