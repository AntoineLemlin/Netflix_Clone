import { useEffect, useState } from "react";

import "../styles/Nav.css";

const Nav = (props) => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <ul>
        <li
          className={props.genre === "all" ? "active-li" : ""}
          onClick={() => props.setGenre("all")}
        >
          Home
        </li>
        <li
          className={props.genre === "tv" ? "active-li" : ""}
          onClick={() => props.setGenre("tv")}
        >
          TV Shows
        </li>
        <li
          className={props.genre === "movie" ? "active-li" : ""}
          onClick={() => props.setGenre("movie")}
        >
          Movies
        </li>
        <li
          className={props.genre === "new" ? "active-li" : ""}
          onClick={() => props.setGenre("new")}
        >
          Recently Added
        </li>
        <li
          className={props.genre === "list" ? "active-li" : ""}
          onClick={() => props.setGenre("list")}
        >
          My List
        </li>
      </ul>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Nav;
