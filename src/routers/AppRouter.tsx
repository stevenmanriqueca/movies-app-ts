import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { MenuDrawer } from "../components/sidebar";
import { BackDrop } from "../components/ui";
import { useFetchGenres } from "../hooks/useFetchGenres";
import {
  GenresPage,
  HomePage,
  SearchPage,
  TrendingPage,
  TvPage,
  TypePage,
} from "../pages";

export const AppRouter = (): JSX.Element => {
  const { loading } = useFetchGenres();
  return (
    <>
      {loading === true ? (
        <BackDrop />
      ) : (
        <HashRouter>
          <NavBar />
          <MenuDrawer />
          <Routes>
            <Route path="/movies/home" element={<HomePage />} />
            <Route path="/movies/Trending" element={<TrendingPage />} />
            <Route path="/movies/search" element={<SearchPage />} />
            <Route path="/movies/types/:typeOption" element={<TypePage />} />
            <Route path="/movies/genres/:genreType" element={<GenresPage />} />
            <Route path="/movies/tv/:tvOption" element={<TvPage />} />
            <Route
              path="*"
              element={<Navigate to={"/movies/home"} replace />}
            />
          </Routes>
        </HashRouter>
      )}
    </>
  );
};
