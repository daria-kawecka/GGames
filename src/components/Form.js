import React, { useState, useEffect, useRef } from "react";
import validate from "../components/Validation";

import { ReactComponent as Svg } from "../images/Email_SVG.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/Contact.scss";

// 9b1015ef-1aac-48a2-855d-61e89b65e303 <--- token
const Form = () => {
	const [data, setData] = useState([]);
	const [shouldShow, setShouldShow] = useState(false);
	const [errors, setErrors] = useState("");
	const scene = useRef(null);
	const formRefill = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};
	useEffect(() => {
		setErrors(validate(data));
	}, [data]);

	useEffect(() => {
		const elements = scene.current;
		const email1 = elements.getElementById("main_mail");
		const email2 = elements.getElementById("mail1");
		const email3 = elements.getElementById("mail3");
		const paper = elements.getElementById("paper");
		const message = document.querySelectorAll(".message");
		const mobile = elements.getElementById("Mobile");
		const form = document.getElementsByClassName("contact__formContainer");
		let tl = gsap.timeline({ delay: 0.5 });
		tl.set([email1, email2, email3, message], { opacity: 0 })
			.fromTo(form, { opacity: 0, x: -1000 }, { opacity: 1, x: 0, duration: 1.2 })
			.to(mobile, { rotation: -2, transformOrigin: "center", yoyo: true, repeat: 3, duration: 0.1, ease: "power2.inOut" })
			.to(mobile, { rotation: 0, transformOrigin: "center", yoyo: true, repeat: 3, duration: 0.1, ease: "power2.inOut" })
			.addLabel("notifications")
			.from(message, { opacity: 1, transformOrigin: "center", stagger: { each: -0.1, from: "bottom" } }, "notifications")
			.fromTo(email2, { opacity: 0, x: -1000 }, { opacity: 1, x: 0, duration: 1 }, "notifications")
			.fromTo(email3, { opacity: 0, x: 1000 }, { opacity: 1, x: 0, duration: 1 }, "notifications")
			.fromTo(email1, { opacity: 0, y: -1000 }, { opacity: 1, y: 0, duration: 1 }, "notifications")
			.to(paper, { opacity: 1, y: "-=2", scale: "1.04", duration: 0.2, delay: -0.3 })
			.to(paper, { y: "0", scale: "1", duration: 0.4 });
	});

	const sendEmail = (e) => {
		e.preventDefault();
		setShouldShow(true);
		if (errors.filled) {
			//send confirmation email
			window.Email.send({
				SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
				To: data.email,
				From: "tutajtestuje@gmail.com",
				Subject: "Dzięki za podesłanie emaila!!!",
				Body: `<h1>Cześć</h1> ${data.name}!`,
			}); //send email
			window.Email.send({
				SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
				To: "tutajtestuje@gmail.com",
				From: "tutajtestuje@gmail.com",
				Subject: data.subject,
				Body: `<h1>Cześć</h1> Nadawca:${data.name} Email:${data.email} Treść: ${data.content} Numer tel: ${data.number}!`,
			});
			alert("Email został wysłany!!!");
		}
	};

	return (
		<>
			<div className="contact__formContainer">
				<form className="contact__form">
					<i className="contact__form__icon far fa-envelope"></i>
					<input type="text" name="name" placeholder="Your name..." onChange={formRefill} required className="contact__form__input" />
					{shouldShow && errors && <p className="contact__form__error">{errors.name}</p>}
					<input type="email" placeholder="Your email..." name="email" onChange={formRefill} required className="contact__form__input" />
					{shouldShow && <p className="contact__form__error">{errors.email}</p>}
					<input type="text" placeholder="Subject" name="subject" onChange={formRefill} required className="contact__form__input" />
					{shouldShow && <p className="contact__form__error">{errors.subject}</p>}
					<input type="text" placeholder="Your Phone Number (optional)" name="number" onChange={formRefill} className="contact__form__input" />
					<input type="text" placeholder="Your Web Site (optional)" name="web" onChange={formRefill} className="contact__form__input" />
					<textarea name="content" cols="30" rows="10" placeholder="Your message..." onChange={formRefill} required className="contact__form__textArea"></textarea>
					{shouldShow && <p className="contact__form__error">{errors.content}</p>}
					<button className="contact__form__button" type="submit" onClick={sendEmail}>
						Send message
					</button>
				</form>
				<div className="contact__form__svgContainer">
					<Svg ref={scene}></Svg>
				</div>
			</div>
		</>
	);
};

export default Form;
