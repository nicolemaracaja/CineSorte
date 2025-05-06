import React, { useState } from "react"; //useState armazena os valores dos filtros
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = ({ onRandomSearch }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showGenreList, setShowGenreList] = useState(false);

  const genres = [
    { id: "", name: "Todos" },
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

  //abre/fecha a lista de gêneros
  const toggleGenreList = () => {
    setShowGenreList(!showGenreList);
  };

  //seleciona um gênero
  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId);
    setShowGenreList(false); //fecha a lista
  };

  //sorteia um filme
  const handleSortearClick = () => {
    onRandomSearch({ genre: selectedGenre });
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          CineSorte
        </Link>
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

        {selectedGenre && (
          <button onClick={handleGenreSelect}>🎲 Sortear Filme</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
