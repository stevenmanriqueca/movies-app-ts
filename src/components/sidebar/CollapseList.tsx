import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const CollapseList = ({
    name,
    openDropdown,
    path,
}: any): JSX.Element => {
    const { toggleSidebar } = useContext(UIContext);
    return (
        <Collapse
            in={openDropdown}
            timeout="auto"
            unmountOnExit
            sx={{ margin: "5px", borderRadius: "10%" }}
        >
            <List component="div" disablePadding>
                <NavLink
                    to={`/movies/${path}/${name}`}
                    style={{ textDecoration: "none" }}
                    onClick={toggleSidebar}
                >
                    <ListItemButton
                        sx={{
                            pl: 4,
                            margin: "4px  5px",
                            borderRadius: "10%",
                        }}
                    >
                        <ListItemIcon>
                            <FiberManualRecordRoundedIcon
                                sx={{
                                    height: "12px",
                                    width: "12px",
                                    color: "primary.main",
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={name}
                            sx={{ color: "secondary.light" }}
                            primaryTypographyProps={{
                                fontSize: 15,
                                marginLeft: "-10px",
                                fontWeight: "bold",
                                lineHeight: "20px",
                                mb: "2px",
                            }}
                        />
                    </ListItemButton>
                </NavLink>
            </List>
        </Collapse>
    );
};
