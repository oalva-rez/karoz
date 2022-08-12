import React, { useContext, useState } from "react";
import BoardName from "./BoardName";
import settings from "../../assets/icon-vertical-ellipsis.svg";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import logoMobile from "../../assets/logo-mobile.svg";
import iconPlus from "../../assets/icon-plus.svg";
import { useShowModalContext } from "../../context/ShowModalContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useThemeContext } from "../../context/ThemeContext";
import { useMobileScreenContext } from "../../context/MobileScreenContext";

function Header() {
  const [showModal, setShowModal] = useShowModalContext();
  const [columns, setColumns] = useColumnsContext();
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [mobileScreen, setMobileScreen] = useMobileScreenContext();

  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <div className="header--logo" data-theme={darkTheme ? "dark" : "light"}>
        <img src={darkTheme ? logoDark : logoLight} alt="logo" />
        <h1 className="header--company">Karoz</h1>
      </div>

      <header className="header" data-theme={darkTheme ? "dark" : "light"}>
        {mobileScreen ? (
          <div
            className="header--logo-mobile"
            data-theme={darkTheme ? "dark" : "light"}
          >
            <img src={logoMobile} alt="logo" />
          </div>
        ) : null}
        <BoardName />
        <button
          className={
            mobileScreen
              ? "header--main-button mobile-btn"
              : "header--main-button"
          }
          onClick={() => setShowModal("addTask")}
        >
          {mobileScreen ? (
            <img src={iconPlus} alt="add" />
          ) : (
            <>+ Add New Task</>
          )}
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
