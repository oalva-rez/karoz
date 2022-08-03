import React from "react";
import BoardSelect from "./BoardSelect";
import HideSidebar from "./HideSidebar";
import Theme from "./Theme";
import { useHideSidebarContext } from "../../context/HideSidebarContext";

function Sidebar() {
  const [hideSidebar, setHideSidebar] = useHideSidebarContext();

  return !hideSidebar ? (
    <aside className="sidebar">
      <BoardSelect />
      <div className="sidebar--display-settings">
        <Theme />
        <HideSidebar />
      </div>
    </aside>
  ) : null;
}

export default Sidebar;
