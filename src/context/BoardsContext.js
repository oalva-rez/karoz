import React, { useState, useContext } from "react";
import { useMobileScreenContext } from "./MobileScreenContext";
const BoardsContext = React.createContext();
const ActiveBoardContext = React.createContext();

export const useBoardsContext = () => useContext(BoardsContext);
export const useActiveBoardContext = () => useContext(ActiveBoardContext);

export default function BoardsProvider({ children }) {
  const [boards, setBoards] = useState([]);
  const [mobileScreen, setMobileScreen] = useMobileScreenContext();

  const [activeBoard, setActiveBoard] = useState(
    mobileScreen
      ? {
          title: "Create Board",
          id: "",
        }
      : {
          title: "",
          id: "",
        }
  );
  return (
    <BoardsContext.Provider value={[boards, setBoards]}>
      <ActiveBoardContext.Provider value={[activeBoard, setActiveBoard]}>
        {children}
      </ActiveBoardContext.Provider>
    </BoardsContext.Provider>
  );
}
