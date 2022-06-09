import { Box, Typography } from "@mui/material";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { BackDrop, GridCards, PaginationButtons } from "../components/ui";
import { ErrorInfo } from "../components/ui";
import { useFetchAndPagination } from "../hooks/useFetchAndPagination";
import { GridContainer, StylesContainerPage } from "../styles/components";

const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${
  import.meta.env.VITE_APP_API_KEY
}`;
const TrendingPage = (): JSX.Element => {
  const location = useLocation();
  const { page = 1 } = queryString.parse(location.search);
  const { error, results, loading, handleChange, pageCurrent } =
    useFetchAndPagination({
      url,
      initPage: parseInt(page as string),
    });

  if (error) {
    return <ErrorInfo />;
  }

  return (
    <>
      {loading === true || results.length === 0 ? (
        <BackDrop />
      ) : (
        <Box sx={{ ...StylesContainerPage }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ mb: 5 }}
            color="primary"
          >
            Trending
          </Typography>

          <GridContainer container spacing={2}>
            {results.map((movieInfo) => (
              <GridCards key={movieInfo.id} {...movieInfo} />
            ))}
          </GridContainer>
          <PaginationButtons
            handleChange={handleChange}
            count={10}
            page={pageCurrent}
          />
        </Box>
      )}
    </>
  );
};

export default TrendingPage;
