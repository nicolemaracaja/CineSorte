'use client';

import { Movie } from '@/types/movie';
import './index.scss';

interface RandomMovieCardProps{
    movie: Movie | null;
}

export default function RandomMovieCard({ movie }: RandomMovieCardProps){
    if (!movie) return null;

    return (
        <div className='random-movie-card'>
            <h3 className='title-random-movie-card'>{movie.title}</h3>
            <img className='img-random-movie-card'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <p className='description-random-movie-card'>{movie.overview}</p>
        </div>
    )
}