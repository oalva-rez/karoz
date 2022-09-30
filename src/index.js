import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./components/Header/header.css";
import "./components/Sidebar/sidebar.css";
import "./components/ActiveBoard/activeBoard.css";
import "./modals/AddTaskModal/addTaskModal.css";
import "./modals/DeleteModals/deleteModals.css";
import "./modals/ViewTaskModal/viewTaskModal.css";
import "./modals/AddBoardModal/addBoardModal.css";
import "./components/SignOn/signOn.css";
import App from "./App";
import UserSignOn from "./components/SignOn/UserSignOn";
import { AppContextProvider } from "./context/AppContextProvider";

const Index = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<UserSignOn />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
