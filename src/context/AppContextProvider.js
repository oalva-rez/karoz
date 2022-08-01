import React from "react";
import ThemeProvider from "./ThemeContext";
import TasksProvider from "./Tasks";
import { combineComponents } from "./combineComponents";

const providers = [ThemeProvider, TasksProvider];
export const AppContextProvider = combineComponents(...providers);
