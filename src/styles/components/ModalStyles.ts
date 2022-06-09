import { Box, styled, TextField } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "45%",
    borderRadius: "20px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.up("sm")]: {
        width: "calc(75vh)",
    },
    [theme.breakpoints.up("md")]: {
        width: "calc(80vh)",
    },
    width: "calc(45vh)",
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(4),
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.secondary.main,
        },
        /*"&:hover fieldset": {
            borderColor: theme.palette.secondary.main,
        },*/
    },
    input: {
        color: theme.palette.secondary.light,
    },
}));
