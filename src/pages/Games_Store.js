import Games from "../components/Games.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { ReactComponent as Wave } from "../images/wave.svg";

const Games_Store = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const gamesApi =
    "https://www.giantbomb.com/api/games/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&limit=30&format=json&sort=date_last_updated:desc";

  // dobry = https://www.giantbomb.com/api/games/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&limit=10&format=json
  const searchApi =
    "http://www.giantbomb.com/api/search/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&format=json&query=";
  const getGames = async () => {
    axios.get(gamesApi).then((response) => {
      setGames(response.data.results);
    });
  };

  useEffect(() => {
    getGames();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      axios.get(searchApi + searchTerm + "&resources=game").then((response) => {
        console.log(searchTerm);
        setGames(response.data.results);
      });
      setSearchTerm("");
    }
  };

  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="gamesStore__main">
      {games.length > 0 ? (
        <>
          <form onSubmit={handleOnSubmit}>
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={changeSearchTerm}
            ></input>
          </form>
          <div className="games">
            {games.map((game) => (
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
