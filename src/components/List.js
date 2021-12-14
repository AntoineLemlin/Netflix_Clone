import React, { useEffect, useState } from "react";
import "../styles/Row.css";
import Loader from "react-loader-spinner";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
const List = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      setMovies(props.list);
    }
    fetchData();
    setLoading(false);
  }, [props.list]);

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
      <div
        style={{
          minHeight: movies.length === 0 ? "28vh" : "",
        }}
        className="row_posters"
      >
        {movies.length > 0 ? (
          [
            !loading ? (
              movies.map((movie) => (
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  style={{ width: "auto" }}
                  className={`row_poster ${
                    props.isLargeRow && "row_posterLarge"
                  }`}
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
            ),
          ]
        ) : (
          <h3>Your list is empty</h3>
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default List;
