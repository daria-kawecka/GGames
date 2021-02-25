import Games from "./Games.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
const Store = ({ api }) => {
  const [stuff, setStuff] = useState([]);
  const [filteredGames, setFilteredPhrase] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getStuff = async () => {
    axios
      .get(api, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then((response) => {
        setStuff(response.data.results);
      });
  };

  useEffect(() => {
    getStuff();
  }, []);

  useEffect(() => {
    setFilteredPhrase(
      stuff.filter((game) => {
        if (
          game.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          game.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        )
          return game;
      })
    );
  }, [searchTerm, stuff]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="gamesStore__main">
        {stuff.length > 0 ? (
          <>
            <form onSubmit={handleOnSubmit}>
              <div className="form">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={changeSearchTerm}
                  className="form__search"
                ></input>
                <button type="submit" className="form__search--button">
                  <i className="fa fa-search form__search--icon"></i>
                </button>
              </div>
            </form>
            <div className="games">
              {filteredGames.map((game) => (
                <Games key={game.id} {...game}></Games>
              ))}
            </div>
          </>
        ) : (
          <div className="loading">
            <svg className="loading__circle">
              <circle cx="60" cy="60" r="60"></circle>
            </svg>
            <p className="loading__text">Just few more seconds...</p>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Store;
