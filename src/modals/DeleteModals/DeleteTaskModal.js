import React from "react";
import Modal from "react-bootstrap/Modal";
import { useActiveTaskContext } from "../../context/TasksContext";
import { useTasksContext } from "../../context/TasksContext";
function DeleteTaskModal(props) {
  const [activeTask, setActiveTask] = useActiveTaskContext();
  const [tasks, setTasks] = useTasksContext();

  function deleteTask() {
    setTasks((prev) => prev.filter((task) => task.id !== activeTask.id));
    setActiveTask(null);
  }
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="delete-modal">
        <h4>Delete this task?</h4>
        <p>
          Are you sure you want to delete the{" "}
          <span style={{ fontStyle: "italic", fontWeight: 700 }}>
            {`'${activeTask.title.slice(0, 36)}`}
            {activeTask.title.length > 36 ? (
              <span>...'</span>
            ) : (
              <span>'</span>
            )}{" "}
          </span>
          task and its subtasks? This action cannot be reversed.
        </p>
        <div className="delete-modal--buttons">
          <button
            className="delete-action-button"
            onClick={() => {
              deleteTask();
              props.onHide();
            }}
          >
            Delete
          </button>
          <button
            className="cancel-action-button"
            onClick={() => props.onHide()}
          >
            Cancel
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteTaskModal;
