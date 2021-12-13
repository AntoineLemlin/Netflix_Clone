import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../styles/Row.css";
import Loader from "react-loader-spinner";

const base_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {!loading ? (
          movies.map((movie) => (
            <img
              key={movie.id}
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
    </div>
  );
};

export default Row;
