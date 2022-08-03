import React from "react";
import Task from "./Task";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
function Column() {
  const [columns, setColumns] = useColumnsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();

  // get all columns matching active board id
  const columnsForActiveBoard = columns.filter(
    (column) => column.boardId === activeBoard.id
  );

  return columnsForActiveBoard.map((column) => (
    <div key={column.id} className="column">
      <h3>{column.title}</h3>
      <Task column={column} />
    </div>
  ));
}

export default Column;
