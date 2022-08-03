import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/Header/header.css";
import "./components/Sidebar/sidebar.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
