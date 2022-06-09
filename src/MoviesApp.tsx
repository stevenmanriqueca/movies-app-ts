import { UIProvider } from "./context/UIProvider";
import { CssBaseline } from "@mui/material";
import { AppRouter } from "./routers/AppRouter";
import { AppTheme } from "./styles/themes/";
import "@fontsource/roboto";

const MoviesApp = (): JSX.Element => {
  return (
    <UIProvider>
      <AppTheme>
        <CssBaseline />
        <AppRouter />
      </AppTheme>
    </UIProvider>
  );
};

export default MoviesApp;
