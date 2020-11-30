import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/dist/CustomBounce";
import { CustomWiggle } from "gsap/dist/CustomWiggle";

import { ReactComponent as HeroImg } from "../images/boy.svg";
import { ReactComponent as Wave } from "../images/wave.svg";

import "../styles/Header.scss";

const Header = ({ text }) => {
	const wrapper = useRef(null);

	useEffect(() => {
		const elements = wrapper.current;
		const hand = elements.getElementById("Hand2");
		console.log(elements);
		gsap.from(".header__svg-game", { x: -300, scale: 0.5, duration: 1 });
		gsap.from(".header__text", { x: 300, scale: 0.5, duration: 1 });

		gsap.registerPlugin(CustomEase, CustomWiggle);
		var wiggles = 10;
		CustomWiggle.create("Wiggle.uniform", { wiggles: wiggles, type: "uniform" });

		const tl = gsap.timeline({ delay: 1 });
		tl.from(hand, { duration: 3.5, ease: "bounce.out", y: -10, x: -10 });
	});

	return (
		<header className="header">
			<HeroImg ref={wrapper} className="header__svg-game" />
			<div className="header__text">{text}</div>
			<Wave className="header__svg-wave" />
		</header>
	);
};

export default Header;
