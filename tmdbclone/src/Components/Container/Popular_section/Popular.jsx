import React, { useState, useEffect } from "react";
import "../Trending_section/_trending_sec.scss";
import axios from "axios";
import { Movie_catelog } from "../Movie_catelog";

export const Popular = () => {
  const [data, setData] = useState([]);
  const [onTv, setOnTv] = useState(true);
  const [theater, setTheater] = useState(false);

  const onTvData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=da93b67b790d945fee310acd7e394bc7`
      )
      .then(function (response) {
        console.log(response);

        setData(response.data.results);
      });

    //   .then((response) => {})
  };
  const theaterData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=da93b67b790d945fee310acd7e394bc7`
      )
      .then((response) => setData(response.data.results));
  };

  useEffect(() => {
    onTvData();
  }, []);

  return (
    <section className="inner_content trending no_pad">
      <div className="column_wrapper">
        <div className="content_wrapper wrap no_bottom_pad">
          <div className="column">
            <div className="column_header">
              <h2>What's Popular</h2>

              <div className="selector_wrap">
                <div className="selector">
                  <div className=  "anchor selected">
                    <h3>
                      <a
                        href="#"
                        className={`${onTv && "active"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOnTv(true);
                          setTheater(false);
                          onTvData();
                        }}
                        data-panel="trending_scroller"
                        data-group="onTv"
                      >
                        onTv
                      </a>
                    </h3>
                    <div
                      className={`${onTv && "background"}`}
                      //   style={{"left: 0px; width: 81.5938px;"}}
                    ></div>
                  </div>

                  <div className="anchor">
                    <h3>
                      <a
                        href="#"
                        className={`${theater && "active"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOnTv(false);
                          setTheater(onTv);
                          theaterData();
                        }}
                        data-panel="trending_scroller"
                        data-group="this-theater"
                      >
                        Theater
                      </a>
                    </h3>
                    <div
                      className={`${theater && "background"}`}
                      //   style={{"left: 0px; width: 81.5938px;"}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="movies scroll">
              {data.map((movie) => {
                return <Movie_catelog movie={movie} key={movie.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
