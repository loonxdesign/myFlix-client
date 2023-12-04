import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://ghib-lix-e94c670e9f28.herokuapp.com/movies')
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.Title,
            imagePath: movie.ImagePath,
            description: movie.Description,
            year: movie.Year,
            genres: {
              Name: movie.Genres.Name,
              Description: movie.Genres.Description,
            },
            director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
              Death: movie.Director.Death,
            },
          };
        });
        console.log('movies', moviesFromApi);

        setMovies(moviesFromApi);
      });
  }, []);

  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or
        <SignupView />
      </>
    );
  }

  if (selectedMovie) {
    return (
      <>
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <div>The list is empty!</div>;
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      </>
    );
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
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        Logout
      </button>
    </div>
  );
};
