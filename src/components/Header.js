import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { ReactComponent as HeroImg } from "../images/boy.svg";
import { ReactComponent as Wave } from "../images/wave.svg";

import "../styles/Header.scss";

const Header = ({ text }) => {
	const wrapper = useRef(null);
	Header.defaultProps = {
		text: (
			<h1>
				<span>GG</span>ames
			</h1>
		),
	};
	console.log(Header.defaultProps);
	useEffect(() => {
		const elements = wrapper.current;
		const head = elements.getElementById("Head");
		const hand1 = elements.getElementById("Hand1");
		const hand2 = elements.getElementById("Hand2");
		gsap.from(".header__svg-game", { x: -300, scale: 0.5, duration: 1.5 });
		gsap.from(".header__text", { x: 300, scale: 0.5, duration: 1.5 });

		const tl = gsap.timeline({ delay: 1.7 });
		tl.addLabel("move", "0").to(head, 0.5, { x: "+=5", rotation: 10, ransformOrigin: "center", yoyo: true, repeat: 5 }, "move").from(hand1, 0.3, { x: "+=8", rotation: -10, ransformOrigin: "center", yoyo: true, repeat: 8 }, "move").from(hand2, 0.2, { x: "-=10", yoyo: true, repeat: 12 }, "move");
	});

	return (
		<header className="header">
			<HeroImg ref={wrapper} className="header__svg-game" />
			<div className="header__text">{text ? text : Header.defaultProps.text}</div>
			<Wave className="header__svg-wave" />
		</header>
	);
};

export default Header;
