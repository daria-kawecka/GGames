import Map from "./Map";
import { ReactComponent as WaveBlack } from "../images/wave_black.svg";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/location.scss";

const Location = () => {
  const scene = useRef(null);

  useEffect(() => {
    const element = scene.current;
    let elements = element.children;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(elements, {
      x: 1500,
      duration: 1,
      ease: "power2.out",
      stagger: 0.6,
      scrollTrigger: {
        trigger: elements,
        start: "top bottom",
        toggleActions: "play pause resume reset",
      },
    });
  });

  return (
    <>
      <p className="locationSection__header">
        Find us <span className="locationSection__header--span">easily</span>
      </p>
      <div className="locationSection__container" ref={scene}>
        <div className="locationSection__mapContainer">
          <Map></Map>
        </div>
        <div className="locationSection__aboutLocation">
          <p className="locationSection__aboutLocation--header">We're here!</p>
          <p className="locationSection__aboutLocation--text">
            Budryka 3 <br />
            33-332 Kraków
          </p>
          <p className="locationSection__aboutLocation--header">Hours</p>
          <p className="locationSection__aboutLocation--text">
            To be honest... 24/7
          </p>
        </div>
      </div>
      <WaveBlack className="locationSection__svg-wave"></WaveBlack>
    </>
  );
};

export default Location;
