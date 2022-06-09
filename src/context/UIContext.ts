import { createContext } from "react";

interface UIContext {
  openAndCloseSidebarMenu: boolean;
  lightTheme: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export const UIContext = createContext({} as UIContext);
