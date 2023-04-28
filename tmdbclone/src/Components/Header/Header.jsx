import React from "react";
import { Link } from "react-router-dom";
import logo  from "../../images/logo.svg"
import add  from "../../images/add_icon.svg"
import search  from "../../images/search_icon.svg"
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="left-header">
        <Link to="/" className="logo">
          <img src={logo} alt="The Movie Database(TMDB)" />
        </Link>
        <ul className="nav-menu">
          <li className="dropdown-movies">
            <a href="#">Movies</a>
            <div className="dropdown-menu">
              <Link className="option" to="/movie" >
                Popular
              </Link>
              <Link className="option" to="/movie/now-playing" >
                Now Playing
              </Link>
              <Link className="option" to="movie/upcoming">
                Upcoming
              </Link>
              <Link className="option" to="movie/top-rated">
                Top Rated
              </Link>
            </div>
          </li>
          <li className="dropdown-movies">
            <a href="#">TV Shows</a>
            <div className="dropdown-menu">
              <Link to="/tv" className="option">
                Popular
              </Link>
              <Link to="/tv/airing-today" className="option">
                Airing Today
              </Link>
              <Link to="/tv/on-tv" className="option">
                On TV
              </Link>
              <Link to="/tv/top-rated" className="option">
                Top Rated
              </Link>
            </div>
          </li>
          <li className="dropdown-movies">
            <a href="#">People</a>
            <div className="dropdown-menu">
              <Link className="option" to="" >
                Popular
              </Link>
              
            </div>
          </li>
          <li className="dropdown-movies">
            <a href="#">More</a>
            <div className="dropdown-menu">
              <Link className="option" to="" >
                Popular
              </Link>
              <Link className="option" to="/movie/now-playing" >
                Now Playing
              </Link>
              <Link className="option" to="movie/upcoming">
                Upcoming
              </Link>
              <Link className="option" to="movie/top-rated">
                Top Rated
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="right-header">
      <ul>
          <li className="add-Icon">
            <a href="#">
              <img src={add} alt="Add Icon" />
            </a>
          </li>
          <li>
            <div className="trans-language">EN</div>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Join TMDB</a>
          </li>
          <li>
            <a href="#">
              <img src={search} alt="Search Icon" className="search-icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
