import React, { useState, useEffect, useRef } from "react";
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
import { ThreeDots } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

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
  getFirestore,
  collection,
  setDoc,
  doc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
  const isMounted = useRef(false);

  const [isLoading, setIsLoading] = useState(true);

  // firebase

  // auth state observer for login persistance
  function authStateObserver(user) {
    if (user || userInfo.uId === "demo") {
      setUserInfo((prev) => {
        return {
          ...prev,
          uId: userInfo.uId === "demo" ? "demo" : user.uid,
        };
      });
    } else {
      setUserInfo((prev) => {
        return {
          uId: null,
          displayName: null,
          email: null,
          photoURL: null,
        };
      });
    }
  }
  function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  // init auth observer
  useEffect(() => {
    const firebaseAppConfig = getFirebaseConfig();
    initializeApp(firebaseAppConfig);
    initFirebaseAuth();
  }, []);

  // load user data
  useEffect(() => {
    function loadUserData() {
      const colRef = collection(getFirestore(), "users");
      getDocs(colRef).then((snapshot) => {
        // check if user exists
        if (snapshot.docs.some((doc) => doc.id === userInfo.uId)) {
          snapshot.docs.forEach((doc) => {
            if (doc.id === userInfo.uId) {
              // if user exists load user data
              setBoards(doc.data().boards);
              setTasks(doc.data().tasks);
              setColumns(doc.data().columns);
              setActiveBoard(doc.data().activeBoard);
              setDarkTheme(doc.data().darkTheme);
              setIsLoading(false);
            }
          });
        } else if (userInfo.uId) {
          // if no user exists, create new user
          setIsLoading(false);
          setDoc(doc(getFirestore(), "users", userInfo.uId), {
            boards: [],
            columns: [],
            tasks: [],
            activeBoard: { id: null, title: null },
            darkTheme: false,
            createdAt: serverTimestamp(),
          });
        }
      });
    }

    loadUserData();
  }, []);

  // save user data to db
  useEffect(() => {
    async function saveData() {
      // isMounted prevents the useEffect from running on initial render to allow the data to load from db
      if (userInfo.uId !== "demo" && userInfo.uId && isMounted.current) {
        try {
          // save user data to db on second render if data is updated
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
      } else {
        isMounted.current = true;
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

  if (userInfo.uId) {
    if (isLoading) {
      return (
        <div className="loading-page">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#635fc7"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: "grid",
              placeContent: "center",
              height: "100vh",
            }}
            wrapperClassName=""
            visible={true}
          />
        </div>
      );
    } else {
      return (
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
      );
    }
  } else {
    return <Navigate replace to="/login" />;
  }
}
