import React, { useState, useContext } from "react";

const TasksContext = React.createContext();
const AddTaskProvider = React.createContext();

export const useTasksContext = () => useContext(TasksContext);

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prev) => [...prev, task]);
  }
  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      <AddTaskProvider.Provider value={addTask}>
        {children}
      </AddTaskProvider.Provider>
    </TasksContext.Provider>
  );
}
