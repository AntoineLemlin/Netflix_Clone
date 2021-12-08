import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Banner movie={movie} setMovie={setMovie} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        setMovie={setMovie}
      />
      <Row
        setMovie={setMovie}
        title="Trending now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        setMovie={setMovie}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        setMovie={setMovie}
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        setMovie={setMovie}
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        setMovie={setMovie}
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        setMovie={setMovie}
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        setMovie={setMovie}
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
