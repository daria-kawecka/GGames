import React, { useEffect, useState } from "react";

import "../styles/Games.scss";

const Games = ({ name, image }) => {
  console.log(image.small_url);
  const img = image.small_url;
  const desc = image.image_tags;
  return (
    <>
      <div className="games__gameContainer">
        <p className="games__name">{name}</p>
        <img className="games__img" src={img} alt={desc} />
      </div>
    </>
  );
};

export default Games;
