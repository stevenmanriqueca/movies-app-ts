import { Grid, styled } from "@mui/material";

export const StylesContainerPage = {
    mt: 10,
    mx: 2,
    mb: 3,
    flexGrow: 1,
    padding: 3,
    borderColor: "primary.main",
    borderStyle: "solid",
    borderRadius: "10px",
};

export const GridContainer = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
