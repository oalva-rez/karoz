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
import { useMobileScreenContext } from "./context/MobileScreenContext";
import { useUserInfoContext } from "./context/UserInfoContext";
import UserSignOn from "./components/SignOn/UserSignOn";

import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

export default function App() {
  const [showModal, setShowModal] = useShowModalContext();
  const [hideSidebar, setHideSidebar] = useHideSidebarContext();
  const [mobileScreen, setMobileScreen] = useMobileScreenContext();
  const [activeModal, setActiveModal] = useState(null);
  const [userInfo, setUserInfo] = useUserInfoContext();

  // firebase

  // load user tasks and projects **********
  //  useEffect(() => {
  //   const colRef = collection(getFirestore(), "users");
  //   getDocs(colRef).then((snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       if (doc.id === userInfo.uId) {
  //         setTasks(doc.data().tasks);
  //         setProjects(doc.data().projects);
  //       }
  //     });
  //   });
  // }, [userInfo.uId]);

  // save user todo and projects to db ************
  //  useEffect(() => {
  //   async function saveTodo() {
  //     try {
  //       if (tasks.length > 0) {
  //         await setDoc(doc(getFirestore(), "users", userInfo.uId), {
  //           tasks,
  //           projects,
  //           name: userInfo.name,
  //           uId: userInfo.uId,
  //           createdAt: serverTimestamp(),
  //         });
  //       }
  //     } catch (error) {
  //       console.log("Error writing new todo to Firebase Database", error);
  //     }
  //   }

  //   saveTodo();
  //   setInputData({
  //     task: "",
  //     date: "",
  //     project: "",
  //   });
  // }, [tasks, projects]);

  function handleSignOut() {
    signOut(getAuth());
    setUserInfo((prev) => {
      return {
        ...prev,
        uId: false,
      };
    });
    // setTasks([]);
    // setProjects([]);
  }

  // firebase

  function hideModal() {
    setActiveModal(null);
    setShowModal(null);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setMobileScreen(true);
      } else if (window.innerWidth >= 800) {
        setMobileScreen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

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

  return userInfo.uId ? (
    <div
      className={
        hideSidebar || mobileScreen ? "wrapper hide-sidebar" : "wrapper"
      }
    >
      <Header />
      <Sidebar />
      <ActiveBoard />
      {hideSidebar && !mobileScreen && (
        <div
          className="show-sidebar-icon"
          onClick={() => setHideSidebar((prev) => !prev)}
        >
          <img src={showSidebarIcon} alt="show sidebar" />
        </div>
      )}
      {activeModal}
    </div>
  ) : (
    <UserSignOn />
  );
}
