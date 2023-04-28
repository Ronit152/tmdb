import React from "react";
import "./_movie_catelog.scss";
import { Link } from "react-router-dom";

export const Movie_catelog = ({ movie }) => {
  const getMovieImage = (movie) => {
    if (movie?.backdrop_path )
      return (
        "https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.backdrop_path
      );
    else return ("https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path)
  };

  return (
    <div className="movie">
    <div className="" >
      <Link to="#">
        <div className="movie_img">
          <img
            loading="lazy"
            className={`movie_img height`}
            src={getMovieImage(movie)}
            alt="movie"
          />
        </div>
      </Link>
      <div className="movie_content remove_height">
        <Link to="#" className="hover-moviename">
          {movie?.title ? movie.title : movie.name}
        </Link>
        <p>{movie?.release_date ? movie.release_date : movie.first_air_date}</p>
      </div>
    </div>
    </div>
  );
};
