import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./uiReducer";

export interface UIState {
  openAndCloseSidebarMenu: boolean;
  lightTheme: boolean;
}

export const UI_INITIAL_STATE: UIState = {
  openAndCloseSidebarMenu: false,
  lightTheme: true,
};

interface Props {
  children: React.ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const toggleSidebar = () =>
    dispatch({
      type: "[UI] TOGGLE_SIDEBAR",
    });

  const toggleTheme = () =>
    dispatch({
      type: "[UI] TOGGLE_THEME",
    });

  return (
    <UIContext.Provider value={{ ...state, toggleSidebar, toggleTheme }}>
      {children}
    </UIContext.Provider>
  );
};
