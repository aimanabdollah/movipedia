import React, { useState } from "react";
import Movie from "./Movie";

const MainContent = ({ movies, year, genreName, handleLoadMoreClick }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const renderLoadMoreButton = filteredMovies.length > 12 && (
    <div className="row">
      <div className="col text-center">
        <button className="btn btn-dark" onClick={handleLoadMoreClick}>
          Load More...
        </button>
      </div>
    </div>
  );

  return (
    <main className="pb-5">
      <div className="container">
        <h2 className="py-3 text-white text-center">
          {`Best Movie ${year}, Genre: ${genreName}`}
        </h2>

        {/* Search Form */}
        <div className="row mb-3">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="input-group py-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-primary" type="button">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Display Filtered Movies or "No search found" */}
        <div className="row">
          {filteredMovies.length === 0 ? (
            <div className="col text-center">
              <img
                src="/no-found-img.png"
                alt="No search found"
                className="img-fluid"
                style={{ maxWidth: "300px" }}
              />
              <h5 className="text-white">Oops! No search results found.</h5>
              <h6 className="text-white">
                Try diferent or more general keywords
              </h6>
            </div>
          ) : (
            filteredMovies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))
          )}
        </div>

        {/* "Load More..." Button */}
        {filteredMovies.length > 0 && renderLoadMoreButton}
      </div>
    </main>
  );
};

export default MainContent;
