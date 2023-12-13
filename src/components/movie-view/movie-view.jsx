import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((b) => b.id === movieId);

  return (
    <div>
      <div className="mb-4">
        <img src={movie.imagePath} />
      </div>
      <div className="mb-4">
        <h3>
        <span>Title: </span>
        <span>{movie.title}</span>
        </h3>
      </div>
      <div className="mb-4">
        <span><strong>Year: </strong></span>
        <span className="text-secondary">{movie.year}</span>
      </div>
      <div className="mb-4">
      <strong>
        <span>Genres: </span>
        <span>{movie.genres.Name}</span>
        </strong>
        <br />
        <span className="text-secondary">{movie.genres.Description}</span>
      </div>
      <div className="mb-4">
        <span><strong>Description: </strong></span>
        <span className="text-secondary">{movie.description}</span>
      </div>
      <div className="mb-4">
      <strong>
        <span>Director: </span>
        <span>{movie.director.Name}</span>
        <br className="mb-2" />
        </strong>
        <span><strong>Bio: </strong></span>
        <span className="text-secondary">{movie.director.Bio}</span>
        <br className="mb-2" />
        <span><strong>Birth: </strong></span>
        <span className="text-secondary">{movie.director.Birth}</span>
        <br className="mb-2" />
        <span><strong>Death: </strong></span>
        <span className="text-secondary">{movie.director.Death}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button mb-4" style={{ cursor: 'pointer' }}>
          Back
        </button>
      </Link>
    </div>
  );
};
