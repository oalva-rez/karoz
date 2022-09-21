import React, { useState, useContext } from "react";
const BoardsContext = React.createContext();
const ActiveBoardContext = React.createContext();

export const useBoardsContext = () => useContext(BoardsContext);
export const useActiveBoardContext = () => useContext(ActiveBoardContext);

export default function BoardsProvider({ children }) {
  const [boards, setBoards] = useState([]);
  const [activeBoard, setActiveBoard] = useState({
    title: "Create Board",
    id: "",
  });
  return (
    <BoardsContext.Provider value={[boards, setBoards]}>
      <ActiveBoardContext.Provider value={[activeBoard, setActiveBoard]}>
        {children}
      </ActiveBoardContext.Provider>
    </BoardsContext.Provider>
  );
}
