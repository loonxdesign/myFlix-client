import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { BookmarkHeart, BookmarkHeartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './movie-card.scss';

export const MovieCard = ({ movie, user, setUser }) => {
  // FAVORITE MOVIE
  const [isFavorite, setIsFavorite] = useState(false);
  const storedToken = localStorage.getItem('token');

  useEffect(() => {
    if (user && user.FavoriteMovies && user.FavoriteMovies.includes(movie.id)) {
      setIsFavorite(true);
    }
  }, [user, movie]);

  const addFavoriteMovie = () => {
    fetch(
      `https://ghib-lix-e94c670e9f28.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) =>
        response.ok ? response.json() : console.log('Failed to add fav movie')
      )
      .then((user) => {
        if (user) {
          alert('Successfully added to favorites');
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
          setIsFavorite(true);
        }
      })
      .catch((error) => alert(error));
  };

  const removeFavoriteMovie = () => {
    fetch(
      `https://ghib-lix-e94c670e9f28.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      }
    )
      .then((response) => (response.ok ? response.json() : alert('Failed')))
      .then((user) => {
        if (user) {
          alert('Successfully deleted from favorites');
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
          setIsFavorite(false);
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.imagePath} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button id="button" variant="link">
            Open
          </Button>
        </Link>
        <div className="position-relative .d-inline-block mt-4">
          <Link>
            {!isFavorite ? (
              <BookmarkHeart size={30} onClick={addFavoriteMovie} />
            ) : (
              <BookmarkHeartFill size={30} onClick={removeFavoriteMovie} />
            )}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.string,
    director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      birth: PropTypes.string,
      death: PropTypes.string,
    }),
  }),
  genres: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};
