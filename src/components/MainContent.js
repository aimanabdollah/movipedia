import Movie from "./Movie";

const MainContent = ({ movies, year, genreName, handleLoadMoreClick }) => {
  return (
    <main className="pb-5">
      <div className="container">
        <h2 className="py-5 text-white text-center">
          {`Best Movie ${year}, Genre: ${genreName}`}
        </h2>
        <div className="row">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-dark" onClick={handleLoadMoreClick}>
              Load More...
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
