import React from 'react'
import "./mainContainer.scss";
import { Trending_sec } from './Trending_section/Trending_sec';
import { Popular } from './Popular_section/Popular';


export const MainContainer = () => {
  return (
    <div className="container">
      <section>
        <div className="container_wrap">
          <div className="title">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search">
            <form action="#">
              <input
                className="search_input"
                type="text"
                placeholder="Search for a movie, tv show, person......"
              />
              <input className="submit_input" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </section>
      <Trending_sec/>
      <Popular/>
    </div>
  )
}
