import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useShowModalContext } from "./../../context/ShowModalContext";
import deleteIcon from "../../assets/icon-cross.svg";
import { nanoid } from "nanoid";

function AddTaskModal(props) {
  const [showModal, setShowModal] = useShowModalContext();

  // MAKE COLUMN NAMES APPEAR ON SELECT INPUT

  const [subtaskErr, setSubtaskErr] = useState(false);
  const [taskInput, setTaskInput] = useState({});
  function handleChange(e) {
    setTaskInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
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

  // throw error if user tries to add more than 6 subtasks
  useEffect(() => {
    if (subTaskInputs.length < 6) {
      setSubtaskErr(false);
    } else {
      setSubtaskErr(true);
    }
  }, [subTaskInputs]);

  function deleteSubtaskInput(event, id) {
    setSubTaskInputs((prev) => {
      return prev.filter((input) => {
        return input.key !== id;
      });
    });
    setTaskInput((prev) => {
      return {
        ...prev,
        [id]: "",
      };
    });
  }
  function addSubtaskInput(e) {
    e.preventDefault();
    setSubTaskInputs((prev) => {
      // limit user to 6 subtasks
      if (prev.length < 6) {
        const id = nanoid();
        return [
          ...prev,
          <div className="subtask-input" key={id}>
            <input type="text" name={id} placeholder="New Subtask" />
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
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
            recharge the batteries a little."
            rows={6}
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
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button
            className="create-task-btn"
            onClick={() => {
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
