import React from "react";
import "../styles/Popular.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { image_url } from "../constant";

const Popular = () => {
  const [main_data, set_data] = useState();
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
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
        set_data(response.data.results.splice(0, 8));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetch_data();
  });
  return (
    <div className="genres">
      <h1>Popular Movies</h1>
      <div className="wrap">
        {main_data?.map((movie) => {
          return (
            <div className="card">
              <img src={`${image_url}/${movie?.poster_path}`} alt="" />
              <div className="content">
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
