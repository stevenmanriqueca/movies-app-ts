import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Results } from "../interfaces";

type THookProps = {
  url: string;
  initPage: number;
};

interface IFetchData {
  results: never[] | Results[];
}

export const useFetchAndPagination = ({ url, initPage }: THookProps) => {
  const navigate = useNavigate();
  const [moviesResults, setMovies] = useState<IFetchData>({
    results: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [pageCurrent, setPageCurrent] = useState(initPage);

  if (initPage !== pageCurrent) {
    setPageCurrent(1);
  }

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      await axios
        .get<IFetchData>(`${url}&page=${pageCurrent}`)
        .then(({ data: { results } }) => setMovies({ results }))
        .catch(() => setError(true));
    };
    fetchMovies();
    setLoading(false);
    window.scroll({ top: 0, behavior: "smooth" });
  }, [url, pageCurrent]);

  const handleChange = (e: ChangeEvent, value: number) => {
    e.preventDefault();
    navigate(`?page=${value}`);
    setPageCurrent(value);
  };

  const results = moviesResults.results.filter(
    ({ title, poster_path }) =>
      title !== "" && poster_path !== "" && poster_path !== null
  );
  return { error, results, loading, handleChange, pageCurrent };
};
