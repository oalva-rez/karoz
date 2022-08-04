import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useActiveBoardContext } from "../../context/BoardsContext";
import { useColumnsContext } from "../../context/ColumnsContext";
import deleteIcon from "../../assets/icon-cross.svg";
import { nanoid } from "nanoid";

function AddTaskModal(props) {
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [columns, setColumns] = useColumnsContext();
  const [subtaskErr, setSubtaskErr] = useState(false);
  const [taskInput, setTaskInput] = useState({
    title: "",
  });

  // ids for subtask inputs
  const id1 = nanoid();
  const id2 = nanoid();
  const [subTaskInputs, setSubTaskInputs] = useState([
    <div className="subtask-input" key={id1}>
      <input
        type="text"
        name={id1}
        placeholder="e.g Make coffee"
        value={taskInput[id1]}
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
        value={taskInput[id2]}
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

  // get column names from active board
  const columnObjs = columns.filter(
    (column) => column.boardId === activeBoard.id
  );

  function handleChange(e) {
    setTaskInput((prev) => {
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
    setTaskInput((prev) => {
      // delete key and value from subtasks object
      const copy = { ...prev };
      delete copy.subtasks[id];
      return copy;
    });
  }
  console.log(taskInput);
  function addSubtaskInput(e) {
    e.preventDefault();
    setSubTaskInputs((prev) => {
      // limit user to 6 subtasks
      if (prev.length < 6) {
        const id = nanoid();
        return [
          ...prev,
          <div className="subtask-input" key={id}>
            <input
              type="text"
              name={id}
              placeholder="New Subtask"
              id="subtask"
              value={taskInput[id]}
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

  // throw error if user tries to add more than 6 subtasks
  useEffect(() => {
    if (subTaskInputs.length < 6) {
      setSubtaskErr(false);
    } else {
      setSubtaskErr(true);
    }
  }, [subTaskInputs]);
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
            value={taskInput.title}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
            rows={6}
            value={taskInput.description}
            onChange={handleChange}
          />
          <label htmlFor="subtasks">
            Subtasks
            {subtaskErr ? (
              <div className="subtask-err">
                Cannot create more than 6 subtasks.
              </div>
            ) : null}
          </label>
          {subTaskInputs}
          <button
            onClick={(e) => {
              addSubtaskInput(e);
            }}
            className="add-subtask-btn"
          >
            + Add New Subtask
          </button>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={taskInput.status}
            onChange={handleChange}
            defaultValue={"default"}
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
              props.onHide();
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
