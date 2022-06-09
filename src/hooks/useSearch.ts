import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IDataMovie } from "../interfaces";

interface IProps {
  searchParam: string;
  initPage: number;
}

export const useSearch = ({ searchParam, initPage }: IProps) => {
  const navigate = useNavigate();
  const debounceRef = useRef<NodeJS.Timeout>();
  const [value, setValue] = useState<string>(searchParam);
  const [error, setError] = useState<boolean>(false);
  const [infoMovies, setInfoMovies] = useState<IDataMovie>();
  const [loading, setLoading] = useState<boolean>(true);
  const [pageCurrent, setPageCurrent] = useState(initPage);

  const handleQueryChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (value !== event.target.value) {
        setPageCurrent(1);
      }
      setValue(event.target.value);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);
    const fetchMoviesByQuery = async () => {
      navigate(`?movie=${value}&page=${pageCurrent}`);
      await axios
        .get<IDataMovie>(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_APP_API_KEY
          }&query=${value}&page=${pageCurrent}`
        )
        .then(({ data }) => setInfoMovies(data))
        .catch(() => setError(true));
    };
    if (value !== "") {
      fetchMoviesByQuery();
      setLoading(false);
      window.scroll({ top: 0, behavior: "smooth" });
    }
  }, [value, pageCurrent]);

  const handleChangePage = (_: ChangeEvent, value: number) => {
    setPageCurrent(value);
  };

  const resultsMovies = infoMovies?.results!.filter(
    ({ title, poster_path }) =>
      title !== "" && poster_path !== "" && poster_path !== null
  );

  return {
    ...infoMovies,
    resultsMovies,
    handleChangePage,
    handleQueryChange,
    error,
    loading,
    pageCurrent,
  };
};
