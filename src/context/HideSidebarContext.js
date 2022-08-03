import React, { useState, useContext } from "react";

const HideSidebarContext = React.createContext();

export const useHideSidebarContext = () => useContext(HideSidebarContext);

export default function HideSidebarProvider({ children }) {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <HideSidebarContext.Provider value={[hideSidebar, setHideSidebar]}>
      {children}
    </HideSidebarContext.Provider>
  );
}
