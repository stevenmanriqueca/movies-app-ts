import { Box, Typography } from "@mui/material";

export const ErrorInfo = (): JSX.Element => {
  return (
    <Box sx={{ marginTop: "50vh" }}>
      <Typography align="center" variant="h3" color="primary">
        There was an error, reload the page!!!
      </Typography>
    </Box>
  );
};
