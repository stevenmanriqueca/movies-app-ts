export const DrawerStyles = {
    width: 240,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
        color: "secondary.main",
        width: 240,
        boxSizing: "border-box",
        backgroundColor: "primary.light",
    },
    "& ::-webkit-scrollbar": {
        width: "6px",
    },
    "& ::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.main",
        borderRadius: "10px",
    },
};

export const ListItemButtomStyles = {
    padding: "10px",
    borderRadius: "5%",
    fontWeight: "bold",
    margin: "5px",
};
