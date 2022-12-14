import React from "react";
import Column from "./Column";
import { useShowModalContext } from "../../context/ShowModalContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useTasksContext } from "../../context/TasksContext";
import { useThemeContext } from "../../context/ThemeContext";
function ActiveBoard() {
  const [showModal, setShowModal] = useShowModalContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [tasks, setTasks] = useTasksContext();
  const [darkTheme, setDarkTheme] = useThemeContext();

  return (
    <main className="active-board" data-theme={darkTheme ? "dark" : "light"}>
      <Column />

      {tasks.filter((task) => task.boardId === activeBoard.id).length === 0 ? (
        <div className="active-board--empty-msg">
          This board is empty. Add a new task to get started
        </div>
      ) : (
        <div className="new-column" onClick={() => setShowModal("editBoard")}>
          <div>+ New Column</div>
        </div>
      )}
    </main>
  );
}

export default ActiveBoard;
