import React from "react";
//{ useEffect, useState }
import "../styles/Games.scss";

const Games = ({ name, image, id }) => {
  const img = image.medium_url;
  const desc = image.image_tags;
  const price = (id / 1000).toFixed(2);
  return (
    <>
      <div className="games__gameContainer">
        <p className="games__name">{name}</p>
        <img className="games__img" src={img} alt={desc} />
        <div className="games__price">
          <p className="games__price__text">For now game costs... </p>
          <p className="games__price__money">
            {price} <span>$$$</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Games;
