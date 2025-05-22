'use client';

import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import RandomMovieCard from "@/components/RandomMovieCard";
import { fetchRandomMovieByGenre } from "@/services/tmdb";
import { useState } from 'react';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState<any>(null);

  const handleSortearClick = async () => {
    if (!selectedGenre) return;
    setLoading(true);

    try {
      const movie = await fetchRandomMovieByGenre(selectedGenre);
      setRandomMovie(movie);
    } catch (error) {
      console.error("Erro ao buscar o filme", error);
    } finally {
      setLoading(false);
    };
  }

  return (
    <div>
      <div>
        <Navbar
          selectedGenre={selectedGenre}
          loading={loading}
          onGenreSelected={setSelectedGenre}
          onSortearClick={handleSortearClick}
          onRandomSearch={() => {}}
        />

        {randomMovie && <RandomMovieCard movie={randomMovie}/>}
        <MovieList/>
      </div>
    </div>
  );
}
