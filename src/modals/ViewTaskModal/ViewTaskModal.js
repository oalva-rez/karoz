import React from "react";
import Modal from "react-bootstrap/Modal";
import { useActiveTaskContext } from "../../context/TasksContext";
import { useTasksContext } from "../../context/TasksContext";

export default function ViewTaskModal(props) {
  const [activeTask, setActiveTask] = useActiveTaskContext();
  const [tasks, setTasks] = useTasksContext();

  function getNumberTasksCompleted(task) {
    return task.subtasks.filter((t) => t.isCompleted === true).length;
  }

  //update subtask on checkbox change
  /**
   * @param {Number} id subtask Id
   */
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

  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="view-task">
        <h4>{activeTask.title}</h4>
        <p>{activeTask.desc}</p>
        <h5>
          Subtasks {getNumberTasksCompleted(activeTask)} of{" "}
          {activeTask.subtasks.length}
        </h5>
        <div className="view-task--subtasks">
          {activeTask.subtasks.map((subtask, index) => {
            console.log(subtask.isCompleted);
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  name={`subtask${index}`}
                  checked={subtask.isCompleted ? true : false}
                  onChange={() => updateSubtask(subtask.id)}
                />
                <label>{subtask.title}</label>
              </div>
            );
          })}
        </div>
        <h5>Current Status</h5>
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
      </Modal.Body>
    </Modal>
  );
}
