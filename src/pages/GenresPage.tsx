import { Box, Typography } from "@mui/material";
import queryString from "query-string";
import { Navigate, useLocation } from "react-router-dom";
import { BackDrop, GridCards, PaginationButtons } from "../components/ui";
import { ErrorInfo } from "../components/ui";
import { verifyExistGenre } from "../helpers/verifyExistGenre";
import { useFetchAndPagination } from "../hooks/useFetchAndPagination";
import { GridContainer, StylesContainerPage } from "../styles/components";

const GenresPage = (): JSX.Element => {
  const { pathname, search } = useLocation();
  const result = verifyExistGenre(pathname);
  if (result.length === 0) {
    return <Navigate to="/movies/home" />;
  }
  const { page = 1 } = queryString.parse(search);
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${
    result[0].id
  }&api_key=${import.meta.env.VITE_APP_API_KEY}`;

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
            {result[0].name}
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

export default GenresPage;
