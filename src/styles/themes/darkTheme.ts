import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    background: {
      default: "#0B163E",
    },
    primary: {
      dark: "#0B163E",
      main: "#f5f5f5",
      light: "#1E3D6E",
    },
    secondary: {
      main: "#f3e5f5",
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
            backgroundColor: "#f3e5f5",
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
