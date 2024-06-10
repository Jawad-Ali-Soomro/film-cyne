import React from "react";
import "../styles/Header.scss";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header-wrap">
      <h1>
        <span>F</span>ilm<span>o</span>
      </h1>
      <div className="navs">
        <ul>
          <li>Movies</li>
          <li>Shows</li>
          <li>Trending</li>
          <li>Upcoming</li>
          <div className="search-bar">
            <button>
              <BiSearch />
            </button>
            <input type="text" placeholder="Search" />
            <button>CTRL + K</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
