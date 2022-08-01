import React from "react";
import ThemeProvider from "./ThemeContext";
import TasksProvider from "./TasksContext";
import BoardsProvider from "./BoardsContext";
import ColumnsProvider from "./ColumnsContext";

import { combineComponents } from "./combineComponents";

const providers = [
  ThemeProvider,
  TasksProvider,
  BoardsProvider,
  ColumnsProvider,
];
export const AppContextProvider = combineComponents(...providers);
