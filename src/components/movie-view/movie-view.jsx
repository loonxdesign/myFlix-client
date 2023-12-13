import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movie }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b.id === movieId);

  return (
    <div>
      <div className="mb-4">
        <img src={movie.imagePath} />
      </div>
      <div className="mb-4">
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div className="mb-4">
        <span>Year: </span>
        <span>{movie.year}</span>
      </div>
      <div className="mb-4">
        <span>Genres: </span>
        <span>{movie.genres.Name}</span>
        <br />
        <span>{movie.genres.Description}</span>
      </div>
      <div className="mb-4">
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div className="mb-4">
        <span>Director: </span>
        <span>{movie.director.Name}</span>
        <br className="mb-2" />
        <span>Bio: </span>
        <span>{movie.director.Bio}</span>
        <br className="mb-2" />
        <span>Birth: </span>
        <span>{movie.director.Birth}</span>
        <br className="mb-2" />
        <span>Death: </span>
        <span>{movie.director.Death}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button mb-4" style={{ cursor: 'pointer' }}>
          Back
        </button>
      </Link>
    </div>
  );
};
