import Games from "../components/Games.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Games_Store = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const gamesApi =
    "https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=7f9b7323ec1c30899894f4e95b9e551f7f58860d&limit=20&format=json&sort=date_last_updated:desc";
  //7f9b7323ec1c30899894f4e95b9e551f7f58860d
  //b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143
  const getGames = async () => {
    axios
      .get(
        "https://cors.bridged.cc/https://www.giantbomb.com/api/games/?api_key=7f9b7323ec1c30899894f4e95b9e551f7f58860d&limit=20&format=json&sort=date_last_updated:desc",
        { headers: { "Access-Control-Allow-Origin": "*" } }
      )
      .then((response) => {
        setGames(response.data.results);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    setFilteredGames(
      games.filter((game) => {
        if (
          game.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          game.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
        )
          return game;
      })
    );
  }, [searchTerm, games]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="gamesStore__main">
      {games.length > 0 ? (
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
  );
};

export default Games_Store;
