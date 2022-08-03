import React, { useState, useContext } from "react";

const TasksContext = React.createContext();
const ActiveTaskContext = React.createContext();

export const useTasksContext = () => useContext(TasksContext);
export const useActiveTaskContext = () => useContext(ActiveTaskContext);

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 1,
      id: 1,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 1,
      id: 2,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 1,
      id: 3,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 4,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 5,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 6,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 7,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 8,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 9,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 10,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 11,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 12,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 13,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 14,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 15,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 16,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 17,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 18,
      subTasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: true,
        },
        {
          title: "Finalize pricing model",
          isCompleted: true,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
        },
      ],
    },
  ]);
  const [activeTask, setActiveTask] = useState(null);

  return (
    <TasksContext.Provider value={[tasks, setTasks]}>
      <ActiveTaskContext.Provider value={[activeTask, setActiveTask]}>
        {children}
      </ActiveTaskContext.Provider>
    </TasksContext.Provider>
  );
}
