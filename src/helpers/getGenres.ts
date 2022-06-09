import axios from "axios";

export interface Genres {
	genres: Genre[];
}

export interface Genre {
	id: number;
	name: string;
}

export const getGenres = async (): Promise<Genre[]> => {
	const {
		data: { genres },
	} = await axios.get<Genres>(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${
			import.meta.env.VITE_APP_API_KEY
		}`
	);
	return genres;
};
