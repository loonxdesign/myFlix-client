import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
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
    genres: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
  onBookClick: PropTypes.func.isRequired,
};
