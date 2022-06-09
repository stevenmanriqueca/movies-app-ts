import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { Box, Divider, Drawer, List, Toolbar } from "@mui/material";
import { Button, ButtonsOptions, DropDownButton, DropdownOptions } from "./";
import { DrawerStyles } from "../../styles/components";

export const MenuDrawer = (): JSX.Element => {
    const { openAndCloseSidebarMenu, toggleSidebar } = useContext(UIContext);
    return (
        <Drawer
            open={openAndCloseSidebarMenu}
            anchor="left"
            onClose={toggleSidebar}
            sx={{ ...DrawerStyles }}
        >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
                <Divider />
                <List>
                    {ButtonsOptions.map(({ id, text, Icon, path }) => (
                        <Button
                            key={id}
                            text={text}
                            Icon={<Icon />}
                            path={path}
                        />
                    ))}
                </List>
                <Divider
                    sx={{
                        backgroundColor: "primary.main",
                        mx: 1,
                    }}
                />
                <List>
                    {DropdownOptions.map((options) => {
                        const {
                            id,
                            info: [{ Icon }],
                        } = options;
                        return (
                            <DropDownButton
                                key={id}
                                Icon={<Icon />}
                                {...options}
                            />
                        );
                    })}
                </List>
            </Box>
        </Drawer>
    );
};
