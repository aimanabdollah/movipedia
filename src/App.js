import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Navigation from "./components/Navigation";

// Generate genre
const genres = [
  { id: "", name: "All" },
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

// Generate year
let years = [];
const thisYear = new Date().getFullYear();
for (let i = 0; i < 50; i++) {
  years.push(thisYear - i);
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(thisYear);
  const [genreId, setGenreId] = useState("");
  const [genreName, setGenreName] = useState("All");
  const [page, setPage] = useState(1);

  const handleYearChange = (event) => {
    // Get year from <select>
    setYear(event.target.value);

    // For reset page
    setPage(1);
  };

  const handleGenreChange = (event) => {
    setGenreId(event.target.value);

    // Get year genre name from <select>
    let index = event.target.selectedIndex;
    setGenreName(event.target[index].text);

    // For reset page
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const myFetch = async () => {
      try {
        let url = `https://api.themoviedb.org/3/discover/movie`;
        url += `?api_key=d27ccb6bbb2f6ca02da3ae39a45f5043`;
        url += `&certification_country=US`;
        url += `&certification.lte=PG-13`;
        url += `&primary_release_year=${year}`;
        url += `&with_genres=${genreId}`;
        url += `&page=${page}`;

        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Opps, the error occur: ${response.status}`);
        }
        let data = await response.json();

        // If page 1, refill state movies
        // If page 2 or more, add to state movie
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovie) => [...prevMovie, ...data.results]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    myFetch();
  }, [year, genreId, page]);

  return (
    <React.Fragment>
      <Header />
      <Navigation
        years={years}
        year={year}
        handleYearChange={handleYearChange}
        genres={genres}
        genreId={genreId}
        handleGenreChange={handleGenreChange}
      />

      <MainContent
        movies={movies}
        year={year}
        genreName={genreName}
        handleLoadMoreClick={handleLoadMoreClick}
      />

      <Footer />
    </React.Fragment>
  );
};

export default App;
