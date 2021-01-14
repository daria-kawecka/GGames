import React, { useState, useEffect } from "react";
import validate from "../components/Validation";

import { ReactComponent as Svg } from "../images/New Message_Two Color.svg";

import "../styles/Contact.scss";

// 9b1015ef-1aac-48a2-855d-61e89b65e303 <--- token
const Form = () => {
	const [data, setData] = useState([]);
	const [shouldShow, setShouldShow] = useState(false);
	const [errors, setErrors] = useState("");

	const formRefill = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};
	useEffect(() => {
		setErrors(validate(data));
	}, [data]);

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
					<Svg></Svg>
				</div>
			</div>
		</>
	);
};

export default Form;