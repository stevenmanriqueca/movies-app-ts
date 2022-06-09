import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "#e8eaf6",
    },
    primary: {
      dark: "#e8eaf6",
      main: "#303f9f",
      light: "#f5f5f5",
    },
    secondary: {
      main: "#303f9f",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "::-webkit-scrollbar": {
            width: "6px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#303f9f",
            borderRadius: "10px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});
