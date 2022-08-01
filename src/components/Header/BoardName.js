import React from "react";
import { useActiveBoardContext } from "../../context/BoardsContext";

function BoardName() {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();

  return <div className="header--active-board">Active Board</div>;
}

export default BoardName;
