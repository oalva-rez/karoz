import React from "react";
import { useTasksContext } from "../../context/TasksContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useActiveTaskContext } from "../../context/TasksContext";
import { useShowModalContext } from "../../context/ShowModalContext";

function Task({ column }) {
  const [tasks, setTasks] = useTasksContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [activeTask, setActiveTask] = useActiveTaskContext();
  const [showModal, setShowModal] = useShowModalContext();

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
        <div
          key={task.id}
          className="tasks--item"
          onClick={() => {
            setShowModal("viewTask");
            setActiveTask(task);
          }}
        >
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
