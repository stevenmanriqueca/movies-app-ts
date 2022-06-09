import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { memo, useState } from "react";
import { CollapseList } from ".";

interface IProps {
    Icon: any;
    text: string;
    info: {
        path: string;
        options: {
            id?: string | number;
            name?: string;
        }[];
    }[];
}

export const DropDownButton = memo(
    ({ text, info: [{ options, path }], Icon }: IProps): JSX.Element => {

        const [openDropdown, setOpenDropdown] = useState<boolean>(false);

        return (
            <>
                <ListItemButton
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    sx={{
                        padding: "10px",
                        borderRadius: "10%",
                        fontWeight: "bold",
                        margin: "5px",
                    }}
                >
                    <ListItemIcon sx={{ color: "primary.main" }}>
                        {Icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                            fontSize: 15,
                            fontWeight: "bold",
                            lineHeight: "20px",
                            mb: "2px",
                        }}
                    />
                    {openDropdown ? (
                        <ExpandLess sx={{ color: "primary.main" }} />
                    ) : (
                        <ExpandMore sx={{ color: "primary.main" }} />
                    )}
                </ListItemButton>
                {options.map((elements) => {
                    const { id } = elements;
                    return (
                        <CollapseList
                            key={id}
                            {...elements}
                            openDropdown={openDropdown}
                            path={path}
                        />
                    );
                })}
            </>
        );
    }
);
