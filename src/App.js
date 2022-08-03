import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ActiveBoard from "./components/ActiveBoard/ActiveBoard";
import AddTaskModal from "./modals/AddTaskModal";
import AddBoardModal from "./modals/AddBoardModal";
import DeleteTaskModal from "./modals/DeleteTaskModal";
import DeleteBoardModal from "./modals/DeleteBoardModal";
import EditBoardModal from "./modals/EditBoardModal";
import EditTaskModal from "./modals/EditTaskModal";
import ViewTaskModal from "./modals/ViewTaskModal";
import { useShowModalContext } from "./context/ShowModalContext";

export default function App() {
  const [showModal, setShowModal] = useShowModalContext();
  const [activeModal, setActiveModal] = useState(null);

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
    <div className="wrapper">
      <Header />
      <Sidebar />
      <ActiveBoard />
      {activeModal}
    </div>
  );
}
