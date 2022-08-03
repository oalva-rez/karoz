import React from "react";
import { useActiveBoardContext } from "../../context/BoardsContext";

function BoardName() {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();

  return <div className="header--active-board">{activeBoard.title}</div>;
}

export default BoardName;
