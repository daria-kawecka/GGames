import { useEffect, useRef } from "react";
import Parallax from "parallax-js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/Section.scss";

import { ReactComponent as WaveBlack } from "../images/wave_black.svg";
import { ReactComponent as Company } from "../images/Startup_SVG.svg";

const Section = () => {
  const scene = useRef(null);
  const animation = useRef(null);
  const rightSide = useRef(null);

  useEffect(() => {
    const element = scene.current;
    const svg = animation.current;
    const text = [rightSide.current];
    const rocket = svg.getElementById("rocket");
    // parralax:
    const parallaxInstance = new Parallax(element, {
      relativeInput: true,
      clipRelativeInput: true,
    });

    parallaxInstance.friction(0.15, 0.15);
    parallaxInstance.origin(0.3, 1);

    // gsap animation
    const fire = svg.getElementById("fire");
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ delay: 1.5 });
    tl.addLabel("show", "0");
    tl.from(
      text,
      {
        x: 1000,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          toggleActions: "restart none none reset",
        },
      },
      "show"
    )
      .fromTo(
        svg,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: text, start: "top bottom" },
        },
        "show"
      )
      .addLabel("rocket", 0)
      .from(
        fire,
        0.2,
        {
          y: "-=4",
          x: "+=3",
          rotation: 10,
          yoyo: true,
          transformOrigin: "50% 0%",
          repeat: -1,
        },
        rocket
      );
    // rocket scrolltrigger
    const anim = gsap.to(rocket, {
      y: -1000,
      delay: 2.5,
      duration: 3,
      ease: "power1.in",
      paused: true,
    });
    ScrollTrigger.create({
      trigger: element,
      start: "top center",
      onEnter: () => anim.play(),
    });

    ScrollTrigger.create({
      trigger: element,
      start: "130% bottom",
      onLeaveBack: () => anim.pause(0),
    });
  });

  return (
    <>
      <WaveBlack className="aboutSection__svg-wave" />
      <div className="aboutSection__textContainer" ref={rightSide}>
        <h2 className="aboutSection__textContainer__header">About Us</h2>
        <p className="aboutSection__textContainer__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          tempora, sunt nemo esse minima, quos distinctio eveniet odit quaerat
          accusamus laudantium repudiandae doloribus rem vero repellat dolorum
          recusandae ex similique?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum accusantium nobis culpa deserunt consequuntur
          deleniti corporis aliquid, assumenda eaque iusto voluptate odit enim
          aut, illo quod, ipsam similique mollitia eligendi.
        </p>
      </div>
      <div
        className="aboutSection__parallaxContainer"
        display="inline !important"
        ref={scene}
        data-friction-x="0.7"
      >
        <Company
          className="aboutSection__parallaxContainer__svg"
          data-depth="0.8"
          ref={animation}
        />
      </div>
    </>
  );
};

export default Section;
