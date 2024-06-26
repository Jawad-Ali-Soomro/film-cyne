import React from "react";
import "../styles/Home.scss";
import Slider from "../components/Swiper";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Popular from "../components/Popular";

const Home = () => {
  const [main_data, set_data] = useState();
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/genre/movie/list",
    params: { language: "en" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTRhZmIxZGFjZmY4NmFjMjZlYjYwZjExNjE4ODNjZiIsInN1YiI6IjY2NjY1Yzc1ODQ3MzkwZTQxMmI5YzU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OtEmFLa5QM8yOGU1oFtDz6qibPOgI514NJNutQ8wzU0",
    },
  };

  const fetch_data = async () => {
    await axios
      .request(options)
      .then(function (response) {
        set_data(response.data.genres.splice(0,8));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetch_data()
  })
  return (
    <div>
      <Header />
      <Slider />
      <div className="genres">
        <h1>Explore Movie Genres</h1>
        <div className="wrap">
          {
          main_data?.map((genre) =>  {
            return <div className="main">
              <p>{genre.name}</p>
            </div>
          })
          }
        </div>
      </div>
      <Popular />
    </div>
  );
};

export default Home;
