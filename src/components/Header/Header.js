import React, { useContext, useState } from "react";
import BoardName from "./BoardName";
import settings from "../../assets/icon-vertical-ellipsis.svg";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import logoMobile from "../../assets/logo-mobile.svg";
import { useShowModalContext } from "../../context/ShowModalContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useHideSidebarContext } from "../../context/HideSidebarContext";

function Header() {
  const [showModal, setShowModal] = useShowModalContext();
  const [columns, setColumns] = useColumnsContext();
  const [hideSidebar, setHideSidebar] = useHideSidebarContext();

  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      {!hideSidebar ? (
        <div className="header--logo">
          <img src={logoLight} alt="logo" />
          <h1 className="header--company">Karoz</h1>
        </div>
      ) : null}
      <header className="header">
        <BoardName />
        <button
          className={
            columns.length > 0
              ? "header--main-button"
              : "header--main-button disabled"
          }
          onClick={() => setShowModal("addTask")}
          disabled={columns.length === 0 ? true : false}
        >
          + Add New Task
        </button>
        <img
          src={settings}
          alt="settings"
          className="settings-img"
          onClick={() => setShowSettings((prev) => !prev)}
        />
        {showSettings ? (
          <ul className="dropdown-settings header--dropdown-settings">
            <li
              className="dropdown-item"
              onClick={() => {
                setShowSettings((prev) => !prev);
                setShowModal("editBoard");
              }}
            >
              Edit Board
            </li>
            <li
              className="dropdown-item"
              onClick={() => {
                setShowSettings((prev) => !prev);
                setShowModal("deleteBoard");
              }}
            >
              Delete Board
            </li>
          </ul>
        ) : null}
      </header>
    </>
  );
}

export default Header;
