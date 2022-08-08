import React from "react";
import { useTasksContext } from "../../context/TasksContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useColumnsContext } from "../../context/ColumnsContext";

function Task({ column }) {
  const [tasks, setTasks] = useTasksContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();

  // get matching tasks from column id
  const tasksForColumn = tasks.filter(
    (task) => task.columnId === column.id && task.boardId === activeBoard.id
  );

  // count how many subtasks isCompleted in task
  function getNumberTasksCompleted(task) {
    return task.subtasks.filter((t) => t.isCompleted === true).length;
  }

  return (
    <div className="tasks">
      {tasksForColumn.map((task) => (
        <div key={task.id} className="tasks--item">
          <div className="tasks--item-title">{task.title}</div>
          <div className="subtasks-completed">
            {`${getNumberTasksCompleted(task)} of ${
              task.subtasks.length
            } subtasks completed`}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task;
