import React, { useEffect, useState } from "react";

const Games = ({ name, image }) => {
  console.log(image.small_url);
  const img = image.small_url;
  const desc = image.image_tags;
  return (
    <>
      <p>{name}</p>
      <img src={img} alt={desc} />
    </>
  );
};

export default Games;
