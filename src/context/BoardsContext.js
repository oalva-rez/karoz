import React, { useState, useContext } from "react";

const BoardsContext = React.createContext();
const ActiveBoardContext = React.createContext();

export const useBoardsContext = () => useContext(BoardsContext);
export const useActiveBoardContext = () => useContext(ActiveBoardContext);

export default function BoardsProvider({ children }) {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Platform Launch",
      isSelected: true,
    },
    {
      id: 2,
      title: "Marketing Plan",
      isSelected: false,
    },
    {
      id: 3,
      title: "Product Design",
      isSelected: false,
    },
  ]);
  const [activeBoard, setActiveBoard] = useState({
    title: "Platform Launch",
    id: 1,
  });
  return (
    <BoardsContext.Provider value={[boards, setBoards]}>
      <ActiveBoardContext.Provider value={[activeBoard, setActiveBoard]}>
        {children}
      </ActiveBoardContext.Provider>
    </BoardsContext.Provider>
  );
}
