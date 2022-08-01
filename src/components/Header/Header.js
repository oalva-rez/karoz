import React, { useContext } from "react";
import BoardName from "./BoardName";
import Settings from "../Settings";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import logoMobile from "../../assets/logo-mobile.svg";

function Header() {
  return (
    <>
      <div className="header--logo">
        <img src={logoLight} alt="logo" />
        <h1 className="header--company">Karoz</h1>
      </div>
      <header className="header">
        <BoardName />
        <button className="header--main-button">+ Add New Task</button>
        <Settings />
      </header>
    </>
  );
}

export default Header;
