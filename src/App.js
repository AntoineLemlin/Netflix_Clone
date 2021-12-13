import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState("all");

  return (
    <div className="App">
      <Nav setGenre={setGenre} genre={genre} />
      <Banner movie={movie} setMovie={setMovie} />

      {genre === "new" ? (
        <Row
          title="Recently Added"
          fetchUrl={requests.fetchNew}
          isLargeRow
          genre={genre}
          setMovie={setMovie}
        />
      ) : (
        <>
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={(function () {
              switch (genre) {
                case "all":
                  return requests.fetchNetflixOriginalsAll;
                  break;
                case "movie":
                  return requests.fetchNetflixOriginalsMovie;
                  break;
                case "tv":
                  return requests.fetchNetflixOriginalsTv;
                  break;
              }
            })()}
            isLargeRow
            setMovie={setMovie}
          />

          <Row
            setMovie={setMovie}
            title="Trending now"
            fetchUrl={(function () {
              switch (genre) {
                case "all":
                  return requests.fetchTrendingAll;
                  break;
                case "movie":
                  return requests.fetchTrendingMovie;
                  break;
                case "tv":
                  return requests.fetchTrendingTv;
                  break;
              }
            })()}
          />
          <Row
            setMovie={setMovie}
            title="Top Rated"
            fetchUrl={(function () {
              switch (genre) {
                case "all":
                  return requests.fetchTopRatedAll;
                  break;
                case "movie":
                  return requests.fetchTopRatedMovie;
                  break;
                case "tv":
                  return requests.fetchTopRatedTv;
                  break;
              }
            })()}
          />
          {genre === "tv" ? (
            ""
          ) : (
            <Row
              setMovie={setMovie}
              title="Action Movies"
              fetchUrl={(function () {
                switch (genre) {
                  case "all":
                    return requests.fetchActionMoviesAll;
                    break;
                  case "movie":
                    return requests.fetchActionMoviesMovie;
                    break;
                  case "tv":
                    return requests.fetchActionMoviesTv;
                    break;
                }
              })()}
            />
          )}
          <Row
            setMovie={setMovie}
            title={genre === "tv" ? "Comedy Series" : "Comedy Movies"}
            fetchUrl={(function () {
              switch (genre) {
                case "all":
                  return requests.fetchComedyMoviesAll;
                  break;
                case "movie":
                  return requests.fetchComedyMoviesMovie;
                  break;
                case "tv":
                  return requests.fetchComedyMoviesTv;
                  break;
              }
            })()}
          />
          {genre === "tv" ? (
            ""
          ) : (
            <Row
              setMovie={setMovie}
              title="Horror Movies"
              fetchUrl={(function () {
                switch (genre) {
                  case "all":
                    return requests.fetchHorrorMoviesAll;
                    break;
                  case "movie":
                    return requests.fetchHorrorMoviesMovie;
                    break;
                  case "tv":
                    return requests.fetchHorrorMoviesTv;
                    break;
                }
              })()}
            />
          )}
          <Row
            setMovie={setMovie}
            title={genre === "tv" ? "Romance Series" : "Romance Movies"}
            fetchUrl={(function () {
              switch (genre) {
                case "all":
                  return requests.fetchRomanceMoviesAll;
                  break;
                case "movie":
                  return requests.fetchRomanceMoviesMovie;
                  break;
                case "tv":
                  return requests.fetchRomanceMoviesTv;
                  break;
              }
            })()}
          />
          <Row
            setMovie={setMovie}
            title="Documentaries"
            fetchUrl={(function () {
              switch (genre) {
                case "all":
                  return requests.fetchDocumentariesAll;
                  break;
                case "movie":
                  return requests.fetchDocumentariesMovie;
                  break;
                case "tv":
                  return requests.fetchDocumentariesTv;
                  break;
              }
            })()}
          />
        </>
      )}
    </div>
  );
}

export default App;
