import { createFactory } from "react";
import Map from "../components/Map";

import { ReactComponent as WaveBlack } from "../images/wave_black.svg";

import "../styles/location.scss";

const Location = () => {
  return (
    <>
      <p className="locationSection__header">
        Find us <span className="locationSection__header--span">easily</span>
      </p>
      <div class="locationSection__container">
        <div className="locationSection__mapContainer">
          <Map></Map>
        </div>
        <div class="locationSection__aboutLocation">
          <p class="locationSection__aboutLocation--header">We're here!</p>
          <p class="locationSection__aboutLocation--text">
            Budryka 3 <br />
            33-332 Kraków
          </p>
          <p class="locationSection__aboutLocation--header">Hours</p>
          <p class="locationSection__aboutLocation--text">
            To be honest... <br />
            24/7.
          </p>
        </div>
      </div>
      <WaveBlack className="locationSection__svg-wave"></WaveBlack>
    </>
  );
};

export default Location;
