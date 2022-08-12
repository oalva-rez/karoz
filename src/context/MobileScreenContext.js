import React, { useState, useContext } from "react";

const MobileScreenContext = React.createContext();
const ShowAllBoardsContext = React.createContext();

export const useMobileScreenContext = () => useContext(MobileScreenContext);
export const useShowAllBoardsContext = () => useContext(ShowAllBoardsContext);

export default function MobileScreenProvider({ children }) {
  const [mobileScreen, setMobileScreen] = useState([]);
  const [showAllBoards, setShowAllBoards] = useState(false);

  return (
    <MobileScreenContext.Provider value={[mobileScreen, setMobileScreen]}>
      <ShowAllBoardsContext.Provider value={[showAllBoards, setShowAllBoards]}>
        {children}
      </ShowAllBoardsContext.Provider>
    </MobileScreenContext.Provider>
  );
}
