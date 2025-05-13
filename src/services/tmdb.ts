export async function fetchRandomMovieByGenre(genreId: string) {
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const BASE_URL = 'https://api.themoviedb.org/3';

    // 1. Buscar os filmes dessa categoria (1ª página)
    const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=1`
    );
    const data = await response.json();

    // 2. Sortear um filme entre os filmes dessa categoria
    const movies = data.results;

    if (movies.length === 0) {
        throw new Error("Nenhum filme encontrado para este gênero.");
    }

    // 3. Sortear um filme aleatório
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    return randomMovie;
}


