import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import CurrentBoard from "./components/CurrentBoard/CurrentBoard";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentBoard, setCurrentBoard] = useState({
    title: "",
    id: "",
  });
  const [boards, setBoards] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <Header />
      <Sidebar />
      <CurrentBoard />
    </>
  );
}
