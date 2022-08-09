import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import { useTasksContext } from "../../context/TasksContext";
import deleteIcon from "../../assets/icon-cross.svg";
import deleteIconRed from "../../assets/icon-cross-red.svg";
import { nanoid } from "nanoid";

function AddTaskModal(props) {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [columns, setColumns] = useColumnsContext();
  const [tasks, setTasks] = useTasksContext();
  const [subtaskErr, setSubtaskErr] = useState(false);
  const [errors, setErrors] = useState({
    titleValue: false,
    descriptionValue: false,
    statusValue: false,
  });

  // ids for subtask inputs
  const id1 = nanoid();
  const id2 = nanoid();
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    subtasks: { [id1]: "", [id2]: "" },
  });
  const [subTaskInputs, setSubTaskInputs] = useState([
    <div className="subtask-input" key={id1}>
      <input
        type="text"
        name={id1}
        placeholder="e.g Make coffee"
        value={inputData[id1]}
        onChange={handleChange}
        id="subtask"
      />
      <img
        src={deleteIcon}
        alt="delete"
        className="subtask-delete"
        onClick={(e) => {
          deleteSubtaskInput(e, id1);
        }}
      />
    </div>,
    <div className="subtask-input" key={id2}>
      <input
        type="text"
        name={id2}
        placeholder="eg. Drink coffee & smile"
        value={inputData[id2]}
        onChange={handleChange}
        id="subtask"
      />
      <img
        src={deleteIcon}
        alt="delete"
        className="subtask-delete"
        onClick={(e) => {
          deleteSubtaskInput(e, id2);
        }}
      />
    </div>,
  ]);

  // get columns from active board
  const columnObjs = columns.filter(
    (column) => column.boardId === activeBoard.id
  );

  function isFormValid() {
    let isValid = true;
    if (inputData.title === "") {
      setErrors((err) => ({ ...err, titleValue: true }));
      isValid = false;
    }
    if (inputData.description === "") {
      setErrors((err) => ({ ...err, descriptionValue: true }));
      isValid = false;
    }

    if (inputData.status === undefined) {
      setErrors((err) => ({ ...err, statusValue: true }));
      isValid = false;
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
    setSubTaskInputs((prev) => {
      return prev.filter((input) => input.key !== id);
    });
    setInputData((prev) => {
      // delete key and value from subtasks object
      const copy = { ...prev };
      delete copy.subtasks[id];
      return copy;
    });
  }

  function addSubtaskInput(e) {
    e.preventDefault();
    setSubTaskInputs((prev) => {
      // limit user to 10 subtasks
      if (prev.length < 10) {
        const id = nanoid();
        return [
          ...prev,
          <div className="subtask-input" key={id}>
            <input
              type="text"
              name={id}
              placeholder="New Subtask"
              id="subtask"
              value={inputData[id]}
              onChange={handleChange}
            />
            <img
              src={deleteIcon}
              alt="delete"
              className="subtask-delete"
              onClick={(e) => {
                deleteSubtaskInput(e, id);
              }}
            />
          </div>,
        ];
      }
      return prev;
    });
  }
  function checkNumOfSubtasks() {
    if (subTaskInputs.length < 10) {
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
          id: nanoid(),
        };
      })
      .filter((subtask) => subtask.title !== "");

    const column = columnObjs.find(
      (column) => column.title === inputData.status
    );
    const newTask = {
      id: nanoid(),
      title: inputData.title,
      desc: inputData.description,
      columnId: column.id,
      boardId: activeBoard.id,
      subtasks: formattedSubtasks,
    };
    console.log(newTask);
    setTasks((prev) => {
      return [...prev, newTask];
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
        <h4 className="modal-title">Add New Task</h4>

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
          {subTaskInputs}
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
            defaultValue={"default"}
            className={errors.statusValue ? "input-err" : ""}
          >
            <option value="default" disabled>
              Select a Column
            </option>
            {columnObjs.map((column) => {
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
            Create Task
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddTaskModal;
