export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.imagePath} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Year: </span>
          <span>{movie.year}</span>
        </div>
        <div>
          <span>Genres: </span>
          <span>{movie.genres.Name}</span>
          <br />
          <span>{movie.genres.Description}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director.Name}</span>
          <br />
          <span>Bio: </span>
          <span>{movie.director.Bio}</span>
          <br />
          <span>Bio: </span>
          <span>{movie.director.Birth}</span>
          <br />
          <span>Death: </span>
          <span>{movie.director.Death}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
      </div>
    );
  };
  