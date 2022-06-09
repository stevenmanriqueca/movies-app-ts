import { styled } from "@mui/material";
import Flippy, { BackSide, FrontSide } from "react-flippy";

export const FlipCardStyled = styled(Flippy)(({ theme }) => ({
    width: "100%",
    height: "400px",
    textAlign: "center",
    color: "#000",
    fontSize: "30px",
}));

export const FrontCardStyled = styled(FrontSide)(({ theme }) => ({
    padding: "0",
    borderRadius: "15px",
    cursor: "pointer",
}));

export const BackCardStyled = styled(BackSide)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    borderRadius: "15px",
    overflowY: "scroll",
    padding: "30px",
    cursor: "pointer",
    "::-webkit-scrollbar": {
        width: "6px",
    },
    "::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
    },
}));

export const StyledPoster = styled("img")({
    width: "100%",
    height: "100%",
    borderRadius: "15px",
});
