import { ReactElement, useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ListItemButtomStyles } from "../../styles/components";

interface IProps {
    text: string;
    Icon: ReactElement<SVGRectElement>;
    path: string;
}

export const Button = ({ text, Icon, path }: IProps): JSX.Element => {
    const { toggleSidebar } = useContext(UIContext);

    return (
        <NavLink
            to={`movies/${path}`}
            style={{ textDecoration: "none" }}
            onClick={toggleSidebar}
        >
            <ListItemButton sx={{ ...ListItemButtomStyles }}>
                <ListItemIcon sx={{ color: "primary.main" }}>
                    {Icon}
                </ListItemIcon>
                <ListItemText
                    sx={{ color: "secondary.main" }}
                    primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "bold",
                        lineHeight: "20px",
                        mb: "2px",
                    }}
                    primary={text}
                />
            </ListItemButton>
        </NavLink>
    );
};
