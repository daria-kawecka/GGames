import { createFactory } from "react";
import Map from "../components/Map";

import { ReactComponent as WaveBlack } from "../images/wave_black.svg";

import "../styles/location.scss";

const Location = () => {
  return (
    <>
      <h1 className="locationSection__header">Find us easily</h1>
      <div class="locationSection--map-container">
        <Map></Map>
      </div>
    </>
  );
};

export default Location;
