import React, { useEffect, useState } from "react";
import axios from "axios";

const gamesApi = "https://api.igdb.com/v4/games";
const ClientID = "4pxockamizj9lw8cvb53aji4y3dppk";
const Auth = "Bearer vk2dxpmhdlxzfofael24g7cpbmpldw";
// const
const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios({
      url: "https://api.igdb.com/v4/age_ratings",
      method: "POST",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": true,
        Accept: "application/x-www-form-urlencoded",
        "Client-ID": "4pxockamizj9lw8cvb53aji4y3dppk",
        Authorization: "Bearer 02y1rsig8h6r7iwo5xaxkyas3of54v",
      },
      routes: {
        cors: true,
      },

      data:
        "fields category,checksum,content_descriptions,rating,rating_cover_url,synopsis;",
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  //   useEffect(() => {
  //     fetch(gamesApi, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Client-ID": ClientID,
  //         Authorization: Auth,
  //       },
  //     })
  //       .then((res) => res.json)
  //       .then((data) => {
  //         console.log(data);
  //         setGames(data);
  //       });
  //   }, []);
  return <p>Gieeery</p>;
};

export default Games;
