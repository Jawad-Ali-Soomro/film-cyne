import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiper.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { image_url } from "../constant";
import { BiInfoCircle, BiPlay } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";

export default function Slider() {
  const [main_data, set_data] = useState();
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTRhZmIxZGFjZmY4NmFjMjZlYjYwZjExNjE4ODNjZiIsInN1YiI6IjY2NjY1Yzc1ODQ3MzkwZTQxMmI5YzU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OtEmFLa5QM8yOGU1oFtDz6qibPOgI514NJNutQ8wzU0",
    },
  };
  const fetch_data = async () => {
    axios
      .request(options)
      .then(function (response) {
        set_data(response.data.results.splice(1, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetch_data();
  });
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {main_data?.map((item) => {
          return (
            <SwiperSlide>
              <img
                className="bg-img"
                src={`${image_url}/${item?.poster_path}`}
                alt=""
              />
              <div className="content">
                <h1>{item?.title}</h1>
                <p>{item?.overview.substring(0,120)}...</p>
                <p>{item?.release_date}</p>
                
                <div className="btns flex">
                <button>
                  <BiPlay />
                </button>
                <button>
                  <BsInfo />
                </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
