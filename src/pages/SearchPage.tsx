import { Box, Typography } from "@mui/material";
import {
  GridContainer,
  StyledInput,
  StylesContainerPage,
} from "../styles/components";
import queryString from "query-string";
import { useSearch } from "../hooks/useSearch";
import { useLocation } from "react-router-dom";
import { BackDrop, GridCards, PaginationButtons } from "../components/ui";

const SearchPage = (): JSX.Element => {
  const location = useLocation();
  const { movie = "", page = 1 } = queryString.parse(location.search);
  const {
    pageCurrent,
    handleChangePage,
    loading,
    resultsMovies,
    total_pages,
    error,
    handleQueryChange,
  } = useSearch({
    searchParam: movie as string,
    initPage: parseInt(page as string),
  });

  return (
    <>
      <Box sx={{ ...StylesContainerPage }}>
        <Typography variant="h2" align="center" color="primary" sx={{ p: 4 }}>
          Search Movie
        </Typography>
        <StyledInput
          placeholder="Search your favorite movie!"
          variant="outlined"
          fullWidth
          inputProps={{ style: { textAlign: "center" } }}
          onChange={handleQueryChange}
        />
        {resultsMovies !== undefined && resultsMovies.length > 0 && (
          <>
            <GridContainer container spacing={2} sx={{ mt: 4 }}>
              {resultsMovies.map((movieInfo) => (
                <GridCards key={movieInfo.id} {...movieInfo} />
              ))}
            </GridContainer>
            <PaginationButtons
              handleChange={handleChangePage}
              count={total_pages!}
              page={pageCurrent}
            />
          </>
        )}
        {!error && resultsMovies?.length === 0 && (
          <Typography sx={{ my: 10 }} variant="h3" align="center" color="error">
            No movies found!
          </Typography>
        )}
        {loading === true && <BackDrop />}
      </Box>
    </>
  );
};

export default SearchPage;
