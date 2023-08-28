const Navigation = ({
  years,
  year,
  handleYearChange,
  genres,
  genreId,
  handleGenreChange,
}) => {
  return (
    <nav>
      <div className="container text-white">
        <div className="row">
          <div className="col d-none d-md-flex align-items-center">
            <hr className="flex-grow-1 me-3" />
            <small>powered by themoviedb.org</small>
          </div>
          <div className="col col-md-3 d-flex">
            <div className="me-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <select
                className="form-select"
                onChange={handleYearChange}
                value={year}
                id="year"
              >
                {years.map((year) => (
                  <option key={year.toString()} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select
                className="form-select"
                onChange={handleGenreChange}
                value={genreId}
                id="genre"
              >
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
