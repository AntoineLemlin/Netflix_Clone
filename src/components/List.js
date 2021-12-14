import React, { useEffect, useState } from "react";
import "../styles/Row.css";
import Loader from "react-loader-spinner";

const base_url = "https://image.tmdb.org/t/p/original/";
const List = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setMovies(props.list);
    }
    fetchData();
    setLoading(false);
  }, [props.list]);

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
    </div>
  );
};

export default List;
