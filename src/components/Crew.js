import "../styles/crew.scss";

import { ReactComponent as Pirate } from "../images/pirate.svg";
import { ReactComponent as Harry } from "../images/harry-potter.svg";
import { ReactComponent as Junior } from "../images/junior.svg";
import { ReactComponent as Wave } from "../images/wave.svg";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Crew = () => {
	const scene = useRef(null);

	useEffect(() => {
		const element = scene.current;
		let elements = [...element.children];
		gsap.registerPlugin(ScrollTrigger);

		gsap.from(elements, { x: -1500, duration: 1, ease: "power2.out", stagger: 0.2, scrollTrigger: { trigger: elements, start: "top bottom", toggleActions: "play pause resume reset" } });
		var targets = gsap.utils.toArray(elements); // konwersja na arr

		elements.forEach((element) => {
			let hover = gsap.to(element, { scale: 1.05, duration: 0.2, paused: true, ease: "power4.inOut" });
			element.addEventListener("mouseenter", () => hover.play());
			element.addEventListener("mouseleave", () => hover.reverse());
		});
	});

	return (
		<>
			<p className="crewSection__header">Meet our crew</p>
			<div className="crewSection__container" ref={scene}>
				<div className="crewSection__crewMember">
					<Pirate className="crewSection__crewMember--image" />
					<p className="crewSection__crewMember--text">
						<span className="crewSection__crewMember--character">Our chARRRacter master</span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, laudantium tempora. Reprehenderit saepe consequatur necessitatibus quia iure expedita quos quod ad eos est! Debitis nam doloremque quod tenetur amet pariatur.
					</p>
				</div>
				<div className="crewSection__crewMember">
					<Harry className="crewSection__crewMember--image" />
					<p className="crewSection__crewMember--text">
						<span className="crewSection__crewMember--character">Our mission magician</span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, laudantium tempora. Reprehenderit saepe consequatur necessitatibus quia iure expedita quos quod ad eos est! Debitis nam doloremque quod tenetur amet pariatur.
					</p>
				</div>
				<div className="crewSection__crewMember">
					<Junior className="crewSection__crewMember--image" />
					<p className="crewSection__crewMember--text">
						<span className="crewSection__crewMember--character">Our... he's just junior</span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, laudantium tempora. Reprehenderit saepe consequatur necessitatibus quia iure expedita quos quod ad eos est! Debitis nam doloremque quod tenetur amet pariatur.
					</p>
				</div>
			</div>
			<Wave className="crewSection__svg-wave"></Wave>
		</>
	);
};

export default Crew;
