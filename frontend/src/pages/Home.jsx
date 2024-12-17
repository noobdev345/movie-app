import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Batman", release_date: "2017" },
    { id: 2, title: "The Avengers", release_date: "2012" },
    { id: 3, title: "Interstellar", release_date: "2014" },
    { id: 3, title: "The Martian", release_date: "2020" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
