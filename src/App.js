import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ActiveBoard from "./components/ActiveBoard/ActiveBoard";
import UserSignOn from "./components/SignOn/UserSignOn";
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
import {
  useBoardsContext,
  useActiveBoardContext,
} from "./context/BoardsContext";
import { useColumnsContext } from "./context/ColumnsContext";
import { useTasksContext } from "./context/TasksContext";
import { useThemeContext } from "./context/ThemeContext";

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
  const [boards, setBoards] = useBoardsContext();
  const [columns, setColumns] = useColumnsContext();
  const [tasks, setTasks] = useTasksContext();
  const [activeBoard, setActiveBoard] = useActiveBoardContext();
  const [darkTheme, setDarkTheme] = useThemeContext();
  const [userInfo, setUserInfo] = useUserInfoContext();

  // firebase
  // load user data
  useEffect(() => {
    async function loadUserData() {
      const colRef = collection(getFirestore(), "users");
      await getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.id === userInfo.uId) {
            console.log(
              `user ${userInfo.displayName} matched / loading user data`
            );
            setBoards(doc.data().boards);
            setTasks(doc.data().tasks);
            setColumns(doc.data().columns);
            setActiveBoard(doc.data().activeBoard);
            setDarkTheme(doc.data().darkTheme);
          }
        });
      });
    }
    // THE PROBLEM IS AT USER SIGN OUT, THE USER DATA IS LOADED BACK INTO STATE.
    // SO WHEN THE USER SIGNS INTO NEW ACCOUNT THE CURRENT STATE IS THE DATA FROM THE PREVIOUS ACCOUNT.
    loadUserData();
  }, [userInfo.uId]);

  // save user data to db
  useEffect(() => {
    async function saveData() {
      if (userInfo.uId) {
        try {
          console.log(`saving data to ${userInfo.displayName}`);

          await setDoc(doc(getFirestore(), "users", userInfo.uId), {
            boards,
            columns,
            tasks,
            activeBoard,
            darkTheme,
            createdAt: serverTimestamp(),
          });
        } catch (error) {
          console.log("Error writing new entry to Firebase Database", error);
        }
      }
    }

    saveData();
  }, [boards, columns, tasks, darkTheme, activeBoard]);

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
