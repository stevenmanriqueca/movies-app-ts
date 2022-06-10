import { useEffect, useState } from "react";
import { DropdownOptions } from "../components/sidebar";
import { Genre, getGenres } from "../helpers/getGenres";

export const useFetchGenres = () => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const callGenres = async () => {
      await getGenres().then(setGenres);
      setLoading(false);
    };
    callGenres();
    localStorage.setItem("genresList", JSON.stringify(genres));
  }, []);

  if (genres) {
    localStorage.setItem("genresList", JSON.stringify(genres));
    DropdownOptions[0].info[0].options = [...genres];
  }

  return { loading, genres };
};
