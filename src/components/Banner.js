import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "../styles/Banner.css";

const Banner = (props) => {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginalsTv);
      props.setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    const displayMovie = props.movie;
    props.setMovie(displayMovie);
  }, [props.movie]);

  console.log(props.movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const addList = () => {
    if (!props.list.includes(props.movie)) {
      console.log("hello");
      const newArray = props.list.concat(props.movie);
      props.setList(newArray);
    } else {
      props.list.map((el, index) => {
        if (el.id === props.movie.id) {
          const newArray = props.list.filter((el) => el !== props.movie);
          props.setList(newArray);
        }
      });
    }
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}"
        )`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {props.movie?.title ||
            props.movie?.name ||
            props.movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">
            <i class="fas fa-play"></i>Play
          </button>
          <button onClick={addList} className="banner_button">
            {!props.list.includes(props.movie)
              ? "Add To My List"
              : "Remove Of My List"}
          </button>
        </div>
        {console.log(props.list)}
        <h1 className="banner_description">
          {truncate(props.movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
