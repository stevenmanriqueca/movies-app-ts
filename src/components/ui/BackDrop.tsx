import { CircularProgress, Backdrop } from "@mui/material";

export const BackDrop = (): JSX.Element => {
  return (
    <Backdrop sx={{ backgroundColor:"primary.light", zIndex: 999 }} open={true}>
      <CircularProgress  color="primary"/>
    </Backdrop>
  );
};