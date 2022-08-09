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
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 1,
      id: 2,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 1,
      id: 3,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 4,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 5,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 6,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 7,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 8,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 1,
      id: 9,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 10,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 11,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 12,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 13,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 14,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 15,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 16,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 17,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 1,
      id: 18,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "BOARD 2",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 2,
      id: 21,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 2,
      id: 22,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 1,
      boardId: 2,
      id: 23,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 2,
      id: 24,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 2,
      id: 25,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 2,
      id: 26,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 2,
      id: 27,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 2,
      id: 28,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 2,
      boardId: 2,
      id: 29,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 210,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 211,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 212,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 213,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 214,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 215,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 216,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 217,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
        },
      ],
    },
    {
      title: "Build UI for onboarding flow",
      desc: "We know what were planning to build for version one. Now we need to finalize the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition",
      columnId: 3,
      boardId: 2,
      id: 218,
      subtasks: [
        {
          title: "Build UI for onboarding flow",
          isCompleted: false,
          id: 1,
        },
        {
          title: "Finalize pricing model",
          isCompleted: false,
          id: 2,
        },
        {
          title:
            "Talk to potential customers about our proposed solution and ask for fair price expectancy",
          isCompleted: false,
          id: 3,
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
