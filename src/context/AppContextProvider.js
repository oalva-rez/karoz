import ThemeProvider from "./ThemeContext";
import TasksProvider from "./TasksContext";
import BoardsProvider from "./BoardsContext";
import ColumnsProvider from "./ColumnsContext";
import ShowModalProvider from "./ShowModalContext";
import HideSidebarProvider from "./HideSidebarContext";
import MobileScreenProvider from "./MobileScreenContext";
import UserInfoProvider from "./UserInfoContext";

import { combineComponents } from "./combineComponents";

const providers = [
  ThemeProvider,
  TasksProvider,
  BoardsProvider,
  ColumnsProvider,
  ShowModalProvider,
  HideSidebarProvider,
  MobileScreenProvider,
  UserInfoProvider,
];
export const AppContextProvider = combineComponents(...providers);
