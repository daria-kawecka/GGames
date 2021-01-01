import React, { useEffect, useState } from "react";
import db from "../db.json";
import axios from "axios";

const gamesApi = "https://api.igdb.com/v4/games";
const ClientID = "4pxockamizj9lw8cvb53aji4y3dppk";
const Auth = "Bearer vk2dxpmhdlxzfofael24g7cpbmpldw";
// const
const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // axios
    //   .get(gamesApi, {
    //     credentials: "include",
    //     headers: {
    //       "Access-Control-Allow-Origin": true,
    //       Accept: "application/x-www-form-urlencoded",
    //       "Client-ID": "4pxockamizj9lw8cvb53aji4y3dppk",
    //       Authorization: "Bearer 02y1rsig8h6r7iwo5xaxkyas3of54v",
    //     },
    //     routes: {
    //       cors: true,
    //     },

    //     data:
    //       "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;",
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     // console.error(err);
    //   });

    axios
      .get(
        "https://www.giantbomb.com/api/games/?api_key=b7d9a5a1b5d4d97811a92bebf8e480a3c0e20143&limit=10&format=json"
      )
      .then((response) => console.log(response.data.results))
      .then((data) => console.log(data));
  }, []);
  // console.log(db);
  return <p>Gieeery</p>;
};

export default Games;
