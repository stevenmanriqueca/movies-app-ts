interface genres {
	id: number;
	name: string;
}

export const verifyExistGenre = (pathname: string): genres[] => {
	const genreName = pathname.slice(15).replace(/%20/gi, " ")
	const allGenres: genres[] = JSON.parse(
		localStorage.getItem("genresList") || "[]"
	);
	const idGenre = allGenres.filter(({ name }) => name === genreName);

	return idGenre;
};
