import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import CurrentBoard from "./components/CurrentBoard/CurrentBoard";
import { AppContextProvider } from "./context/AppContextProvider";

export default function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [currentBoard, setCurrentBoard] = useState({
    title: "",
    id: "",
  });
  const [boards, setBoards] = useState([]);
  const [columns, setColumns] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <AppContextProvider>
      <Header />
      <Sidebar />
      <CurrentBoard />
    </AppContextProvider>
  );
}
