'use client';

import React, { useState } from 'react';
import { fetchRandomMovieByGenre } from '@/services/tmdb';
import './index.scss';
import { BiCameraMovie } from "react-icons/bi";

// Tipagem do componente
interface NavbarProps {
    onRandomSearch: (params: { genre: string }) => void;
}

export default function Navbar(props: NavbarProps) {
    const [selectedGenre, setSelectedGenre] = useState("");  //seleçao do genero
    const [showGenreList, setShowGenreList] = useState(false); //menu de generos
    const [loading, setLoading] = useState(false);  //carregamento
    const [randomMovie, setRandomMovie] = useState<any>(null);  //armazena o filme sorteado

    const genres = [
        { id: "28", name: "Ação" },
        { id: "12", name: "Aventura" },
        { id: "16", name: "Animação" },
        { id: "35", name: "Comédia" },
        { id: "80", name: "Crime" },
        { id: "99", name: "Documentário" },
        { id: "18", name: "Drama" },
        { id: "10751", name: "Família" },
        { id: "14", name: "Fantasia" },
        { id: "36", name: "História" },
        { id: "27", name: "Terror" },
        { id: "10402", name: "Música" },
        { id: "9648", name: "Mistério" },
        { id: "10749", name: "Romance" },
        { id: "878", name: "Ficção Científica" },
        { id: "10770", name: "Cinema TV" },
        { id: "53", name: "Thriller" },
        { id: "10752", name: "Guerra" },
        { id: "37", name: "Faroeste" }
    ];

    const toggleGenreList = () => {
        setShowGenreList(!showGenreList);
    };

    const handleGenreSelect = (genreId: string) => {
        setSelectedGenre(genreId); 
        setShowGenreList(false);    
    };

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

    return (
        <nav className="navbar">
            <h2 className="title-navbar">
                <a href="/">
                    <BiCameraMovie />
                    CineSorte
                </a>
            </h2>

            <div className="genre-selector">
                <div className="genre-field" onClick={toggleGenreList}>
                    {selectedGenre
                        ? genres.find((genre) => genre.id === selectedGenre)?.name
                        : "Escolha um Gênero"}
                </div>

                {showGenreList && (
                    <div className="genre-list">
                        {genres.map((genre) => (
                            <div
                                key={genre.id}
                                className="genre-option"
                                onClick={() => handleGenreSelect(genre.id)}
                            >
                                {genre.name}
                            </div>
                        ))}
                    </div>
                )}

                <button className="btn-sorted" onClick={handleSortearClick} disabled={loading}>
                    {loading ? "Carregando..." : "Sortear Filme"}
                </button>
            </div>


            {randomMovie && (
                <div className="movie-info">
                    <h3>{randomMovie.title}</h3>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
                        alt={randomMovie.title}
                    />
                    <p>{randomMovie.overview}</p>
                </div>
            )}
        </nav>
    );
}
