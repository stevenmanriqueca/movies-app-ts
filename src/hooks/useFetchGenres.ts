import { useEffect, useState } from "react";
import { DropdownOptions } from "../components/sidebar";
import { Genre, getGenres } from "../helpers/getGenres";

export const useFetchGenres = () => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    if (localStorage.getItem("genresList")!.length === 0) {
      const genresData = JSON.parse(localStorage.getItem("genresList") || "[]");
      setGenres(genresData);
    } else {
      getGenres().then(setGenres);
    }
    setLoading(false);
  }, []);

  if (genres) {
    localStorage.setItem("genresList", JSON.stringify(genres));
    DropdownOptions[0].info[0].options = [...genres];
  }

  return { loading, genres };
};
