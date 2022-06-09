import { Box, Pagination } from "@mui/material";

interface IProps {
  count: number;
  handleChange: (event: any, value: number) => void;
  page: number;
}

export const PaginationButtons = ({
  count,
  handleChange,
  page,
}: IProps): JSX.Element => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 5 }}>
      <Pagination
        sx={{
          ["& .MuiPaginationItem-root"]: {
            color: "primary.main",
          },
        }}
        size="large"
        variant="outlined"
        count={count}
        defaultPage={1}
        onChange={handleChange}
        page={page}
      />
    </Box>
  );
};
