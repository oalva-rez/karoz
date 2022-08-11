import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ActiveBoard from "./components/ActiveBoard/ActiveBoard";
import AddTaskModal from "./modals/AddTaskModal/AddTaskModal";
import AddBoardModal from "./modals/AddBoardModal/AddBoardModal";
import DeleteTaskModal from "./modals/DeleteModals/DeleteTaskModal";
import DeleteBoardModal from "./modals/DeleteModals/DeleteBoardModal";
import EditBoardModal from "./modals/EditBoardModal/EditBoardModal";
import EditTaskModal from "./modals/EditTaskModal/EditTaskModal";
import ViewTaskModal from "./modals/ViewTaskModal/ViewTaskModal";
import showSidebarIcon from "./assets/icon-show-sidebar.svg";
import { useShowModalContext } from "./context/ShowModalContext";
import { useHideSidebarContext } from "./context/HideSidebarContext";

export default function App() {
  const [showModal, setShowModal] = useShowModalContext();
  const [activeModal, setActiveModal] = useState(null);
  const [hideSidebar, setHideSidebar] = useHideSidebarContext();

  function hideModal() {
    setActiveModal(null);
    setShowModal(null);
  }

  useEffect(() => {
    switch (showModal) {
      case "addTask":
        setActiveModal(<AddTaskModal show={true} onHide={hideModal} />);
        break;

      case "addBoard":
        setActiveModal(<AddBoardModal show={true} onHide={hideModal} />);
        break;
      case "deleteTask":
        setActiveModal(<DeleteTaskModal show={true} onHide={hideModal} />);
        break;

      case "deleteBoard":
        setActiveModal(<DeleteBoardModal show={true} onHide={hideModal} />);
        break;

      case "editBoard":
        setActiveModal(<EditBoardModal show={true} onHide={hideModal} />);
        break;

      case "editTask":
        setActiveModal(<EditTaskModal show={true} onHide={hideModal} />);
        break;

      case "viewTask":
        setActiveModal(<ViewTaskModal show={true} onHide={hideModal} />);
        break;

      default:
        break;
    }
  }, [showModal]);
  return (
    <div className={hideSidebar ? "wrapper hide-sidebar" : "wrapper"}>
      <Header />
      <Sidebar />
      <ActiveBoard />
      {hideSidebar && (
        <div
          className="show-sidebar-icon"
          onClick={() => setHideSidebar((prev) => !prev)}
        >
          <img src={showSidebarIcon} alt="show sidebar" />
        </div>
      )}
      {activeModal}
    </div>
  );
}
