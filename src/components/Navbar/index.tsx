"use client";

import React, { useState } from "react";
import { fetchRandomMovieByGenre } from "@/services/tmdb";
import "./index.scss";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
 

// Tipagem do componente
interface NavbarProps {
  onRandomSearch: (params: { genre: string }) => void;
  onGenreSelected: (genreId: string) => void;
  onSortearClick: () => void;
  selectedGenre: string;
  loading: boolean;
}

export default function Navbar({
  onRandomSearch,
  onGenreSelected,
  onSortearClick,
  selectedGenre,
  loading,
}: NavbarProps) {
  const [showGenreList, setShowGenreList] = useState(false);

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
    { id: "37", name: "Faroeste" },
  ];

  const toggleGenreList = () => {
    setShowGenreList(!showGenreList);
  };

  const handleGenreSelect = (genreId: string) => {
    onGenreSelected(genreId);
    setShowGenreList(false);
  };

  return (
    <nav className="navbar">
      <h2 className="title-navbar">
        <a href="/">
          <Image
            src={logo}
            alt="Logo CineSorte"
            width={120}
            height={120}
            className="logo"
          />
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

        <button
          className="btn-sorted"
          onClick={onSortearClick}
          disabled={loading || !selectedGenre}
        >
          {loading ? "..." : "Sortear Filme"}
        </button>
      </div>
    </nav>
  );
}
