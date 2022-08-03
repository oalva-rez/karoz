import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useShowModalContext } from "../context/ShowModalContext";

function AddTaskModal(props) {
  const [showModal, setShowModal] = useShowModalContext();
  const [taskInput, setTaskInput] = useState({
    task: "",
    description: "",
    // subtasks
  });
  const [subTaskInputs, setSubTaskInputs] = useState([
    <input type="text" />,
    <input type="text" />,
  ]);

  function addSubtaskInput(e) {
    e.preventDefault();
    setSubTaskInputs([
      ...subTaskInputs,
      <input type="text" name={`subtask${subTaskInputs.length + 1}`} />,
    ]);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          />
          <label htmlFor="subtasks">Subtasks</label>
          {subTaskInputs}
          <button
            onClick={(e) => {
              addSubtaskInput(e);
            }}
          >
            + Add New Subtask
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTaskModal;
