'use client';

import { Movie } from '@/types/movie';
import './index.scss';

interface RandomMovieCardProps {
  movie: Movie | null;
}

export default function RandomMovieCard({ movie }: RandomMovieCardProps) {
  if (!movie) return null;

  return (
    <div className="random-movie-card">
      <div className="movie-content">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <div className="movie-meta">
            <span>{movie.release_date?.slice(0, 4)}</span>
            <span className="rating">⭐ {movie.vote_average.toFixed(1)}</span>
          </div>
          <p className="movie-description">{movie.overview}</p>
          <div className="buttons">
            <button className="favorite-button">Salvar nos Favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
}
