import Games from "../components/Games.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Games_Store = () => {
  const [games, setGames] = useState([]);
  const [copyGames, setCopyGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const gamesApi =
    "https://www.giantbomb.com/api/games/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&limit=20&format=json&sort=date_last_updated:desc";

  // dobry = https://www.giantbomb.com/api/games/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&limit=10&format=json

  const getGames = async () => {
    axios.get(gamesApi).then((response) => {
      setGames(response.data.results);
      setCopyGames(games);
    });
  };

  useEffect(() => {
    getGames();
    setCopyGames(games);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // if (searchTerm) {
    //   games.filter((game) => {
    //     if (game.name.includes(searchTerm)) setCopyGames([game]); //search on copy allows to get results from the basic games database
    //   });
    //}
  };
  const chandleSearch = (searchTerm) => {
    let temp = [];
    console.log(searchTerm.length);
    if (searchTerm.length <= 1) getGames();
    if (searchTerm) {
      games.filter((game) => {
        const name = game.name.toLowerCase();
        const search = searchTerm.toLowerCase();
        if (name.indexOf(search) > -1) temp.push(game);
        setCopyGames(temp);
      });
    }
  };
  const changeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    chandleSearch(searchTerm);
  };

  // console.log(games);
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
            {copyGames.length > 0
              ? copyGames.map((game) => <Games key={game.id} {...game}></Games>)
              : games.map((game) => <Games key={game.id} {...game}></Games>)}
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
