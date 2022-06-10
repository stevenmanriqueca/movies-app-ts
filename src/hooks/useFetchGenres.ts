import { useEffect, useState } from "react";
import { DropdownOptions } from "../components/sidebar";
import { Genre, getGenres } from "../helpers/getGenres";

export const useFetchGenres = () => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);

  const existLocalStorage = JSON.parse(
    localStorage.getItem("genresList") || "[]"
  );

  useEffect(() => {
    const callGenres = async () => {
      await getGenres().then(setGenres);
      setLoading(false);
    };
    if (existLocalStorage.length > 1) {
      const genresData = JSON.parse(localStorage.getItem("genresList") || "[]");
      setGenres(genresData);
      setLoading(false);
    }
    if (existLocalStorage.length === 0) {
      callGenres();
      localStorage.setItem("genresList", JSON.stringify(genres));
    }
  }, []);

  if (genres) {
    localStorage.setItem("genresList", JSON.stringify(genres));
    DropdownOptions[0].info[0].options = [...genres];
  }

  return { loading, genres };
};
