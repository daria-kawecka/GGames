import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { ReactComponent as HeroImg } from "../images/vr.svg";
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
		const panel1 = elements.getElementById("Panel1");
		const panel2 = elements.getElementById("Panel2");
		const smoke = elements.getElementById("Smoke");
		const bgc = elements.getElementById("Background");
		gsap.from(".header__svg-game", { x: -300, scale: 0.5, duration: 1.5 });
		gsap.from(".header__text", { x: 300, scale: 0.5, duration: 1.5 });

		const tl = gsap.timeline({ delay: 1.7 });
		tl.addLabel("move", "0").to(head, 0.5, { x: "+=5", rotation: -10, transformOrigin: "bottom", yoyo: true, repeat: 5 }, "move").from(hand1, 0.3, { x: "+=1", y: "+=2", rotation: -6, transformOrigin: "bottom", yoyo: true, repeat: 9 }, "move").from(panel1, 0.8, { y: "+=15", yoyo: true, repeat: -1 }, "move").from(panel2, 0.8, { y: "-=15", yoyo: true, repeat: -1 }, "move").from(smoke, 1, { skewX: 2, skewY: 3, skewType: "simple", transformOrigin: "center", yoyo: true, repeat: -1 }, "move").from(bgc, 1, { skewX: 1, skewY: 3, skewType: "simple", transformOrigin: "center", yoyo: true, repeat: -1 }, "move");
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
