import React, { useContext } from "react";
import BoardName from "./BoardName";
import Settings from "../Settings";

function Header() {
  return (
    <header>
      <h1>Karoz</h1>
      <BoardName />
      <button className="main-button">+Add New Task</button>
      <Settings />
    </header>
  );
}

export default Header;
