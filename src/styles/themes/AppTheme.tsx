import ThemeProvider from "@mui/system/ThemeProvider";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { lightTheme, darkTheme } from "./";

interface IProps {
    children: React.ReactNode[];
}

export const AppTheme = ({ children }: IProps) => {
    const { lightTheme: isLightTheme } = useContext(UIContext);
    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
};
