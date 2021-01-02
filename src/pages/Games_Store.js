import Games from "../components/Games.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Games_Store = () => {
  const [games, setGames] = useState([]);
  const gamesApi =
    "https://www.giantbomb.com/api/games/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&limit=10&format=json";

  useEffect(() => {
    axios.get(gamesApi).then((response) => {
      setGames(response.data.results);
    });
  }, []);
  console.log(games);
  return (
    <div className="mainPage">
      {games.length > 0 &&
        games.map((game) => <Games key={game.id} {...game}></Games>)}
    </div>
  );
};

export default Games_Store;
