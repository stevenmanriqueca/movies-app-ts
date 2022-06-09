import { UIState } from "./UIProvider";

type UIAction = { type: "[UI] TOGGLE_SIDEBAR" } | { type: "[UI] TOGGLE_THEME" };

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "[UI] TOGGLE_SIDEBAR":
      return {
        ...state,
        openAndCloseSidebarMenu: !state.openAndCloseSidebarMenu,
      };

    case "[UI] TOGGLE_THEME":
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };

    default:
      return state;
  }
};
