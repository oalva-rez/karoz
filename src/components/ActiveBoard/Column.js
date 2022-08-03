import React from "react";
import Task from "./Task";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useTasksContext } from "../../context/TasksContext";

function Column() {
  const [columns, setColumns] = useColumnsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [tasks, setTasks] = useTasksContext();

  // get all columns matching active board id
  const columnsForActiveBoard = columns.filter(
    (column) => column.boardId === activeBoard.id
  );
  function randomColorGenerator() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  return columnsForActiveBoard.map((column) => (
    <div key={column.id} className="column">
      <h3 className="column--heading">
        <div
          className="color-code"
          style={{ backgroundColor: `#${randomColorGenerator()}` }}
        ></div>
        {column.title} (
        {tasks.filter((task) => task.columnId === column.id).length})
      </h3>
      <Task column={column} />
    </div>
  ));
}

export default Column;
