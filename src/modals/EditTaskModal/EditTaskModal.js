import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useActiveTaskContext } from "../../context/TasksContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useTasksContext } from "../../context/TasksContext";
import deleteIcon from "../../assets/icon-cross.svg";
import { nanoid } from "nanoid";

function EditTaskModal(props) {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [columns, setColumns] = useColumnsContext();
  const [tasks, setTasks] = useTasksContext();
  const [activeTask, setActiveTask] = useActiveTaskContext();
  const [subtaskErr, setSubtaskErr] = useState(false);
  const [errors, setErrors] = useState({
    titleValue: false,
    descriptionValue: false,
  });

  // ids for subtask inputs
  const id1 = nanoid();
  const id2 = nanoid();

  // get columns from active board
  const columnObjects = columns.filter(
    (column) => column.boardId === activeBoard.id
  );
  const [inputData, setInputData] = useState({
    title: activeTask.title,
    description: activeTask.desc,
    subtasks: getSubtaskObject(),
    status: columnObjects.find((column) => column.id === activeTask.columnId)
      .title,
  });

  function getSubtaskObject() {
    const subtasks = {};
    activeTask.subtasks.forEach((subtask) => {
      subtasks[subtask.id] = subtask.title;
    });

    return subtasks;
  }

  function isFormValid() {
    let isValid = true;
    if (inputData.title === "") {
      setErrors((err) => ({ ...err, titleValue: true }));
      isValid = false;
    } else {
      setErrors((err) => ({ ...err, titleValue: false }));
    }
    if (inputData.description === "") {
      setErrors((err) => ({ ...err, descriptionValue: true }));
      isValid = false;
    } else {
      setErrors((err) => ({ ...err, descriptionValue: false }));
    }

    return isValid;
  }
  function handleChange(e) {
    setInputData((prev) => {
      if (e.target.id === "subtask") {
        return {
          ...prev,
          subtasks: {
            ...prev.subtasks,
            [e.target.name]: e.target.value,
          },
        };
      }
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function deleteSubtaskInput(event, id) {
    setInputData((prev) => {
      // delete key and value from subtasks object
      const copy = { ...prev };
      delete copy.subtasks[id];
      return copy;
    });
  }

  function addSubtaskInput(e) {
    e.preventDefault();
    setInputData((prev) => {
      if (Object.keys(prev.subtasks).length < 10) {
        return {
          ...prev,
          subtasks: {
            ...prev.subtasks,
            [nanoid()]: "",
          },
        };
      }
      return prev;
    });
  }

  function checkNumOfSubtasks() {
    if (Object.keys(inputData.subtasks).length < 10) {
      setSubtaskErr(false);
    } else {
      setSubtaskErr(true);
      setTimeout(() => {
        setSubtaskErr(false);
      }, 3000);
    }
  }

  function addTaskToColumn() {
    const formattedSubtasks = Object.entries(inputData.subtasks)
      .map(([key, value]) => {
        return {
          title: value,
          isCompleted: false,
          id: key,
        };
      })
      .filter((subtask) => subtask.title !== "");
    const column = columnObjects.find((col) => col.title === inputData.status);

    const newTask = {
      id: nanoid(),
      title: inputData.title,
      desc: inputData.description,
      columnId: column.id,
      boardId: activeBoard.id,
      subtasks: formattedSubtasks,
    };
    setTasks((prev) => {
      return [newTask, ...prev.filter((task) => task.id !== activeTask.id)];
    });
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="modal-title">Edit Task</h4>

        <form className="add-task-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="e.g Take coffee break"
            onChange={handleChange}
            value={inputData.title}
            className={errors.titleValue ? "input-err" : ""}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
            rows={6}
            value={inputData.description}
            onChange={handleChange}
            className={errors.descriptionValue ? "input-err" : ""}
          />
          <label htmlFor="subtasks">
            Subtasks
            <div
              className={subtaskErr ? "subtask-err show-err" : "subtask-err"}
            >
              Cannot create more than 10 subtasks.
            </div>
          </label>
          {Object.entries(inputData.subtasks).map(([key, value]) => {
            return (
              <div className="subtask-input" key={key}>
                <input
                  type="text"
                  name={key}
                  placeholder="e.g Make coffee"
                  value={value}
                  onChange={handleChange}
                  id="subtask"
                />
                <img
                  src={deleteIcon}
                  alt="delete"
                  className="subtask-delete"
                  onClick={(e) => {
                    deleteSubtaskInput(e, key);
                  }}
                />
              </div>
            );
          })}

          <button
            onClick={(e) => {
              addSubtaskInput(e);
              checkNumOfSubtasks();
            }}
            className="add-subtask-btn"
          >
            + Add New Subtask
          </button>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={inputData.status}
            onChange={handleChange}
          >
            {columnObjects.map((column) => {
              return (
                <option key={column.id} value={column.title}>
                  {column.title}
                </option>
              );
            })}
          </select>
          <button
            className="create-task-btn"
            onClick={(e) => {
              e.preventDefault();
              if (isFormValid()) {
                setErrors((prev) => ({
                  ...prev,
                  titleValue: false,
                  descriptionValue: false,
                  statusValue: false,
                }));
                addTaskToColumn();
                props.onHide();
              }
            }}
          >
            Save Changes
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditTaskModal;
