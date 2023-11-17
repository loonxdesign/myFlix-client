import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Castle in the Sky",
      image:
        "https://m.media-amazon.com/images/I/81FpLjY3MvL._SY679_.jpg",
      director: "Hayao Miyazaki",
      genres: ["Animation, ", "Adventure, ", "Family"]
    },
    {
      id: 2,
      title: "My Neighbor Totoro",
      image:
        "https://m.media-amazon.com/images/I/716yTFwaX3L._SY679_.jpg",
      director: "Hayao Miyazaki",
      genres: ["Animation, ", "Comedy, ", "Family"]
    },
    {
      id: 3,
      title: "Kiki's Delivery Service",
      image:
        "https://m.media-amazon.com/images/I/81dVZvYBqCL._SY679_.jpg",
      director: "Hayao Miyazaki",
      genres: ["Animation, ", "Fantasy, ", "Family"]
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
