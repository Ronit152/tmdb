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
        <div to="/" className="logo">
          <img src={logo} alt="The Movie Database(TMDB)" />
        </div>
        <ul className="nav-menu">
          <li className="dropdown-movies">
            <a href="#">Movies</a>
          </li>
          <li className="dropdown-tvshow">
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">More</a>
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
