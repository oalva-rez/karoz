import React, { useState } from "react";
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
import {
  useBoardsContext,
  useActiveBoardContext,
} from "../../context/BoardsContext";
import { useUserInfoContext } from "../../context/UserInfoContext";
import { useTasksContext } from "../../context/TasksContext";

import { getAuth, signOut } from "firebase/auth";

function Header() {
  const [showModal, setShowModal] = useShowModalContext();
  const [columns, setColumns] = useColumnsContext();
  const [boards, setBoards] = useBoardsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [mobileScreen, setMobileScreen] = useMobileScreenContext();
  const [userInfo, setUserInfo] = useUserInfoContext();
  const [tasks, setTasks] = useTasksContext();

  const [showSettings, setShowSettings] = useState(false);

  function handleSignOut() {
    setUserInfo({
      uId: null,
      email: null,
      displayName: null,
      photoURL: null,
    });

    // clear data
    setBoards([]);
    setColumns([]);
    setTasks([]);
    setActiveBoard({ title: "", id: "" });
    setDarkTheme(false);

    signOut(getAuth());
  }
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
          style={
            boards.length === 0
              ? { backgroundColor: "#a8a4ff", cursor: "not-allowed" }
              : null
          }
          disabled={boards.length === 0 ? true : false}
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
          <ul
            className="dropdown-settings header--dropdown-settings"
            data-theme={darkTheme ? "dark" : "light"}
          >
            <li
              className="dropdown-item"
              onClick={() => {
                if (boards.length !== 0) {
                  setShowSettings((prev) => !prev);
                  setShowModal("editBoard");
                }
              }}
              style={
                boards.length === 0
                  ? {
                      color: "rgb(202, 202, 202)",
                      cursor: "not-allowed",
                    }
                  : null
              }
            >
              Edit Board
            </li>
            <li
              className="dropdown-item"
              onClick={() => {
                if (boards.length !== 0) {
                  setShowSettings((prev) => !prev);
                  setShowModal("deleteBoard");
                }
              }}
              disabled={boards.length === 0 ? true : false}
              style={
                boards.length === 0
                  ? {
                      color: "rgb(202, 202, 202)",
                      cursor: "not-allowed",
                    }
                  : null
              }
            >
              Delete Board
            </li>
            <li className="dropdown-item sign-out" onClick={handleSignOut}>
              Sign Out <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </li>
          </ul>
        ) : null}
      </header>
    </>
  );
}

export default Header;
