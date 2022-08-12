import React, { useState } from "react";
import BoardSelect from "./BoardSelect";
import HideSidebar from "./HideSidebar";
import Theme from "./Theme";
import { useThemeContext } from "../../context/ThemeContext";
import { useMobileScreenContext } from "../../context/MobileScreenContext";
import { useShowAllBoardsContext } from "../../context/MobileScreenContext";

function Sidebar() {
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [mobileScreen, setMobileScreen] = useMobileScreenContext();
  const [showAllBoards, setShowAllBoards] = useShowAllBoardsContext();

  return (
    <aside
      className={
        mobileScreen && showAllBoards ? "sidebar mobile-sidebar" : "sidebar"
      }
      data-theme={darkTheme ? "dark" : "light"}
    >
      <BoardSelect />
      <div className="sidebar--display-settings">
        <Theme />
        {mobileScreen ? null : <HideSidebar />}
      </div>
    </aside>
  );
}

export default Sidebar;
