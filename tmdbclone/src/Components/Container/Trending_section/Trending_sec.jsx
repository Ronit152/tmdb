import React, { useState, useEffect } from "react";
import "./_trending_sec.scss";
import axios from "axios";
import { Movie_catelog } from "../Movie_catelog";

export const Trending_sec = () => {
  const [data, setData] = useState([]);
  const [today, setToday] = useState(true);
  const [week, setWeek] = useState(false);

  const todayData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=da93b67b790d945fee310acd7e394bc7`
      )
      .then(function (response) {
        console.log(response);

        setData(response.data.results);
      });

    //   .then((response) => {})
  };
  const weekData = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=da93b67b790d945fee310acd7e394bc7`
      )
      .then((response) => setData(response.data.results));
  };

  useEffect(() => {
    todayData();
  }, []);

  return (
    <section className="inner_content trending no_pad">
      <div className="column_wrapper">
        <div className="content_wrapper wrap no_bottom_pad">
          <div className="column">
            <div className="column_header">
              <h2>Trending</h2>

              <div className="selector_wrap">
                <div className="selector">
                  <div className=  "anchor selected">
                    <h3>
                      <a
                        href="#"
                        className={`${today && "active"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setToday(true);
                          setWeek(false);
                          todayData();
                        }}
                        data-panel="trending_scroller"
                        data-group="today"
                      >
                        Today
                      </a>
                    </h3>
                    <div
                      className={`${today && "background"}`}
                      //   style={{"left: 0px; width: 81.5938px;"}}
                    ></div>
                  </div>

                  <div className="anchor">
                    <h3>
                      <a
                        href="#"
                        className={`${week && "active"}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setToday(false);
                          setWeek(today);
                          weekData();
                        }}
                        data-panel="trending_scroller"
                        data-group="this-week"
                      >
                        This Week
                      </a>
                    </h3>
                    <div
                      className={`${week && "background"}`}
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
