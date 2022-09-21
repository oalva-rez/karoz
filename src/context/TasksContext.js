import { nanoid } from "nanoid";
import React, { useState, useContext } from "react";

const TasksContext = React.createContext();
const ActiveTaskContext = React.createContext();

export const useTasksContext = () => useContext(TasksContext);
export const useActiveTaskContext = () => useContext(ActiveTaskContext);

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      <ActiveTaskContext.Provider value={[activeTask, setActiveTask]}>
        {children}
      </ActiveTaskContext.Provider>
    </TasksContext.Provider>
  );
}
