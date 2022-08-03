import React from "react";
import { useHideSidebarContext } from "../../context/HideSidebarContext";
import hideSidebarIcon from "../../assets/icon-hide-sidebar.svg";

function HideSidebar() {
  const [hideSidebar, setHideSidebar] = useHideSidebarContext();

  return (
    <div
      className="sidebar--hide-sidebar"
      onClick={() => setHideSidebar((prev) => !prev)}
    >
      <img src={hideSidebarIcon} alt="hide" />
      <div>Hide Sidebar</div>
    </div>
  );
}
export default HideSidebar;
