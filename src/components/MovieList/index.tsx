'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'cb510209cccf815babb92896dc060d95',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        });

        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <div className='loading-container'>
                <div className='spinner'></div>
            </div>
        )
    }

    return (
        <ul className='movie-list'>
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        </ul>
    )
}