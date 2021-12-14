import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/Row.css";
import Loader from "react-loader-spinner";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios
          .get(props.fetchUrl)
          .then((response) => setMovies(response.data.results));
        return request;
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    setLoading(false);
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {!loading ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onMouseEnter={() => props.setMovie(movie)}
            />
          ))
        ) : (
          <Loader
            style={{ margin: "auto" }}
            type="TailSpin"
            color="#FF0000"
            height={100}
            width={100}
          />
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
