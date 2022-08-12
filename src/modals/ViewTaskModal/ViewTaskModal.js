import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import settings from "../../assets/icon-vertical-ellipsis.svg";
import cross from "../../assets/icon-cross.svg";
import { useActiveTaskContext } from "../../context/TasksContext";
import { useTasksContext } from "../../context/TasksContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useShowModalContext } from "../../context/ShowModalContext";
import { useThemeContext } from "../../context/ThemeContext";

export default function ViewTaskModal(props) {
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [activeTask, setActiveTask] = useActiveTaskContext();
  const [tasks, setTasks] = useTasksContext();
  const [columns, setColumns] = useColumnsContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [showModal, setShowModal] = useShowModalContext();
  const [showSettings, setShowSettings] = useState(false);

  function getNumberTasksCompleted(task) {
    return task.subtasks.filter((t) => t.isCompleted === true).length;
  }
  const columnObjects = columns.filter(
    (column) => column.boardId === activeBoard.id
  );

  function updateSubtask(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === activeTask.id) {
        let newTask;
        newTask = {
          ...task,
          subtasks: task.subtasks.map((subtask) => {
            if (subtask.id === id) {
              return {
                ...subtask,
                isCompleted: !subtask.isCompleted,
              };
            }
            return subtask;
          }),
        };
        setActiveTask(newTask);
        return newTask;
      }
      return task;
    });
    setTasks(newTasks);
  }
  function updateTaskColumn(task, columnTitle) {
    const newColumn = columnObjects.find(
      (column) => column.title === columnTitle
    );
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t,
          columnId: newColumn.id,
        };
      }
      return t;
    });
    setTasks(newTasks);
  }
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      data-theme={darkTheme ? "dark" : "light"}
    >
      <Modal.Body className="view-task">
        {showSettings ? (
          <ul className="dropdown-settings view-task--dropdown-settings">
            <li
              className="dropdown-item"
              onClick={() => {
                setShowSettings((prev) => !prev);
                setShowModal("editTask");
              }}
            >
              Edit Task
            </li>
            <li
              className="dropdown-item"
              onClick={() => {
                setShowSettings((prev) => !prev);
                setShowModal("deleteTask");
              }}
            >
              Delete Task
            </li>
          </ul>
        ) : null}
        <h4 className="view-task--title">
          {activeTask.title}
          <div className="view-task--options">
            <img
              src={settings}
              alt="settings"
              className="settings-img"
              onClick={() => setShowSettings((prev) => !prev)}
            />
            <img
              src={cross}
              alt="exit"
              className="exit-img"
              onClick={() => props.onHide()}
            />
          </div>
        </h4>
        <p className="view-task--desc">{activeTask.desc}</p>
        <label className="view-task--subtask-header">
          Subtasks ({getNumberTasksCompleted(activeTask)} of{" "}
          {activeTask.subtasks.length})
        </label>
        <div className="view-task--subtasks">
          {activeTask.subtasks.map((subtask, index) => {
            return (
              <label
                key={subtask.id}
                className={
                  subtask.isCompleted
                    ? "view-task--subtask-item completed"
                    : "view-task--subtask-item"
                }
              >
                <input
                  type="checkbox"
                  name={`subtask${index}`}
                  checked={subtask.isCompleted ? true : false}
                  onChange={() => updateSubtask(subtask.id)}
                />
                <span className="checkmark"></span>
                {subtask.title}
              </label>
            );
          })}
        </div>
        <label className="view-task--status-header">Current Status</label>
        <select
          name="status"
          id="status"
          className="view-task--status"
          onChange={(event) => {
            updateTaskColumn(activeTask, event.target.value);
          }}
          defaultValue={
            columnObjects.find((column) => column.id === activeTask.columnId)
              .title
          }
        >
          {columnObjects.map((column) => {
            return (
              <option key={column.id} value={column.title}>
                {column.title}
              </option>
            );
          })}
        </select>
      </Modal.Body>
    </Modal>
  );
}
