import imgPlaceholder from "../img/img-placeholder.png";

const Movie = (props) => {
  // Get poster image for each movie
  const getImage = () => {
    if (props.movie.poster_path) {
      return `https://image.tmdb.org/t/p/w342${props.movie.poster_path}`;
    } else {
      return imgPlaceholder;
    }
  };

  // Get movie id
  const getId = () => {
    return props.movie.id;
  };

  // Get movie release year
  const getYear = () => {
    return new Date(props.movie.release_date).getFullYear();
  };

  // Cut movie title if more than 17 characters
  const getTitle = () => {
    if (props.movie.title.length >= 25) {
      return props.movie.title.substring(0, 25) + "...";
    } else {
      return props.movie.title;
    }
  };

  // Cut movie overview if more than 100 characters
  const getOverview = () => {
    if (props.movie.overview.length >= 100) {
      return props.movie.overview.substring(0, 100) + "...";
    } else {
      return props.movie.overview;
    }
  };

  // Get genre name for each movie
  const getGenre = () => {
    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ];

    let movieGenre = [];
    genres.forEach((genre) => {
      if (props.movie.genre_ids.includes(genre.id)) {
        movieGenre.push(
          <span key={genre.id} className="badge bg-success me-1">
            {genre.name}
          </span>
        );
      }
    });

    return movieGenre;
  };

  return (
    <div className="movie-container col-6 col-md-4 col-xl-3 mb-5">
      {/* {console.log(props.movie)} */}

      <div className="card movie-card h-100">
        <img src={getImage()} alt={props.movie.title} className="p-1"></img>
        <span className="badge bg-warning text-dark vote">
          {props.movie.vote_average}
        </span>
        <div className="movie-info">
          <h2>{getTitle()}</h2>
          <p>{getYear()}</p>
          <p className="genre">{getGenre()}</p>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="movie-details">
            <h6 className="card-title">{getTitle()}</h6>
            <h6 className="card-title">{getYear()}</h6>
            <p className="card-text d-none d-lg-block">{getOverview()}</p>
          </div>
          <a
            href={`https://www.themoviedb.org/movie/${getId()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm mt-2 p-2" // Use mt-2 for top margin
          >
            View More Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
