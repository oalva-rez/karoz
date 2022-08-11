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

  return columnsForActiveBoard.map((column) => (
    <div key={column.id} className="column">
      <h3 className="column--heading">
        <div
          className="color-code"
          style={{ backgroundColor: `${column.color}` }}
        ></div>
        {column.title} (
        {
          tasks.filter(
            (task) =>
              task.columnId === column.id && task.boardId === activeBoard.id
          ).length
        }
        )
      </h3>
      <Task column={column} />
    </div>
  ));
}

export default Column;
