import React from "react";
import BoardSelect from "./BoardSelect";
import HideSidebar from "./HideSidebar";
import Theme from "./Theme";
import { useHideSidebarContext } from "../../context/HideSidebarContext";
import { useThemeContext } from "../../context/ThemeContext";

function Sidebar() {
  const [hideSidebar, setHideSidebar] = useHideSidebarContext();
  const [darkTheme, setDarkTheme] = useThemeContext();

  return (
    <aside className="sidebar" data-theme={darkTheme ? "dark" : "light"}>
      <BoardSelect />
      <div className="sidebar--display-settings">
        <Theme />
        <HideSidebar />
      </div>
    </aside>
  );
}

export default Sidebar;
